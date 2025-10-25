import { Router } from 'express';
import {
  handleAddInventory,
  handleChangeTypeFields,
  handleDeleteTypeFields,
  handleGetInventories,
  handleGetInventoryFields,
  handleGetInventoryItems,
  handleDeleteInventories,
} from '../controllers/InventoryController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = Router();

router.get('/inventories', handleGetInventories);
router.get('/inventories/:id/items', handleGetInventoryItems);
router.get('/inventories/:id/fields', handleGetInventoryFields);

router.post('/inventories/add', authMiddleware, handleAddInventory);
router.delete('/inventories/delete', authMiddleware, handleDeleteInventories);

router.post('/inventories/fields/add', authMiddleware, handleChangeTypeFields);
router.delete(
  '/inventories/fields/delete',
  authMiddleware,
  handleDeleteTypeFields,
);

export default router;
