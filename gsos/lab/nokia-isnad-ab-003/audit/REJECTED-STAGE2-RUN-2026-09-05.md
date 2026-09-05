# GSOS-LAB-NOKIA-003 — Rejected Stage 2 Run

Date: 2026-09-05

Status: REJECTED-BEFORE-ARCHIVE

Reason 1:
The previous Stage 2 execution generated both A/B predictions and the
historical truth in the same automated script. This violates the intended
blind historical separation.

Reason 2:
The previous execution therefore cannot be treated as independent evidence
for the A/B comparison.

Reason 3:
The previous execution stopped before final Git staging because an undefined
shell variable (EXP_ONLY) was referenced.

Scientific decision:
The generated predictions, freeze records, truth file, scoring result,
final audit, closure, and manifest from that run must not be promoted to
the valid experiment record.

Recovery action:
Return the experiment to preregistered state with empty A/B prediction
files and no truth file. A new prediction-generation procedure must be
performed independently from the future-truth reveal.

This record preserves the failed attempt for audit transparency.
