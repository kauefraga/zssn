import { Request, Response } from 'express';

class RegisterController {
  static handler(
    request: Request,
    response: Response,
  ) {
    const { name, age } = request.body;

    response.status(201).json({
      message: `Hello ${name}, you are ${age} years old.`,
    });
  }
}

export default RegisterController;
