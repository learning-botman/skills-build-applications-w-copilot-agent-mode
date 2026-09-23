import ResourcePage from './ResourcePage.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Mission' },
  { key: 'members', label: 'Members' },
];

export default function Teams() {
  return (
    <ResourcePage
      endpoint={endpoint}
      resource="teams"
      title="Teams"
      description="Find your crew, compare missions, and keep each other moving."
      columns={columns}
    />
  );
}
