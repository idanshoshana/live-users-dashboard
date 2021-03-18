const request = require('supertest');
const jwt = require('jsonwebtoken');
const { app } = require('../app');
const UserRepository = require('../repositories/userRepository');
const User = require('../models/user.model');
const AuthService = require('../services/authService');

describe('Controllers', () => {
  let userRepository;
  let authService;
  beforeAll(() => {
    userRepository = new UserRepository();
    authService = new AuthService(userRepository);
  })

  afterEach(async () => {
     await User.deleteMany({});
  })

  describe('Sign Up', () => {
    it('creates a new user when valid credentials are entered (201)', async () => {
      const res = await request(app)
        .post('/api/auth/signup')
        .send({
          username: 'testUser',
          password: 'testPassword1',
        })
      expect(res.statusCode).toEqual(201)
    });
  });

  describe('Sign In', () => {
    it('sign in a user when valid credentials are entered (200)', async () => {
      await userRepository.signUp({username: 'testUser', password: 'testPassword1'});
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          username: 'testUser',
          password: 'testPassword1',
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('accessToken');
    });
  });

  describe('Create Post', () => {
    it('creates a new post (201)', async () => {
      await userRepository.signUp({username: 'someuserTest', password: 'someTest123'})
      const token = await authService.signIn({username: 'someuserTest', password: 'someTest123'});
      const { sub: userId } = jwt.decode(token);

      const res = await request(app)
        .post(`/api/users/${userId}/posts`)
        .set({
            'Authorization': `Bearer ${token}`
        })
        .send({
          title: 'testTitle',
          content: 'testContent',
        })
      expect(res.statusCode).toEqual(201)
    });
  });

  describe('Get Posts By User', () => {
    it('gets user posts (200)', async () => {
      await userRepository.signUp({username: 'someuserTest', password: 'someTest123'})
      const token = await authService.signIn({username: 'someuserTest', password: 'someTest123'});
      const { sub: userId } = jwt.decode(token);

      const post = await userRepository.createPost(userId, {
        title: 'testTitle', 
        content: 'testContent'
      });
      post._id = post._id.toString();

      const res = await request(app)
        .get(`/api/users/${userId}/posts`)
        .set({
            'Authorization': `Bearer ${token}`
        })
      expect(res.statusCode).toEqual(200);
      expect([post]).toEqual(res.body);
    });
  });
});
