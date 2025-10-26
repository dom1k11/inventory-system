import { Router } from 'express';
import {
  handleAddItem,
  handleDeleteItems,
  handleGetFieldTemplates,
} from '../controllers/ItemController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { canEditInventory } from '../middlewares/authorityMiddleware';
const router = Router();

router.post('/item', authMiddleware, canEditInventory, handleAddItem);
router.delete(
  '/item/delete',
  authMiddleware,
  canEditInventory,
  handleDeleteItems,
);
router.post('/item/fields', authMiddleware, handleGetFieldTemplates);

export default router;
