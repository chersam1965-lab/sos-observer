import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { LocalStorageAnalysisRepository } from "../localStorageRepository";
import type { NewAnalysisInput } from "../types";

const baseInput = (overrides: Partial<NewAnalysisInput> = {}): NewAnalysisInput => ({
  organizationId: null,
  userId: null,
  engineVersion: "1.0.0",
  questionnaireVersion: "1.0.0",
  overallRiskLevel: "stable",
  realityGapIndex: 20,
  trustIndex: 30,
  responseDelayIndex: 25,
  executiveSummary: "summary",
  recommendedAction: "action",
  ...overrides,
});

describe("LocalStorageAnalysisRepository", () => {
  let repo: LocalStorageAnalysisRepository;

  beforeEach(() => {
    localStorage.clear();
    repo = new LocalStorageAnalysisRepository();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe("create", () => {
    it("assigns an id, createdAt, and defaults status to Completed with completedAt set", async () => {
      const a = await repo.create(baseInput());
      expect(a.analysisId).toMatch(/[0-9a-f-]{36}/i);
      expect(a.status).toBe("Completed");
      expect(a.createdAt).toBeTruthy();
      expect(a.completedAt).toBeTruthy();
    });

    it("leaves completedAt null for Draft status", async () => {
      const a = await repo.create({ ...baseInput(), status: "Draft" });
      expect(a.status).toBe("Draft");
      expect(a.completedAt).toBeNull();
    });

    it("honors a provided analysisId", async () => {
      const a = await repo.create({ ...baseInput(), analysisId: "fixed-id" });
      expect(a.analysisId).toBe("fixed-id");
    });

    it("persists across new repository instances", async () => {
      const a = await repo.create(baseInput());
      const fresh = new LocalStorageAnalysisRepository();
      const found = await fresh.getById(a.analysisId);
      expect(found?.analysisId).toBe(a.analysisId);
    });
  });

  describe("save", () => {
    it("updates an existing record in place", async () => {
      const a = await repo.create(baseInput());
      const updated = await repo.save({ ...a, recommendedAction: "changed" });
      expect(updated.recommendedAction).toBe("changed");
      const all = await repo.list();
      expect(all).toHaveLength(1);
      expect(all[0].recommendedAction).toBe("changed");
    });

    it("inserts when the id is not found", async () => {
      const a = await repo.create(baseInput());
      await repo.save({ ...a, analysisId: "brand-new" });
      const all = await repo.list();
      expect(all).toHaveLength(2);
    });
  });

  describe("getById", () => {
    it("returns null when missing", async () => {
      expect(await repo.getById("nope")).toBeNull();
    });

    it("returns the matching record", async () => {
      const a = await repo.create(baseInput());
      const found = await repo.getById(a.analysisId);
      expect(found).toEqual(a);
    });
  });

  describe("list", () => {
    it("returns records sorted desc by completedAt/createdAt by default", async () => {
      const a = await repo.create({ ...baseInput(), analysisId: "a" });
      await new Promise((r) => setTimeout(r, 5));
      const b = await repo.create({ ...baseInput(), analysisId: "b" });
      const rows = await repo.list();
      expect(rows.map((r) => r.analysisId)).toEqual([b.analysisId, a.analysisId]);
    });

    it("supports asc order", async () => {
      const a = await repo.create({ ...baseInput(), analysisId: "a" });
      await new Promise((r) => setTimeout(r, 5));
      const b = await repo.create({ ...baseInput(), analysisId: "b" });
      const rows = await repo.list({ order: "asc" });
      expect(rows.map((r) => r.analysisId)).toEqual([a.analysisId, b.analysisId]);
    });

    it("filters by status", async () => {
      await repo.create(baseInput());
      await repo.create({ ...baseInput(), status: "Draft" });
      const drafts = await repo.list({ status: "Draft" });
      expect(drafts).toHaveLength(1);
      expect(drafts[0].status).toBe("Draft");
    });

    it("applies limit and offset", async () => {
      for (let i = 0; i < 5; i++) {
        await repo.create({ ...baseInput(), analysisId: `id-${i}` });
        await new Promise((r) => setTimeout(r, 2));
      }
      const page = await repo.list({ limit: 2, offset: 1 });
      expect(page).toHaveLength(2);
    });

    it("returns [] when empty", async () => {
      expect(await repo.list()).toEqual([]);
    });
  });
});
