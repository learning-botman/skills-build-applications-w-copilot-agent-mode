import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

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

async function sendCollection(response: Parameters<Parameters<typeof apiRouter.get>[1]>[1], query: Promise<unknown[]>) {
  const data = await query;
  response.json({ data, count: data.length });
}

apiRouter.get('/users/', async (_request, response, next) => {
  try {
    await sendCollection(response, User.find().sort({ displayName: 1 }).lean().exec());
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/teams/', async (_request, response, next) => {
  try {
    await sendCollection(response, Team.find().populate('members', 'displayName username').sort({ name: 1 }).lean().exec());
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/activities/', async (_request, response, next) => {
  try {
    await sendCollection(response, Activity.find().populate('user', 'displayName username').sort({ completedAt: -1 }).lean().exec());
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/leaderboard/', async (_request, response, next) => {
  try {
    await sendCollection(response, Leaderboard.find().populate('user', 'displayName username').sort({ rank: 1 }).lean().exec());
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/workouts/', async (_request, response, next) => {
  try {
    await sendCollection(response, Workout.find().sort({ difficulty: 1, name: 1 }).lean().exec());
  } catch (error) {
    next(error);
  }
});

export default apiRouter;
