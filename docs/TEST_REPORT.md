# Test Report

Latest sprint: **Sprint 3 Extension — AI Writing Assistant (v1.2.0)**
Test method: manual verification in the live preview, plus TypeScript build.

| Module | Test | Result |
| ------ | ---- | ------ |
| Build | `vite build` (strict TS) | PASS |
| Auth | Login with `admin/admin` redirects to dashboard | PASS |
| Auth | Invalid credentials show localized error | PASS |
| Dashboard | Three indicators render with correct color band (green/yellow/red) | PASS |
| Dashboard | Global Status computed: 0 red = Stable, 1 red = Monitor, ≥2 red = Risk | PASS |
| Dashboard | Analyse button regenerates values and shows analysis panel | PASS |
| i18n | EN / FR / AR switch updates all labels, including AI dialog | PASS |
| i18n | Arabic enables `dir="rtl"` globally and inside AI dialog | PASS |
| Report | Identity block shows Version, Report ID, Date, Language | PASS |
| Report | Executive Summary shows risk level, counts, recommended action | PASS |
| Export | Image PDF includes header, footer, page numbers | PASS |
| Export | Searchable PDF (EN/FR) opens with selectable text | PASS |
| Export | Filename matches `GSOS-Observer-{STATUS}-YYYY-MM-DD-HH-MM.pdf` | PASS |
| Export | Progress bar reaches 100% and buttons re-enable | PASS |
| Preview | Report preview modal mirrors final layout | PASS |
| AI Review | Button opens dialog and triggers server function | PASS |
| AI Review | Suggestions show original vs suggested with type tag | PASS |
| AI Review | Accept all / Reject all / per-item selection work | PASS |
| AI Review | Writing Quality and Readability scores render | PASS |
| AI Review | Numerical values, IDs and dates are never modified | PASS |
| AI Review | Corrected PDF exports with `-AI` suffix in filename | PASS |
| AI Review | Arabic preserves RTL inside dialog and corrected export | PASS |
| Accessibility | Buttons expose `aria-disabled`, `aria-busy`, `tabIndex=-1` while exporting | PASS |
