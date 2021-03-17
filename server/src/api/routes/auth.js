import { Router } from 'express';
import { body } from 'express-validator';
import { signIn, signUp } from '../controllers/auth.js';
import validationRequest from './middlewares/validationRequest.js';

function getAuthRoutes() {
  const authRouter = Router();

  authRouter.post(
    '/signup',
    body('username').matches(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{2,29}$/, 'i'),
    body('password').matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'gm'
    ),
    validationRequest,
    signUp
  );

  authRouter.post(
    '/login',
    body('username').matches(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{2,29}$/, 'i'),
    body('password').matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'gm'
    ),
    validationRequest,
    signIn
  );

  return authRouter;
}

export default getAuthRoutes;
