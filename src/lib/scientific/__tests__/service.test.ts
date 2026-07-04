import { beforeEach, describe, expect, it } from "vitest";
import { LocalStorageScientificRepository } from "../localStorageRepository";
import { setScientificRepository } from "../repository";
import { ScientificService } from "../service";

const baseInput = {
  language: "en" as const,
  objective: "obj",
  caseType: "Governance",
  caseDescription: "desc",
  inputData: "in",
  gsosResult: {
    realityGap: 10,
    trust: 20,
    responseDelay: 30,
    globalStatus: "stable" as const,
    summary: "s",
  },
  groundTruth: { globalStatus: "stable" as const, notes: "" },
  evaluatorNotes: "",
};

describe("ScientificService", () => {
  beforeEach(() => {
    localStorage.clear();
    setScientificRepository(new LocalStorageScientificRepository());
  });

  it("aggregates totals, success rate, and distributions", async () => {
    await ScientificService.create(baseInput);
    await ScientificService.create({
      ...baseInput,
      language: "fr",
      caseType: "Compliance",
      gsosResult: { ...baseInput.gsosResult, globalStatus: "monitor" },
    });
    await ScientificService.create({
      ...baseInput,
      language: "ar",
      caseType: "Security",
      gsosResult: { ...baseInput.gsosResult, globalStatus: "risk" },
    });

    const agg = await ScientificService.aggregate();
    expect(agg.totalExperiments).toBe(3);
    expect(agg.matches).toBe(1);
    expect(agg.partials).toBe(1);
    expect(agg.mismatches).toBe(1);
    expect(agg.successRate).toBe(33);
    expect(agg.languageDistribution).toEqual({ en: 1, fr: 1, ar: 1 });
    expect(agg.caseTypeDistribution).toEqual({
      Governance: 1,
      Compliance: 1,
      Security: 1,
    });
  });

  it("handles empty state", async () => {
    const agg = await ScientificService.aggregate();
    expect(agg.totalExperiments).toBe(0);
    expect(agg.successRate).toBeNull();
    expect(agg.averageMatchRate).toBeNull();
    expect(agg.performanceOverTime).toEqual([]);
  });

  it("performanceOverTime buckets by week", async () => {
    // Create with explicit createdAt spanning two weeks
    await ScientificService.create({
      ...baseInput,
      createdAt: "2026-07-01T10:00:00.000Z",
    });
    await ScientificService.create({
      ...baseInput,
      createdAt: "2026-07-08T10:00:00.000Z",
    });
    const agg = await ScientificService.aggregate();
    expect(agg.performanceOverTime.length).toBeGreaterThanOrEqual(2);
    expect(agg.performanceOverTime.every((p) => p.successRate === 100)).toBe(true);
  });
});
