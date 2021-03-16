import { genSalt, hash } from 'bcrypt';
import { json } from 'express';
import User from '../models/user.model.js';
import {
  ConflictError,
  InternalServerError,
  UserNotFoundError,
} from '../utils/errors.js';

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
    try {
      const user = await User.findOne({ username });
      if (user && user.password === (await hash(password, user.salt))) {
        return user;
      }
      return null;
    } catch (err) {
      throw new InternalServerError();
    }
  }

  async createPost(userId, { title, content }) {
    let user;
    try {
      user = await User.findByIdAndUpdate(
        userId,
        {
          $push: { posts: [{ title, content }] },
        },
        { new: true }
      );
    } catch (err) {
      throw new InternalServerError();
    }

    if (!user) throw new UserNotFoundError('User does not exist');
    return user.posts[user.posts.length - 1];
  }

  async getPostsByUser(userId) {
    let user;
    try {
      user = await User.findOne({ _id: userId });
    } catch (err) {
      throw new InternalServerError();
    }
    if (!user) throw new UserNotFoundError('User does not exist');
    return user.posts;
  }
}

export default UserRepository;
