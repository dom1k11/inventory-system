import { controller } from '../utils/controllerWrapper';
import { getInventories, getInventoryItems } from '../queries/inventory';
import { getItemFields } from '../queries/getItemFields';
import { insertFieldTypes } from '../queries/insertFieldTypes';
import { deleteFieldTypes } from '../queries/deleteFieldTypes';
import { insertInventory } from '../queries/insertInventory';
import { deleteInventories } from '../queries/deleteInventories';
export const handleGetInventories = controller(async (req, res) => {
  const result = await getInventories();
  res.json(result.rows);
});

export const handleGetInventoryItems = controller(async (req, res) => {
  console.log('req.params:', req.params);
  const id = Number(req.params.id);
  const result = await getInventoryItems(id);
  res.json(result.rows);
});

export const handleGetInventoryFields = controller(async (req, res) => {
  console.log('req.params:', req.params);
  const id = Number(req.params.id);
  const result = await getItemFields(id);
  res.json(result);
});
export const handleChangeTypeFields = controller(async (req, res) => {
  const { inventoryId, fields } = req.body;
  const newFields = await insertFieldTypes(inventoryId, fields);

  res.json({ newFields });
});

export const handleDeleteTypeFields = controller(async (req, res) => {
  const { inventoryId, ids } = req.body;
  const deletedFields = await deleteFieldTypes(inventoryId, ids);
  res.json({ deletedFields });
});

export const handleAddInventory = controller(async (req, res) => {
  const { title, description, category } = req.body;
  const created_by = req.user!.id;
  const inventory = await insertInventory(
    title,
    description,
    category,
    created_by,
  );
  console.log(req);
  res.json({ inventory });
});

export const handleDeleteInventories = controller(async (req, res) => {
  const { ids } = req.body;
  const deletedItems = await deleteInventories(ids);
  res.json({ deletedItems });
});
