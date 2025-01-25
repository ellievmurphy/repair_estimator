import * as PriDatabase from "../database/primary-database";
import { CategorySchema } from "./categories-schema";

export async function retrieveCategories(
  id: string
): Promise<CategorySchema[] | null> {
  const db = await PriDatabase.primaryDatabase();
  const result = await db.getAllAsync(
    "SELECT * FROM categories WHERE id = ?;",
    [id]
  );
  if (result == null) return null;
  console.log("result", result);
  const category: CategorySchema[] = result.map((row: any) => {
    return {
      ...row,
      values: JSON.parse(row.values),
    };
  });
  return category;
}

export async function storeCategory(category: CategorySchema) {
  const db = await PriDatabase.primaryDatabase();
  await db.runAsync(
    'INSERT OR REPLACE INTO categories (id, name, "values") VALUES ($id, $name, $values);',
    {
      $id: category.id,
      $name: category.name,
      $values: JSON.stringify(category.values),
    }
  );
}

export async function removeCategory(categoryId: string) {
  const db = await PriDatabase.primaryDatabase();
  await db.runAsync("DELETE FROM categories WHERE id = $categoryId;", {
    $categoryId: categoryId,
  });
}
