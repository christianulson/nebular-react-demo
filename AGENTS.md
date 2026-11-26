# Nebular

Nebular React demo application. Standalone Vite/React 19 app showcasing the Nebular React UI library.

Not part of the AllApp Nx workspace. Excluded from Nx scanning (listed in `.nxignore`).

## Structure

Standard Vite + React 19 project:

```
src/
  components/      — Demo components grouped by feature
  pages/           — Demo pages (charts, forms, tables, layouts, etc.)
  themes/          — Theme definitions (light, dark, cosmic, corporate)
  App.tsx          — Root component
  main.tsx         — Entrypoint
```

## Commands

```sh
yarn dev             # Vite dev server
yarn build           # Typecheck + production build
yarn preview         # Preview production build
yarn test            # Vitest unit tests
yarn test:e2e        # Playwright E2E + axe
yarn verify:full     # Full CI pipeline
```

## Dependencies

- `@nebular-react/core`, `@nebular-react/hooks`, `@nebular-react/styles` — aliased to `../NebularCore/src` (live source, no publish needed)
- React 19, Vite 8, TypeScript 7, ESLint 9, Vitest 5, Playwright
