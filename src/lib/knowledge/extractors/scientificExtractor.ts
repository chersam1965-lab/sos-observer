import type { ScientificAggregate } from "@/lib/scientific";
import type { KnowledgeItem } from "../types";

export function extractScientificEvidence(
  agg: ScientificAggregate,
  sprintCode: string,
  extractedAt: string,
): KnowledgeItem[] {
  const items: KnowledgeItem[] = [];
  const src = "src/lib/scientific/service.ts";

  items.push({
    id: "experiment.totals",
    category: "experiment",
    title: "Scientific Validation Framework — totals",
    body:
      `Total experiments: ${agg.totalExperiments}. ` +
      `Matches: ${agg.matches}. Partials: ${agg.partials}. Mismatches: ${agg.mismatches}. ` +
      `Success rate: ${pct(agg.successRate)}. Average match rate: ${pct(agg.averageMatchRate)}.`,
    sourcePath: src,
    sprintCode,
    extractedAt,
  });

  items.push({
    id: "experiment.languageDistribution",
    category: "experiment",
    title: "SVF — language distribution",
    body: `EN: ${agg.languageDistribution.en}. FR: ${agg.languageDistribution.fr}. AR: ${agg.languageDistribution.ar}.`,
    sourcePath: src,
    sprintCode,
    extractedAt,
  });

  const cases = Object.entries(agg.caseTypeDistribution);
  if (cases.length > 0) {
    items.push({
      id: "experiment.caseTypeDistribution",
      category: "experiment",
      title: "SVF — case-type distribution",
      body: cases.map(([k, v]) => `${k}: ${v}`).join("; "),
      sourcePath: src,
      sprintCode,
      extractedAt,
    });
  }

  if (agg.performanceOverTime.length > 0) {
    items.push({
      id: "experiment.performanceOverTime",
      category: "experiment",
      title: "SVF — performance over time",
      body: agg.performanceOverTime
        .map((p) => `${p.weekStart}: ${p.matches}/${p.total} (${p.successRate}%)`)
        .join("; "),
      sourcePath: src,
      sprintCode,
      extractedAt,
    });
  }

  return items;
}

function pct(n: number | null): string {
  return n === null ? "—" : `${n}%`;
}
