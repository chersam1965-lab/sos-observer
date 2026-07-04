import { LocalStorageScientificRepository } from "./localStorageRepository";
import type { ScientificRepository } from "./types";

let instance: ScientificRepository | null = null;

export function getScientificRepository(): ScientificRepository {
  if (!instance) instance = new LocalStorageScientificRepository();
  return instance;
}

export function setScientificRepository(repo: ScientificRepository): void {
  instance = repo;
}
