import HelloController from '@controllers/hello';
import { Router } from 'express';

const router = Router();

router.get('/', HelloController.handler);

export default router;
