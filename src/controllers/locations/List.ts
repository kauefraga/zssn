import { Request, Response } from 'express';
import prisma from '../../prisma';

class ListLocationsController {
  static async handler(
    request: Request,
    response: Response,
  ) {
    const locations = await prisma.location.findMany({});

    return response.status(200).json({
      locations,
    });
  }
}

export default ListLocationsController;
