/**
 * Scientific Validation Framework — domain model (V1.3 Sprint S1).
 *
 * This module is intentionally isolated from Analysis, Dashboard, PDF,
 * and Pilot. Experiments store SNAPSHOTS of GSOS output vs. an expert
 * ground truth; nothing here mutates any other repository.
 */

import type { Lang } from "@/lib/i18n";
import type { OverallRiskLevel } from "@/lib/analysis/types";

export type MatchFlag = "match" | "partial" | "mismatch";

export interface GsosResultSnapshot {
  realityGap: number;
  trust: number;
  responseDelay: number;
  globalStatus: OverallRiskLevel;
  summary: string;
}

export interface GroundTruth {
  globalStatus: OverallRiskLevel;
  notes: string;
}

export interface Experiment {
  experimentId: string;
  createdAt: string;
  language: Lang;
  objective: string;
  caseType: string;
  caseDescription: string;
  inputData: string;
  gsosResult: GsosResultSnapshot;
  groundTruth: GroundTruth;
  matchRate: number; // 0..100
  matchFlag: MatchFlag;
  evaluatorNotes: string;
}

export type NewExperimentInput = Omit<
  Experiment,
  "experimentId" | "createdAt" | "matchRate" | "matchFlag"
> & {
  experimentId?: string;
  createdAt?: string;
};

export interface ScientificAggregate {
  totalExperiments: number;
  matches: number;
  partials: number;
  mismatches: number;
  successRate: number | null; // % of experiments flagged "match"
  averageMatchRate: number | null;
  languageDistribution: Record<Lang, number>;
  caseTypeDistribution: Record<string, number>;
  performanceOverTime: { weekStart: string; total: number; matches: number; successRate: number }[];
}

export interface ScientificRepository {
  create(input: NewExperimentInput): Promise<Experiment>;
  save(experiment: Experiment): Promise<Experiment>;
  getById(experimentId: string): Promise<Experiment | null>;
  list(): Promise<Experiment[]>;
  delete(experimentId: string): Promise<boolean>;
  clearAll(): Promise<void>;
}
