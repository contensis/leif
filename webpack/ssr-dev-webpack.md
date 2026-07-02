# SSR-First Development Workflow

## Overview

The project uses an **SSR-first** development approach that outputs both client and server bundles via a single `webpack.config.js`. The pipeline is orchestrated by the `crb dev` CLI command (from `@zengenti/contensis-react-base`) which boots the webpack compilers, the webpack dev server, and the Node SSR server (with nodemon watching for changes).

## Quick Start

```bash
npm run dev              # Full SSR-first development pipeline
```

| Component | Port | Purpose |
|---|---|---|
| Client webpack (compiler) | - | Emits client JS/CSS to `dist/modern/` |
| Server webpack (compiler) | - | Emits `dist/server-dev.js` |
| Webpack Dev Server | **3000** | Serves client bundles with HMR |
| Node SSR server | **3001** | SSR render engine (nodemon-watched) |

The browser automatically opens `http://localhost:3001/` once the server is ready.

---

## Pipeline Breakdown

The `crb dev` CLI command sets up everything in this order:

1. **Both webpack compilers are created** (client + server) - the CRB CLI creates two separate `webpack` compilers from the array elements and starts them both watching in parallel.
2. **Client `afterEmit`** fires - its callback sets `clientReady = true` and checks if the server compiler is also ready.
3. **Server `afterEmit`** fires - its callback checks if both compilers are ready, then launches **nodemon**.
4. **Webpack Dev Server starts** on port 3000 and serves client assets (including `index_csr.html` for CSR fallback).
5. **Nodemon starts** the Node SSR server on port 3001 with `--inspect=9229` and preloads the CRB package's `dev-server-globals.js` (which loads the project's `webpack/define-config.js` and sets globals) before the server bundle.
6. **Browser opens** (`http://localhost:3001/`) only after nodemon's `start` event fires - ensuring the server is fully ready.

### Key Files in the Pipeline

The current SSR-first pipeline is built from these files:

```
webpack/webpack.config.js
├── webpack/webpack.config.base.js  (aliases, ESLint plugin, base DefinePlugin)
├── webpack/define-config.js        (compile-time globals)
└── webpack/bundle-info.js          (DEFINE_CONFIG, DEVSERVER_PROXIES, etc.)

loaded into → crb dev CLI (dev builds)  │  webpack CLI + buildstartup (prod builds)
```

| Dev | Prod | File | Role |
|-----|------|------|------|
| ✓ | ✓ | `webpack.config.js` | Unified webpack config for **both** client (`web`) and server (`node`) targets. Exports `CLIENT_CONFIG` (`target: 'web'`) and `SERVER_CONFIG` (`target: 'node'`). |
| ✓ | ✓ | `webpack.config.base.js` | Shared aliases (`~/`, `-`), ESLint plugin, and base `DefinePlugin`. Imported by `webpack.config.js` via `webpack-merge`. |
| ✓ | ✓ | `define-config.js` | Compile-time globals for `DefinePlugin`. Exports `development` and `production` config objects with values from `.env` (e.g. `ALIAS`, `PROJECT`, `DELIVERY_API_CONFIG`, `SERVERS`). |
| ✓ | ✓ | `bundle-info.js` | Exports `DEFINE_CONFIG`, `DEVSERVER_PROXIES`, `REVERSE_PROXIES` for use by build configs. |
| ✓ | | `crb dev` CLI | Orchestrates the pipeline: creates webpack compilers, starts webpack-dev-server on port 3000, and launches nodemon for the SSR server on port 3001 with `--inspect=9229`. Loads the CRB package's `dev-server-globals.js` (which reads `define-config.js` and sets globals on the Node process) before the server bundle. |
| | ✓ | `build:startup` script | Runs the Contensis build startup package (`zengenti-buildstartup-package`) - produces `startup.js` for production server/bundle serving. |

> **Note:** The production build uses the same config files as development - the only difference is `NODE_ENV=production` and the server output goes to `dist/start.js` instead of `dist/server-dev.js`.

> **Note:** `webpack.config.assets.js` is a standalone webpack config for optimising static image assets (jpg, png, etc.) via `CopyWebpackPlugin` and `ImageminPlugin`. It is not used in local dev or prod builds — it is run separately in CI via `npm run build && npm run build:assets` to optimise images before deployment.

## CSR vs SSR Rendering in Development

### SSR (default)

The default route at `http://localhost:3001/` uses SSR - the Express server renders HTML server-side and injects the client bundle.

### CSR fallback (port 3000)

During `npm run dev`, webpack-dev-server on port 3000 serves `index_csr.html` (a CSR-rendered copy of `public/index.html`) at `http://localhost:3000/`. This gives you a pure client-side render - useful for testing HMR in isolation.

---

## Environment & Globals

### Compile-time globals (`webpack/define-config.js`)

`webpack/define-config.js` exports three objects that feed into the webpack `DefinePlugin`:

| Export | Purpose |
|--------|---------|
| `development` | All globals used in development builds - values from `.env` and `package.json`. |
| `production` | Globals used in production builds - omits values only needed in dev. |
| `build` | Resolves to either `development` or `production` based on `NODE_ENV` - this is what `DefinePlugin` uses in `webpack.config.base.js`. |

```
webpack/webpack.config.js
  │
  ├─ require('webpack/webpack.config.base')   ← base config
  │      │
  │      ├─ require('webpack/bundle-info')     ← DEFINE_CONFIG
  │      │      │
  │      │      └─ require('webpack/define-config')
  │      │             │
  │      │             ├─ development  (NODE_ENV=development)
  │      │             └─ production   (NODE_ENV=production)
  │      │
  │      └─ new DefinePlugin(DEFINE_CONFIG.build)
  │
  ├─ CLIENT_CONFIG (target: 'web')            ← __isBrowser__: 'true'
  └─ SERVER_CONFIG (target: 'node')           ← __isBrowser__: 'false'
```

### Runtime globals

Contensis React Base depends on runtime globals (e.g. `SERVERS`, `DELIVERY_API_CONFIG`, `PROJECTS`) that are **not** replaced via `DefinePlugin` in dev mode. These globals are set in the `global` scope for the Node.js/Express SSR server, mirroring the behaviour of the `startup.js` server script and `startup.js` browser script generated by the buildstartup package in production builds.

The CRB CLI loads the CRB package's `dev-server-globals.js` via nodemon's `-r` flag. This file resolves the project's `webpack/define-config.js` at runtime, loads the `development` export, and sets each entry as a `global` variable:

``` 
nodemon -r dev-server-globals.js dist/server-dev.js         ← development server build
         │
         └─ @zengenti/contensis-react-base/cjs/dev-server-globals.js
              │
              ├─ require('webpack/define-config').development      ← your project root
              │      │
              │      └─ mapped from `process.env` and `package.json`
              │
              └─ for (key, value in development)
                     global[key] = value                ← sets globals on Node process
```

> **Note:** Client-side development bundles don't need runtime globals — the Webpack `DefinePlugin` transpiles them into the bundle at build time.

---

## Debugging

### VS Code Node Debugger

The server starts with `--inspect=9229`. Add this to `.vscode/launch.json`:

```json
{
  "name": "Attach to SSR Server",
  "type": "node",
  "request": "attach",
  "port": 9229,
  "sourceMaps": true,
  "skipFiles": ["<node_internals>/**"]
}
```

### Hot Reload

| Change type | Mechanism |
|-------------|-----------|
| Client files (`.ts`, `.tsx`, `.css`, etc.) | HMR via webpack-dev-server on port 3000 |
| Server files (`server.ts`) | Nodemon watches `dist/server-dev.js` and restarts the Node process |

### Port Mapping Summary

| Port | Serves | Triggered by |
|------|--------|--------------|
| **3000** | Client assets + CSR `index_csr.html` | webpack-dev-server |
| **3001** | SSR HTML + client bundle | Express server (nodemon-watched) |
| **9229** | Node inspector (debug) | `--inspect` flag |

---

## Deprecated / Removed Scripts

The following scripts have been **removed** from `package.json` - they are superseded by the SSR-first `npm run dev` workflow.

| Script | Reason |
|--------|--------|
| `npm start` | CSR-only via `webpack.config.dev.js` (removed from repo). No SSR, no nodemon. |
| `npm run dev:csr` | Standalone CSR server. CSR is already available on port 3000 of `npm run dev`. |
| `npm run dev:server` | Standalone via `babel-node` on `debug.ts`. `npm run dev` has sourcemaps, nodemon, and globals out of the box. |
| `npm run debug:server` | Standalone nodemon + babel-node. `npm run dev` includes `--inspect=9229` and globals setup. |
| `npm run build:dev:server` | Superseded by `npm run dev`. |

Scripts that remain **relevant**:

| Script | Purpose |
|--------|---------|
| `npm run dev` | Main SSR-first development pipeline |
| `npm run build` | Production build (client + server) via `webpack.config.js` |
| `npm run build:assets` | Static image asset optimization (CI) |
| `npm run build:startup` | Contensis build startup package |
| `npm run build:server` | Convenience - builds and runs the production server from `dist/` |
| `npm run server` | Run the production server from `dist/` |
| `npm run analyze` | Bundle analysis via `webpack-bundle-analyzer` |
| `npm run lint` / `lint:fix` | ESLint + Prettier |
| `npm run storybook` / `storybook-ci` / `storybook-static` / `build-storybook` | Storybook component development |

---

## What Changed from the Old CSR-Only Workflow

### Old (`npm start`)

- Ran `webpack serve --config webpack/webpack.config.dev.js` - CSR-only build.
- No server bundle, no SSR, no nodemon.
- Browser opened immediately via webpack-dev-server's `open` option (race condition - server might not be ready).
- Server debugging required a separate manual process.

### New (`npm run dev`)

- **Unified config**: `webpack.config.js` handles both client and server builds. The old `webpack.config.dev.js` and `webpack.config.prod.js` no longer exist in the repo - `webpack.config.dev.js` was removed from `package.json` and both files have been deleted.
- **Dual-target output**: `CLIENT_CONFIG` (`target: 'web'`) and `SERVER_CONFIG` (`target: 'node'`) are compiled in parallel.
- **Deferred browser open**: The browser only launches inside nodemon's `start` callback - the server is guaranteed to be ready.
- **Platform-aware launch**: Uses `start` (Windows), `open` (macOS), or `xdg-open` (Linux).
- **Sourcemaps out of the box**: Server builds use `devtoolModuleFilenameTemplate: '[absolute-resource-path]'` for better debug stack traces.
- **No `HtmlWebPackPlugin` in CSR mode**: When `CSR=true`, the `index.ejs` plugin is suppressed to prevent duplicate HTML output.

---

## Output Files

| File | Description |
|------|-------------|
| `dist/modern/` | Client JS/CSS bundles + Loadable component manifest (writeToDisk) |
| `dist/server-dev.js` | Server bundle (dev) |
| `dist/index.html` | SSR template (injected by webpack) |
| `dist/index_fragment.html` | SSR fragment template |
| `dist/index_static.html` | Static HTML template |
| `dist/static/` | Copied public assets (images, icons, etc.) |
