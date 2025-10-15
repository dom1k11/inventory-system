import { Router } from 'express';
import { handleChangeCustomIdFields, handleGetCustomIdFormat } from '../controllers/CustomIdController';
const router = Router();

router.post('/customid', handleChangeCustomIdFields);
router.get('/customid/:inventoryId', handleGetCustomIdFormat);

export default router;
