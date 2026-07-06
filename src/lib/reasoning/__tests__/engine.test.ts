import { describe, expect, it } from "vitest";
import { reason, aggregateConclusion, buildPremises } from "../engine";
import type { ReasoningInput } from "../types";
import { __resetRulesForTests } from "../rules";

const META = { traceId: "T1", sprintCode: "V2.0-S1-REF", appVersion: "2.0.0-dev" };

const baseInput: ReasoningInput = {
  timestamp: "2026-08-01T10:00:00.000Z",
  overallRiskLevel: "monitor",
  realityGapIndex: 55,
  trustIndex: 60,
  responseDelayIndex: 30,
};

describe("reasoning engine", () => {
  it("is deterministic — same input yields identical trace", () => {
    __resetRulesForTests();
    const a = reason(baseInput, META);
    const b = reason(baseInput, META);
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
  });

  it("builds premises in a stable order including sorted context keys", () => {
    const p = buildPremises({ ...baseInput, context: { zeta: 1, alpha: 2 } });
    const keys = p.map((x) => x.key);
    expect(keys).toEqual([
      "realityGapIndex",
      "trustIndex",
      "responseDelayIndex",
      "overallRiskLevel",
      "alpha",
      "zeta",
    ]);
  });

  it("fires elevated-band rules for monitor input", () => {
    __resetRulesForTests();
    const t = reason(baseInput, META);
    const ids = t.firedRules.map((r) => r.ruleId).sort();
    expect(ids).toContain("R4_RGI_ELEVATED");
    expect(ids).toContain("R5_TRUST_MONITOR");
    expect(t.conclusion.status).toBe("monitor");
  });

  it("escalates when overallRiskLevel is 'risk' with critical indicators", () => {
    __resetRulesForTests();
    const t = reason(
      {
        ...baseInput,
        overallRiskLevel: "risk",
        realityGapIndex: 85,
        trustIndex: 20,
        responseDelayIndex: 90,
      },
      META,
    );
    expect(t.conclusion.status).toBe("risk");
    expect(t.firedRules.some((r) => r.ruleId === "R8_ESCALATION")).toBe(true);
  });

  it("classifies fully-green input as stable", () => {
    __resetRulesForTests();
    const t = reason(
      {
        ...baseInput,
        overallRiskLevel: "stable",
        realityGapIndex: 10,
        trustIndex: 85,
        responseDelayIndex: 15,
      },
      META,
    );
    expect(t.conclusion.status).toBe("stable");
    expect(t.firedRules.some((r) => r.ruleId === "R7_ALL_STABLE")).toBe(true);
  });

  it("aggregateConclusion is a pure function of fired rules + overall level", () => {
    const c1 = aggregateConclusion(baseInput, [
      { ruleId: "x", name: "x", category: "indicator", weight: 3 },
    ]);
    const c2 = aggregateConclusion(baseInput, [
      { ruleId: "x", name: "x", category: "indicator", weight: 3 },
    ]);
    expect(c1).toEqual(c2);
  });
});
