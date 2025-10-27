import prisma from '../../prisma';

export async function deleteAccess(inventoryId, userId) {
  return prisma.inventory_access.deleteMany({
    where: {
      inventory_id: inventoryId,
      user_id: userId,
    },
  });
}
