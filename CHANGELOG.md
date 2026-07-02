# Changelog

All notable changes to GSOS Observer are documented in this file.
The project adheres to [Semantic Versioning](https://semver.org/) and
## [Unreleased] — 1.3.0-dev — Branch `GSOS-Observer-V1.3-DEV`

Development branch opened 2026-07-02 after v1.2.0 was certified
Production Ready and frozen as the official Stable Release. See
`docs/RELEASES.md`, `docs/BRANCHING.md`, and
`docs/branches/V1.3-DEV.md`.

Scope: TD-001 (Auth), TD-002 (Telemetry), TD-003 (Searchable Arabic
PDF), plus maintainability work on `dashboard.tsx` and PDF pipeline.
No new features, no new indicators, no analysis-engine changes.

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
