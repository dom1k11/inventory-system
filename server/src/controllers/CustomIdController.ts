import { deleteCustomIdFields } from '../queries/deleteCustomIdFields';
import { controller } from '../utils/controllerWrapper';
export const handleChangeCustomIdFields = controller(async (req, res) => {
  const { inventoryId } = req.body;

  const item = await deleteCustomIdFields(inventoryId);

  res.json({ item });
});
