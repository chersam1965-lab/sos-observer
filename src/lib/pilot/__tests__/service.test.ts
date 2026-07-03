import { beforeEach, describe, expect, it } from "vitest";
import { LocalStoragePilotRepository } from "../localStorageRepository";
import { setPilotRepository } from "../repository";
import {
  PilotService,
  isPilotModeEnabled,
  setPilotModeEnabled,
} from "../service";

describe("PilotService", () => {
  beforeEach(() => {
    localStorage.clear();
    setPilotRepository(new LocalStoragePilotRepository());
  });

  it("logSession + submitFeedback flow", async () => {
    const s = await PilotService.logSession({
      analysisId: "A1",
      reportId: "A1",
      language: "fr",
      indicators: { realityGap: 10, trust: 20, responseDelay: 30 },
      globalStatus: "stable",
      appVersion: "1.3.0-dev",
    });
    await PilotService.submitFeedback({
      sessionId: s.sessionId,
      accuracyScore: 5,
      usefulnessScore: 4,
      notes: "great",
      suggestions: "",
    });
    const fb = await PilotService.getFeedbackForSession(s.sessionId);
    expect(fb?.accuracyScore).toBe(5);
  });

  it("aggregate computes averages, distributions, and keywords", async () => {
    const langs = ["en", "en", "fr"] as const;
    const statuses = ["stable", "risk", "monitor"] as const;
    for (let i = 0; i < 3; i++) {
      const s = await PilotService.logSession({
        analysisId: `A${i}`,
        reportId: `A${i}`,
        language: langs[i],
        indicators: { realityGap: 10, trust: 20, responseDelay: 30 },
        globalStatus: statuses[i],
        appVersion: "1.3.0-dev",
      });
      await PilotService.submitFeedback({
        sessionId: s.sessionId,
        accuracyScore: 4,
        usefulnessScore: 5,
        notes: "trend charts would help clarity",
        suggestions: "add trend export",
      });
    }
    const agg = await PilotService.aggregate();
    expect(agg.totalSessions).toBe(3);
    expect(agg.totalFeedback).toBe(3);
    expect(agg.averageAccuracy).toBe(4);
    expect(agg.averageUsefulness).toBe(5);
    expect(agg.averageCombined).toBe(4.5);
    expect(agg.statusDistribution).toEqual({ stable: 1, monitor: 1, risk: 1 });
    expect(agg.languageDistribution).toEqual({ en: 2, fr: 1, ar: 0 });
    expect(agg.topKeywords[0]?.word).toBe("trend");
  });

  it("aggregate handles empty state", async () => {
    const agg = await PilotService.aggregate();
    expect(agg.totalSessions).toBe(0);
    expect(agg.totalFeedback).toBe(0);
    expect(agg.averageAccuracy).toBeNull();
    expect(agg.topKeywords).toEqual([]);
  });

  it("pilot mode flag toggles via localStorage", () => {
    expect(isPilotModeEnabled()).toBe(false);
    setPilotModeEnabled(true);
    expect(isPilotModeEnabled()).toBe(true);
    setPilotModeEnabled(false);
    expect(isPilotModeEnabled()).toBe(false);
  });
});
