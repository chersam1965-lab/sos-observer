import { beforeEach, describe, expect, it } from "vitest";
import { runExtraction } from "../engine";
import { LocalStorageKnowledgeRepository } from "../localStorageRepository";
import { setKnowledgeRepository } from "../repository";
import type { KnowledgeSources } from "../types";

const sources: KnowledgeSources = {
  changelog: "# Changelog\n- x",
  roadmap: "# Roadmap\n- y",
  techDebt: "# Tech Debt\n- z",
  adrs: [{ path: "docs/adr/0001-test.md", content: "# ADR-0001 — Test\nbody" }],
  sprints: [{ path: "docs/sprints/T.md", content: "# Sprint T\nbody" }],
};

describe("KnowledgeEngine.runExtraction", () => {
  beforeEach(() => {
    localStorage.clear();
    setKnowledgeRepository(new LocalStorageKnowledgeRepository());
  });

  it("produces a versioned snapshot with items from every applicable category", async () => {
    const v = await runExtraction({
      sources,
      sprintCode: "V1.3-S2-GKE",
      appVersion: "1.3.0-dev",
      seq: 0,
    });
    expect(v.versionId).toBe("K-1.3.0-dev.V1.3-S2-GKE.0");
    const cats = new Set(v.items.map((i) => i.category));
    for (const c of ["indicator", "rule", "principle", "decision", "reference", "concept"])
      expect(cats.has(c as never)).toBe(true);
    expect(v.documents).toHaveLength(6);
    expect(v.documents.map((d) => d.kind)).toEqual([
      "methodology",
      "architecture",
      "research",
      "decisionRules",
      "knowledgeBook",
      "evolution",
    ]);
  });

  it("stamps each item with sprint code and extraction timestamp", async () => {
    const v = await runExtraction({
      sources,
      sprintCode: "V1.3-S2-GKE",
      appVersion: "1.3.0-dev",
      seq: 0,
    });
    for (const item of v.items) {
      expect(item.sprintCode).toBe("V1.3-S2-GKE");
      expect(item.extractedAt).toBe(v.createdAt);
    }
  });
});
