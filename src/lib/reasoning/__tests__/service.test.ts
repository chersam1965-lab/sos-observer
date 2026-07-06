import { beforeEach, describe, expect, it } from "vitest";
import { LocalStorageReasoningRepository } from "../localStorageRepository";
import { setReasoningRepository } from "../repository";
import { ReasoningService } from "../service";
import type { ReasoningInput } from "../types";
import { __resetRulesForTests } from "../rules";

const input: ReasoningInput = {
  timestamp: "2026-08-01T10:00:00.000Z",
  overallRiskLevel: "monitor",
  realityGapIndex: 50,
  trustIndex: 55,
  responseDelayIndex: 20,
};

describe("ReasoningService", () => {
  beforeEach(() => {
    localStorage.clear();
    setReasoningRepository(new LocalStorageReasoningRepository());
    __resetRulesForTests();
  });

  it("appends traces without deleting prior ones and auto-increments seq per sprint", async () => {
    const t1 = await ReasoningService.run({ input, sprintCode: "V2.0-S1-REF", appVersion: "2.0.0-dev" });
    const t2 = await ReasoningService.run({ input, sprintCode: "V2.0-S1-REF", appVersion: "2.0.0-dev" });
    const t3 = await ReasoningService.run({ input, sprintCode: "V2.0-S2-KG", appVersion: "2.0.0-dev" });
    expect(t1.traceId).toContain("R-2.0.0-dev.V2.0-S1-REF.0");
    expect(t2.traceId).toContain("R-2.0.0-dev.V2.0-S1-REF.1");
    expect(t3.traceId).toContain("R-2.0.0-dev.V2.0-S2-KG.0");
    expect((await ReasoningService.list()).length).toBe(3);
  });

  it("keeps reasoning storage isolated from other domains", async () => {
    localStorage.setItem("gsos.analysis.records", "x");
    localStorage.setItem("gsos.pilot.sessions.v1", "x");
    localStorage.setItem("gsos.scientific.experiments.v1", "x");
    localStorage.setItem("gsos.knowledge.versions.v1", "x");

    await ReasoningService.run({ input, sprintCode: "V2.0-S1-REF", appVersion: "2.0.0-dev" });
    await ReasoningService.clearAll();

    expect(localStorage.getItem("gsos.analysis.records")).toBe("x");
    expect(localStorage.getItem("gsos.pilot.sessions.v1")).toBe("x");
    expect(localStorage.getItem("gsos.scientific.experiments.v1")).toBe("x");
    expect(localStorage.getItem("gsos.knowledge.versions.v1")).toBe("x");
    expect(localStorage.getItem("gsos.reasoning.traces.v1")).toBeNull();
  });
});
