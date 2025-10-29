import { deleteCustomIdFields } from '../queries/inventories/customId/deleteCustomIdFields';
import { insertCustomIdFields } from '../queries//inventories/customId/insertCustomIdFields';
import { getCustomIdFormat } from '../queries/inventories/customId/getCustomIdFormat';
import { controller } from '../utils/controllerWrapper';
export const handleChangeCustomIdFields = controller(async (req, res) => {
  const { inventoryId, fields } = req.body;
  const deletedFields = await deleteCustomIdFields(inventoryId);
  const newFields = await insertCustomIdFields(inventoryId, fields);

  res.json({ deletedFields, newFields });
});

export const handleGetCustomIdFormat = controller(async (req, res) => {
  const { inventoryId } = req.params;
  const fields = await getCustomIdFormat(Number(inventoryId));
  res.json(fields);
});
