import type { Premise, Rule } from "../types";

/**
 * Seed rules for the Reasoning Engine Foundation.
 *
 * Thresholds mirror the documented decision bands used elsewhere in GSOS
 * (see ADR-0007). They are re-declared here on purpose to avoid runtime
 * coupling with the Analysis engine — the reasoning module stays isolated.
 *
 *   0..39   → green   (stable band)
 *   40..69  → yellow  (monitor band)
 *   70..100 → red     (risk band)
 */

const T_LOW = 40;
const T_HIGH = 70;

function num(premises: Premise[], key: string): number {
  const p = premises.find((x) => x.key === key && x.kind === "indicator");
  return typeof p?.value === "number" ? p.value : Number.NaN;
}

function evidenceFor(premises: Premise[], keys: string[]): Premise[] {
  return premises.filter((p) => keys.includes(p.key));
}

export const BASE_RULES: Rule[] = [
  {
    id: "R1_RGI_CRITICAL",
    name: "Reality Gap critical",
    category: "indicator",
    weight: 3,
    when: (p) => num(p, "realityGapIndex") >= T_HIGH,
    then: (p) => ({
      statement: "Reality Gap Index is in the critical band (>= 70).",
      confidence: 0.9,
      evidence: evidenceFor(p, ["realityGapIndex"]),
    }),
  },
  {
    id: "R2_TRUST_CRITICAL",
    name: "Trust critically low",
    category: "indicator",
    weight: 3,
    when: (p) => num(p, "trustIndex") < T_LOW,
    then: (p) => ({
      statement: "Trust Index is critically low (< 40).",
      confidence: 0.9,
      evidence: evidenceFor(p, ["trustIndex"]),
    }),
  },
  {
    id: "R3_RDI_CRITICAL",
    name: "Response Delay critical",
    category: "indicator",
    weight: 3,
    when: (p) => num(p, "responseDelayIndex") >= T_HIGH,
    then: (p) => ({
      statement: "Response Delay Index is in the critical band (>= 70).",
      confidence: 0.9,
      evidence: evidenceFor(p, ["responseDelayIndex"]),
    }),
  },
  {
    id: "R4_RGI_ELEVATED",
    name: "Reality Gap elevated",
    category: "indicator",
    weight: 1,
    when: (p) => {
      const v = num(p, "realityGapIndex");
      return v >= T_LOW && v < T_HIGH;
    },
    then: (p) => ({
      statement: "Reality Gap Index is elevated (40–69) — monitoring advised.",
      confidence: 0.7,
      evidence: evidenceFor(p, ["realityGapIndex"]),
    }),
  },
  {
    id: "R5_TRUST_MONITOR",
    name: "Trust monitored",
    category: "indicator",
    weight: 1,
    when: (p) => {
      const v = num(p, "trustIndex");
      return v >= T_LOW && v < T_HIGH;
    },
    then: (p) => ({
      statement: "Trust Index is in the monitor band (40–69).",
      confidence: 0.7,
      evidence: evidenceFor(p, ["trustIndex"]),
    }),
  },
  {
    id: "R6_RDI_ELEVATED",
    name: "Response Delay elevated",
    category: "indicator",
    weight: 1,
    when: (p) => {
      const v = num(p, "responseDelayIndex");
      return v >= T_LOW && v < T_HIGH;
    },
    then: (p) => ({
      statement: "Response Delay Index is elevated (40–69).",
      confidence: 0.7,
      evidence: evidenceFor(p, ["responseDelayIndex"]),
    }),
  },
  {
    id: "R7_ALL_STABLE",
    name: "All indicators stable",
    category: "aggregation",
    weight: 0,
    when: (p) =>
      num(p, "realityGapIndex") < T_LOW &&
      num(p, "trustIndex") >= T_HIGH &&
      num(p, "responseDelayIndex") < T_LOW,
    then: (p) => ({
      statement: "All three indicators are within their stable bands (trust high, gap/delay low).",
      confidence: 0.85,
      evidence: evidenceFor(p, ["realityGapIndex", "trustIndex", "responseDelayIndex"]),
    }),
  },
  {
    id: "R8_ESCALATION",
    name: "Escalation required",
    category: "context",
    weight: 2,
    when: (p) => p.some((x) => x.key === "overallRiskLevel" && x.value === "risk"),
    then: (p) => ({
      statement:
        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
      confidence: 0.95,
      evidence: evidenceFor(p, ["overallRiskLevel"]),
    }),
  },
];
