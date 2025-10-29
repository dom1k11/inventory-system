import prisma from '../../../prisma';

export async function insertFieldValues(
  values: {
    item_id;
    field_template_id;
    value;
  }[],
) {
  await prisma.custom_field_values.createMany({
    data: values,
  });
}
