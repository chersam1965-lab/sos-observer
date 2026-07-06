# ADR-0007 — Reasoning Engine Foundation

- **Status:** Accepted
- **Date:** 2026-07-06
- **Sprint:** V2.0-S1-REF (Core Intelligence Program — Phase II)
- **Supersedes:** —
- **Related:** ADR-0005 (Scientific Validation Framework), ADR-0006 (Knowledge Extraction Engine)

## Context

After successfully closing Production Readiness (V1.2), Pilot Validation
(V1.3-S0), Scientific Validation (V1.3-S1) and the Knowledge Extraction
Engine (V1.3-S2), GSOS Observer opens Phase II — the **Core Intelligence
Program (CIP)**. CIP is executed as seven sequential sprints; nothing
outside the current sprint may be modified, and each sprint must close
with an Acceptance Report and a signed Sprint Certificate before the
next begins.

Sprint V2.0-S1 (REF) delivers the *foundation* of GSOS reasoning: a
deterministic, testable, rule-based layer capable of turning an
Analysis snapshot into an auditable reasoning trace. No AI, no
probabilistic model, no learning. This ADR pins the decision.

## Decision

Introduce an isolated module `src/lib/reasoning/` implementing a pure
reasoning engine and an auth-gated `/reasoning` route (Reasoning
Console) as a UI shell.

### Contracts

- `ReasoningInput` — timestamp + three indicator values (0..100) +
  `overallRiskLevel` + optional context. The engine **never** calls
  `Date.now()` or `Math.random()`.
- `Rule` — `{ when(premises) → boolean, then(premises) → Inference }`,
  pure and deterministic.
- `ReasoningTrace` — premises + fired rules + inferences +
  `ReasoningConclusion { status, rationale, confidence, score }`.
- Storage key: `gsos.reasoning.traces.v1`. Append-only.
- Trace id: `R-<appVersion>.<sprintCode>.<seq>-<compactTimestamp>`.

### Aggregation formula

```
score      = Σ(weight of fired rules)
           + 4 if overallRiskLevel == 'risk'
           + 1 if overallRiskLevel == 'monitor'

status     = 'risk'    when score ≥ 5
           = 'monitor' when score ≥ 2
           = 'stable'  otherwise

confidence = min(0.95, 0.5 + 0.05 × |fired|)
```

### Threshold bands (mirrored, not imported)

To keep the module isolated from `src/lib/indicators.ts` and
`src/lib/analysis/*`, the seed rules re-declare the reference bands
locally:

- 0..39   → stable (green)
- 40..69  → monitor (yellow)
- 70..100 → risk (red)
- Trust is inverted: high trust is good.

Any future change to the analysis thresholds requires a follow-up ADR
and a sync of the seed rules.

## Consequences

- Reasoning is fully auditable and reproducible.
- No coupling: the analysis engine, indicators, Dashboard, PDF
  pipeline, Pilot, Scientific Validation and Knowledge modules remain
  byte-behavior-identical.
- Trace persistence is client-side only in S1; server-side persistence
  is queued.
- TD-001/002/003 remain paused behind full CIP completion.

## Alternatives considered

1. **LLM-based reasoning right away** — rejected: not auditable, not
   deterministic, would violate CIP sprint isolation.
2. **Extend the Analysis engine directly** — rejected: violates the
   guardrail that Analysis stays untouched.
3. **Share thresholds via import from `indicators.ts`** — rejected:
   creates a hard coupling; the mirrored-band approach with an ADR
   sync obligation preserves isolation.
