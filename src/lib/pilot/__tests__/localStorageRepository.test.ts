import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { LocalStoragePilotRepository } from "../localStorageRepository";
import type { NewPilotFeedbackInput, NewPilotSessionInput } from "../types";

const baseSession = (overrides: Partial<NewPilotSessionInput> = {}): NewPilotSessionInput => ({
  analysisId: "GSOS-20260703-100000-ABCD",
  reportId: "GSOS-20260703-100000-ABCD",
  language: "en",
  indicators: { realityGap: 20, trust: 40, responseDelay: 55 },
  globalStatus: "monitor",
  appVersion: "1.3.0-dev",
  ...overrides,
});

const baseFeedback = (
  sessionId: string,
  overrides: Partial<NewPilotFeedbackInput> = {},
): NewPilotFeedbackInput => ({
  sessionId,
  accuracyScore: 4,
  usefulnessScore: 5,
  notes: "clear and useful report",
  suggestions: "add trend charts",
  ...overrides,
});

describe("LocalStoragePilotRepository", () => {
  let repo: LocalStoragePilotRepository;

  beforeEach(() => {
    localStorage.clear();
    repo = new LocalStoragePilotRepository();
  });
  afterEach(() => localStorage.clear());

  it("logs a session with generated id and timestamp", async () => {
    const s = await repo.logSession(baseSession());
    expect(s.sessionId).toMatch(/[0-9a-f-]{36}/i);
    expect(s.timestamp).toBeTruthy();
  });

  it("is idempotent when the same sessionId is logged twice", async () => {
    const s = await repo.logSession(baseSession({ sessionId: "fixed" }));
    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
    const rows = await repo.listSessions();
    expect(rows).toHaveLength(1);
    expect(rows[0].globalStatus).toBe("risk");
    expect(s.sessionId).toBe("fixed");
  });

  it("persists sessions across instances", async () => {
    await repo.logSession(baseSession({ sessionId: "s1" }));
    const fresh = new LocalStoragePilotRepository();
    const rows = await fresh.listSessions();
    expect(rows.map((r) => r.sessionId)).toEqual(["s1"]);
  });

  it("stores exactly one feedback per session (replaces previous)", async () => {
    const s = await repo.logSession(baseSession({ sessionId: "s1" }));
    await repo.submitFeedback(baseFeedback(s.sessionId, { notes: "v1" }));
    await repo.submitFeedback(baseFeedback(s.sessionId, { notes: "v2" }));
    const all = await repo.listFeedback();
    expect(all).toHaveLength(1);
    expect(all[0].notes).toBe("v2");
    const one = await repo.getFeedbackForSession("s1");
    expect(one?.notes).toBe("v2");
  });

  it("returns null for missing feedback", async () => {
    expect(await repo.getFeedbackForSession("nope")).toBeNull();
  });

  it("sorts listSessions desc by timestamp", async () => {
    await repo.logSession(baseSession({ sessionId: "a" }));
    await new Promise((r) => setTimeout(r, 5));
    await repo.logSession(baseSession({ sessionId: "b" }));
    const rows = await repo.listSessions();
    expect(rows.map((r) => r.sessionId)).toEqual(["b", "a"]);
  });

  it("clearAll wipes both stores", async () => {
    const s = await repo.logSession(baseSession());
    await repo.submitFeedback(baseFeedback(s.sessionId));
    await repo.clearAll();
    expect(await repo.listSessions()).toEqual([]);
    expect(await repo.listFeedback()).toEqual([]);
  });
});
