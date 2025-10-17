import prisma from '../prisma';

export async function deleteFieldTypes(inventoryId: number) {
  

  return prisma.field_templates.deleteMany({
    where: {
      inventory_id: inventoryId,
    },
  });
}
