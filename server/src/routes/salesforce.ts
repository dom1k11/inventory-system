import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware';
import { handleGetSFToken } from '../controllers/SalesForceController';
import { handleSyncUser } from '../controllers/SalesForceController';
const router = Router();

router.post(
  '/salesforce/token',
  //  authMiddleware,
  handleGetSFToken,
);
router.post(
  '/salesforce/sync',
  //  authMiddleware,
  handleSyncUser,
);

export default router;
