import prisma from '../prisma';

export async function deleteItems(inventoryId: number, ids: number[]) {
  if (!ids.length) return { count: 0 };

  return prisma.items.deleteMany({
    where: {
      inventory_id: inventoryId,
      id: { in: ids },
    },
  });
}
