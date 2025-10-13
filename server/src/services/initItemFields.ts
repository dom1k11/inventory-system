import { getFieldTemplates } from '../queries/getFieldtemplates';
import { mapTemplateValues } from '../helpers/mapTemplates';
import { insertFieldValues } from '../queries/insertFieldValues';
export async function initItemFields(itemId: number, inventoryId: number) {
  const templates = await getFieldTemplates(inventoryId);
  const values = mapTemplateValues(templates, itemId);
  await insertFieldValues(values);
}
