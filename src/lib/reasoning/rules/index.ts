import type { Rule } from "../types";
import { BASE_RULES } from "./baseRules";

const registry: Rule[] = [...BASE_RULES];

export function getRules(): readonly Rule[] {
  return registry;
}

export function registerRule(rule: Rule): void {
  if (registry.some((r) => r.id === rule.id)) {
    throw new Error(`Reasoning rule already registered: ${rule.id}`);
  }
  registry.push(rule);
}

/** Test-only helper — restores the base rule set. */
export function __resetRulesForTests(): void {
  registry.length = 0;
  registry.push(...BASE_RULES);
}
