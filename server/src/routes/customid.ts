import { Router } from 'express';
import { handleChangeCustomIdFields, handleGetCustomIdFormat } from '../controllers/CustomIdController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = Router();

router.post('/customid', authMiddleware, handleChangeCustomIdFields);
router.get('/customid/:inventoryId', handleGetCustomIdFormat);

export default router;
