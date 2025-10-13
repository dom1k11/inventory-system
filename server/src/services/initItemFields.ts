import prisma from '../prisma';

export async function initItemFields(itemId: number, inventoryId: number) {
  const templates = await prisma.field_templates.findMany({
    where: { inventory_id: inventoryId },
    select: { id: true },
  });

  const values = templates.map((t) => ({
    item_id: itemId,
    field_template_id: t.id,
    value: '%empty data%',
  }));

  await prisma.custom_field_values.createMany({
    data: values,
  });
}
