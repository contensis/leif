# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Leif is a demo React web application showcasing what can be built on top of **Contensis CMS**. It is a plant/garden e-commerce store with a blog, search, basket, and checkout — all content-driven via the Contensis Delivery API.

## Commands

```bash
yarn start              # Dev server on port 3000
yarn build              # Production build (dual client + server bundles)
yarn build:ci           # CI build (build + assets)
yarn server             # Run the production server
yarn storybook          # Storybook dev server on port 6006

yarn test               # Jest (all tests)
yarn test:watch         # Jest watch mode
yarn test:coverage      # Coverage report
yarn test path/to/test  # Run a single test file

yarn lint               # ESLint
yarn lint:fix           # ESLint with auto-fix
yarn tsc                # TypeScript type-check

yarn cypress:open       # Cypress interactive
yarn cypress:run        # Cypress headless
```

**Package manager: Yarn.** Do not use npm.

## Architecture

### contensis-react-base Framework

`@zengenti/contensis-react-base` is an in-house framework developed by Zengenti (the team behind Contensis) that provides the foundational infrastructure for this application. It eliminates SSR, routing, and Redux boilerplate so the codebase can focus on product features. Key things it provides:

- **`ZengentiAppServer`** — the Express server that handles universal rendering, client hydration, and deployment on Contensis Cloud
- **`RouteLoader`** — drives navigation via Contensis Site View; automatically fetches content entries as users navigate and populates Redux state, with automatic cache key generation and invalidation
- **Redux store** — created and connected by the framework; `search` and related slices come pre-wired
- **`mapJson`** (from `@zengenti/contensis-react-base/util`) — maps raw CMS entry data to component props

The framework is structured as subpackages: `/client`, `/routing`, `/redux`, `/search`, `/user`, `/i18n`, `/util`.

### Rendering

Webpack 5 runs two parallel builds (configured in `webpack/`):

- **Client** — dual output: modern (ES2022) and legacy (transpiled) bundles
- **Server** — CommonJS bundle consumed by `ZengentiAppServer`

The server renders React to string, hydrates Redux state, and injects it into `public/index.html` / `index_static.html` / `index_fragment.html`. The Express setup lives in `src/server/`.

### Routing

Two route registration mechanisms live in `src/app/core/routes/`:

1. **`StaticRoutes.ts`** — Path-based routes (e.g. `/search/:facet?`, `/basket`, `/checkout`, `/404`)
2. **`ContentTypeMappings.ts`** — CMS-driven routes that map a Contensis content type (e.g. `blogPost`, `plant`, `contentPage`) to a page component and an optional data mapper

`RouteLoader` from the framework handles the actual navigation and entry fetching behind both mechanisms. All page components are lazy-loaded via `@loadable/component` — see `src/app/dynamic/pages.ts` for the full list. Composer/block components are registered in `src/app/dynamic/composer.ts`.

### Contensis CMS Integration

- **Delivery API** access is abstracted in `src/app/utils/hooks/useDeliveryApi.ts` and `src/app/core/util/`
- The `deliveryApi` class wraps the Contensis client with `search`, `getClient`, and `getEntry` methods
- `cachedSearch` adds an LRU cache (100 entries) with promise deduplication on top of search calls
- Version status (published vs preview) is detected from the current hostname
- In dev, requests to `/api/*` are proxied to the CMS

**Content schema** (content types, fields, composers, search facets, and filters) is documented in `src/app/core/schema.ts`.

**Data mappers** (`*.mapper.ts` files co-located with pages) use `mapJson` from `@zengenti/contensis-react-base/util` to transform raw CMS entries into component props before render.

### State Management

Redux + Redux Saga. Store slices:

| Slice | Purpose |
|-------|---------|
| `basket` | Cart items, totals, quantities |
| `menu` | Nav open/close state |
| `product` | Current product display |
| `liveSearch` | Real-time search suggestions |
| `search` | Full search results (from base library) |
| `ui` | Browser size, overlays |

Reducers use Immer. Async operations (basket mutations, product fetching, live search) go through sagas.

### Component Conventions

Each component typically has up to four co-located files:

- `ComponentName.tsx` — the presentational component
- `ComponentName.styled.tsx` — styled-components definitions
- `ComponentName.container.tsx` — Redux-connected wrapper
- `ComponentName.canvas.tsx` — Canvas block renderer (for rich text composer blocks)
- `ComponentName.stories.tsx` — Storybook story
- `ComponentName.mapper.ts` — CMS-to-props transformation (on pages)

### Styling

Styled-components 5 throughout. The theme is defined in `src/app/theme/leif.js` and provided via `ThemeProvider` in `src/app/App.tsx`. Global styles are also applied there.

### Path Aliases

| Alias | Resolves to |
|-------|------------|
| `~/` | `src/app/` |
| `-/` | project root |

Configured in both `tsconfig.json` and `babel.config.js` (module-resolver plugin).

## Environment Variables

Set at build time via `webpack/define-config.js`. The `.env` file (not committed) provides:

```
ACCESS_TOKEN=   # Contensis Delivery API access token
PROJECT=        # Contensis project ID
ALIAS=          # Contensis cloud alias
```

Other build-time vars: `PUBLIC_URL`, `INTERNAL_VIP`, `STATIC_PATH`, `NODE_ENV`.

## Key Dependencies

- `@zengenti/contensis-react-base` — in-house framework: SSR server, routing, Redux store, `mapJson`, search (see [GitHub](https://github.com/zengenti/contensis-react-base/))
- `contensis-delivery-api` — Contensis Delivery API client
- `@contensis/canvas-react` — Rich text / Canvas block rendering
- `styled-components` 5 — styling
- `@loadable/component` — code splitting with SSR support
- `react-hot-loader` — HMR in dev
