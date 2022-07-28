/* eslint-disable no-undef */

import request from 'supertest';
import app from '../../src/app';

interface ICreateSurvivorRequest {
  name: string;
  age: number;
  gender: string;
  location: {
    lat: number;
    lon: number;
  }
}

describe('/v1/survivors/create', () => {
  it.skip('should return a new survivor (201)', async () => {
    // you'll need to change it every time you run the test
    const survivor: ICreateSurvivorRequest = {
      name: 'John Doe',
      age: 30,
      gender: 'male',
      location: {
        lat: 2,
        lon: 1,
      },
    };

    const response = await request(app)
      .post('/v1/survivors/create')
      .send(survivor);

    expect(response.status).toBe(201);
  });

  it('should return a survivor that already exists (200)', async () => {
    // need to change it for an existing survivor on the database
    const survivor: ICreateSurvivorRequest = {
      name: 'John Doe',
      age: 30,
      gender: 'male',
      location: {
        lat: 2,
        lon: 1,
      },
    };

    const response = await request(app)
      .post('/v1/survivors/create')
      .send(survivor);

    expect(response.status).toBe(200);
  });

  it('should return an error (500)', async () => {
    const response = await request(app)
      .post('/v1/survivors/create')
      .send({});

    expect(response.status).toBe(500);
  });
});
