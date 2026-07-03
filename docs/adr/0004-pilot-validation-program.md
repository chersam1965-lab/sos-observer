# ADR-0004 — Pilot Validation Program

**Status:** Accepted (2026-07-03)
**Context:** V1.3-DEV, Sprint S0.

## Decision

Introduce a runtime-toggled "Pilot Mode" that captures anonymized session
logs and post-analysis user feedback in a **separate** localStorage-backed
repository, exposed via a dedicated `/pilot` dashboard and a PDF Pilot
Validation Report. The Analysis engine, indicators, i18n dictionaries,
and PDF report pipeline are frozen for this sprint.

## Rationale

Before spending sprints on TD-001 (Auth), TD-002 (Telemetry), and TD-003
(Arabic searchable PDF), we need evidence that the current product
performs correctly in the field. Pilot data must not pollute the
canonical Analysis records, so we use an isolated repository, service,
and storage keys.

## Consequences

- +1 new domain (`src/lib/pilot/`) with the same DI shape as
  `src/lib/analysis/`, ready to be swapped to Supabase in a later sprint.
- +1 new route (`/pilot`), gated by the Pilot Mode flag.
- No behavior change when Pilot Mode is OFF.
- Feedback data is client-side only for S0; server-side persistence is
  a future concern tied to TD-001 (Auth) and TD-002 (Telemetry).
