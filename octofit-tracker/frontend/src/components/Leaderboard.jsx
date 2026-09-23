import ResourcePage from './ResourcePage.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

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
