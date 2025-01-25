import { z } from "zod";

export const repairSchema = z.strictObject({
  id: z.string(),
  name: z.string(),
  values: z.record(z.unknown()),
});

export type RepairSchema = z.infer<typeof repairSchema>;
