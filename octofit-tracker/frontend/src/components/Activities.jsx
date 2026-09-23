import ResourcePage from './ResourcePage.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'points', label: 'Points' },
  { key: 'completedAt', label: 'Completed' },
];

export default function Activities() {
  return (
    <ResourcePage
      endpoint={endpoint}
      resource="activities"
      title="Activities"
      description="See every completed session and the points it adds to the board."
      columns={columns}
    />
  );
}
