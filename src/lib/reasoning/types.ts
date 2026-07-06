/**
 * GSOS Reasoning Engine — Sprint V2.0-S1 (CIP).
 *
 * Isolated, deterministic reasoning layer. Reads *snapshots* of Analysis
 * results via the public service API only — never imports analysis
 * internals or indicator computation logic.
 */

export type ReasoningStatus = "stable" | "monitor" | "risk";
export type PremiseKind = "indicator" | "context" | "fact";
export type RuleCategory = "indicator" | "aggregation" | "context";

export interface Premise {
  id: string;
  kind: PremiseKind;
  key: string;
  value: number | string | boolean;
  sourcePath: string;
}

export interface Inference {
  id: string;
  ruleId: string;
  statement: string;
  confidence: number; // 0..1
  evidence: Premise[];
}

export interface Rule {
  id: string;
  name: string;
  category: RuleCategory;
  weight: number; // contribution to the risk score when fired
  /** Pure predicate over premises. Must not mutate its input. */
  when: (premises: Premise[]) => boolean;
  /** Pure inference builder. Must be deterministic. */
  then: (premises: Premise[]) => Omit<Inference, "id" | "ruleId">;
}

export interface FiredRule {
  ruleId: string;
  name: string;
  category: RuleCategory;
  weight: number;
}

export interface ReasoningConclusion {
  status: ReasoningStatus;
  rationale: string;
  confidence: number; // 0..1
  score: number;
}

export interface ReasoningInput {
  /** ISO-8601 timestamp — engine is pure; caller supplies time. */
  timestamp: string;
  overallRiskLevel: ReasoningStatus;
  realityGapIndex: number; // 0..100
  trustIndex: number; // 0..100
  responseDelayIndex: number; // 0..100
  /** Optional free-form context facts (evaluator notes, sprint code, etc.). */
  context?: Record<string, string | number | boolean>;
  /** Optional origin marker (e.g. analysisId). Never fetched or dereferenced. */
  sourceAnalysisId?: string | null;
}

export interface ReasoningTrace {
  traceId: string;
  createdAt: string; // caller-supplied (== input.timestamp) — keeps engine pure
  sprintCode: string;
  appVersion: string;
  input: ReasoningInput;
  premises: Premise[];
  firedRules: FiredRule[];
  inferences: Inference[];
  conclusion: ReasoningConclusion;
}

export interface ReasoningRepository {
  append(trace: ReasoningTrace): Promise<ReasoningTrace>;
  list(): Promise<ReasoningTrace[]>;
  getById(traceId: string): Promise<ReasoningTrace | null>;
  clearAll(): Promise<void>;
}
