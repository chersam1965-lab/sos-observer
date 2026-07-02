# Branching Strategy

Effective 2026-07-02, following certification of v1.2.0 as Production Ready.

## Branches

| Branch | Role | Version line | Merge policy |
| ------ | ---- | ------------ | ------------ |
| `main` | Stable Release (frozen at v1.2.0) | 1.2.x | Critical bug fixes only |
| `GSOS-Observer-V1.3-DEV` | Active development | 1.3.0-dev | All new work lands here |

## Rules

1. **All new work happens on `GSOS-Observer-V1.3-DEV`.** No exceptions.
2. **`main` is frozen.** Only patches meeting the criteria in
   `docs/RELEASES.md` may be committed. Each stable patch is tagged
   `v1.2.x` and appended to `CHANGELOG.md` under a `[1.2.x]` heading.
3. **Every critical fix on `main` is cherry-picked into the dev branch**
   in the same PR cycle to prevent drift.
4. **Version bumps on the dev branch** stay on the `1.3.0-dev` line
   until the release checklist for 1.3.0 is complete.
5. **Sprint discipline** — every sprint on the dev branch produces:
   - Before: Sprint Plan, Expected Deliverables, Risk Assessment
     (`docs/sprints/<sprint>-plan.md`).
   - After: QA Report, Test Report, CHANGELOG update, Tech Debt update
     (`docs/sprints/<sprint>-qa.md`, `docs/TEST_REPORT.md`,
     `CHANGELOG.md`, `docs/TECH_DEBT.md`).

## Note on tooling

Lovable manages Git state internally. "Branch" here is a governance
concept enforced by review and documentation, not a manual `git`
operation performed inside the sandbox.
