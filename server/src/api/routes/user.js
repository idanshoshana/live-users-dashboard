import { Router } from 'express';
import { createPost } from '../controllers/user.js';
import verifyToken from './middlewares/verifyToken.js';

function getUserRoutes() {
  const userRouter = Router();
  userRouter.post('/:userId/posts', verifyToken, createPost);
  return userRouter;
}

export default getUserRoutes;
