const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../../../utils/errors');

module.exports = function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET_KEY);
      return next();
    } catch (e) {
      throw new UnauthorizedError('Token is invalid');
    }
  }

  throw new UnauthorizedError('Token is invalid');
};
