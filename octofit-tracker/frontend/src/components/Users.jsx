import ResourcePage from './ResourcePage.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
];

export default function Users() {
  return (
    <ResourcePage
      endpoint={endpoint}
      resource="users"
      title="People"
      description="Keep track of the athletes building momentum together."
      columns={columns}
    />
  );
}
