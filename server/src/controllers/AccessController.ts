import { deleteAccess } from '../queries/access/deleteAccess';
import { getInventoryAccess } from '../queries/access/getInventoryAccess';
import { insertAccess } from '../queries/access/insertAccess';
import { controller } from '../utils/controllerWrapper';
export const handleGrantAccess = controller(async (req, res) => {
  const { inventoryId, userId, canEdit } = req.body;
  const access = await insertAccess(inventoryId, userId, canEdit);
  res.json({ access });
});

export const handleRemoveAccess = controller(async (req, res) => {
  const { inventoryId, userId } = req.body;
  await deleteAccess(inventoryId, userId);
  res.json({ ok: true });
});

export const handleGetAccessUsers = controller(async (req, res) => {
  const { inventoryId } = req.body;
  const access = await getInventoryAccess(inventoryId);
  res.json({ access });
});
