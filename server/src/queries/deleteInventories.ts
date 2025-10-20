import prisma from '../prisma';

export async function deleteInventories(ids: number[]) {
  if (!ids.length) return { count: 0 };

  return prisma.inventories.deleteMany({
    where: {
      id: { in: ids },
    },
  });
}


