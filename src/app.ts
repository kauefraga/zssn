import cors from 'cors';
import express, { Application } from 'express';
import router from './routes';

function buildApp(): Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(router);

  app.use((_, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  return app;
}

export default buildApp();
