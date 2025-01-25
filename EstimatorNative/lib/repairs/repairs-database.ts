import * as PriDatabase from "../database/primary-database";
import { RepairSchema } from "./repairs-schema";

export async function retrieveRepairs(
  id: string
): Promise<RepairSchema[] | null> {
  const db = await PriDatabase.primaryDatabase();
  const result = await db.getAllAsync(
    "SELECT * FROM repairs WHERE id = ?;",
    [id]
  );
  if (result == null) return null;
  console.log("result", result);
  const repair: RepairSchema[] = result.map((row: any) => {
    return {
      ...row,
      values: JSON.parse(row.values),
    };
  });
  return repair;
}

export async function storeRepair(repair: RepairSchema) {
  const db = await PriDatabase.primaryDatabase();
  await db.runAsync(
    'INSERT OR REPLACE INTO repairs (id, name, "values") VALUES ($id, $name, $values);',
    {
      $id: repair.id,
      $name: repair.name,
      $values: JSON.stringify(repair.values),
    }
  );
}

export async function removeRepair(repairId: string) {
  const db = await PriDatabase.primaryDatabase();
  await db.runAsync("DELETE FROM repairs WHERE id = $repairId;", {
    $repairId: repairId,
  });
}
