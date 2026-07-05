import { describe, expect, it } from "vitest";
import { generateDocuments } from "../generator";
import type { KnowledgeItem, KnowledgeSources } from "../types";

const now = "2026-07-05T12:00:00.000Z";

const items: KnowledgeItem[] = [
  { id: "indicator.a", category: "indicator", title: "A", body: "b", sourcePath: "s", sprintCode: "S", extractedAt: now },
  { id: "rule.a", category: "rule", title: "R", body: "b", sourcePath: "s", sprintCode: "S", extractedAt: now },
  { id: "decision.a", category: "decision", title: "D", body: "b", sourcePath: "s", sprintCode: "S", extractedAt: now },
  { id: "reference.changelog", category: "reference", title: "CL", body: "b", sourcePath: "CHANGELOG.md", sprintCode: "S", extractedAt: now },
];

const sources: KnowledgeSources = {
  changelog: "# CL",
  roadmap: "# RM",
  techDebt: "# TD",
  adrs: [],
  sprints: [{ path: "docs/sprints/x.md", content: "# X" }],
};

const pilotAgg = {
  totalSessions: 0,
  totalFeedback: 0,
  averageAccuracy: null,
  averageUsefulness: null,
  averageCombined: null,
  statusDistribution: { stable: 0, monitor: 0, risk: 0 },
  languageDistribution: { en: 0, fr: 0, ar: 0 },
  topKeywords: [],
};
const sciAgg = {
  totalExperiments: 0,
  matches: 0,
  partials: 0,
  mismatches: 0,
  successRate: null,
  averageMatchRate: null,
  languageDistribution: { en: 0, fr: 0, ar: 0 },
  caseTypeDistribution: {},
  performanceOverTime: [],
};

describe("generateDocuments", () => {
  it("emits six documents each carrying the required header fields", () => {
    const docs = generateDocuments({
      versionId: "K-x.0",
      createdAt: now,
      sprintCode: "S",
      items,
      sourcesUsed: ["a", "b"],
      pilotAgg,
      sciAgg,
      sources,
    });
    expect(docs).toHaveLength(6);
    for (const d of docs) {
      expect(d.version).toBe("K-x.0");
      expect(d.sprintCode).toBe("S");
      expect(d.createdAt).toBe(now);
      expect(Array.isArray(d.sourcesUsed)).toBe(true);
      expect(Array.isArray(d.extractedComponents)).toBe(true);
      expect(d.sections.length).toBeGreaterThan(0);
    }
  });
});
