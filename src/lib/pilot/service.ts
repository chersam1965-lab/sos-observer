import { getPilotRepository } from "./repository";
import type {
  NewPilotFeedbackInput,
  NewPilotSessionInput,
  PilotAggregate,
  PilotFeedback,
  PilotSession,
} from "./types";

const STOPWORDS = new Set([
  // en
  "the","a","an","and","or","but","of","to","in","on","for","with","is","are",
  "was","were","be","been","it","this","that","as","at","by","from","not","no",
  // fr
  "le","la","les","un","une","des","de","du","et","ou","mais","pour","avec","est",
  "sont","ce","ça","cette","ces","au","aux","dans","sur","par","pas","ne",
  // ar (common)
  "في","من","على","إلى","و","أن","لا","ما","هذا","هذه","التي","الذي","مع","عن",
  "قد","كان","كانت","لم","لن","هو","هي","نحن","انت","أنت","كل",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w));
}

function computeTopKeywords(feedback: PilotFeedback[], limit = 8) {
  const counts = new Map<string, number>();
  for (const f of feedback) {
    for (const w of tokenize(`${f.notes} ${f.suggestions}`)) {
      counts.set(w, (counts.get(w) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word, count]) => ({ word, count }));
}

export const PilotService = {
  logSession(input: NewPilotSessionInput): Promise<PilotSession> {
    return getPilotRepository().logSession(input);
  },
  submitFeedback(input: NewPilotFeedbackInput): Promise<PilotFeedback> {
    return getPilotRepository().submitFeedback(input);
  },
  listSessions(): Promise<PilotSession[]> {
    return getPilotRepository().listSessions();
  },
  listFeedback(): Promise<PilotFeedback[]> {
    return getPilotRepository().listFeedback();
  },
  getFeedbackForSession(sessionId: string) {
    return getPilotRepository().getFeedbackForSession(sessionId);
  },
  clearAll() {
    return getPilotRepository().clearAll();
  },
  async aggregate(): Promise<PilotAggregate> {
    const [sessions, feedback] = await Promise.all([
      getPilotRepository().listSessions(),
      getPilotRepository().listFeedback(),
    ]);
    const avg = (nums: number[]) =>
      nums.length === 0 ? null : nums.reduce((a, b) => a + b, 0) / nums.length;
    const accScores = feedback.map((f) => f.accuracyScore);
    const useScores = feedback.map((f) => f.usefulnessScore);
    const combined = feedback.map((f) => (f.accuracyScore + f.usefulnessScore) / 2);

    const statusDistribution = { stable: 0, monitor: 0, risk: 0 } as PilotAggregate["statusDistribution"];
    const languageDistribution = { en: 0, fr: 0, ar: 0 } as PilotAggregate["languageDistribution"];
    for (const s of sessions) {
      statusDistribution[s.globalStatus] = (statusDistribution[s.globalStatus] ?? 0) + 1;
      languageDistribution[s.language] = (languageDistribution[s.language] ?? 0) + 1;
    }

    return {
      totalSessions: sessions.length,
      totalFeedback: feedback.length,
      averageAccuracy: avg(accScores),
      averageUsefulness: avg(useScores),
      averageCombined: avg(combined),
      statusDistribution,
      languageDistribution,
      topKeywords: computeTopKeywords(feedback),
    };
  },
};

export const PILOT_MODE_KEY = "gsos.pilot.enabled";

export function isPilotModeEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(PILOT_MODE_KEY) === "1";
}

export function setPilotModeEnabled(enabled: boolean): void {
  if (typeof window === "undefined") return;
  if (enabled) localStorage.setItem(PILOT_MODE_KEY, "1");
  else localStorage.removeItem(PILOT_MODE_KEY);
}
