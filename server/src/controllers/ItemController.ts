import { deleteItems } from '../queries/deleteItems';
import { addItem } from '../services/addItem';
import { initItemFields } from '../services/initItemFields';
import { controller } from '../utils/controllerWrapper';
import { insertFieldValues } from '../queries/insertFieldValues';
export const handleAddItem = controller(async (req, res) => {
  const { inventoryId, createdBy, fields } = req.body;
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

export const handleDeleteItems = controller(async (req, res) => {
  const { inventoryId, ids } = req.body;
  const deletedItems = await deleteItems(inventoryId, ids);
  res.json({ deletedItems });
});
