import ResourcePage from './ResourcePage.jsx';

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Athlete' },
  { key: 'points', label: 'Points' },
];

export default function Leaderboard() {
  return (
    <ResourcePage
      endpoint="/api/leaderboard/"
      resource="leaderboard"
      title="Leaderboard"
      description="A friendly snapshot of the points earned across the community."
      columns={columns}
    />
  );
}
