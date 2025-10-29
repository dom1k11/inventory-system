import prisma from '../../prisma';

export async function getItemFields(inventoryId: number) {
  const fields = await prisma.field_templates.findMany({
    where: { inventory_id: inventoryId },
    orderBy: { position: 'asc' },
    select: {
      id: true,
      field_type: true,
      title: true,
      description: true,
      is_visible: true,
      position: true,
      created_at: true,
    },
  });
  return fields;
}
