import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { WrappedDatabase } from "./database-types";

let initInProgressPromise: Promise<SQLite.SQLiteDatabase> | null = null;
const dbName = "primary-database.db"; // Replace with your database name
const dbPath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

export async function resetDatabase() {
  try {
    // Check if the database file exists
    const dbExists = await FileSystem.getInfoAsync(dbPath);
    console.log("path", dbPath);
    if (dbExists.exists) {
      // Delete the database file
      FileSystem.deleteAsync(dbPath, { idempotent: true });
      console.log("Database reset successfully.");
    } else {
      console.log("No database file to delete.");
    }

    const result = primaryDatabase();
  } catch (error) {
    console.error("Error resetting database:", error);
  }
}

export async function createDatabase(
  name: string,
  initialize: () => Promise<SQLite.SQLiteDatabase>
): Promise<WrappedDatabase> {
  const db = await initialize();

  return {
    async getFirstAsync(
      query: string,
      params: SQLite.SQLiteBindParams = []
    ): Promise<unknown> {
      const result = withTiming({ query, params }, () => {
        return db.getFirstAsync(query, params);
      });
      return result;
    },

    async getAllAsync(
      query: string,
      params: SQLite.SQLiteBindParams = []
    ): Promise<unknown[]> {
      const result = await withTiming({ query, params }, () =>
        db.getAllAsync(query, params)
      );

      return result;
    },

    async runAsync(
      query: string,
      params: SQLite.SQLiteBindParams = [],
      runDiagnostics: boolean = true
    ): Promise<SQLite.SQLiteRunResult> {
      const result = runDiagnostics
        ? withTiming({ query, params }, () => db.runAsync(query, params))
        : db.runAsync(query, params);
      return result;
    },

    async withTransactionAsync(task: () => Promise<void>): Promise<void> {
      await db.withTransactionAsync(task);
    },
  };
}

let _db: WrappedDatabase | null = null;

export async function primaryDatabase() {
  if (!_db) _db = await createDatabase("primary", initialize);
  return _db;
}

async function initialize() {
  let db: SQLite.SQLiteDatabase;
  if (initInProgressPromise) {
    db = await initInProgressPromise;
  } else {
    initInProgressPromise = new Promise<SQLite.SQLiteDatabase>(
      async (resolve) => {
        if (!(await FileSystem.getInfoAsync(dbPath)).exists)
          FileSystem.makeDirectoryAsync(dbPath);
        
        console.log("Opening primary database:", dbPath);

        const db = await SQLite.openDatabaseAsync("primary.db", undefined, dbPath);

        await db.execAsync(
          "PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA table_info(properties);"
        );

        await db
          .execAsync(migrations)
          .catch((reason) => console.log("migrations failed:", reason))
          .then(() => console.log("success"));

        return resolve(db);
      }
    );
    db = await initInProgressPromise;
  }

  return db;
}

const migrations = `
    CREATE TABLE IF NOT EXISTS properties (
        id TEXT PRIMARY KEY NOT NULL,
        propertyId TEXT,
        inspector TEXT,
        "values" TEXT
    );

    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY NOT NULL,
      type TEXT,
      "values" TEXT
    )
`;

export async function withTiming<T>(
  {
    requestMethod,
    requestUrl,
    requestHeaders,
    requestBody,
    query,
    params,
  }: {
    requestMethod?: string;
    requestUrl?: string;
    requestHeaders?: string;
    requestBody?: string;
    query?: string;
    params?: SQLite.SQLiteBindParams;
  },
  fn: () => Promise<T>
): Promise<T> {
  const startTime = performance.now();
  let wasSuccessful: boolean;
  let result: Awaited<T> | null;
  let error: unknown;
  try {
    result = await fn();
    wasSuccessful = true;
  } catch (e) {
    error = e;
    result = null;
    wasSuccessful = false;
  }
  const endTime = performance.now();

  if (error) throw error;
  return result as Awaited<ReturnType<typeof fn>>;
}
