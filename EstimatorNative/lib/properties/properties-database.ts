import * as PriDatabase from "../database/primary-database";
import { PropertySchema } from "./properties-schema";

export async function retrieveProperties(): Promise<PropertySchema[] | null> {
  const db = await PriDatabase.primaryDatabase();
  const result = await db.getAllAsync("SELECT * FROM properties");
  if (result == null) return null;
  console.log("retrieve all properties result", result);
  const property: PropertySchema[] = result.map((row: any) => {
    return {
      ...row,
      values: JSON.parse(row.values),
    };
  });
  return property;
}

export async function storeProperty(property: PropertySchema) {
  const db = await PriDatabase.primaryDatabase();
  await db.runAsync(
    'INSERT OR REPLACE INTO properties (id, propertyId, inspector, "values") VALUES ($id, $propertyId, $inspector, $values);',
    {
      $id: "uuid",
      $propertyId: property.propertyId,
      $inspector: property.inspector,
      $values: JSON.stringify(property.values),
    }
  );
}

export async function removeProperty(propertyId: string) {
  const db = await PriDatabase.primaryDatabase();
  await db.runAsync("DELETE FROM properties WHERE id = $propertyId;", {
    $propertyId: propertyId,
  });
}
