import { z } from "zod";

export const categorySchema = z.strictObject({
  id: z.string(),
  name: z.string(),
  values: z.record(z.unknown()),
});

export type CategorySchema = z.infer<typeof categorySchema>;
