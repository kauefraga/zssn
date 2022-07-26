import { Request, Response } from 'express';

class HelloController {
  static handler(
    request: Request,
    response: Response,
  ) {
    return response.json({
      message: 'Hello! 👋',
      now: new Date(),
    });
  }
}

export default HelloController;
