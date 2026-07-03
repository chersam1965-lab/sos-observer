import type {
  NewPilotFeedbackInput,
  NewPilotSessionInput,
  PilotFeedback,
  PilotRepository,
  PilotSession,
} from "./types";

const SESSIONS_KEY = "gsos.pilot.sessions.v1";
const FEEDBACK_KEY = "gsos.pilot.feedback.v1";

function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function readAll<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function writeAll<T>(key: string, rows: T[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(rows));
}

export class LocalStoragePilotRepository implements PilotRepository {
  async logSession(input: NewPilotSessionInput): Promise<PilotSession> {
    const session: PilotSession = {
      sessionId: input.sessionId ?? uuid(),
      analysisId: input.analysisId,
      reportId: input.reportId,
      timestamp: input.timestamp ?? new Date().toISOString(),
      language: input.language,
      indicators: input.indicators,
      globalStatus: input.globalStatus,
      appVersion: input.appVersion,
    };
    const rows = readAll<PilotSession>(SESSIONS_KEY);
    // Idempotent: replace if same sessionId already recorded.
    const idx = rows.findIndex((r) => r.sessionId === session.sessionId);
    if (idx === -1) rows.push(session);
    else rows[idx] = session;
    writeAll(SESSIONS_KEY, rows);
    return session;
  }

  async submitFeedback(input: NewPilotFeedbackInput): Promise<PilotFeedback> {
    const feedback: PilotFeedback = {
      feedbackId: input.feedbackId ?? uuid(),
      sessionId: input.sessionId,
      createdAt: input.createdAt ?? new Date().toISOString(),
      accuracyScore: input.accuracyScore,
      usefulnessScore: input.usefulnessScore,
      notes: input.notes,
      suggestions: input.suggestions,
    };
    const rows = readAll<PilotFeedback>(FEEDBACK_KEY);
    // Enforce one feedback per session — replace previous if any.
    const filtered = rows.filter((r) => r.sessionId !== feedback.sessionId);
    filtered.push(feedback);
    writeAll(FEEDBACK_KEY, filtered);
    return feedback;
  }

  async listSessions(): Promise<PilotSession[]> {
    return readAll<PilotSession>(SESSIONS_KEY).sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    );
  }

  async listFeedback(): Promise<PilotFeedback[]> {
    return readAll<PilotFeedback>(FEEDBACK_KEY);
  }

  async getFeedbackForSession(sessionId: string): Promise<PilotFeedback | null> {
    return (
      readAll<PilotFeedback>(FEEDBACK_KEY).find((r) => r.sessionId === sessionId) ?? null
    );
  }

  async clearAll(): Promise<void> {
    if (typeof window === "undefined") return;
    localStorage.removeItem(SESSIONS_KEY);
    localStorage.removeItem(FEEDBACK_KEY);
  }
}
