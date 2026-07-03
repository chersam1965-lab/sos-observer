/**
 * Pilot Validation Program — domain model (V1.3 Sprint S0).
 *
 * Pilot data lives in a SEPARATE store from the Analysis repository. The
 * original Analysis record is never mutated by Pilot feedback — Pilot only
 * references it by id for traceability.
 */

import type { Lang } from "@/lib/i18n";
import type { OverallRiskLevel } from "@/lib/analysis/types";

export interface PilotSession {
  sessionId: string;
  analysisId: string;
  reportId: string;
  timestamp: string;
  language: Lang;
  indicators: {
    realityGap: number;
    trust: number;
    responseDelay: number;
  };
  globalStatus: OverallRiskLevel;
  appVersion: string;
}

export type NewPilotSessionInput = Omit<PilotSession, "sessionId" | "timestamp"> & {
  sessionId?: string;
  timestamp?: string;
};

export interface PilotFeedback {
  feedbackId: string;
  sessionId: string;
  createdAt: string;
  accuracyScore: number; // 1..5
  usefulnessScore: number; // 1..5
  notes: string;
  suggestions: string;
}

export type NewPilotFeedbackInput = Omit<PilotFeedback, "feedbackId" | "createdAt"> & {
  feedbackId?: string;
  createdAt?: string;
};

export interface PilotAggregate {
  totalSessions: number;
  totalFeedback: number;
  averageAccuracy: number | null;
  averageUsefulness: number | null;
  averageCombined: number | null;
  statusDistribution: Record<OverallRiskLevel, number>;
  languageDistribution: Record<Lang, number>;
  topKeywords: { word: string; count: number }[];
}

export interface PilotRepository {
  logSession(input: NewPilotSessionInput): Promise<PilotSession>;
  submitFeedback(input: NewPilotFeedbackInput): Promise<PilotFeedback>;
  listSessions(): Promise<PilotSession[]>;
  listFeedback(): Promise<PilotFeedback[]>;
  getFeedbackForSession(sessionId: string): Promise<PilotFeedback | null>;
  clearAll(): Promise<void>;
}
