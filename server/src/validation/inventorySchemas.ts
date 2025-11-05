import { z } from 'zod';

export const inventorySchema = z.object({
  title: z.string().min(1, 'Titl required'),
  description: z.string().min(1, 'Description required'),
  category: z.string().min(1, 'Category required'),
});
