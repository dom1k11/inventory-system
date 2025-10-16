import { controller } from '../utils/controllerWrapper';
import { getInventories, getInventoryItems } from '../queries/inventory';
import { getItemFields } from '../queries/getItemFields';

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