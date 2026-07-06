# Changelog

All notable changes to GSOS Observer are documented in this file.
The project adheres to [Semantic Versioning](https://semver.org/) and
## [Unreleased] — 2.0.0-dev — Phase II · Core Intelligence Program (CIP)

### Sprint V2.0-S1 — Reasoning Engine Foundation (added 2026-07-06)

Opens Phase II (CIP). Seven-sprint program; sprints strictly sequential
with Acceptance Report + Sprint Certificate gating.

- New isolated domain `src/lib/reasoning/` — pure `reason()` engine,
  8 seed rules, deterministic aggregation formula (see ADR-0007),
  DI repository, service, `explain()` renderer.
- New route `/reasoning` — Reasoning Console: traces list, run
  reasoning over latest Analysis snapshot, per-trace step view.
- Additive `re.*` i18n keys in EN / FR / AR (RTL for AR).
- 4 new unit test files (engine determinism, rules registry, service
  isolation + auto-increment, explain output).
- ADR-0007; `docs/sprints/V2.0-S1-REF.md`; `docs/PROGRAMS/CIP.md`.
- VERSION bumped to `2.0.0-dev`.

Analysis engine, indicators, main Dashboard, Analysis PDF pipeline,
Pilot, Scientific Validation and Knowledge modules are unchanged.
Reasoning data lives in an isolated storage key
(`gsos.reasoning.traces.v1`). TD-001/002/003 remain paused.

## [1.3.0-dev] — Branch `GSOS-Observer-V1.3-DEV`

Development branch opened 2026-07-02 after v1.2.0 was certified
Production Ready and frozen as the official Stable Release. See
`docs/RELEASES.md`, `docs/BRANCHING.md`, and
`docs/branches/V1.3-DEV.md`.

Scope: TD-001 (Auth), TD-002 (Telemetry), TD-003 (Searchable Arabic
PDF), plus maintainability work on `dashboard.tsx` and PDF pipeline.
No new features, no new indicators, no analysis-engine changes.

### Sprint S2 — Knowledge Extraction Engine (added 2026-07-05)

TD-001/002/003 remain paused. This sprint adds an isolated, read-only
Knowledge Extraction Engine (GKE) that turns existing project
artefacts into structured, versioned, publishable documents.

- New domain module `src/lib/knowledge/` (types, DI repository,
  extractors for indicators/rules/pilot/scientific/docs, engine,
  six-document generator, isolated jsPDF exporter, service).
- Raw project docs (CHANGELOG, ROADMAP, TECH_DEBT, ADRs, sprints)
  loaded at build time via Vite `?raw` imports — no runtime fetch.
- New route `/knowledge` — Knowledge Center: versions list, six-tab
  document viewer (Methodology / Architecture / Research Notes /
  Decision Rules / Knowledge Book / Evolution Report), full-text
  search over the selected version, per-document PDF export.
- Version IDs `K-<appVersion>.<sprintCode>.<seq>`; append-only history.
- Full EN / FR / AR translations (additive `kc.*` keys only).
- 3 new unit test files (engine, generator, service).
- ADR-0006; `docs/sprints/V1.3-S2-GKE.md`.

Analysis engine, indicators, main Dashboard, Analysis PDF pipeline,
Pilot and Scientific Validation modules are unchanged. Knowledge data
lives in an isolated storage key (`gsos.knowledge.versions.v1`).


### Sprint S1 — Scientific Validation Framework (added 2026-07-04)

TD-001/002/003 remain paused. This sprint adds an isolated Scientific
Validation module to produce reproducible evidence of GSOS accuracy vs.
expert ground truth.

- New domain module `src/lib/scientific/` (types, deterministic match
  formula, LocalStorage repository, DI hook, aggregation service) —
  mirrors the analysis/pilot repository shape.
- New route `/scientific` with New-Experiment form, aggregate KPIs
  (success rate, average match rate, distributions, performance over
  time), and recent experiments table.
- Scientific Validation Report PDF export — 6 sections (Executive
  summary, Statistical results, Strengths, Weaknesses, Recommendations,
  Improvement plan).
- Full EN / FR / AR translations (additive `sv.*` keys only).
- 7 new unit tests (37 total green).
- ADR-0005; `docs/sprints/V1.3-S1-SVF.md`.

Analysis engine, indicators, main Dashboard, Analysis PDF pipeline, and
Pilot module are unchanged. Scientific data lives in an isolated storage
key (`gsos.scientific.experiments.v1`).

### Sprint S0 — Pilot Validation Program (added 2026-07-03)

TD-001/002/003 are paused. This sprint adds an isolated Pilot Mode to
gather field evidence before resuming technical-debt work.

- New domain module `src/lib/pilot/` (types, LocalStorage repository,
  service with aggregation, mode flag helpers) — mirrors the analysis
  repository shape and can be swapped provider-side later.
- `PilotToggle` in the dashboard header (localStorage-backed).
- `PilotFeedbackForm` rendered under the Analysis panel when Pilot Mode
  is ON — accuracy 1–5, usefulness 1–5, notes, suggestions; EN/FR/AR + RTL.
- `/pilot` route: totals, averages, status/language distribution, top
  keywords, recent sessions table.
- Pilot Validation Report PDF export.
- 11 new unit tests (30 total green).
- ADR-0004; `docs/sprints/V1.3-S0-PILOT.md`.

Analysis engine, indicators, existing i18n keys, and the analysis PDF
pipeline are unchanged. Analysis records are never mutated by pilot
feedback — pilot data lives in independent storage keys
(`gsos.pilot.sessions.v1`, `gsos.pilot.feedback.v1`,
`gsos.pilot.enabled`).

## [1.2.0] — 2026-06-30 — Sprint 3 Extension: AI Writing Assistant — 🔒 FROZEN STABLE RELEASE


### Added
- AI Review button in the Analysis panel toolbar.
- `src/lib/ai-review.functions.ts` server function calling Lovable AI Gateway
  (`google/gemini-3-flash-preview`) with strict JSON response format.
- `AIReviewDialog` showing per-suggestion diff (original vs suggested),
  type tags (spelling, grammar, style, clarity, duplication, readability),
  Writing Quality score, and Readability score/label.
- Accept all / Accept selected / Reject all actions for suggestions.
- "Export corrected PDF" action that produces a new searchable PDF with
  the `-AI` filename suffix, applying only accepted suggestions.
- Full EN / FR / AR translations for the AI assistant UI.
- Governance assets: `VERSION`, `CHANGELOG.md`, `docs/adr/`,
  `docs/TECH_DEBT.md`, `docs/TEST_REPORT.md`, `docs/ROADMAP.md`.

### Changed
- `handleExportPdfText` now accepts an optional `overrides` map keyed by
  section id (`exec_recommended_action`, `indicator_<key>`, `global_status`)
  to support the corrected export path. Default behavior unchanged.

### Fixed
- None.

### Removed
- None.

### Security / Safety
- AI prompt explicitly forbids changing numerical values, indicator names,
  Report ID, dates, and Global Status. Overrides only apply to narrative
  text sections.

## [1.1.0] — Sprint 2: International Reporting System
### Added
- Report identity block (Version, Report ID, Generation Date, Language).
- Executive Summary (Overall Risk Level, Critical/Stable counts, Recommended Action).
- PDF metadata embedding (title, subject, author, keywords, language).
- Standardized filename `GSOS-Observer-{STATUS}-YYYY-MM-DD-HH-MM.pdf`.
- Report preview modal.
- Searchable text-based PDF export (image fallback for Arabic).
- Progress bar + ARIA support during exports.

### Changed
- Full i18n coverage for EN / FR / AR with RTL.

## [1.0.0] — Sprint 1: UI Foundation
### Added
- Login page with localStorage-backed auth.
- Dashboard with three indicators (Reality Gap, Trust, Response Delay).
- Color-coded status (green / yellow / red) and Global Status (Stable / Monitor / Risk).
- Analyse button with explanations panel.
- Standardized `GsosCard` component and design tokens.
- Responsive grid, hover animations, loading skeletons, ARIA labels.
- EN / FR / AR language switcher with RTL support.
