import prisma from '../prisma';
import { getFieldTemplates } from '../queries/getFieldtemplates';
import { mapTemplateValues } from './mapTemplates';
import { insertFieldValues } from './insertFieldValues';
export async function initItemFields(itemId: number, inventoryId: number) {
  const templates = await getFieldTemplates(inventoryId);
  const values = mapTemplateValues(templates, itemId);
  await insertFieldValues(values);
}
