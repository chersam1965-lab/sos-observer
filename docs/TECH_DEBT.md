# Technical Debt Log

> **Phase II — Core Intelligence Program (CIP) — Sprint 1/7 in progress.**
> Sprint V2.0-S1-REF (Reasoning Engine Foundation) implemented; pending
> official acceptance. See `docs/sprints/V2.0-S1-REF.md`,
> `docs/PROGRAMS/CIP.md` and ADR-0007.
> Sprints V1.3-S0 (Pilot), V1.3-S1 (SVF), V1.3-S2 (GKE) closed.
> TD-001, TD-002, TD-003 remain **paused** pending full CIP closure.





| ID | Item | Origin | Impact | Priority | Status |
| -- | ---- | ------ | ------ | -------- | ------ |
| TD-001 | Auth is localStorage-only (`src/lib/auth.ts`); no real session, no roles. | Sprint 1 | Blocks Sprint 4 (Administration) | High | Open |
| TD-002 | Indicator values are randomly generated, not sourced from real telemetry. | Sprint 1 | Demo only | High | Open |
| TD-003 | PDF export uses raster fallback for Arabic because jsPDF lacks built-in Arabic glyph shaping. | Sprint 2 | Larger PDF size, no searchable AR text. | Medium | Open |
| TD-004 | `dashboard.tsx` has grown over 1,000 lines and mixes panel, dialogs, and PDF logic. | Sprint 2/3-Ext | Maintenance friction. | Medium | Open |
| TD-005 | AI Review applies suggestion overrides only to narrative sections; on-screen analysis text is not yet re-rendered with accepted suggestions, only the exported PDF is. | Sprint 3-Ext | UX gap | Medium | Open |
| TD-006 | No persistent report history yet (planned for Sprint 3). | Sprint 2 | No audit trail. | High | Planned (Sprint 3) |
| TD-007 | No automated test suite; tests are recorded manually in `docs/TEST_REPORT.md`. | Sprint 1 | Regression risk. | High | Open |
