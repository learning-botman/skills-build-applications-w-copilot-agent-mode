import { useEffect, useState } from 'react';
import { fetchResource } from '../api.js';

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (value && typeof value === 'object') {
    return value.displayName || value.name || value.username || value._id || 'Details available';
  }

  return value ?? '—';
}

export default function ResourcePage({ endpoint, resource, title, description, columns }) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    fetchResource(endpoint, resource)
      .then((nextItems) => {
        if (active) {
          setItems(nextItems);
          setStatus('ready');
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError.message);
          setStatus('error');
        }
      });

    return () => {
      active = false;
    };
  }, [endpoint, resource]);

  return (
    <section className="resource-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Tracker data</p>
          <h1>{title}</h1>
          <p className="page-description">{description}</p>
        </div>
        <span className="record-count">{items.length} records</span>
      </div>

      {status === 'loading' && <div className="state-panel">Loading {title.toLowerCase()}...</div>}
      {status === 'error' && <div className="state-panel state-panel-error">{error}</div>}
      {status === 'ready' && items.length === 0 && (
        <div className="state-panel">No {title.toLowerCase()} found yet.</div>
      )}
      {status === 'ready' && items.length > 0 && (
        <div className="table-shell">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  {columns.map((column) => <th scope="col" key={column.key}>{column.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item._id || item.id || index}>
                    {columns.map((column) => (
                      <td key={column.key}>{formatValue(item[column.key])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
