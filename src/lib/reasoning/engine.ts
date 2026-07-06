import { getRules } from "./rules";
import type {
  FiredRule,
  Inference,
  Premise,
  ReasoningConclusion,
  ReasoningInput,
  ReasoningStatus,
  ReasoningTrace,
} from "./types";

/**
 * Build premises from a ReasoningInput. Pure and deterministic.
 */
export function buildPremises(input: ReasoningInput): Premise[] {
  const src = input.sourceAnalysisId
    ? `analysis:${input.sourceAnalysisId}`
    : "input:in-memory";

  const premises: Premise[] = [
    {
      id: "p-rgi",
      kind: "indicator",
      key: "realityGapIndex",
      value: input.realityGapIndex,
      sourcePath: src,
    },
    {
      id: "p-trust",
      kind: "indicator",
      key: "trustIndex",
      value: input.trustIndex,
      sourcePath: src,
    },
    {
      id: "p-rdi",
      kind: "indicator",
      key: "responseDelayIndex",
      value: input.responseDelayIndex,
      sourcePath: src,
    },
    {
      id: "p-overall",
      kind: "fact",
      key: "overallRiskLevel",
      value: input.overallRiskLevel,
      sourcePath: src,
    },
  ];

  const ctx = input.context ?? {};
  const contextKeys = Object.keys(ctx).sort(); // deterministic ordering
  for (const k of contextKeys) {
    premises.push({
      id: `p-ctx-${k}`,
      kind: "context",
      key: k,
      value: ctx[k],
      sourcePath: "input:context",
    });
  }
  return premises;
}

/**
 * Deterministic conclusion aggregator.
 *
 * score = sum(weight of fired rules) + 4 if overall == 'risk', +1 if 'monitor'
 * status: score >= 5 → risk, score >= 2 → monitor, else → stable
 * confidence: 0.5 baseline + 0.05 per fired rule, capped to 0.95.
 */
export function aggregateConclusion(
  input: ReasoningInput,
  fired: FiredRule[],
): ReasoningConclusion {
  const ruleScore = fired.reduce((acc, r) => acc + r.weight, 0);
  const overallBoost =
    input.overallRiskLevel === "risk" ? 4 : input.overallRiskLevel === "monitor" ? 1 : 0;
  const score = ruleScore + overallBoost;

  let status: ReasoningStatus = "stable";
  if (score >= 5) status = "risk";
  else if (score >= 2) status = "monitor";

  const confidence = Math.min(0.95, 0.5 + 0.05 * fired.length);

  const parts: string[] = [];
  parts.push(`Fired ${fired.length} rule(s), aggregate score ${score}.`);
  if (overallBoost > 0)
    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
  parts.push(`Derived status: ${status}.`);

  return { status, rationale: parts.join(" "), confidence, score };
}

/**
 * Pure reasoning function. Same input → identical trace.
 *
 * `Date.now()` and `Math.random()` are never called here — the caller
 * provides the timestamp and traceId to keep the engine deterministic.
 */
export function reason(
  input: ReasoningInput,
  meta: { traceId: string; sprintCode: string; appVersion: string },
): ReasoningTrace {
  const premises = buildPremises(input);
  const rules = getRules();

  const fired: FiredRule[] = [];
  const inferences: Inference[] = [];

  for (const r of rules) {
    if (!r.when(premises)) continue;
    fired.push({ ruleId: r.id, name: r.name, category: r.category, weight: r.weight });
    const partial = r.then(premises);
    inferences.push({
      id: `inf-${r.id}`,
      ruleId: r.id,
      ...partial,
    });
  }

  const conclusion = aggregateConclusion(input, fired);

  return {
    traceId: meta.traceId,
    createdAt: input.timestamp,
    sprintCode: meta.sprintCode,
    appVersion: meta.appVersion,
    input,
    premises,
    firedRules: fired,
    inferences,
    conclusion,
  };
}
