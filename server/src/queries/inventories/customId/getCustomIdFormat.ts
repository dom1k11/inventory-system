import prisma from '../../../prisma';

export async function getCustomIdFormat(inventoryId: number) {
  const fields = await prisma.inventory_custom_fields.findMany({
    where: { inventory_id: inventoryId },
    orderBy: { position: 'asc' },
    select: {
      field_type: true,
      value: true,
    },
  });
  return fields;
}
