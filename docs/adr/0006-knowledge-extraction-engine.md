# ADR-0006 — Knowledge Extraction Engine (GKE)

**Status:** Accepted (2026-07-05)
**Context:** V1.3-DEV, Sprint S2.

## Decision

Introduce an **independent, read-only** Knowledge Extraction Engine
that turns knowledge already present inside GSOS Observer (indicators,
decision rules, ADRs, CHANGELOG, ROADMAP, Pilot + Scientific
aggregates, sprint records) into a structured, versioned, publishable
body of documents. GKE never mutates Analysis, Pilot, or Scientific
data.

## Rationale

To be recognized by universities, research centers, and innovation
juries, GSOS Observer needs an official, reproducible knowledge base
that always stays in sync with the code. Manual documentation drifts.
An automatic extractor guarantees synchronization by construction.

## Design

- New domain layer `src/lib/knowledge/` (types, DI repository,
  extractors, engine, generator, PDF, service) mirroring the shape of
  `analysis/`, `pilot/`, `scientific/`.
- Storage key: `gsos.knowledge.versions.v1` — additive only, older
  versions are never deleted.
- Raw project docs (CHANGELOG, ROADMAP, TECH_DEBT, ADRs, sprints) are
  loaded at build time via Vite `?raw` imports; nothing hits the
  network at runtime.
- Version ID scheme: `K-<appVersion>.<sprintCode>.<seq>` — `seq`
  auto-increments per sprint code.
- Six generated documents per version: Methodology, Architecture,
  Research Notes, Decision Rules, Knowledge Book, Evolution Report.
  Each document carries **Version**, **Creation date**, **Sprint
  code**, **Sources used**, and **Extracted components**.
- New route `/knowledge` — Knowledge Center: version list, six-tab
  document viewer, full-text search over the selected version, PDF
  export per document. Auth-gated like `/scientific`.

## Consequences

- +1 new domain module ready to be swapped to a server-side repository
  or CI-driven extraction later.
- +1 new route (`/knowledge`), reachable by direct URL.
- No behavior change to Analysis engine, indicators, main dashboard,
  Analysis PDF pipeline, Pilot, or Scientific Validation modules.
- Knowledge storage is isolated — clearing any other domain leaves
  knowledge intact, and vice versa.
- Future CI hook can call `KnowledgeService.extract()` at Release
  time; V1.3-S2 ships the manual button only.
