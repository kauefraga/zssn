import { Request, Response } from 'express';
import prisma from '../../prisma';

class DeleteSurvivorController {
  static async handler(
    request: Request,
    response: Response,
  ) {
    const { id } = request.body;

    if (!id) {
      return response.status(400).json({
        message: 'You must provide an id',
      });
    }

    const survivor = await prisma.survivor.delete({
      where: {
        id,
      },
    });

    return response.status(200).json({
      message: `You deleted survivor with id: ${id}`,
      survivor,
    });
  }
}

export default DeleteSurvivorController;
