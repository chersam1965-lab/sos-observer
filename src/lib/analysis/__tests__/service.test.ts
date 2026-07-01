import { beforeEach, describe, expect, it } from "vitest";
import { AnalysisService } from "../service";
import { LocalStorageAnalysisRepository } from "../localStorageRepository";
import { setAnalysisRepository } from "../repository";
import type { NewAnalysisInput } from "../types";

const baseInput = (overrides: Partial<NewAnalysisInput> = {}): NewAnalysisInput => ({
  organizationId: null,
  userId: null,
  engineVersion: "1.0.0",
  questionnaireVersion: "1.0.0",
  overallRiskLevel: "monitor",
  realityGapIndex: 50,
  trustIndex: 60,
  responseDelayIndex: 45,
  executiveSummary: "exec",
  recommendedAction: "act",
  ...overrides,
});

describe("AnalysisService", () => {
  beforeEach(() => {
    localStorage.clear();
    setAnalysisRepository(new LocalStorageAnalysisRepository());
  });

  it("recordCompleted forces status Completed", async () => {
    const a = await AnalysisService.recordCompleted(baseInput({ status: "Draft" }));
    expect(a.status).toBe("Completed");
    expect(a.completedAt).toBeTruthy();
  });

  it("createDraft forces status Draft with null completedAt", async () => {
    const a = await AnalysisService.createDraft(baseInput());
    expect(a.status).toBe("Draft");
    expect(a.completedAt).toBeNull();
  });

  it("save round-trips through getById", async () => {
    const a = await AnalysisService.recordCompleted(baseInput());
    await AnalysisService.save({ ...a, executiveSummary: "updated" });
    const found = await AnalysisService.getById(a.analysisId);
    expect(found?.executiveSummary).toBe("updated");
  });

  it("getById returns null for unknown id", async () => {
    expect(await AnalysisService.getById("missing")).toBeNull();
  });

  it("list returns all persisted analyses", async () => {
    await AnalysisService.recordCompleted(baseInput());
    await AnalysisService.recordCompleted(baseInput());
    await AnalysisService.createDraft(baseInput());
    const all = await AnalysisService.list();
    expect(all).toHaveLength(3);
    const completed = await AnalysisService.list({ status: "Completed" });
    expect(completed).toHaveLength(2);
  });

  it("delegates to the injected repository", async () => {
    const calls: string[] = [];
    setAnalysisRepository({
      create: async (i) => {
        calls.push("create");
        return { ...(i as never), analysisId: "x", createdAt: "", completedAt: null, status: "Completed" } as never;
      },
      save: async (a) => {
        calls.push("save");
        return a;
      },
      getById: async () => {
        calls.push("getById");
        return null;
      },
      list: async () => {
        calls.push("list");
        return [];
      },
      archive: async () => null,
      delete: async () => false,
    });
    await AnalysisService.recordCompleted(baseInput());
    await AnalysisService.getById("x");
    await AnalysisService.list();
    expect(calls).toEqual(["create", "getById", "list"]);
  });
});
