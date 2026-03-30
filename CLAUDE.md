# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev           # Start Next.js dev server
npm run build         # Production build
npm run start         # Start production server

# Testing
npm test              # Run all tests once
npm run test:watch    # Run tests in watch mode
npm run coverage      # Generate coverage report
npx jest src/__tests__/conversion.test.ts  # Run a single test file

# Code Quality
npm run lint          # ESLint via next lint
npm run lint-format   # Format with Biome (auto-fixes)
```

## Architecture

**Art portfolio** for Maciej Spałek (paintings, drawings, photography) with an admin panel. Backend: https://github.com/MaciejSpalek/maciejspalek-backend. Live: https://www.mspalek.pl.

### Stack
- **Next.js 12** (static export, file-based routing)
- **React Query** (TanStack v5) — all server state / API data fetching
- **Styled Components** — CSS-in-JS styling
- **Axios** — HTTP client, configured in `src/services/axiosClient.ts` with auth token from cookies
- **React Hook Form + Yup** — form validation
- **GSAP** — animations (mocked in tests via `jest.setup.ts`)

### Directory Layout

```
src/
├── pages/          # Next.js routes (index, paintings, drawings, photography, contact, article/[id], post/[id], admin/*)
├── views/          # Page-level view components (one per route)
├── components/
│   ├── atoms/      # Smallest UI primitives
│   ├── molecules/  # Composite components
│   ├── organisms/  # Complex, stateful components
│   └── templates/  # Page templates
├── layouts/        # LayoutRenderer (routes admin vs. public), Main, Dashboard, Section
├── queries/        # React Query hooks (usePostListQuery, useArticlesListQuery, etc.)
├── hooks/          # Custom hooks (useIsMobileView, useMessage, useOutsideClick, etc.)
├── providers/      # Context providers (NotificationsProvider via Notistack)
├── helpers/        # Utility functions (cookies, endpoints, query params)
├── services/       # axiosClient setup
├── types/          # TypeScript type definitions
└── __tests__/      # Jest unit tests
```

### Routing & Layouts

`src/layouts/LayoutRenderer` is the root layout wrapper (configured in `_app.tsx`). It conditionally renders:
- `Dashboard` layout for `/admin/*` routes
- `Main` layout (Navbar + Footer) for all public routes

### Data Fetching

All API calls go through React Query hooks in `src/queries/`. The `axiosClient` reads auth tokens from cookies. API base URL is `process.env.NEXT_PUBLIC_API_URL`.

### Path Aliases

TypeScript `baseUrl` is `./src`, so imports use `components/...`, `hooks/...`, etc. without relative paths.
