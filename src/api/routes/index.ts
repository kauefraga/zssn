import { Application } from 'express';
import hello from './hello';
import register from './register';
import survivors from './survivors';

// TODO: Automate the routes. like forEach
function addApiRoutes(app: Application): void {
  // Create "root" route that expose other routes (v1/v2/v3)
  app.use('/v1/', hello);

  app.use('/v1/survivors', survivors);
  app.use('/v1/register', register);
}

export default addApiRoutes;
