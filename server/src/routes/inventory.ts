import { Router } from 'express';
import { handleGetInventories, handleGetInventoryItems } from '../controllers/InventoryController';
const router = Router();

router.get('/inventories', handleGetInventories);
router.get('/inventories/:id/items', handleGetInventoryItems);

export default router;
