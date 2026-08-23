# GSOS Evidence Policy

## Purpose

This document defines the rules used by GSOS historical timeline generation.

## Evidence hierarchy

1. Explicit timestamps contained in source content are preserved as CONTENT_TIMESTAMP evidence.
2. Git commit timestamps are repository historical evidence.
3. Filesystem modification timestamps are FILE_METADATA evidence.
4. SHA-256 identifies the exact content state observed during archive generation.
5. A filename alone is not considered historical proof.
6. A timestamp alone is not considered provenance.
7. Missing ChatGPT or Lovable history is not reconstructed.
8. No historical event is invented from inference.
9. Original technical sources are not modified by this phase.
10. Archive and timeline files are derived documentation.

## Important distinction

The archive records what evidence exists.

It does not claim that filesystem metadata represents the original creation date of the underlying event.

## Phase 4 status

Historical evidence collection and deterministic timeline generation are complete when the generated files exist and their SHA-256 values can be calculated.
