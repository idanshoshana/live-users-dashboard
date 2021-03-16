import express from 'express';
import getAuthRoutes from './auth.js';
import getUserRoutes from './user.js';

function getRoutes() {
  const router = express.Router();
  router.use('/auth', getAuthRoutes());
  router.use('/users', getUserRoutes());
  return router;
}

export default getRoutes;
