import prisma from '../../../prisma';

export async function insertCustomIdFields(
  inventoryId: number,
  fields: { type: string; value: string }[],
) {
  return prisma.inventory_custom_fields.createMany({
    data: fields.map((f, index) => ({
      inventory_id: inventoryId,
      field_type: f.type,
      value: f.value,
      position: index + 1,
    })),
  });
}
