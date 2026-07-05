import type { KnowledgeDocument } from "./types";

/**
 * Isolated PDF rendering for Knowledge documents.
 * Does NOT import from the dashboard PDF pipeline.
 */
export async function exportKnowledgeDocumentToPDF(
  doc: KnowledgeDocument,
  opts: { fileName?: string } = {},
): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const margin = 48;
  let y = margin;

  const dateStr = new Date(doc.createdAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const write = (
    text: string,
    size: number,
    bold = false,
    color: [number, number, number] = [20, 20, 20],
  ) => {
    pdf.setFont("helvetica", bold ? "bold" : "normal");
    pdf.setFontSize(size);
    pdf.setTextColor(...color);
    const lines = pdf.splitTextToSize(text, pageW - margin * 2) as string[];
    if (y + lines.length * size * 1.35 > pageH - margin) {
      pdf.addPage();
      y = margin;
    }
    pdf.text(lines, margin, y);
    y += lines.length * size * 1.35;
  };
  const hr = () => {
    y += 4;
    pdf.setDrawColor(220, 220, 220);
    pdf.line(margin, y, pageW - margin, y);
    y += 10;
  };

  write(doc.title, 20, true);
  write(`GSOS Observer — ${dateStr}`, 10, false, [110, 110, 110]);
  hr();
  write(`Version: ${doc.version}`, 10);
  write(`Sprint: ${doc.sprintCode}`, 10);
  write(`Sources used: ${doc.sourcesUsed.join(", ") || "—"}`, 10, false, [90, 90, 90]);
  write(
    `Extracted components: ${doc.extractedComponents.slice(0, 12).join(", ")}${doc.extractedComponents.length > 12 ? "…" : ""}`,
    10,
    false,
    [90, 90, 90],
  );
  hr();

  for (const s of doc.sections) {
    write(s.heading, 13, true);
    write(s.body || "—", 11);
    hr();
  }

  const pageCount = pdf.getNumberOfPages();
  for (let p = 1; p <= pageCount; p++) {
    pdf.setPage(p);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(140, 140, 140);
    pdf.text(`GSOS Knowledge — ${doc.title} — ${dateStr}`, margin, pageH - 20);
    pdf.text(`Page ${p} / ${pageCount}`, pageW - margin, pageH - 20, { align: "right" });
  }

  const stamp = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const dateOnly = `${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}`;
  const safeTitle = doc.title.replace(/[^A-Za-z0-9]+/g, "-");
  const fileName =
    opts.fileName ?? `GSOS-${safeTitle}-${doc.version}-${dateOnly}.pdf`;
  pdf.save(fileName);
}
