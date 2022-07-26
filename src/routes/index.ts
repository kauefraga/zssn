import { Application } from 'express';
import hello from './hello';

import ListSurvivors from './survivors/list';
import CreateSurvivor from './survivors/create';
import DeleteSurvivor from './survivors/delete';

function addApiRoutes(app: Application): void {
  // Create "root" route that expose other routes (v1/v2/v3)
  app.use('/v1/', hello);

  app.use('/v1/survivors/list', ListSurvivors);
  app.use('/v1/survivors/create', CreateSurvivor);
  app.use('/v1/survivors/delete', DeleteSurvivor);
}

export default addApiRoutes;
