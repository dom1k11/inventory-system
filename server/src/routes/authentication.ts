import { Router } from 'express';
import { handleLogin } from '../controllers/loginController';
import { handleRegister } from '../controllers/registerController';
const router = Router();

router.post('/register', handleRegister);
router.post('/login', handleLogin);
export default router;
