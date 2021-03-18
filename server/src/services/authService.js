const { UnauthorizedError } = require('../utils/errors.js');
const jwt = require('jsonwebtoken');

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async signUp({ username, password }) {
    return this.userRepository.signUp({ username, password });
  }

  async signIn({ username, password }) {
    const user = await this.userRepository.validateUserIsValid({
      username,
      password,
    });
    if (!user) {
      throw new UnauthorizedError('Invalid credentials');
    }

    const payload = { sub: user._id, username };
    return this._generateToken(payload);
  }

  _generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });
  }
}

module.exports = AuthService;
