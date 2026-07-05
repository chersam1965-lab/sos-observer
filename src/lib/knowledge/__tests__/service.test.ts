import { beforeEach, describe, expect, it } from "vitest";
import { LocalStorageKnowledgeRepository } from "../localStorageRepository";
import { setKnowledgeRepository } from "../repository";
import { KnowledgeService } from "../service";
import type { KnowledgeSources } from "../types";

const sources: KnowledgeSources = {
  changelog: "# CL",
  roadmap: "# RM",
  techDebt: "# TD",
  adrs: [],
  sprints: [],
};

describe("KnowledgeService", () => {
  beforeEach(() => {
    localStorage.clear();
    setKnowledgeRepository(new LocalStorageKnowledgeRepository());
  });

  it("appends versions without deleting prior snapshots and auto-increments seq per sprint", async () => {
    const v1 = await KnowledgeService.extract({
      sources,
      sprintCode: "V1.3-S2-GKE",
      appVersion: "1.3.0-dev",
    });
    const v2 = await KnowledgeService.extract({
      sources,
      sprintCode: "V1.3-S2-GKE",
      appVersion: "1.3.0-dev",
    });
    const v3 = await KnowledgeService.extract({
      sources,
      sprintCode: "V1.3-S3-OTHER",
      appVersion: "1.3.0-dev",
    });

    expect(v1.versionId).toBe("K-1.3.0-dev.V1.3-S2-GKE.0");
    expect(v2.versionId).toBe("K-1.3.0-dev.V1.3-S2-GKE.1");
    expect(v3.versionId).toBe("K-1.3.0-dev.V1.3-S3-OTHER.0");

    const list = await KnowledgeService.list();
    expect(list).toHaveLength(3);
  });

  it("keeps knowledge storage isolated from other domains", async () => {
    localStorage.setItem("gsos.analysis.records", "x");
    localStorage.setItem("gsos.pilot.sessions.v1", "x");
    localStorage.setItem("gsos.scientific.experiments.v1", "x");

    await KnowledgeService.extract({
      sources,
      sprintCode: "V1.3-S2-GKE",
      appVersion: "1.3.0-dev",
    });
    await KnowledgeService.clearAll();

    expect(localStorage.getItem("gsos.analysis.records")).toBe("x");
    expect(localStorage.getItem("gsos.pilot.sessions.v1")).toBe("x");
    expect(localStorage.getItem("gsos.scientific.experiments.v1")).toBe("x");
    expect(localStorage.getItem("gsos.knowledge.versions.v1")).toBeNull();
  });
});
