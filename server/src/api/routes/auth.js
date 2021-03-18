const { Router } = require('express');
const { body } = require('express-validator');
const { signIn, signUp } = require('../controllers/auth.js');
const validationRequest = require('./middlewares/validationRequest.js');

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

module.exports = getAuthRoutes;
