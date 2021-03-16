import UserRepository from '../../repositories/userRepository.js';
import UserService from '../../services/userService.js';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export async function createPost(req, res, next) {
  const { userId } = req.params;
  const { title, content } = req.body;

  try {
    const post = await userService.createPost(userId, { title, content });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
}

export async function getPostsByUser(req, res, next) {
  const { userId } = req.params;

  try {
    const posts = await userService.getPostsByUser(userId);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
}
