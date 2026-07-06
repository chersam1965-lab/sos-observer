import { describe, expect, it } from "vitest";
import { __resetRulesForTests, getRules, registerRule } from "../rules";

describe("reasoning rules registry", () => {
  it("exposes the seed rules with unique ids", () => {
    __resetRulesForTests();
    const rules = getRules();
    expect(rules.length).toBeGreaterThanOrEqual(8);
    const ids = new Set(rules.map((r) => r.id));
    expect(ids.size).toBe(rules.length);
  });

  it("rejects duplicate rule registration", () => {
    __resetRulesForTests();
    const existing = getRules()[0]!;
    expect(() => registerRule({ ...existing })).toThrow();
  });
});
