import { Request, Response } from 'express';
import prisma from '../../prisma';

class CreateSurvivorController {
  static async handler(
    request: Request,
    response: Response,
  ) {
    const {
      name, age, gender, location,
    } = request.body;

    const survivor = await prisma.survivor.create({
      data: {
        name,
        age,
        gender,
        location: {
          create: {
            lat: location.lat,
            lon: location.lon,
          },
        },
      },
    });

    response.status(201).json({
      message: `You created a new survivor with id: ${survivor.id}`,
    });
  }
}

export default CreateSurvivorController;
