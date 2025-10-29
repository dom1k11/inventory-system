import prisma from '../../prisma';

export async function insertInventory(
  title: string,
  description: string,
  category: string,
  created_by: number,
) {
  return prisma.inventories.create({
    data: {
      title: title,
      description: description,
      category: category,
      created_by: created_by,
    },
  });
}
