import express from 'express';
import apiRouter from './routes/api.js';

export function createApp(apiBaseUrl: string) {
  const app = express();
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

  app.disable('x-powered-by');
  app.use((_request, response, next) => {
    response.header('Access-Control-Allow-Origin', frontendUrl);
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    next();
  });
  app.use(express.json());

  app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok', service: 'octofit-tracker-api', apiBaseUrl });
  });
  app.use('/api', apiRouter);

  return app;
}
