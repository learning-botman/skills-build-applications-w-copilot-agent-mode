import ResourcePage from './ResourcePage.jsx';

const endpoint = '/api/leaderboard/';

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Athlete' },
  { key: 'points', label: 'Points' },
];

export default function Leaderboard() {
  return (
    <ResourcePage
      endpoint={endpoint}
      resource="leaderboard"
      title="Leaderboard"
      description="A friendly snapshot of the points earned across the community."
      columns={columns}
    />
  );
}
