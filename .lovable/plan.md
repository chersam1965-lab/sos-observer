# Sprint Plan — V2.0-S1 Reasoning Engine Foundation

**Program:** Phase II — Core Intelligence Program (CIP)
**Branch:** `GSOS-Observer-V1.3-DEV` (opens V2.0 track)
**Sprint code:** `V2.0-S1-REF`
**Status:** Awaiting approval before implementation
**Precedence:** First sprint of CIP. Must close with green tests, Acceptance Report and Sprint Certificate before V2.0-S2 begins.

## 1. Objective

Lay the foundation of the GSOS Reasoning Engine: an isolated, deterministic module that takes an *analysis snapshot* (indicators + rule outputs already produced by the existing engine) and produces a structured **reasoning trace** — a chain of premises, applied rules, intermediate inferences, and a final justified conclusion.

This sprint delivers the *skeleton and contracts* of reasoning, not new user-facing intelligence. No AI calls, no probabilistic models — pure rule-based, testable logic.

## 2. Guardrails (non-negotiable)

- No change to `src/lib/indicators.ts`, `src/lib/analysis/*`, main Dashboard, PDF pipeline.
- No change to `src/lib/pilot/*`, `src/lib/scientific/*`, `src/lib/knowledge/*`.
- No change to existing i18n keys (only ADD new `re.*` keys for the Reasoning UI shell).
- Reasoning Engine is **read-only** with respect to Analysis/Pilot/Scientific/Knowledge repositories.
- Storage lives in its own namespace `gsos.reasoning.traces.v1`, isolated from all other stores.
- No network, no server functions, no external deps beyond what is already installed.

## 3. Deliverables

### 3.1 Isolated Reasoning module
```
src/lib/reasoning/
  types.ts                 // Premise, Rule, Inference, ReasoningTrace, ReasoningInput
  rules/
    index.ts               // registerRule / getRules
    baseRules.ts           // 6-8 seed rules derived from existing decision thresholds (read-only mirror)
  engine.ts                // pure function: reason(input) -> ReasoningTrace
  explain.ts               // renders a ReasoningTrace into human-readable steps
  repository.ts            // DI hook (mirrors analysis/pilot/scientific/knowledge)
  localStorageRepository.ts
  service.ts               // run/list/get/clear
  index.ts
  __tests__/
    engine.test.ts
    rules.test.ts
    service.test.ts
    explain.test.ts
```

### 3.2 Data model

- `Premise` — `{ id, kind: 'indicator'|'context'|'fact', key, value, sourcePath }`
- `Rule` — `{ id, name, when(premises): boolean, then(premises): Inference, weight, category }`
- `Inference` — `{ id, ruleId, statement, confidence: 0..1, evidence: Premise[] }`
- `ReasoningTrace` — `{ traceId, createdAt, sprintCode, appVersion, input, premises[], firedRules[], inferences[], conclusion: { status, rationale, confidence } }`
- Storage key: `gsos.reasoning.traces.v1`. Append-only; older traces preserved.

### 3.3 Engine behavior

- Pure, deterministic (given the same input → same trace).
- Evaluates every registered rule against premises, records fired rules in order.
- Aggregates inferences into a single conclusion via a documented, deterministic scoring formula (weighted sum → thresholded status). Formula lives in `engine.ts` and is fully unit-tested.
- Never mutates its input.

### 3.4 Reasoning Console (UI shell only)

New route `src/routes/reasoning.tsx` (auth-gated, isolated):
- List of stored traces (newest first).
- Detail view: premises → fired rules → inferences → conclusion, rendered by `explain.ts`.
- "Run reasoning" button that consumes the latest Analysis snapshot via the existing `AnalysisService` read API and produces a new trace.
- "Clear traces" action. No editing, no PDF export in this sprint.
- Fully localized in EN / FR / AR with RTL, using new `re.*` keys only.

### 3.5 Governance artifacts

- `docs/sprints/V2.0-S1-REF.md` — sprint plan + acceptance checklist + Sprint Certificate section.
- `docs/adr/0007-reasoning-engine-foundation.md` — decision, scope, formula.
- `docs/PROGRAMS/CIP.md` — CIP index listing the 7 sprints with status.
- `docs/TECH_DEBT.md` — note that TD-001/002/003 remain queued behind CIP.
- `CHANGELOG.md` `[Unreleased]` — Added Reasoning Engine Foundation entries.
- `VERSION` bumped to `2.0.0-dev` on sprint open (documented in ADR-0007).

## 4. Technical notes

```text
src/lib/reasoning/…       (new isolated domain, DI-shaped, mirrors knowledge/)
src/routes/reasoning.tsx  (new, auth-gated)
```

- The engine reads *snapshots* of analysis results via the existing service API only; it never imports `src/lib/analysis` internals or `indicators.ts` logic. Thresholds used by seed rules are re-declared locally in `rules/baseRules.ts` and cross-referenced in ADR-0007 to avoid runtime coupling.
- Trace persistence uses the same repository pattern as `knowledge/` and `scientific/` to keep testing conventions uniform.
- No dependency additions.

## 5. Acceptance criteria

1. Analysis engine, indicators, Dashboard, PDF pipeline, Pilot, Scientific Validation and Knowledge Extraction modules are byte-behavior-identical (diff review).
2. `reason(input)` is pure and deterministic — verified by property-style tests (same input → identical trace including ordering).
3. Storage isolation: clearing reasoning traces does not affect any other module and vice versa.
4. `/reasoning` renders the trace list, run action, and detail view in EN / FR / AR (RTL for AR).
5. New unit tests cover: engine determinism, each seed rule, conclusion aggregation edge cases, service append/list/clear, and `explain.ts` output shape. All prior tests remain green.
6. `docs/sprints/V2.0-S1-REF.md` includes a completed acceptance checklist AND a signed Sprint Certificate section before sprint closure.
7. No file outside the sprint scope is modified except: `src/lib/i18n.tsx` (additive `re.*` keys), `src/routeTree.gen.ts` (auto), `CHANGELOG.md`, `docs/TECH_DEBT.md`, `VERSION`.

## 6. Out of scope

- AI/LLM-based reasoning, probabilistic models, learning from traces.
- Editing rules from the UI, rule authoring UX.
- PDF export of reasoning traces (queued for V2.0-S2+).
- Any change to scoring thresholds of the Analysis engine.
- TD-001 / TD-002 / TD-003 — remain queued behind full CIP completion.

## 7. Risk assessment

| Risk | Likelihood | Impact | Mitigation |
| ---- | ---------- | ------ | ---------- |
| Accidental coupling to Analysis engine internals | Low | High | Read-only via service API; ADR-0007 forbids internal imports |
| Rule duplication drift with real thresholds | Medium | Medium | Seed rules mirror documented thresholds; ADR cross-references; tests pin values |
| Trace storage growth | Low | Low | Append-only + "Clear traces" action documented |
| Non-determinism from Date/Random | Low | High | Engine receives timestamps as input; no `Date.now()`/`Math.random()` inside `reason()` |
| Scope creep into V2.0-S2 (Knowledge Graph) | Medium | Medium | Strict deliverables list; PR-level review against this plan |

## 8. Sprint closure protocol (per CIP mandate)

Sprint V2.0-S1 is considered closed **only when all** of the following are true:
1. All new + existing tests pass.
2. `docs/sprints/V2.0-S1-REF.md` Acceptance Report section is filled and green.
3. Sprint Certificate section of the same file is signed (version, date, sprint code, hash of changed files list).
4. This plan is archived as the sprint's plan-of-record.

Only after closure may Sprint V2.0-S2 begin.
