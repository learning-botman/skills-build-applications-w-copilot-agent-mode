import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [alex, blair, casey] = await User.insertMany([
      { username: 'alex-runner', email: 'alex@example.com', displayName: 'Alex Rivera' },
      { username: 'blair-lifts', email: 'blair@example.com', displayName: 'Blair Chen' },
      { username: 'casey-yoga', email: 'casey@example.com', displayName: 'Casey Morgan' },
    ]);

    await Team.insertMany([
      {
        name: 'Summit Seekers',
        description: 'A steady team focused on building consistent habits.',
        members: [alex._id, blair._id],
      },
      {
        name: 'Daily Motion',
        description: 'A balanced team for movement of every kind.',
        members: [casey._id],
      },
    ]);

    await Activity.insertMany([
      { user: alex._id, type: 'Running', durationMinutes: 32, points: 80, completedAt: new Date('2026-09-20') },
      { user: blair._id, type: 'Strength training', durationMinutes: 45, points: 95, completedAt: new Date('2026-09-21') },
      { user: casey._id, type: 'Yoga', durationMinutes: 30, points: 60, completedAt: new Date('2026-09-22') },
    ]);

    await Leaderboard.insertMany([
      { user: blair._id, points: 420, rank: 1 },
      { user: alex._id, points: 380, rank: 2 },
      { user: casey._id, points: 315, rank: 3 },
    ]);

    await Workout.insertMany([
      {
        name: 'Foundation Run',
        type: 'Cardio',
        difficulty: 'beginner',
        durationMinutes: 25,
        description: 'An approachable run with a gentle pace and warm-up.',
      },
      {
        name: 'Full Body Circuit',
        type: 'Strength',
        difficulty: 'intermediate',
        durationMinutes: 35,
        description: 'A balanced circuit covering the major movement patterns.',
      },
      {
        name: 'Peak Power Intervals',
        type: 'HIIT',
        difficulty: 'advanced',
        durationMinutes: 30,
        description: 'Short, challenging intervals for experienced athletes.',
      },
    ]);

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
