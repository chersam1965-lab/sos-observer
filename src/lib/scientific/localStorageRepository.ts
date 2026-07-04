import { computeMatch } from "./match";
import type {
  Experiment,
  NewExperimentInput,
  ScientificRepository,
} from "./types";

const KEY = "gsos.scientific.experiments.v1";

function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function readAll(): Experiment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Experiment[]) : [];
  } catch {
    return [];
  }
}

function writeAll(rows: Experiment[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(rows));
}

export class LocalStorageScientificRepository implements ScientificRepository {
  async create(input: NewExperimentInput): Promise<Experiment> {
    const { matchRate, matchFlag } = computeMatch(input.gsosResult, input.groundTruth);
    const exp: Experiment = {
      experimentId: input.experimentId ?? uuid(),
      createdAt: input.createdAt ?? new Date().toISOString(),
      language: input.language,
      objective: input.objective,
      caseType: input.caseType,
      caseDescription: input.caseDescription,
      inputData: input.inputData,
      gsosResult: input.gsosResult,
      groundTruth: input.groundTruth,
      matchRate,
      matchFlag,
      evaluatorNotes: input.evaluatorNotes,
    };
    const rows = readAll();
    rows.push(exp);
    writeAll(rows);
    return exp;
  }

  async save(experiment: Experiment): Promise<Experiment> {
    const { matchRate, matchFlag } = computeMatch(experiment.gsosResult, experiment.groundTruth);
    const updated: Experiment = { ...experiment, matchRate, matchFlag };
    const rows = readAll();
    const idx = rows.findIndex((r) => r.experimentId === updated.experimentId);
    if (idx === -1) rows.push(updated);
    else rows[idx] = updated;
    writeAll(rows);
    return updated;
  }

  async getById(experimentId: string): Promise<Experiment | null> {
    return readAll().find((r) => r.experimentId === experimentId) ?? null;
  }

  async list(): Promise<Experiment[]> {
    return readAll().sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  async delete(experimentId: string): Promise<boolean> {
    const rows = readAll();
    const next = rows.filter((r) => r.experimentId !== experimentId);
    if (next.length === rows.length) return false;
    writeAll(next);
    return true;
  }

  async clearAll(): Promise<void> {
    if (typeof window === "undefined") return;
    localStorage.removeItem(KEY);
  }
}
