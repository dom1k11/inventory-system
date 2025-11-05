import { Router } from 'express';
import { handleLogin } from '../controllers/loginController';
import { handleRegister } from '../controllers/registerController';
import { validate } from '../middlewares/validateMiddleware';
import { loginSchema, registerSchema } from '../validation/authSchemas';
const router = Router();

router.post('/register', validate(registerSchema), handleRegister);
router.post('/login', validate(loginSchema), handleLogin);
export default router;
