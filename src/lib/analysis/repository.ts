import { LocalStorageAnalysisRepository } from "./localStorageRepository";
import type { AnalysisRepository } from "./types";

/**
 * Single injection point for the active persistence provider.
 *
 * Swap this to a Supabase- or Postgres-backed implementation in a future
 * sprint without changing any call site. Consumers should import
 * {@link getAnalysisRepository} rather than constructing a provider directly.
 */
let instance: AnalysisRepository | null = null;

export function getAnalysisRepository(): AnalysisRepository {
  if (!instance) instance = new LocalStorageAnalysisRepository();
  return instance;
}

/** Test/DI hook — allows swapping the provider at runtime. */
export function setAnalysisRepository(repo: AnalysisRepository): void {
  instance = repo;
}
