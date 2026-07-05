import type { PilotAggregate } from "@/lib/pilot";
import type { KnowledgeItem } from "../types";

export function extractPilotEvidence(
  agg: PilotAggregate,
  sprintCode: string,
  extractedAt: string,
): KnowledgeItem[] {
  const items: KnowledgeItem[] = [];
  const src = "src/lib/pilot/service.ts";

  items.push({
    id: "evidence.pilot.totals",
    category: "evidence",
    title: "Pilot Validation Program — totals",
    body:
      `Sessions logged: ${agg.totalSessions}. Feedback received: ${agg.totalFeedback}. ` +
      `Average accuracy: ${fmt(agg.averageAccuracy)}. ` +
      `Average usefulness: ${fmt(agg.averageUsefulness)}. ` +
      `Combined average: ${fmt(agg.averageCombined)}.`,
    sourcePath: src,
    sprintCode,
    extractedAt,
  });

  items.push({
    id: "evidence.pilot.statusDistribution",
    category: "evidence",
    title: "Pilot — status distribution",
    body: `Stable: ${agg.statusDistribution.stable}. Monitor: ${agg.statusDistribution.monitor}. Risk: ${agg.statusDistribution.risk}.`,
    sourcePath: src,
    sprintCode,
    extractedAt,
  });

  items.push({
    id: "evidence.pilot.languageDistribution",
    category: "evidence",
    title: "Pilot — language distribution",
    body: `EN: ${agg.languageDistribution.en}. FR: ${agg.languageDistribution.fr}. AR: ${agg.languageDistribution.ar}.`,
    sourcePath: src,
    sprintCode,
    extractedAt,
  });

  if (agg.topKeywords.length > 0) {
    items.push({
      id: "evidence.pilot.keywords",
      category: "evidence",
      title: "Pilot — top keywords from feedback",
      body: agg.topKeywords.map((k) => `${k.word} (${k.count})`).join(", "),
      sourcePath: src,
      sprintCode,
      extractedAt,
    });
  }

  return items;
}

function fmt(n: number | null): string {
  return n === null ? "—" : n.toFixed(2);
}
