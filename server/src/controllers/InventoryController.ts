import { controller } from '../utils/controllerWrapper';
import { getInventories } from '../queries/inventory';
export const handleGetInventories = controller(async (req, res) => {
  const result = await getInventories();
  res.json(result.rows);
});
