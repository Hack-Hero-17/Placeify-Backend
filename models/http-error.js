class HttpError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.message = message;
  }

  //   static badRequest(message) {
  //     return new HttpError(400, message || 'Bad Request');
  //   }

  //   static unauthorized(message) {
  //     return new HttpError(401, message || 'Unauthorized');
  //   }

  //   static forbidden(message) {
  //     return new HttpError(403, message || 'Forbidden');
  //   }

  //   static notFound(message) {
  //     return new HttpError(404, message || 'Not Found');
  //   }

  //   static internalServerError(message) {
  //     return new HttpError(500, message || 'Internal Server Error');
  //   }
}
module.exports = HttpError;
