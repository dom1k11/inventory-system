import prisma from '../../prisma';

export async function getInventoryAccess(inventoryId: number) {
  return prisma.inventory_access.findMany({
    where: { inventory_id: inventoryId },
    select: {
      id: true,
      user_id: true,
      can_edit: true,
      users: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
}

