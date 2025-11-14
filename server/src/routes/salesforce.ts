import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware';
import { handleGetSFToken } from '../controllers/SalesForce';
import { handleSyncUser } from '../controllers/SalesForce';
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
