import { describe, expect, it } from "vitest";
import { assertConfidence } from "../validators";

describe("Provenance validators", () => {
  it("rejects confidence below 0", () => {
    expect(() => assertConfidence(-0.1)).toThrow(
      "PROVENANCE_INVALID_CONFIDENCE",
    );
  });

  it("rejects confidence above 1", () => {
    expect(() => assertConfidence(1.1)).toThrow(
      "PROVENANCE_INVALID_CONFIDENCE",
    );
  });

  it("accepts confidence between 0 and 1", () => {
    expect(() => assertConfidence(0.5)).not.toThrow();
  });
});

import { assertValidRelation } from "../validators";

describe("Provenance relation rules", () => {
  it("rejects an illegal SOURCE to CONCLUSION relation", () => {
    expect(() =>
      assertValidRelation("SOURCE", "CONCLUSION", "CONCLUDES"),
    ).toThrow("PROVENANCE_ILLEGAL_EDGE:SOURCE:CONCLUDES:CONCLUSION");
  });

  it("accepts a valid SOURCE to DOCUMENT relation", () => {
    expect(() =>
      assertValidRelation("SOURCE", "DOCUMENT", "DERIVED_FROM"),
    ).not.toThrow();
  });
});
