/* eslint-disable class-methods-use-this */
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
}

export default UserRepository;
