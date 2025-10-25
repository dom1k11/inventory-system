import { Router } from 'express';
import { handleLogin } from '../controllers/loginController';
const router = Router();

// router.post('/register', handleRegister); TODO
router.post("/login", handleLogin)
export default router;
