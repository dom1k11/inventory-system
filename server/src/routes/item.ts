import { Router } from 'express';
import { handleAddItem, handleDeleteItems } from '../controllers/ItemController';

const router = Router();

router.post('/item', handleAddItem);
router.delete('/item/delete', handleDeleteItems);


export default router;
