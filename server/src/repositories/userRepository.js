import { genSalt, hash } from 'bcrypt';
import User from '../models/user.model.js';
import { ConflictError, InternalServerError } from '../utils/errors.js';

class UserRepository {
  async signUp({ username, password }) {
    const user = new User();
    user.username = username;
    user.salt = await genSalt();
    user.password = await hash(password, user.salt);

    try {
      await user.save();
    } catch (err) {
      if (err.code && err.code === 11000) {
        throw new ConflictError('Username already exits');
      }
      throw new InternalServerError();
    }
  }

  async validateUserIsValid({ username, password }) {
    const user = await User.findOne({ username });
    if (user && user.password === (await hash(password, user.salt))) {
      return user;
    }
    return null;
  }
}

export default UserRepository;
