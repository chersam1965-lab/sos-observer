import { describe, expect, it } from "vitest";
import { reason } from "../engine";
import { explain } from "../explain";
import { __resetRulesForTests } from "../rules";

describe("explain()", () => {
  it("produces ordered steps ending in a conclusion", () => {
    __resetRulesForTests();
    const trace = reason(
      {
        timestamp: "2026-08-01T00:00:00.000Z",
        overallRiskLevel: "risk",
        realityGapIndex: 90,
        trustIndex: 10,
        responseDelayIndex: 80,
      },
      { traceId: "T", sprintCode: "V2.0-S1-REF", appVersion: "2.0.0-dev" },
    );
    const steps = explain(trace);
    expect(steps.length).toBeGreaterThan(0);
    expect(steps[0].kind).toBe("premise");
    expect(steps[steps.length - 1].kind).toBe("conclusion");
    // orders are monotonically increasing
    for (let i = 1; i < steps.length; i++) {
      expect(steps[i].order).toBe(steps[i - 1].order + 1);
    }
  });
});
