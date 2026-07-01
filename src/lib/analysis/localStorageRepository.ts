import type {
  Analysis,
  AnalysisListOptions,
  AnalysisRepository,
  NewAnalysisInput,
} from "./types";

const STORAGE_KEY = "gsos.analyses.v1";

function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  // RFC4122-ish fallback
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function readAll(): Analysis[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Analysis[]) : [];
  } catch {
    return [];
  }
}

function writeAll(rows: Analysis[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
}

function tsOf(a: Analysis): number {
  return new Date(a.completedAt ?? a.createdAt).getTime();
}

export class LocalStorageAnalysisRepository implements AnalysisRepository {
  async create(input: NewAnalysisInput): Promise<Analysis> {
    const now = new Date().toISOString();
    const status = input.status ?? "Completed";
    const analysis: Analysis = {
      analysisId: input.analysisId ?? uuid(),
      createdAt: now,
      completedAt: status === "Completed" ? now : null,
      organizationId: input.organizationId ?? null,
      userId: input.userId ?? null,
      engineVersion: input.engineVersion,
      questionnaireVersion: input.questionnaireVersion,
      overallRiskLevel: input.overallRiskLevel,
      realityGapIndex: input.realityGapIndex,
      trustIndex: input.trustIndex,
      responseDelayIndex: input.responseDelayIndex,
      executiveSummary: input.executiveSummary,
      recommendedAction: input.recommendedAction,
      status,
    };
    const rows = readAll();
    rows.push(analysis);
    writeAll(rows);
    return analysis;
  }

  async save(analysis: Analysis): Promise<Analysis> {
    const rows = readAll();
    const idx = rows.findIndex((r) => r.analysisId === analysis.analysisId);
    if (idx === -1) rows.push(analysis);
    else rows[idx] = analysis;
    writeAll(rows);
    return analysis;
  }

  async getById(analysisId: string): Promise<Analysis | null> {
    return readAll().find((r) => r.analysisId === analysisId) ?? null;
  }

  async list(options: AnalysisListOptions = {}): Promise<Analysis[]> {
    const { limit, offset = 0, status, order = "desc" } = options;
    let rows = readAll();
    if (status) rows = rows.filter((r) => r.status === status);
    rows.sort((a, b) => (order === "asc" ? tsOf(a) - tsOf(b) : tsOf(b) - tsOf(a)));
    if (offset) rows = rows.slice(offset);
    if (typeof limit === "number") rows = rows.slice(0, limit);
    return rows;
  }

  async archive(analysisId: string): Promise<Analysis | null> {
    const existing = await this.getById(analysisId);
    if (!existing) return null;
    return this.save({ ...existing, status: "Archived" });
  }

  async delete(analysisId: string): Promise<boolean> {
    const rows = readAll();
    const next = rows.filter((r) => r.analysisId !== analysisId);
    const changed = next.length !== rows.length;
    if (changed) writeAll(next);
    return changed;
  }
}
