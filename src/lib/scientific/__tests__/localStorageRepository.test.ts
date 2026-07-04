import { beforeEach, describe, expect, it } from "vitest";
import { LocalStorageScientificRepository } from "../localStorageRepository";

function baseInput(overrides: Partial<Parameters<LocalStorageScientificRepository["create"]>[0]> = {}) {
  return {
    language: "en" as const,
    objective: "Verify stable-state detection",
    caseType: "Governance",
    caseDescription: "Simulated stable environment",
    inputData: "indicators within normal ranges",
    gsosResult: {
      realityGap: 12,
      trust: 18,
      responseDelay: 20,
      globalStatus: "stable" as const,
      summary: "Stable",
    },
    groundTruth: { globalStatus: "stable" as const, notes: "expert confirms stable" },
    evaluatorNotes: "OK",
    ...overrides,
  };
}

describe("LocalStorageScientificRepository", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("creates, retrieves, and lists experiments", async () => {
    const repo = new LocalStorageScientificRepository();
    const a = await repo.create(baseInput());
    const b = await repo.create(baseInput({ caseType: "Compliance" }));
    expect(a.experimentId).not.toEqual(b.experimentId);

    const fetched = await repo.getById(a.experimentId);
    expect(fetched?.caseType).toBe("Governance");

    const rows = await repo.list();
    expect(rows).toHaveLength(2);
  });

  it("computes matchRate and matchFlag on create", async () => {
    const repo = new LocalStorageScientificRepository();
    const exact = await repo.create(baseInput());
    expect(exact.matchRate).toBe(100);
    expect(exact.matchFlag).toBe("match");

    const adjacent = await repo.create(
      baseInput({
        gsosResult: {
          realityGap: 40,
          trust: 50,
          responseDelay: 45,
          globalStatus: "monitor",
          summary: "Monitor",
        },
      }),
    );
    expect(adjacent.matchRate).toBe(50);
    expect(adjacent.matchFlag).toBe("partial");

    const opposite = await repo.create(
      baseInput({
        gsosResult: {
          realityGap: 90,
          trust: 90,
          responseDelay: 90,
          globalStatus: "risk",
          summary: "Risk",
        },
      }),
    );
    expect(opposite.matchRate).toBe(0);
    expect(opposite.matchFlag).toBe("mismatch");
  });

  it("save updates and recomputes; delete removes", async () => {
    const repo = new LocalStorageScientificRepository();
    const created = await repo.create(baseInput());
    const updated = await repo.save({
      ...created,
      gsosResult: { ...created.gsosResult, globalStatus: "risk" },
    });
    expect(updated.matchFlag).toBe("mismatch");

    expect(await repo.delete(created.experimentId)).toBe(true);
    expect(await repo.delete(created.experimentId)).toBe(false);
  });

  it("isolated from other repositories", async () => {
    localStorage.setItem("gsos.analysis.v1", JSON.stringify([{ x: 1 }]));
    localStorage.setItem("gsos.pilot.sessions.v1", JSON.stringify([{ y: 1 }]));
    const repo = new LocalStorageScientificRepository();
    await repo.create(baseInput());
    await repo.clearAll();
    // Only scientific key cleared
    expect(localStorage.getItem("gsos.analysis.v1")).not.toBeNull();
    expect(localStorage.getItem("gsos.pilot.sessions.v1")).not.toBeNull();
    expect(localStorage.getItem("gsos.scientific.experiments.v1")).toBeNull();
  });
});
