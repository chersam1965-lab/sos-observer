/**
 * Analysis domain model — Sprint 4 (GSOS V2).
 *
 * A completed Analysis is a first-class business entity that persists the
 * outcome of a diagnostic run. The shape here is intentionally storage-agnostic
 * so it can be serialized to Local Storage today and later mapped to Supabase,
 * PostgreSQL, or any other provider without touching call sites.
 */

export type AnalysisStatus = "Draft" | "Completed" | "Archived";
export type OverallRiskLevel = "stable" | "monitor" | "risk";

export interface Analysis {
  /** UUID v4. Stable business identifier. */
  analysisId: string;
  /** ISO-8601 timestamp when the analysis record was created (Draft). */
  createdAt: string;
  /** ISO-8601 timestamp when the analysis was marked Completed. */
  completedAt: string | null;

  /** Reserved for multi-tenant support. Nullable in V2 Sprint 4. */
  organizationId: string | null;
  /** Reserved for user attribution. Nullable in V2 Sprint 4. */
  userId: string | null;

  /** Version of the computation/engine that produced the indicators. */
  engineVersion: string;
  /** Version of the questionnaire/inputs used to feed the engine. */
  questionnaireVersion: string;

  overallRiskLevel: OverallRiskLevel;
  realityGapIndex: number;
  trustIndex: number;
  responseDelayIndex: number;

  executiveSummary: string;
  recommendedAction: string;

  status: AnalysisStatus;
}

export type NewAnalysisInput = Omit<
  Analysis,
  "analysisId" | "createdAt" | "completedAt" | "status"
> & {
  analysisId?: string;
  status?: AnalysisStatus;
};

export interface AnalysisListOptions {
  limit?: number;
  offset?: number;
  status?: AnalysisStatus;
  /** Sort by completedAt (fallback createdAt) — default "desc". */
  order?: "asc" | "desc";
}

/**
 * Storage-agnostic repository contract. All methods are async so future
 * providers (Supabase, PostgreSQL, REST) can be dropped in with no changes
 * at the call site.
 */
export interface AnalysisRepository {
  create(input: NewAnalysisInput): Promise<Analysis>;
  save(analysis: Analysis): Promise<Analysis>;
  getById(analysisId: string): Promise<Analysis | null>;
  list(options?: AnalysisListOptions): Promise<Analysis[]>;
  /** Prepared for future UI. Marks the record as Archived. */
  archive(analysisId: string): Promise<Analysis | null>;
  /** Prepared for future UI. Hard-delete. */
  delete(analysisId: string): Promise<boolean>;
}
