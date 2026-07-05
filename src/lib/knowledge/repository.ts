import { LocalStorageKnowledgeRepository } from "./localStorageRepository";
import type { KnowledgeRepository } from "./types";

let instance: KnowledgeRepository | null = null;

export function getKnowledgeRepository(): KnowledgeRepository {
  if (!instance) instance = new LocalStorageKnowledgeRepository();
  return instance;
}

export function setKnowledgeRepository(repo: KnowledgeRepository): void {
  instance = repo;
}
