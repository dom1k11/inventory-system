import { Router } from 'express';
import { handleAddItem, handleDeleteItems, handleGetFieldTemplates } from '../controllers/ItemController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = Router();

router.post('/item', authMiddleware, handleAddItem);
router.delete('/item/delete', authMiddleware, handleDeleteItems);
router.post('/item/fields', authMiddleware, handleGetFieldTemplates)


export default router;
