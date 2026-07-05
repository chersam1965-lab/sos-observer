import type { KnowledgeItem } from "../types";

/**
 * Read-only view of the three GSOS indicators and their color bands.
 * Values MUST mirror the constants defined in src/lib/indicators.ts.
 * The engine never mutates indicators — this extractor only describes them.
 */
export function extractIndicators(sprintCode: string, extractedAt: string): KnowledgeItem[] {
  const source = "src/lib/indicators.ts";
  return [
    {
      id: "indicator.realityGap",
      category: "indicator",
      title: "Reality Gap Index",
      body:
        "Measures divergence between operational reality and reported state. " +
        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
      sourcePath: source,
      sprintCode,
      extractedAt,
    },
    {
      id: "indicator.trust",
      category: "indicator",
      title: "Trust Index",
      body:
        "Measures confidence in the operational chain. " +
        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
      sourcePath: source,
      sprintCode,
      extractedAt,
    },
    {
      id: "indicator.responseDelay",
      category: "indicator",
      title: "Response Delay Index",
      body:
        "Measures latency between an event and its operational response. " +
        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
      sourcePath: source,
      sprintCode,
      extractedAt,
    },
  ];
}
