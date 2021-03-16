import UserRepository from '../../repositories/userRepository.js';
import AuthService from '../../services/authService.js';

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

export async function signUp(req, res, next) {
  const { username, password } = req.body;

  try {
    await authService.signUp({ username, password });
    return res.status(201).end();
  } catch (err) {
    return next(err);
  }
}
