import cors from 'cors';
import express, { Application } from 'express';
import router from './routes';

function buildApp(): Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(router);

  return app;
}

export default buildApp();
