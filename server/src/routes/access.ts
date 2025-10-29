import { Router } from 'express';
import {
  handleGetAccessUsers,
  handleGrantAccess,
  handleRemoveAccess,
} from '../controllers/AccessController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = Router();

router.post('/access', authMiddleware, handleGetAccessUsers);
router.post('/access/add', authMiddleware, handleGrantAccess);
router.delete('/access/remove', authMiddleware, handleRemoveAccess);

export default router;
