const UserRepository = require('../../repositories/userRepository');
const UserService = require('../../services/userService');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

async function createPost(req, res, next) {
  const { userId } = req.params;
  const { title, content } = req.body;

  try {
    const post = await userService.createPost(userId, { title, content });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
}

async function getPostsByUser(req, res, next) {
  const { userId } = req.params;

  try {
    const posts = await userService.getPostsByUser(userId);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createPost,
  getPostsByUser,
};
