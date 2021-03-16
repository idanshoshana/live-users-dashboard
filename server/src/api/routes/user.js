import { Router } from 'express';
import { body } from 'express-validator';
import { createPost, getPostsByUser } from '../controllers/user.js';
import verifyToken from './middlewares/verifyToken.js';
import validationRequest from './middlewares/validationRequest.js';

function getUserRoutes() {
  const userRouter = Router();
  userRouter.post(
    '/:userId/posts',
    verifyToken,
    body('title').isLength({ min: 2 }),
    validationRequest,
    createPost
  );

  userRouter.get('/:userId/posts', verifyToken, getPostsByUser);

  return userRouter;
}

export default getUserRoutes;
