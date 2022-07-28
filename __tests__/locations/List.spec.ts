/* eslint-disable no-undef */

import request from 'supertest';
import app from '../../src/app';

describe('/v1/locations/list', () => {
  it('should return a list of locations (200)', async () => {
    const response = await request(app)
      .get('/v1/locations/list');

    expect(response.status).toBe(200);
  });
});
