import type { ReasoningRepository, ReasoningTrace } from "./types";

const KEY = "gsos.reasoning.traces.v1";

function readAll(): ReasoningTrace[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as ReasoningTrace[]) : [];
  } catch {
    return [];
  }
}

function writeAll(rows: ReasoningTrace[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(rows));
}

export class LocalStorageReasoningRepository implements ReasoningRepository {
  async append(trace: ReasoningTrace): Promise<ReasoningTrace> {
    const rows = readAll();
    rows.push(trace);
    writeAll(rows);
    return trace;
  }

  async list(): Promise<ReasoningTrace[]> {
    return readAll().sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  async getById(traceId: string): Promise<ReasoningTrace | null> {
    return readAll().find((r) => r.traceId === traceId) ?? null;
  }

  async clearAll(): Promise<void> {
    if (typeof window === "undefined") return;
    localStorage.removeItem(KEY);
  }
}
