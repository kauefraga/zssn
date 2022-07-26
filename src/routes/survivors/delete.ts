import DeleteController from 'src/controllers/survivors/delete';
import { Router } from 'express';

const router = Router();

router.delete('/', DeleteController.handler);

export default router;
