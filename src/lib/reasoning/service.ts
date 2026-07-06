import { reason } from "./engine";
import { getReasoningRepository } from "./repository";
import type { ReasoningInput, ReasoningTrace } from "./types";

export interface RunReasoningInput {
  input: ReasoningInput;
  sprintCode: string;
  appVersion: string;
  /** Optional deterministic override for tests. Otherwise generated from timestamp+seq. */
  traceId?: string;
}

function makeTraceId(sprintCode: string, appVersion: string, seq: number, timestamp: string): string {
  return `R-${appVersion}.${sprintCode}.${seq}-${timestamp.replace(/[^0-9]/g, "").slice(0, 14)}`;
}

export const ReasoningService = {
  list(): Promise<ReasoningTrace[]> {
    return getReasoningRepository().list();
  },
  getById(id: string) {
    return getReasoningRepository().getById(id);
  },
  clearAll() {
    return getReasoningRepository().clearAll();
  },
  async run(cmd: RunReasoningInput): Promise<ReasoningTrace> {
    const repo = getReasoningRepository();
    const existing = await repo.list();
    const seq = existing.filter(
      (t) => t.sprintCode === cmd.sprintCode && t.appVersion === cmd.appVersion,
    ).length;
    const traceId =
      cmd.traceId ?? makeTraceId(cmd.sprintCode, cmd.appVersion, seq, cmd.input.timestamp);
    const trace = reason(cmd.input, {
      traceId,
      sprintCode: cmd.sprintCode,
      appVersion: cmd.appVersion,
    });
    await repo.append(trace);
    return trace;
  },
};
