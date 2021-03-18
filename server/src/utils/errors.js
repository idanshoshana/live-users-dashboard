class ResponseError extends Error {
  constructor(message, name, code) {
    super(message);
    this.name = name;
    this.code = code;
  }
}

class ConflictError extends ResponseError {
  constructor(message) {
    super(message, 'ConflictError', 409);
  }
}

class InternalServerError extends ResponseError {
  constructor(message) {
    super(message, 'InternalServerError', 500);
  }
}

class UnauthorizedError extends ResponseError {
  constructor(message) {
    super(message, 'UnauthorizedError', 401);
  }
}

class UserNotFoundError extends ResponseError {
  constructor(message) {
    super(message, 'UserNotFoundError', 404);
  }
}

module.exports = {
  ResponseError,
  ConflictError,
  InternalServerError,
  UnauthorizedError,
  UserNotFoundError
}
