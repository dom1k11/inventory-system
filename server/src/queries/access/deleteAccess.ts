import prisma from '../../prisma';

export async function removeAccess(inventoryId, userIds) {
  return prisma.inventory_access.deleteMany({
    where: {
      inventory_id: inventoryId,
      user_id: { in: userIds }
    },
  });
}
