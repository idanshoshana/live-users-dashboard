class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async signUp({ username, password }) {}

  async signIn({ username, password }) {}
}

export default AuthService;
