import { getAnalysisRepository } from "./repository";
import type { Analysis, AnalysisListOptions, NewAnalysisInput } from "./types";

/**
 * Thin service layer over the repository. Keeps call sites free of any
 * knowledge of the underlying persistence provider and gives us a natural
 * place to add cross-cutting concerns later (auditing, events, validation).
 */
export const AnalysisService = {
  async recordCompleted(input: NewAnalysisInput): Promise<Analysis> {
    return getAnalysisRepository().create({ ...input, status: "Completed" });
  },
  async createDraft(input: NewAnalysisInput): Promise<Analysis> {
    return getAnalysisRepository().create({ ...input, status: "Draft" });
  },
  save(analysis: Analysis): Promise<Analysis> {
    return getAnalysisRepository().save(analysis);
  },
  getById(id: string): Promise<Analysis | null> {
    return getAnalysisRepository().getById(id);
  },
  list(opts?: AnalysisListOptions): Promise<Analysis[]> {
    return getAnalysisRepository().list(opts);
  },
  archive(id: string) {
    return getAnalysisRepository().archive(id);
  },
  remove(id: string) {
    return getAnalysisRepository().delete(id);
  },
};
