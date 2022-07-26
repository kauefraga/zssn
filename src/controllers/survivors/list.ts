import { Request, Response } from 'express';
import prisma from '../../prisma';

class ListSurvivorsController {
  static async handler(
    request: Request,
    response: Response,
  ) {
    const survivor = await prisma.survivor.findMany({});

    return response.status(200).json({
      survivors: survivor,
    });
  }
}

export default ListSurvivorsController;
