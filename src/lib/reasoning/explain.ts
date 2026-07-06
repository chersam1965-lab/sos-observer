import type { ReasoningTrace } from "./types";

export interface ExplanationStep {
  order: number;
  kind: "premise" | "rule" | "inference" | "conclusion";
  title: string;
  detail: string;
}

/**
 * Render a ReasoningTrace as an ordered list of human-readable steps.
 * Deterministic and pure.
 */
export function explain(trace: ReasoningTrace): ExplanationStep[] {
  const steps: ExplanationStep[] = [];
  let n = 1;

  for (const p of trace.premises) {
    steps.push({
      order: n++,
      kind: "premise",
      title: `Premise: ${p.key}`,
      detail: `${p.kind} = ${String(p.value)} (source: ${p.sourcePath})`,
    });
  }

  for (const r of trace.firedRules) {
    steps.push({
      order: n++,
      kind: "rule",
      title: `Rule fired: ${r.name}`,
      detail: `${r.ruleId} — category ${r.category}, weight ${r.weight}`,
    });
  }

  for (const i of trace.inferences) {
    steps.push({
      order: n++,
      kind: "inference",
      title: `Inference (${(i.confidence * 100).toFixed(0)}%)`,
      detail: i.statement,
    });
  }

  steps.push({
    order: n++,
    kind: "conclusion",
    title: `Conclusion: ${trace.conclusion.status.toUpperCase()}`,
    detail: `${trace.conclusion.rationale} — confidence ${(trace.conclusion.confidence * 100).toFixed(
      0,
    )}%`,
  });

  return steps;
}
