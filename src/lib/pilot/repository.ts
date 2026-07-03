import { LocalStoragePilotRepository } from "./localStorageRepository";
import type { PilotRepository } from "./types";

let instance: PilotRepository | null = null;

export function getPilotRepository(): PilotRepository {
  if (!instance) instance = new LocalStoragePilotRepository();
  return instance;
}

/** Test/DI hook. */
export function setPilotRepository(repo: PilotRepository): void {
  instance = repo;
}
