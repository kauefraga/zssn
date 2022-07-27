import { Router } from 'express';

import Hello from '@controllers/hello';

import ListSurvivors from '@controllers/survivors/list';
import CreateSurvivor from '@controllers/survivors/create';
import DeleteSurvivor from '@controllers/survivors/delete';

const router = Router();

router.get('/v1/', Hello.handler);

router.get('/v1/survivors/list', ListSurvivors.handler);

router.post('/v1/survivors/create', CreateSurvivor.handler);

router.delete('/v1/survivors/delete', DeleteSurvivor.handler);

export default router;
