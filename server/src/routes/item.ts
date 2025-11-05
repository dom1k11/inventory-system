import { Router } from 'express';
import {
  handleAddItem,
  handleDeleteItems,
  handleGetFieldTemplates,
} from '../controllers/ItemController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { canEditInventory } from '../middlewares/authorityMiddleware';
import { validate } from '../middlewares/validateMiddleware';
import { itemSchema } from '../validation/itemSchemas';
const router = Router();

router.post(
  '/item',
  authMiddleware,
  canEditInventory,
  validate(itemSchema),
  handleAddItem,
);
router.delete(
  '/item/delete',
  authMiddleware,
  canEditInventory,
  handleDeleteItems,
);
router.post('/item/fields', authMiddleware, handleGetFieldTemplates); //TODO Rewrite as GET to make endpoint RESTful

export default router;
