import { addItem } from '../services/addItem';
import { initItemFields } from '../services/initItemFields';
import { controller } from '../utils/controllerWrapper';
export const handleAddItem = controller(async (req, res) => {
  const { inventoryId, createdBy } = req.body;

  const item = await addItem(inventoryId, createdBy);
  const fields = await initItemFields(item.id, item.inventory_id);

  res.json({ item, fields });
});
