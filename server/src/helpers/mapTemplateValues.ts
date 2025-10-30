export function mapTemplateValues(
  templates,
  itemId,
  defaultValue = '%empty data%',
) {
  return templates.map((t) => ({
    item_id: itemId,
    field_template_id: t.id,
    value: defaultValue,
  }));
}
