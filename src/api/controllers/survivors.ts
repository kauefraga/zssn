import { Request, Response } from 'express';
import prisma from '../../prisma';

class SurvivorsController {
  static handler(
    request: Request,
    response: Response,
  ) {
    const survivors = prisma.survivor.findMany({});

    return response.status(200).json(survivors);
  }
}

export default SurvivorsController;
