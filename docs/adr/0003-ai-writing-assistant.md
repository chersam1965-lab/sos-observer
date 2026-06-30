# ADR-0003 — Lovable AI Gateway for the AI Writing Assistant

- **Status:** Accepted
- **Date:** Sprint 3 Extension (v1.2.0)

## Context
Sprint 3 Extension introduces an optional proofreading assistant that
must improve language quality without altering analytical content
(numerical values, indicator names, Report ID, dates, Global Status).
The assistant must support EN, FR, and AR with full RTL.

## Decision
Use the Lovable AI Gateway with the `google/gemini-3-flash-preview`
model, invoked from a TanStack `createServerFn` handler
(`src/lib/ai-review.functions.ts`). The model receives a strict system
prompt and the report's narrative sections as a structured payload, and
returns JSON containing suggestions, a Writing Quality score, a
Readability score, and a Readability label.

The UI applies only **accepted** suggestions, and only against narrative
sections (recommended action, indicator explanations, global status
explanation). Numbers, IDs, dates, and indicator names are never sent
as editable text.

## Reason
- The AI Gateway exposes a unified, billed surface with `LOVABLE_API_KEY`
  managed by Lovable — no third-party account, no client-visible key.
- Gemini 3 Flash Preview is the default chat/text model and handles all
  three project languages, including Arabic, well.
- A server function keeps the API key and the system prompt out of the
  client bundle and gives us a single place to enforce input validation
  and JSON normalization.

## Alternatives
- **Direct OpenAI/Anthropic API call** — would require a user-managed
  API key and bypass billing limits configured in the Lovable workspace.
- **Local LLM via WebGPU** — current models small enough to run
  in-browser do not reach acceptable Arabic and French quality.
- **No structured JSON (free-form text)** — would force fragile text
  parsing on the client and lose per-suggestion accept/reject control.

## Impact
- Adds a runtime dependency on Lovable AI credits; surfaced as a clear
  error on 402/429 responses.
- The corrected PDF reuses the existing searchable export pipeline by
  accepting an `overrides` map keyed by section id. The original report
  remains unchanged until the user explicitly accepts suggestions.
- Future Sprint 5 ("AI Writing Assistant — full integration") will
  extend overrides to live preview rendering (tracked as TD-005).
