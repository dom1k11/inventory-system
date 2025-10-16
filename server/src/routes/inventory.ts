import { Router } from 'express';
import { handleGetInventories, handleGetItemFields, handleGetInventoryItems } from '../controllers/InventoryController';
const router = Router();

router.get('/inventories', handleGetInventories);
router.get('/inventories/:id/items', handleGetInventoryItems);
router.get('/inventories/:id/fields', handleGetItemFields);


export default router;
