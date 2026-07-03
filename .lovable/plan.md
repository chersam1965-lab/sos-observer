# Sprint Plan — Pilot Validation Program (PVP)

**Branch:** `GSOS-Observer-V1.3-DEV`
**Sprint code:** `V1.3-S0-PILOT`
**Status:** Awaiting approval before implementation
**Precedence:** Runs BEFORE TD-001 / TD-002 / TD-003. Those remain queued and untouched.

## 1. Objective

Prove GSOS Observer's effectiveness in real usage by collecting evidence
(session logs + user feedback) from a controlled Pilot Mode — without
modifying the analysis engine, indicators, reporting pipeline, or i18n
layer.

## 2. Guardrails (non-negotiable)

- No change to `src/lib/indicators.ts` or `src/lib/analysis/*` engine logic.
- No change to PDF export pipeline or `AnalysisPanel` report content.
- No change to `src/lib/i18n.tsx` dictionaries beyond ADDING new Pilot keys.
- No new AI features. No dashboard redesign. No new indicators.
- Pilot data lives in a **separate** repository/storage namespace from
  the existing Analysis repository. The original analysis record is never
  mutated by Pilot feedback.

## 3. Deliverables

### 3.1 Pilot Mode (runtime toggle)
- New setting `pilotMode: boolean` persisted in localStorage
  (`gsos.pilot.enabled`).
- Toggle exposed in the Dashboard header (small switch, labelled, i18n).
- When ON: session logging + post-analysis feedback form are active.
- When OFF: behavior is identical to today's V1.2 dashboard.

### 3.2 Pilot Session Log
For every analysis run while Pilot Mode is ON, record:
- `sessionId` (UUID)
- `analysisId` (FK to existing Analysis entity — reference only, never edit)
- `reportId` (same identifier used in the exported PDF header)
- `timestamp` (ISO-8601)
- `language` (`en` | `fr` | `ar`)
- `indicators` (`realityGap`, `trust`, `responseDelay` — numeric snapshot)
- `globalStatus` (`stable` | `monitor` | `risk`)
- `appVersion` (from `VERSION`)

### 3.3 Feedback Form
Shown after each Pilot analysis, below the analysis panel:
- Q1 "Was the result accurate?" — 1–5 scale
- Q2 "Was the report useful?" — 1–5 scale
- Q3 Free-text notes (optional)
- Q4 Improvement suggestions (optional)
- Submit → stored as `PilotFeedback` linked to `sessionId`.
- Fully translated (EN / FR / AR) with RTL support.

### 3.4 Independent Pilot Repository
- `src/lib/pilot/types.ts` — `PilotSession`, `PilotFeedback`,
  `PilotRepository` interface.
- `src/lib/pilot/localStorageRepository.ts` —
  keys: `gsos.pilot.sessions.v1`, `gsos.pilot.feedback.v1`.
- `src/lib/pilot/repository.ts` — DI hook mirroring the analysis pattern.
- `src/lib/pilot/service.ts` — `PilotService.logSession`,
  `submitFeedback`, `listSessions`, `listFeedback`, `aggregate`.
- Unit tests mirroring the Analysis repository test coverage.

### 3.5 Pilot Dashboard
- New route `src/routes/pilot.tsx` (visible only when Pilot Mode is ON,
  otherwise the nav entry is hidden and the route redirects home).
- Displays:
  - Total session count
  - Average score (Q1, Q2, combined)
  - Global status distribution (Stable / Monitor / Risk) as bars
  - Top recurring keywords from notes (simple frequency, client-side)
  - Table of recent sessions with language, status, scores
- Fully i18n, responsive, uses `GsosCard` and existing tokens.

### 3.6 Pilot Validation Report
- Export button on Pilot Dashboard: generates a PDF summarizing the
  aggregate metrics + a textual recommendations section (static template
  for now, populated from aggregates — no AI).
- Filename: `GSOS-Pilot-Validation-Report-YYYY-MM-DD-HH-MM.pdf`.

### 3.7 Governance artifacts
- `docs/sprints/V1.3-S0-PILOT.md` — this sprint's plan + acceptance log.
- `docs/adr/0004-pilot-validation-program.md` — decision & scope.
- `docs/TECH_DEBT.md` — note that TD-001/002/003 are paused pending PVP.
- `CHANGELOG.md` `[Unreleased]` — Added Pilot Mode entries.

## 4. Technical notes

```text
src/lib/pilot/
  types.ts
  repository.ts
  localStorageRepository.ts
  service.ts
  __tests__/
    localStorageRepository.test.ts
    service.test.ts
src/routes/
  pilot.tsx                (new)
  dashboard.tsx            (minimal wiring only)
src/components/
  PilotToggle.tsx
  PilotFeedbackForm.tsx
```

Dashboard integration is limited to:
1. Reading `pilotMode` flag.
2. After `AnalysisService.recordCompleted(...)`, calling
   `PilotService.logSession(...)` with the returned analysis metadata.
3. Rendering `<PilotFeedbackForm sessionId=... />` under the analysis panel.

No existing component logic is refactored.

## 5. Acceptance criteria

1. With Pilot Mode OFF, the app is byte-behavior-identical to v1.2.0
   (no session logs written, no feedback UI, no new nav entry).
2. With Pilot Mode ON, every analysis produces exactly one PilotSession
   and allows exactly one PilotFeedback submission per session.
3. Pilot Dashboard aggregates match the underlying stored data.
4. Pilot Validation Report PDF exports successfully in EN/FR/AR with
   correct RTL for Arabic.
5. Analysis engine, indicators, i18n dictionaries (existing keys), and
   PDF report pipeline are unmodified — verified by diff review.
6. All new unit tests pass; existing 19 tests remain green.
7. `docs/sprints/V1.3-S0-PILOT.md` includes a QA checklist filled in
   before sprint closure.

## 6. Out of scope

- Server-side persistence of pilot data (localStorage only for S0).
- Authentication / user identity (TD-001, still queued).
- Telemetry backend (TD-002, still queued).
- Arabic searchable PDF (TD-003, still queued).
- Any change to scoring thresholds or report layout.

## 7. Next after PVP closes

Resume the frozen queue in order: **TD-001 → TD-002 → TD-003**, each
with its own sprint plan and QA report as per V1.3 governance.
