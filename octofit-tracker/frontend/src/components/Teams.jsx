import ResourcePage from './ResourcePage.jsx';

const endpoint = '/api/teams/';

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
