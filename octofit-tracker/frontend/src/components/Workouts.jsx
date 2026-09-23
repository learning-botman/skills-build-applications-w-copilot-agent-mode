import ResourcePage from './ResourcePage.jsx';

const endpoint = '/api/workouts/';

const columns = [
  { key: 'name', label: 'Workout' },
  { key: 'type', label: 'Type' },
  { key: 'difficulty', label: 'Level' },
  { key: 'durationMinutes', label: 'Minutes' },
];

export default function Workouts() {
  return (
    <ResourcePage
      endpoint={endpoint}
      resource="workouts"
      title="Workouts"
      description="Choose a session that meets you where your energy is today."
      columns={columns}
    />
  );
}
