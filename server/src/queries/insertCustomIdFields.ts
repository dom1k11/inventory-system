import prisma from '../prisma';

export async function insertCustomIdFields(
  inventoryId: number,
  fields: { fieldType: string; value: string }[],
) {
  return prisma.inventory_custom_fields.createMany({
    data: fields.map((f, index) => ({
      inventory_id: inventoryId,
      field_type: f.fieldType,
      value: f.value,
      position: index + 1,
    })),
  });
}
