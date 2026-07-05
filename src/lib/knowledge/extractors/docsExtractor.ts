import type { KnowledgeItem, KnowledgeSources } from "../types";

/** Simple first-header extraction: the first "# Title" line, or the filename. */
function firstHeading(text: string, fallback: string): string {
  const m = text.match(/^\s*#\s+(.+?)\s*$/m);
  return (m?.[1] ?? fallback).trim();
}

/** Trim body to keep localStorage snapshots compact. */
function excerpt(text: string, max = 1200): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max).trimEnd()}…`;
}

export function extractDocs(
  sources: KnowledgeSources,
  sprintCode: string,
  extractedAt: string,
): KnowledgeItem[] {
  const items: KnowledgeItem[] = [];

  if (sources.changelog.trim()) {
    items.push({
      id: "reference.changelog",
      category: "reference",
      title: "CHANGELOG",
      body: excerpt(sources.changelog, 2400),
      sourcePath: "CHANGELOG.md",
      sprintCode,
      extractedAt,
    });
  }
  if (sources.roadmap.trim()) {
    items.push({
      id: "reference.roadmap",
      category: "reference",
      title: "Roadmap",
      body: excerpt(sources.roadmap, 1600),
      sourcePath: "docs/ROADMAP.md",
      sprintCode,
      extractedAt,
    });
  }
  if (sources.techDebt.trim()) {
    items.push({
      id: "reference.techDebt",
      category: "reference",
      title: "Technical Debt Log",
      body: excerpt(sources.techDebt, 1600),
      sourcePath: "docs/TECH_DEBT.md",
      sprintCode,
      extractedAt,
    });
  }

  for (const adr of sources.adrs) {
    const title = firstHeading(adr.content, adr.path);
    const id = `decision.${adr.path.replace(/[^a-z0-9]+/gi, "_").toLowerCase()}`;
    items.push({
      id,
      category: "decision",
      title,
      body: excerpt(adr.content, 1600),
      sourcePath: adr.path,
      sprintCode,
      extractedAt,
    });
  }

  for (const sp of sources.sprints) {
    const title = firstHeading(sp.content, sp.path);
    const id = `concept.${sp.path.replace(/[^a-z0-9]+/gi, "_").toLowerCase()}`;
    items.push({
      id,
      category: "concept",
      title,
      body: excerpt(sp.content, 1600),
      sourcePath: sp.path,
      sprintCode,
      extractedAt,
    });
  }

  return items;
}
