# GSOS Observer — Release Register

## Stable Release — v1.2.0 (FROZEN)

- **Status:** 🔒 Frozen — Official Stable Release
- **Certified:** 2026-07-02 (`docs/PRODUCTION_READINESS.md`)
- **Branch:** `main` (stable)
- **Policy:** No new features or modifications. **Critical bug fixes only.**
  Any patch must ship as `1.2.x`, carry a CHANGELOG entry, and be
  cherry-picked into the active development branch.

### Change control on the stable branch

Allowed:
- Security patches (CVEs, auth bypass, XSS/injection regressions).
- Data-loss or crash fixes reproducible in production.
- Build/deployment hotfixes required to keep v1.2.0 shippable.

Not allowed:
- New features, new indicators, new UI, refactors, dependency bumps
  that are not security-driven.
- Documentation-only or cosmetic changes (land those on the dev branch).

## Active Development — v1.3.0-dev

- **Status:** 🚧 In development
- **Branch:** `GSOS-Observer-V1.3-DEV`
- **Scope:** Technical debt resolution + maintainability + architectural
  preparation for future modules. See `docs/branches/V1.3-DEV.md`.
- **Explicitly out of scope for V1.3:** AI features, new dashboard,
  new indicators, new analysis logic. Scheduled after TD completion.
