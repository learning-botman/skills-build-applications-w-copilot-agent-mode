const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
const apiOrigin = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export const apiBaseUrl = `${apiOrigin}/api`;

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

export async function fetchResource(endpoint, resource) {
  const response = await fetch(`${apiOrigin}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Unable to load ${resource} (${response.status})`);
  }

  return extractItems(await response.json());
}
