import type { KnowledgeRepository, KnowledgeVersion } from "./types";

const KEY = "gsos.knowledge.versions.v1";

function readAll(): KnowledgeVersion[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as KnowledgeVersion[]) : [];
  } catch {
    return [];
  }
}

function writeAll(rows: KnowledgeVersion[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(rows));
}

export class LocalStorageKnowledgeRepository implements KnowledgeRepository {
  async append(version: KnowledgeVersion): Promise<KnowledgeVersion> {
    const rows = readAll();
    rows.push(version);
    writeAll(rows);
    return version;
  }

  async list(): Promise<KnowledgeVersion[]> {
    return readAll().sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  async getById(versionId: string): Promise<KnowledgeVersion | null> {
    return readAll().find((r) => r.versionId === versionId) ?? null;
  }

  async clearAll(): Promise<void> {
    if (typeof window === "undefined") return;
    localStorage.removeItem(KEY);
  }
}
