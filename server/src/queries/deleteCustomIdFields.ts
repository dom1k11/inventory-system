import prisma from '../prisma';

export async function deleteCustomIdFields(inventoryId: number) {
  return prisma.inventory_custom_fields.deleteMany({
    where: {
      inventory_id: inventoryId,
    },
  });
}
