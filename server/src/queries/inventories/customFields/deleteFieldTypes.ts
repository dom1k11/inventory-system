import prisma from '../../../prisma';

export async function deleteFieldTypes(inventoryId: number, ids: number[]) {
  return prisma.field_templates.deleteMany({
    where: {
      inventory_id: inventoryId,
      id: { in: ids },
    },
  });
}
