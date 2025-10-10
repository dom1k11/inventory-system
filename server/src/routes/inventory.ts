import { Router } from 'express';
import { handleGetInventories } from '../controllers/InventoryController';
const router = Router();

router.get('/inventories', handleGetInventories);

export default router;
