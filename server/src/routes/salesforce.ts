import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware';
import { handleGetSFToken } from '../controllers/SalesForce';
const router = Router();

router.post(
  '/salesforce/token',
  //  authMiddleware,
  handleGetSFToken,
);


export default router;
