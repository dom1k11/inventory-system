import { Router } from 'express';
import {
  handleAddInventory,
  handleChangeTypeFields,
  handleDeleteTypeFields,
  handleGetInventories,
  handleGetInventoryFields,
  handleGetInventoryItems,
} from '../controllers/InventoryController';
const router = Router();

router.get('/inventories', handleGetInventories);
router.get('/inventories/:id/items', handleGetInventoryItems);
router.get('/inventories/:id/fields', handleGetInventoryFields);
router.post('/inventories/fields/add', handleChangeTypeFields);
router.delete('/inventories/fields/delete', handleDeleteTypeFields);
router.post('/inventories/add', handleAddInventory);

export default router;
