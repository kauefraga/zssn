/* eslint-disable no-undef */

import request from 'supertest';
import app from '../../src/app';

describe('/v1/survivors/delete', () => {
  it.skip('should return a deleted user (200)', async () => {
    const response = await request(app)
      .delete('/v1/survivors/delete')
      .send({
        // need to provide a valid id here
        id: '',
      });

    expect(response.status).toBe(200);
  });

  it('should return a must provide an id error (400)', async () => {
    const response = await request(app)
      .delete('/v1/survivors/delete')
      .send({});

    expect(response.status).toBe(400);
  });
});
