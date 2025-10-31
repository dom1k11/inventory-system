import { Router } from 'express';
import {
  handleChangeCustomIdFields,
  handleGetCustomIdFormat,
  handlePreviewCustomId,
} from '../controllers/CustomIdController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router = Router();

router.post('/customid', authMiddleware, handleChangeCustomIdFields);
router.get('/customid/:inventoryId', handleGetCustomIdFormat);
router.post('/customid/:inventoryId/preview', handlePreviewCustomId);

export default router;
