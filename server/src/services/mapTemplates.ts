export function mapTemplateValues(
  templates: { id: number }[],
  itemId: number,
  defaultValue = '%empty data%',
) {
  return templates.map((t) => ({
    item_id: itemId,
    field_template_id: t.id,
    value: defaultValue,
  }));
}
