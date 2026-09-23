import ResourcePage from './ResourcePage.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

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
