import type { KnowledgeItem } from "../types";

/** Decision rules extracted from src/lib/indicators.ts and analysis/types.ts. */
export function extractRules(sprintCode: string, extractedAt: string): KnowledgeItem[] {
  const src = "src/lib/indicators.ts";
  return [
    {
      id: "rule.colorState",
      category: "rule",
      title: "Color-state thresholds (per indicator)",
      body:
        "value ≤ 40 → green (stable); 41–70 → yellow (monitor); ≥ 71 → red (risk). " +
        "Applied identically to Reality Gap, Trust, and Response Delay indices.",
      sourcePath: src,
      sprintCode,
      extractedAt,
    },
    {
      id: "rule.globalStatus",
      category: "rule",
      title: "Global status aggregation",
      body:
        "Count red indicators across the three indices. " +
        "0 red → Stable. 1 red → Monitor. ≥ 2 red → Risk.",
      sourcePath: src,
      sprintCode,
      extractedAt,
    },
    {
      id: "rule.recommendedAction",
      category: "decision",
      title: "Recommended action per global status",
      body:
        "Stable → maintain routine monitoring. Monitor → investigate the elevated indicator and prepare a contingency plan. Risk → trigger immediate response protocol and escalate.",
      sourcePath: "src/lib/i18n.tsx",
      sprintCode,
      extractedAt,
    },
    {
      id: "principle.frozenEngine",
      category: "principle",
      title: "Frozen analysis engine (V1.3)",
      body:
        "The analysis engine, indicator computations, and scoring thresholds are frozen at V1.2.0. " +
        "Later sprints add adjacent modules (Pilot, Scientific, Knowledge) without touching engine behavior.",
      sourcePath: "docs/branches/V1.3-DEV.md",
      sprintCode,
      extractedAt,
    },
  ];
}
