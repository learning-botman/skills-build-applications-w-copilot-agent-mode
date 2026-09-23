# OctoFit Tracker frontend

The presentation tier runs on port `5173` and talks to the API on port `8000`.

## API environment

Create `octofit-tracker/frontend/.env.local` and define the Codespaces name:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

The frontend builds its API URL as `https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/`. When `VITE_CODESPACE_NAME` is unset, it safely falls back to `http://localhost:8000/api/` for local development.

## Development

```bash
npm run dev --prefix octofit-tracker/frontend
```

The remaining sections below are the original Vite setup notes.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
