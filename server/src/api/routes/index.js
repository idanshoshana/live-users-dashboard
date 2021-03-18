const express = require('express');
const getAuthRoutes = require('./auth.js');
const getUserRoutes = require('./user.js');

function getRoutes() {
  const router = express.Router();
  router.use('/auth', getAuthRoutes());
  router.use('/users', getUserRoutes());
  return router;
}

module.exports = getRoutes;
