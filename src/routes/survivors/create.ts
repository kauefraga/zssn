import CreateController from 'src/controllers/survivors/create';
import { Router } from 'express';

const router = Router();

router.post('/', CreateController.handler);

export default router;
