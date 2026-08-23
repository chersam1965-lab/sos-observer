# GSOS — INDEPENDENT REVIEW TEST MATRIX

Document-ID: GSOS-TEST-MATRIX-001
Revision: 1.0
Created: 2026-08-12T20:49:42+01:00

| ID | Test | Expected |
|---|---|---|
| T01 | Charter exists | PASS |
| T02 | Protocol exists | PASS |
| T03 | Required fields present | PASS |
| T04 | Genesis valid | PASS |
| T05 | Lineage valid | PASS |
| T06 | SHA-256 format valid | PASS |
| T07 | Addition detected | PASS |
| T08 | Deletion detected | PASS |
| T09 | Corruption detected | PASS |
| T10 | Invalid lineage rejected | PASS |
| T11 | Engine not required for validation | PASS |
| T12 | Historical event preserved | PASS |
| T13 | Historical limitation explicitly documented | PASS |
| T14 | Current repository state identifiable | PASS |
| T15 | Closure fingerprint generated | PASS |

## Mutation-testing rule

Mutation tests MUST operate on a disposable TEST COPY.

The production archive MUST NOT be altered merely to prove that a validator
can detect alteration.

## Critical failure

Any of the following is critical:

- silent acceptance of corrupted provenance;
- inability to detect deletion of a required record;
- invalid lineage accepted as valid;
- validator executes protected historical engine;
- closure claims success while a mandatory test fails.

