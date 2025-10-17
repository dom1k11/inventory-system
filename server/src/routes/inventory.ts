import { Router } from 'express';
import { handleChangeTypeFields, handleGetInventories, handleGetInventoryFields, handleGetInventoryItems } from '../controllers/InventoryController';
const router = Router();

router.get('/inventories', handleGetInventories);
router.get('/inventories/:id/items', handleGetInventoryItems);
router.get('/inventories/:id/fields', handleGetInventoryFields);
router.put('/inventories/fields/change', handleChangeTypeFields);



export default router;
