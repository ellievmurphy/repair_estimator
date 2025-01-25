import { z } from "zod";

export const propertySchema = z.strictObject({
  id: z.string(),
  propertyId: z.string(),
  inspector: z.string(),
  values: z.record(z.unknown()),
});

export type PropertySchema = z.infer<typeof propertySchema>;
