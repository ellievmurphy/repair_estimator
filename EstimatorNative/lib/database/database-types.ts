import type * as SQLite from "expo-sqlite";

export interface WrappedDatabase {
  getFirstAsync(
    query: string,
    params?: SQLite.SQLiteBindParams
  ): Promise<unknown | null>;
  getAllAsync(
    query: string,
    params?: SQLite.SQLiteBindParams
  ): Promise<unknown[]>;
  runAsync(
    query: string,
    params?: SQLite.SQLiteBindParams,
    runDiagnostics?: boolean
  ): Promise<SQLite.SQLiteRunResult>;
  withTransactionAsync(task: () => Promise<void>): Promise<void>;
}
