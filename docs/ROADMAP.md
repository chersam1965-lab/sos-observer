# GSOS Observer — Official Roadmap

| Sprint | Theme | Status | Version |
| ------ | ----- | ------ | ------- |
| Sprint 1 | UI Foundation | ✅ Completed | 1.0.0 |
| Sprint 2 | Reporting Engine | ✅ Completed | 1.1.0 |
| Sprint 3 Ext. | AI Writing Assistant | ✅ Completed | 1.2.0 (🔒 Stable) |
| **V1.3-DEV** | **Tech Debt: Auth + Telemetry + Arabic PDF** | 🚧 **Active** | **1.3.0-dev** |
| Sprint 3 | History & Archive | ⏳ Planned | 1.4.0 |
| Sprint 4 | Administration | ⏳ Planned | 1.5.0 |
| Sprint 5 | AI Writing Assistant (full integration) | ⏳ Planned | 1.6.0 |
| Sprint 6 | Predictive Intelligence | ⏳ Planned | 1.7.0 |

## Branch model
- `main` — frozen at v1.2.0; critical bug fixes only (see `docs/RELEASES.md`).
- `GSOS-Observer-V1.3-DEV` — all active development (see `docs/branches/V1.3-DEV.md`).

## Governance principles
- Completed modules are not redesigned. Each sprint may only improve
  maintainability, documentation, and future scalability of prior modules.
- Every sprint ends with a version bump, a CHANGELOG entry, an updated
  test report, and (when relevant) one or more ADRs.
- Technical debt is captured in `docs/TECH_DEBT.md` and addressed in
  dedicated maintenance windows, not silently inside feature sprints.
- Every sprint on the dev branch is preceded by a Sprint Plan + Risk
  Assessment and followed by a QA + Test Report (`docs/sprints/`).

