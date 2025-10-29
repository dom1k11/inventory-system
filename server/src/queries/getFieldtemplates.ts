import prisma from '../prisma';

export async function getFieldTemplates(inventoryId: number) {
  const templates = await prisma.field_templates.findMany({
    where: { inventory_id: inventoryId },
    select: {
      id: true,
      field_type: true,
      title: true,
      description: true,
      is_visible: true,
      position: true,
    },
  });
  return templates;
}
