import ListSurvivorsController from '@controllers/survivors/list';
import { Router } from 'express';

const router = Router();

router.get('/', ListSurvivorsController.handler);

export default router;
