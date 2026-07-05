import { runExtraction } from "./engine";
import { getKnowledgeRepository } from "./repository";
import type { KnowledgeSources, KnowledgeVersion } from "./types";

export interface ExtractInput {
  sources: KnowledgeSources;
  sprintCode: string;
  appVersion: string;
}

export const KnowledgeService = {
  list(): Promise<KnowledgeVersion[]> {
    return getKnowledgeRepository().list();
  },
  getById(id: string) {
    return getKnowledgeRepository().getById(id);
  },
  clearAll() {
    return getKnowledgeRepository().clearAll();
  },
  async extract(input: ExtractInput): Promise<KnowledgeVersion> {
    const repo = getKnowledgeRepository();
    const existing = await repo.list();
    const seq =
      existing.filter((v) => v.sprintCode === input.sprintCode && v.appVersion === input.appVersion)
        .length;
    const version = await runExtraction({
      sources: input.sources,
      sprintCode: input.sprintCode,
      appVersion: input.appVersion,
      seq,
    });
    await repo.append(version);
    return version;
  },
};
