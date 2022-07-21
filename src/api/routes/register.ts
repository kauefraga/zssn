import RegisterController from '@controllers/register';
import { Router } from 'express';

const router = Router();

router.post('/', RegisterController.handler);

export default router;
