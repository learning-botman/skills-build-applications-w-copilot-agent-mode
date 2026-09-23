import ResourcePage from './ResourcePage.jsx';

const endpoint = '/api/activities/';

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
