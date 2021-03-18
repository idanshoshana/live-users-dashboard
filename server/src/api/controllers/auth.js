const UserRepository = require('../../repositories/userRepository');
const AuthService = require('../../services/authService.js');

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

async function signUp(req, res, next) {
  const { username, password } = req.body;
  try {
    await authService.signUp({ username, password });
    return res.status(201).end();
  } catch (err) {
    return next(err);
  }
}

async function signIn(req, res, next) {
  const { username, password } = req.body;
  try {
    const accessToken = await authService.signIn({ username, password });
    return res.json({
      accessToken,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  signUp,
  signIn,
};
