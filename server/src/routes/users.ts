import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { handleGetAllUsers, handleGetUserById } from '../controllers/UsersController';
const router = Router();

router.get('/users', authMiddleware, handleGetAllUsers);
router.get('/users/me', authMiddleware, handleGetUserById);


export default router;
