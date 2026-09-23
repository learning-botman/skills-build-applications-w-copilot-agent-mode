import ResourcePage from './ResourcePage.jsx';

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
];

export default function Users() {
  return (
    <ResourcePage
      endpoint="/api/users/"
      resource="users"
      title="People"
      description="Keep track of the athletes building momentum together."
      columns={columns}
    />
  );
}
