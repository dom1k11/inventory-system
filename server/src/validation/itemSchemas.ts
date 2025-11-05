import { z } from 'zod';

export const itemSchema = z.object({
  fields: z
    .array(
      z.object({
        field_template_id: z.number().int().min(1, 'Invalid field template ID'),
        value: z.union([
          z.string().min(1, 'Value required'),
          z.number(),
          z.boolean(),
          z.null(),
        ]),
      }),
    )
    .nonempty('Fields required'),
});
