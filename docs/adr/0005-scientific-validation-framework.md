# ADR-0005 — Scientific Validation Framework

**Status:** Accepted (2026-07-04)
**Context:** V1.3-DEV, Sprint S1.

## Decision

Introduce an **independent** Scientific Validation module that captures
controlled experiments comparing GSOS output against expert ground truth,
computes a deterministic match rate, and exports a formal Scientific
Validation Report (PDF). The module is isolated from Analysis, Dashboard,
PDF pipeline, and Pilot.

## Rationale

Field feedback (V1.3 S0 Pilot Validation Program) is subjective. To
present GSOS Observer to universities, research centers, and innovation
juries, we need reproducible, auditable evidence produced by a
protocol-based framework — not by the analysis engine itself.

## Design

- New domain layer `src/lib/scientific/` mirroring the DI shape of
  `analysis/` and `pilot/` (types, repository interface, LocalStorage
  implementation, service, unit tests).
- Storage key: `gsos.scientific.experiments.v1` — no overlap with
  `gsos.analysis.*` or `gsos.pilot.*`.
- New route `/scientific` with a New-Experiment form, aggregate
  dashboard, and a "Scientific Validation Report" PDF export.
- Match-rate formula (v1, deterministic, engine-free):
  - status distance 0 → 100 pts (**match**)
  - status distance 1 → 50 pts (**partial**)
  - status distance 2 → 0 pts (**mismatch**)
  - Match flag thresholds: `match ≥ 80`, `partial 50–79`, `mismatch < 50`.

## Consequences

- +1 new domain (`src/lib/scientific/`) ready to be swapped to Supabase
  or another persistence provider without call-site changes.
- +1 new route (`/scientific`), reachable by direct URL — no change to
  Dashboard or Pilot navigation.
- No behavior change to Analysis engine, indicators, main dashboard,
  Analysis PDF pipeline, or Pilot module.
- Experiments are client-side only for S1; server-side persistence and
  expert accounts arrive with TD-001 and later sprints.
