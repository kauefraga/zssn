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

    try {
      const survivor = await prisma.survivor.findUnique({
        where: {
          name,
        },
      });

      if (!survivor) {
        const newSurvivor = await prisma.survivor.create({
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

        return response.status(201).json({
          message: `You created a new survivor with id: ${newSurvivor.id}`,
        });
      }

      return response.status(200).json({
        message: `You already have a survivor with name: ${name}`,
        survivor,
      });
    } catch (error) {
      return response.status(500).json({
        message: error || 'Something went wrong',
      });
    }
  }
}

export default CreateSurvivorController;
