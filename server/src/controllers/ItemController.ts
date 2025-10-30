import { deleteItems } from '../queries/items/deleteItems';
import { addItem } from '../services/addItem';
import { initItemFields } from '../services/initItemFields';
import { controller } from '../utils/controllerWrapper';
import { insertFieldValues } from '../queries/inventories/customFields/insertFieldValues';
import { getFieldTemplates } from '../queries/inventories/customFields/getFieldtemplates';
export const handleAddItem = controller(async (req, res) => {
  const { inventoryId, fields } = req.body;
  const createdBy = (req as any).user.id;

  const item = await addItem(inventoryId, createdBy);

  if (fields && fields.length > 0) {
    const values = fields.map((f) => ({
      item_id: item.id,
      field_template_id: f.field_template_id,
      value: f.value,
    }));
    await insertFieldValues(values);
    res.json({ item, fields: values });
  }

  const defaults = await initItemFields(item.id, item.inventory_id);
  res.json({ item, fields: defaults });
});
//TODO Move to service

export const handleDeleteItems = controller(async (req, res) => {
  const { inventoryId, ids } = req.body;
  const deletedItems = await deleteItems(inventoryId, ids);
  res.json({ deletedItems });
});

export const handleGetFieldTemplates = controller(async (req, res) => {
  const { inventoryId } = req.body;
  const templates = await getFieldTemplates(inventoryId);
  res.json(templates);
});
