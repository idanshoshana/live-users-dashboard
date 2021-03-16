import { Router } from 'express';
import { body } from 'express-validator';
import { signUp } from '../controllers/auth.js';
import validationRequest from './middlewares/validationRequest.js';

function getAuthRoutes() {
  const authRouter = Router();

  authRouter.post(
    '/signup',
    body('username').isLength({ min: 5 }),
    body('password').matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      'i'
    ),
    validationRequest,
    signUp
  );

  return authRouter;
}

export default getAuthRoutes;
