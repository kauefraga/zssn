import { Application } from 'express';
import hello from './hello';

// TODO: Automate the routes. like forEach
function addApiRoutes(app: Application): void {
  // Create "root" route that expose other routes (v1/v2/v3)
  app.use('/v1/', hello);
}

export default addApiRoutes;
