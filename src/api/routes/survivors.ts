import SurvivorsController from '@controllers/survivors';
import { Router } from 'express';

const router = Router();

router.get('/', SurvivorsController.handler);

export default router;
