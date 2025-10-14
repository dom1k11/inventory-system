import { Router } from 'express';
import { handleChangeCustomIdFields } from '../controllers/CustomIdController';
const router = Router();

router.post('/customid', handleChangeCustomIdFields);

export default router;
