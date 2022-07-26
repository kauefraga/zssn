import HelloController from 'src/controllers/hello';
import { Router } from 'express';

const router = Router();

router.get('/', HelloController.handler);

export default router;
