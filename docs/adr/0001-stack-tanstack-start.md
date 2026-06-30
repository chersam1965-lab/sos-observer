# ADR-0001 — TanStack Start as the application stack

- **Status:** Accepted
- **Date:** Sprint 1 (v1.0.0)

## Context
GSOS Observer needs an SSR-capable React framework with strong type-safe
routing, server functions for future backend logic, and edge-friendly
deployment.

## Decision
Adopt TanStack Start v1 with React 19, Vite 7, Tailwind v4, and
shadcn/ui. Use the integrated Lovable Cloud stack for any future
authentication, database, and file storage needs.

## Reason
- Built-in file-based routing with end-to-end typed params.
- `createServerFn` provides a clean client-to-server RPC boundary.
- Tailwind v4 + shadcn/ui give a consistent design system aligned with
  the project's enterprise-grade UI goals.
- Lovable Cloud removes external account friction for future backend work.

## Alternatives
- **Next.js App Router** — heavier conventions and slower iteration on
  Lovable preview.
- **Vite + React Router (SPA-only)** — no SSR, no typed loaders.
- **Remix** — comparable, but TanStack's typed router and Query
  integration matched the design goals more directly.

## Impact
- All routing must follow `src/routes/` conventions; never `src/pages/`.
- Server-only modules must live in `*.server.ts` files or behind
  `createServerFn` handlers.
- Future backend logic should default to TanStack server functions
  rather than ad-hoc REST endpoints.
