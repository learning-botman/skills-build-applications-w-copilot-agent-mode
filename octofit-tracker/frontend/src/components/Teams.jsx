import ResourcePage from './ResourcePage.jsx';

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Mission' },
  { key: 'members', label: 'Members' },
];

export default function Teams() {
  return (
    <ResourcePage
      endpoint="/api/teams/"
      resource="teams"
      title="Teams"
      description="Find your crew, compare missions, and keep each other moving."
      columns={columns}
    />
  );
}
