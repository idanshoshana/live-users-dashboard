const { Router } = require('express');
const { body } = require('express-validator');
const { createPost, getPostsByUser } = require('../controllers/user');
const verifyToken = require('./middlewares/verifyToken');
const validationRequest = require('./middlewares/validationRequest');

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

module.exports = getUserRoutes;
