const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api';

export function extractItems(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  const candidates = [
    payload?.data,
    payload?.results,
    payload?.items,
    payload?.data?.results,
    payload?.data?.items,
  ];

  return candidates.find(Array.isArray) || [];
}

export async function fetchResource(resource) {
  const response = await fetch(`${apiBaseUrl}/${resource}/`);

  if (!response.ok) {
    throw new Error(`Unable to load ${resource} (${response.status})`);
  }

  return extractItems(await response.json());
}
