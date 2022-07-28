import { Router } from 'express';

import Hello from '@controllers/hello';

import ListSurvivors from '@controllers/survivors/List';
import CreateSurvivor from '@controllers/survivors/Create';
import DeleteSurvivor from '@controllers/survivors/Delete';
import ListLocations from '@controllers/locations/List';

const router = Router();

router.get('/v1/', Hello.handler);

router.get([
  '/v1/survivors',
  '/v1/survivors/list',
], ListSurvivors.handler);

router.get([
  '/v1/locations',
  '/v1/locations/list',
], ListLocations.handler);

router.post('/v1/survivors/create', CreateSurvivor.handler);

router.delete('/v1/survivors/delete', DeleteSurvivor.handler);

export default router;
