import request from 'supertest';
import app from '../src/app';

describe('Survivor register and query', () => {
  it('should create a new survivor', async () => {
    const survivor = {
      name: 'John Doe',
      age: 30,
    };

    const response = await request(app)
      .post('/v1/register')
      .send({
        name: survivor.name,
        age: survivor.age,
      });

    expect(response.status).toBe(201);
  });

  it('should return a list of survivors', async () => {
    const response = await request(app)
      .get('/v1/survivors');

    expect(response.status).toBe(200);
  });
});
