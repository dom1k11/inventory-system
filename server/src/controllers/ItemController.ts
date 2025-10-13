import { addItem } from '../services/addEmptyItem';
import { controller } from '../utils/controllerWrapper';

export const handleAddItem = controller(async (req, res) => {
  const { inventoryId, createdBy } = req.body;
  const result = await addItem(inventoryId, createdBy);
  res.json(result);
});
