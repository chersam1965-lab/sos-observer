/**
 * GSOS V2 — Sprint 3: Business Rule Engine
 *
 * Architecture-only module. Does NOT alter current analysis results.
 * The Analysis Engine may call `runRules(...)` to obtain rule outcomes
 * alongside (not in place of) existing indicator computations.
 */

import type { Indicator } from "./indicators";

// ---------- Types ----------

export type RuleCategory =
  | "trust"
  | "realityGap"
  | "responseDelay"
  | "compliance"
  | "security"
  | "performance"
  | "governance";

export type RuleSeverity = "info" | "low" | "medium" | "high" | "critical";

export type RuleOutcome = "passed" | "warning" | "failed";

export type RuleSource = "builtin" | "config" | "ai";

export interface RuleContext {
  indicators: Indicator[];
  now: Date;
  /** Free-form extension bag for future signals (telemetry, AI features…). */
  meta?: Record<string, unknown>;
}

export interface RuleEvaluationResult {
  outcome: RuleOutcome;
  /** Human-readable explanation. Optional. */
  message?: string;
  /** Optional structured data for UI/reporting. */
  data?: Record<string, unknown>;
}

export interface Rule {
  id: string;
  name: string;
  description: string;
  category: RuleCategory;
  severity: RuleSeverity;
  /** Lower number = higher priority. */
  priority: number;
  enabled: boolean;
  source?: RuleSource;
  /** Pure function. Must not mutate the context. */
  evaluate: (ctx: RuleContext) => RuleEvaluationResult | Promise<RuleEvaluationResult>;
}

export interface RuleExecution {
  rule: Rule;
  outcome: RuleOutcome;
  message?: string;
  data?: Record<string, unknown>;
  /** Milliseconds spent in `evaluate`. */
  durationMs: number;
  error?: string;
}

export interface RuleEngineReport {
  startedAt: string;
  finishedAt: string;
  totalDurationMs: number;
  executions: RuleExecution[];
  triggered: RuleExecution[]; // outcome !== "passed"
  passed: RuleExecution[];
  failed: RuleExecution[];
  warnings: RuleExecution[];
  skipped: Rule[]; // disabled rules
}

// ---------- Registry ----------

const registry = new Map<string, Rule>();

export function registerRule(rule: Rule): void {
  if (registry.has(rule.id)) {
    // Overwrite is intentional (hot-reload / AI-injected rules).
    // Could log here if a logger is wired up.
  }
  registry.set(rule.id, rule);
}

export function unregisterRule(id: string): boolean {
  return registry.delete(id);
}

export function getRule(id: string): Rule | undefined {
  return registry.get(id);
}

export function listRules(): Rule[] {
  return Array.from(registry.values());
}

export function setRuleEnabled(id: string, enabled: boolean): void {
  const r = registry.get(id);
  if (r) registry.set(id, { ...r, enabled });
}

export function clearRules(): void {
  registry.clear();
}

// ---------- Dynamic loading from configuration ----------

export interface RuleConfigEntry {
  id: string;
  enabled?: boolean;
  priority?: number;
  severity?: RuleSeverity;
}

export interface RuleConfig {
  rules: RuleConfigEntry[];
}

/**
 * Apply a configuration object onto registered rules.
 * Rules not present in config keep their current state.
 */
export function applyRuleConfig(config: RuleConfig): void {
  for (const entry of config.rules) {
    const r = registry.get(entry.id);
    if (!r) continue;
    registry.set(entry.id, {
      ...r,
      enabled: entry.enabled ?? r.enabled,
      priority: entry.priority ?? r.priority,
      severity: entry.severity ?? r.severity,
    });
  }
}

/**
 * Load a batch of rule definitions (e.g. from JSON/remote/AI).
 * Functions must be supplied by the caller — JSON alone can't carry them.
 */
export function loadRules(rules: Rule[]): void {
  for (const r of rules) registerRule(r);
}

// ---------- Execution ----------

export interface RunOptions {
  /** Filter by category. */
  categories?: RuleCategory[];
  /** Run disabled rules too (default false). */
  includeDisabled?: boolean;
  /** Per-rule timeout in ms (default 2000). */
  timeoutMs?: number;
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`rule timed out after ${ms}ms`)), ms);
    p.then(
      (v) => {
        clearTimeout(t);
        resolve(v);
      },
      (e) => {
        clearTimeout(t);
        reject(e);
      },
    );
  });
}

export async function runRules(
  ctx: RuleContext,
  options: RunOptions = {},
): Promise<RuleEngineReport> {
  const { categories, includeDisabled = false, timeoutMs = 2000 } = options;
  const startedAt = new Date();
  const t0 = performance.now();

  const all = listRules().sort((a, b) => a.priority - b.priority);
  const skipped: Rule[] = [];
  const active = all.filter((r) => {
    if (!includeDisabled && !r.enabled) {
      skipped.push(r);
      return false;
    }
    if (categories && !categories.includes(r.category)) return false;
    return true;
  });

  const executions: RuleExecution[] = [];
  for (const rule of active) {
    const r0 = performance.now();
    try {
      const result = await withTimeout(Promise.resolve(rule.evaluate(ctx)), timeoutMs);
      executions.push({
        rule,
        outcome: result.outcome,
        message: result.message,
        data: result.data,
        durationMs: +(performance.now() - r0).toFixed(3),
      });
    } catch (err) {
      executions.push({
        rule,
        outcome: "failed",
        message: err instanceof Error ? err.message : String(err),
        durationMs: +(performance.now() - r0).toFixed(3),
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  const finishedAt = new Date();
  const totalDurationMs = +(performance.now() - t0).toFixed(3);

  const passed = executions.filter((e) => e.outcome === "passed");
  const warnings = executions.filter((e) => e.outcome === "warning");
  const failed = executions.filter((e) => e.outcome === "failed");
  const triggered = executions.filter((e) => e.outcome !== "passed");

  return {
    startedAt: startedAt.toISOString(),
    finishedAt: finishedAt.toISOString(),
    totalDurationMs,
    executions,
    triggered,
    passed,
    failed,
    warnings,
    skipped,
  };
}

// ---------- Built-in rules (mirror current thresholds, no logic change) ----------

const byKey = (ctx: RuleContext, key: Indicator["key"]) =>
  ctx.indicators.find((i) => i.key === key);

const thresholdEval =
  (key: Indicator["key"]) =>
  (ctx: RuleContext): RuleEvaluationResult => {
    const ind = byKey(ctx, key);
    if (!ind) return { outcome: "passed", message: "indicator missing" };
    const v = ind.value;
    if (v >= 71) return { outcome: "failed", message: `${key}=${v} in RED band`, data: { value: v } };
    if (v >= 41) return { outcome: "warning", message: `${key}=${v} in YELLOW band`, data: { value: v } };
    return { outcome: "passed", message: `${key}=${v} in GREEN band`, data: { value: v } };
  };

export const BUILTIN_RULES: Rule[] = [
  {
    id: "reality-gap.threshold",
    name: "Reality Gap threshold",
    description: "Flags Reality Gap when crossing yellow/red bands.",
    category: "realityGap",
    severity: "high",
    priority: 10,
    enabled: true,
    source: "builtin",
    evaluate: thresholdEval("realityGap"),
  },
  {
    id: "trust.threshold",
    name: "Trust threshold",
    description: "Flags Trust indicator when crossing yellow/red bands.",
    category: "trust",
    severity: "high",
    priority: 20,
    enabled: true,
    source: "builtin",
    evaluate: thresholdEval("trust"),
  },
  {
    id: "response-delay.threshold",
    name: "Response Delay threshold",
    description: "Flags Response Delay when crossing yellow/red bands.",
    category: "responseDelay",
    severity: "medium",
    priority: 30,
    enabled: true,
    source: "builtin",
    evaluate: thresholdEval("responseDelay"),
  },
];

/** Register the default rule set. Safe to call multiple times. */
export function registerBuiltinRules(): void {
  for (const r of BUILTIN_RULES) registerRule(r);
}

// Auto-register on import so the engine is usable out of the box.
registerBuiltinRules();
