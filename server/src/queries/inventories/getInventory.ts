import prisma from '../../prisma';

export async function getInventory(id) {
  const inventory = await prisma.inventories.findUnique({
    where: { id },
    include: { field_templates: true, items: true },
  });
  return inventory;
}
