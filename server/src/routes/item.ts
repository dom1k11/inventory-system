import { Router } from 'express';
import { handleAddItem } from '../controllers/ItemController';

const router = Router();

router.post('/item', handleAddItem);

export default router;
