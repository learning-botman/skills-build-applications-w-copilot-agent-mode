import { Router } from 'express';

const apiRouter = Router();

const collectionRoutes = [
  'users',
  'teams',
  'activities',
  'leaderboard',
  'workouts',
] as const;

apiRouter.get('/', (_request, response) => {
  response.json({
    service: 'octofit-tracker-api',
    resources: collectionRoutes.map((resource) => `/api/${resource}`),
  });
});

for (const resource of collectionRoutes) {
  apiRouter.get(`/${resource}`, (_request, response) => {
    response.json({ data: [], count: 0 });
  });
}

export default apiRouter;
