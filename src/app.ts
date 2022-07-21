import cors from 'cors';
import express, { Application } from 'express';
import addApiRoutes from '@routes/index';

function buildApp(): Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  addApiRoutes(app);

  return app;
}

export default buildApp();
