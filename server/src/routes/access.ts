import { Router } from 'express';
import {
  handleGetAccessUsers,
  handleGrantAccess,
  handleRemoveAccess,
} from '../controllers/AccessController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = Router();

router.post('/access', authMiddleware, handleGetAccessUsers); //TODO Rewrite as GET to make endpoint RESTful
router.post('/access/add', authMiddleware, handleGrantAccess); //TODO Rewrite in RESTful style
router.delete('/access/remove', authMiddleware, handleRemoveAccess); //TODO Rewrite in RESTful style

export default router;
