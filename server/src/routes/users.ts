import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { handleGetAllUsers } from '../controllers/UsersController';
const router = Router();

router.get('/users', /*authMiddleware,*/ handleGetAllUsers);

export default router;
