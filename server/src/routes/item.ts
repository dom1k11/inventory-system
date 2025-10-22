import { Router } from 'express';
import { handleAddItem, handleDeleteItems, handleGetFieldTemplates } from '../controllers/ItemController';

const router = Router();

router.post('/item', handleAddItem);
router.delete('/item/delete', handleDeleteItems);
router.post('/item/fields', handleGetFieldTemplates)


export default router;
