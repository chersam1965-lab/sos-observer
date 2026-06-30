# ADR-0002 — Client-side jsPDF + html2canvas for report export

- **Status:** Accepted
- **Date:** Sprint 2 (v1.1.0)

## Context
The reporting engine must produce branded, multilingual PDF reports for
EN, FR, and AR, including RTL Arabic glyphs. Reports are generated on
demand from the dashboard and must work offline once the app is loaded.

## Decision
Generate PDFs in the browser using `jspdf` for text-based output and
`html2canvas` for image-based fallback. Arabic searchable export falls
back to the image path to preserve glyph shaping.

## Reason
- No backend round-trip required; export is instant from the user's
  perspective.
- jsPDF supports metadata, page numbering, and direct text layout for
  searchable LTR exports.
- html2canvas captures the live DOM so the rasterized export mirrors
  the on-screen Arabic rendering exactly.

## Alternatives
- **Server-side Puppeteer/Playwright rendering** — higher fidelity, but
  requires infrastructure, network latency, and is incompatible with the
  current edge-only runtime.
- **PDFKit on the server** — same infrastructure concern, and still
  requires bundled Arabic fonts.
- **Browser print-to-PDF** — loses control over filename, metadata,
  page numbering, and headers/footers.

## Impact
- Arabic searchable PDFs are deferred to a future Arabic-font bundle
  (tracked as TD-003).
- Export logic lives in `src/routes/dashboard.tsx` for now; will be
  extracted into a dedicated module when it grows further (TD-004).
