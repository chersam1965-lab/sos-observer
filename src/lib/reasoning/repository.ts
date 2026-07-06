import { LocalStorageReasoningRepository } from "./localStorageRepository";
import type { ReasoningRepository } from "./types";

let instance: ReasoningRepository | null = null;

export function getReasoningRepository(): ReasoningRepository {
  if (!instance) instance = new LocalStorageReasoningRepository();
  return instance;
}

export function setReasoningRepository(repo: ReasoningRepository): void {
  instance = repo;
}
