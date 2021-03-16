export class ResponseError extends Error {
  constructor(message, name, code) {
    super(message);
    this.name = name;
    this.code = code;
  }
}

export class ConflictError extends ResponseError {
  constructor(message) {
    super(message, 'ConflictError', 409);
  }
}

export class InternalServerError extends ResponseError {
  constructor(message) {
    super(message, 'InternalServerError', 500);
  }
}
