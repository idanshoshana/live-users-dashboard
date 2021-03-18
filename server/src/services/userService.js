class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createPost(userId, { title, content }) {
    return this.userRepository.createPost(userId, { title, content });
  }

  async getPostsByUser(userId) {
    return this.userRepository.getPostsByUser(userId);
  }
}

module.exports = UserService;
