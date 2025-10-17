import prisma from '../prisma';

export async function insertFieldTypes(
  inventoryId: number,
  fields: {
    field_type: string;
    title: string;
    description?: string;
    is_visible?: boolean;
    position?: number;
  }[],
) {
  const result = await prisma.field_templates.createMany({
    data: fields.map((f, index) => ({
      inventory_id: inventoryId,
      field_type: f.field_type,
      title: f.title,
      description: f.description ?? null,
      is_visible: f.is_visible ?? false,
      position: f.position ?? index + 1,
    })),
  });

  return result;
}
