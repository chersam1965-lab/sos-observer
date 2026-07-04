# Sprint Plan — Scientific Validation Framework (SVF)

**Branch:** `GSOS-Observer-V1.3-DEV`
**Sprint code:** `V1.3-S1-SVF`
**Status:** Awaiting approval before implementation
**Precedence:** Runs AFTER PVP (V1.3-S0), BEFORE TD-001 / TD-002 / TD-003.

## 1. Objective

Prove scientifically that GSOS Observer results are accurate, measurable,
and reviewable — by building an **independent** Scientific Validation
module that captures controlled experiments, compares GSOS output vs.
ground truth, and produces a formal Scientific Validation Report suitable
for universities, research centers, and innovation juries.

No change to the analysis engine, indicators, dashboard, PDF pipeline, or
Pilot module.

## 2. Guardrails (non-negotiable)

- No change to `src/lib/indicators.ts` or `src/lib/analysis/*`.
- No change to the main Dashboard or the existing PDF report pipeline.
- No change to `src/lib/pilot/*` or the Pilot dashboard/report.
- No change to existing i18n keys (only ADD new `sv.*` keys).
- SVF data lives in its **own** localStorage namespace, isolated from
  Analysis and Pilot stores.

## 3. Deliverables

### 3.1 Independent Scientific Validation module
```
src/lib/scientific/
  types.ts              // Experiment, GroundTruth, Assessment, Aggregate
  repository.ts         // DI hook (mirrors analysis/pilot pattern)
  localStorageRepository.ts
  service.ts            // create/save/list/aggregate + match rate
  __tests__/
    localStorageRepository.test.ts
    service.test.ts
```

### 3.2 Scientific Validation Protocol (data model)
Each `Experiment` records:
- `experimentId` (UUID), `createdAt`, `language` (en|fr|ar)
- `objective` (short goal of the experiment)
- `caseType` (free label, e.g. Governance, Compliance, Security…)
- `caseDescription`
- `inputData` (structured notes of inputs fed to GSOS)
- `gsosResult` — `{ realityGap, trust, responseDelay, globalStatus, summary }`
  (captured as a snapshot; never mutates the source Analysis)
- `groundTruth` — `{ globalStatus, notes }` from the expert
- `matchRate` (0..100, computed) + `matchFlag` (match | partial | mismatch)
- `evaluatorNotes`

### 3.3 Scientific Validation Dashboard
New route `src/routes/scientific.tsx`:
- Totals: experiments, matches, partials, mismatches
- Overall success rate (%)
- Match distribution bar
- Language / case-type distributions
- Performance-over-time line (weekly bucketed success rate)
- Recent experiments table
- "New Experiment" dialog: form to create an experiment, optionally
  pre-filled from the latest Analysis snapshot (read-only) or entered
  manually. Never writes back to the Analysis repository.
- "Export Scientific Validation Report" button (PDF)

### 3.4 Scientific Validation Report (PDF)
Filename: `GSOS-Scientific-Validation-Report-YYYY-MM-DD-HH-MM.pdf`
Sections:
1. Executive summary of experiments
2. Statistical results (totals, success rate, distributions)
3. Strengths
4. Weaknesses
5. Recommendations
6. Improvement plan
Template is static and populated from aggregates (no AI, no engine calls).

### 3.5 Navigation
- Add a discreet nav entry to `/scientific` (always available; the module
  is opt-in by usage, no toggle needed).
- Route is standalone; it does not alter Dashboard or Pilot routes.

### 3.6 i18n
Add `sv.*` keys in EN / FR / AR with full RTL support. Existing
dictionaries remain untouched.

### 3.7 Governance artifacts
- `docs/sprints/V1.3-S1-SVF.md` — this sprint's plan + acceptance log.
- `docs/adr/0005-scientific-validation-framework.md` — decision & scope.
- `docs/TECH_DEBT.md` — note SVF is inserted before TD-001/002/003.
- `CHANGELOG.md` `[Unreleased]` — Added SVF entries.

## 4. Technical notes

```text
src/lib/scientific/…            (new domain, DI-shaped like analysis & pilot)
src/routes/scientific.tsx       (new)
src/components/
  ScientificExperimentForm.tsx
  ScientificStats.tsx
```

Storage keys: `gsos.scientific.experiments.v1`.
No shared writes with `gsos.analysis.*` or `gsos.pilot.*`.

Match rate computation (v1, deterministic, engine-free):
- +60 pts if `gsosResult.globalStatus === groundTruth.globalStatus`
- +40 pts scaled by inverse distance on the three indicators when
  ground-truth numeric fields are provided (optional); otherwise the
  40 pts are awarded proportionally to the status agreement only.
- `matchFlag`: `match` ≥ 80, `partial` 50–79, `mismatch` < 50.

## 5. Acceptance criteria

1. Analysis engine, indicators, Dashboard, PDF pipeline, and Pilot module
   are byte-behavior-identical (verified by diff review).
2. Creating / saving / listing / aggregating experiments works and is
   covered by unit tests; all previous tests remain green.
3. `/scientific` dashboard renders totals, success rate, distributions,
   performance-over-time, and recent experiments consistent with stored
   data.
4. Scientific Validation Report PDF exports successfully in EN / FR / AR
   (RTL for Arabic) with all six sections populated from aggregates.
5. SVF storage is isolated — clearing analysis or pilot storage does not
   affect scientific data and vice versa.
6. `docs/sprints/V1.3-S1-SVF.md` acceptance checklist filled before
   sprint closure.

## 6. Out of scope

- Server-side persistence (localStorage only in S1).
- Authentication / expert accounts (TD-001, still queued).
- Telemetry (TD-002), searchable Arabic PDF (TD-003) — still queued.
- Any change to scoring thresholds, indicators, or report layout of the
  main Analysis PDF.
- AI-generated recommendations (report is a static, aggregate-driven
  template).

## 7. Risk assessment

| Risk | Likelihood | Impact | Mitigation |
| ---- | ---------- | ------ | ---------- |
| Accidental coupling to Analysis engine | Low | High | Snapshot-only reads; no imports from `analysis/service` write paths |
| localStorage quota under heavy pilot+SVF use | Low | Medium | Separate namespace; documented clear action in dashboard |
| Arabic PDF still raster (TD-003 open) | Certain | Low | Accept Latin fallback for AR export; TD-003 will resolve later |
| Match-rate formula perceived as arbitrary | Medium | Medium | Document formula in ADR-0005; keep it deterministic and reviewable |

## 8. Next after SVF closes

Resume the frozen queue in order: **TD-001 → TD-002 → TD-003**, each
with its own sprint plan and QA report per V1.3 governance.
