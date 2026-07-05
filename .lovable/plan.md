
# Sprint Plan — Knowledge Extraction Engine (GKE)

**Branch:** `GSOS-Observer-V1.3-DEV`
**Sprint code:** `V1.3-S2-GKE`
**Status:** Awaiting approval before implementation
**Precedence:** Runs AFTER SVF (V1.3-S1), BEFORE TD-001 / TD-002 / TD-003.

## 1. Objective

Turn the knowledge already present inside GSOS Observer (indicators,
decision rules, ADRs, CHANGELOG, ROADMAP, Pilot results, Scientific
Validation results, sprint records) into a structured, versioned,
publishable body of scientific knowledge — automatically, without
altering any product behavior.

The engine is the foundation of **GSOS Scientific Methodology V1.0**
and becomes the official reference for the project.

## 2. Guardrails (non-negotiable)

- No change to `src/lib/indicators.ts` or `src/lib/analysis/*`.
- No change to the main Dashboard or the existing PDF report pipeline.
- No change to `src/lib/pilot/*` or `src/lib/scientific/*`.
- No change to existing i18n keys (only ADD new `kc.*` keys for the
  Knowledge Center UI).
- GKE runs in read-only mode against Analysis / Pilot / Scientific
  repositories — it never mutates their data.
- GKE storage uses its own namespace, isolated from all other stores.

## 3. Deliverables

### 3.1 Independent Knowledge Extraction Engine
```
src/lib/knowledge/
  types.ts                 // KnowledgeItem, KnowledgeVersion, Document, Source
  repository.ts            // DI hook (mirrors analysis/pilot/scientific)
  localStorageRepository.ts
  extractors/
    indicatorsExtractor.ts // reads src/lib/indicators.ts constants (read-only)
    rulesExtractor.ts      // reads decision thresholds from analysis types
    pilotExtractor.ts      // reads Pilot aggregates via PilotService
    scientificExtractor.ts // reads SVF aggregates via ScientificService
    docsExtractor.ts       // parses ADRs, CHANGELOG, ROADMAP text bundled at build time
  engine.ts                // orchestrates extractors → KnowledgeVersion
  generator.ts             // renders the 6 documents from a KnowledgeVersion
  service.ts               // extract/version/list/get/export
  __tests__/
    engine.test.ts
    generator.test.ts
    service.test.ts
```

### 3.2 Knowledge Repository (data model)

The repository stores **KnowledgeVersion** snapshots, each containing
categorized **KnowledgeItem**s:

- Categories: `concept | principle | rule | decision | indicator |
  experiment | evidence | reference`.
- Each item: `id`, `category`, `title`, `body`, `sourcePath`,
  `sprintCode`, `extractedAt`.
- Each version: `versionId` (semver-ish, e.g. `K-1.3.S2.0`),
  `createdAt`, `sprintCode`, `sources[]` (paths/aggregates snapshot),
  `items[]`, `generatedDocuments[]`.

Storage key: `gsos.knowledge.versions.v1`. Additive only — older
versions are never deleted; a new extraction creates a new version.

### 3.3 Automatic Documentation Generator

For every extraction the generator produces six static Markdown-style
documents (rendered as HTML/PDF client-side, no AI):

1. **GSOS Scientific Methodology** — indicators, rules, protocol.
2. **GSOS Technical Architecture** — module map from ADRs.
3. **GSOS Research Notes** — Pilot + Scientific aggregates.
4. **GSOS Decision Rules** — thresholds and status mapping.
5. **GSOS Knowledge Book** — full concatenation of all knowledge items.
6. **GSOS Evolution Report** — CHANGELOG + sprint history + diff of
   knowledge items vs. the previous version.

Each document header carries: **Version**, **Creation date**, **Sprint
code**, **Sources used**, **Extracted components**.

### 3.4 Knowledge Center page

New route `src/routes/knowledge.tsx`:
- Lists all knowledge versions (newest first) with sprint code + date.
- Version detail: 6 generated documents (tabs), full-text search across
  the current version, and a source panel showing which files/aggregates
  fed each document.
- "Extract now" button (manual trigger for the current sprint code).
- "Export to PDF" per document, using the existing jsPDF-based pipeline
  helper style (client-side, isolated file).
- Filename pattern:
  `GSOS-<DocName>-<VersionId>-YYYY-MM-DD.pdf`.

### 3.5 Versioning workflow

- `extract()` reads all sources, builds a `KnowledgeVersion`, and
  appends it to storage without touching prior versions.
- Version IDs follow `K-<appVersion>.<sprintCode>.<seq>`, where `seq`
  auto-increments per sprint code.
- A future CI hook (documented, not implemented here) can call
  `extract()` at Release time; for V1.3-S2 the manual button in the
  Knowledge Center is sufficient.

### 3.6 i18n

Add `kc.*` keys in EN / FR / AR (with RTL) for the Knowledge Center
UI only. Document bodies are generated in the current UI language when
strings are localizable; source-derived content (ADR text, CHANGELOG)
remains verbatim in its original language.

### 3.7 Governance artifacts

- `docs/sprints/V1.3-S2-GKE.md` — this sprint's plan + acceptance log.
- `docs/adr/0006-knowledge-extraction-engine.md` — decision & scope.
- `docs/TECH_DEBT.md` — note GKE inserted before TD-001/002/003.
- `CHANGELOG.md` `[Unreleased]` — Added GKE entries.

## 4. Technical notes

```text
src/lib/knowledge/…            (new domain, DI-shaped)
src/routes/knowledge.tsx       (new)
src/components/
  KnowledgeVersionList.tsx
  KnowledgeDocumentView.tsx
  KnowledgeSearch.tsx
```

- Extractors are pure functions taking already-imported values (for
  indicators/rules) or repository handles (for Pilot/SVF). Text sources
  (ADR / CHANGELOG / ROADMAP) are imported as raw strings via Vite's
  `?raw` suffix so nothing hits the network at runtime.
- Generator produces plain structured objects; PDF rendering reuses the
  jsPDF approach already in use for the Scientific Validation report,
  but in an isolated `src/lib/knowledge/pdf.ts` file — no import from
  the existing dashboard PDF module.
- Search is client-side, case-insensitive substring across item
  `title` + `body` within the selected version.

## 5. Acceptance criteria

1. Analysis engine, indicators, main Dashboard, PDF pipeline, Pilot,
   and Scientific Validation modules are byte-behavior-identical
   (verified by diff review).
2. Running an extraction produces a new `KnowledgeVersion` with items
   in every applicable category and six generated documents; storage
   retains all prior versions.
3. `/knowledge` renders the version list, per-document tabs, search,
   and PDF export in EN / FR / AR (RTL for Arabic).
4. Knowledge storage is isolated — clearing Analysis, Pilot, or
   Scientific storage does not affect knowledge versions and vice versa.
5. Unit tests cover: extractor outputs, versioning append-only
   behavior, generator document shape, and service aggregation. All
   previous tests remain green.
6. `docs/sprints/V1.3-S2-GKE.md` acceptance checklist filled before
   sprint closure.

## 6. Out of scope

- Server-side persistence or CI-driven auto-extraction (localStorage +
  manual trigger only in S2).
- AI-generated summaries or rewrites (engine is deterministic).
- Editing/mutating extracted knowledge from the UI.
- Any change to scoring thresholds, indicators, or existing reports.
- TD-001 (Auth), TD-002 (Telemetry), TD-003 (Arabic searchable PDF) —
  remain queued.

## 7. Risk assessment

| Risk | Likelihood | Impact | Mitigation |
| ---- | ---------- | ------ | ---------- |
| Accidental coupling to Analysis engine | Low | High | Read-only imports; extractors return snapshots |
| localStorage quota with many versions | Medium | Medium | Documented "clear old versions" action; body text kept compact |
| Docs drift between source files and extracted view | Medium | Low | Every version stamps the exact source paths + hashes of raw text |
| Arabic PDF still raster (TD-003 open) | Certain | Low | Accept Latin fallback for AR export until TD-003 lands |
| Perceived overlap with SVF report | Low | Low | GKE Evolution Report cites SVF aggregates rather than replacing them |

## 8. Next after GKE closes

Resume the frozen queue in order: **TD-001 → TD-002 → TD-003**, each
with its own sprint plan and QA report per V1.3 governance.
