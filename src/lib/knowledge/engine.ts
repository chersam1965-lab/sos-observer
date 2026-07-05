import { PilotService } from "@/lib/pilot";
import { ScientificService } from "@/lib/scientific";
import { extractDocs } from "./extractors/docsExtractor";
import { extractIndicators } from "./extractors/indicatorsExtractor";
import { extractPilotEvidence } from "./extractors/pilotExtractor";
import { extractRules } from "./extractors/rulesExtractor";
import { extractScientificEvidence } from "./extractors/scientificExtractor";
import { generateDocuments } from "./generator";
import type { KnowledgeSources, KnowledgeVersion } from "./types";

export interface ExtractOptions {
  sources: KnowledgeSources;
  sprintCode: string;
  appVersion: string;
  seq: number;
}

/**
 * Build a KnowledgeVersion from live aggregates + injected raw docs.
 * Pure read of PilotService / ScientificService (aggregates only).
 */
export async function runExtraction(opts: ExtractOptions): Promise<KnowledgeVersion> {
  const extractedAt = new Date().toISOString();
  const { sprintCode, appVersion, seq, sources } = opts;

  const [pilotAgg, sciAgg] = await Promise.all([
    PilotService.aggregate(),
    ScientificService.aggregate(),
  ]);

  const items = [
    ...extractIndicators(sprintCode, extractedAt),
    ...extractRules(sprintCode, extractedAt),
    ...extractPilotEvidence(pilotAgg, sprintCode, extractedAt),
    ...extractScientificEvidence(sciAgg, sprintCode, extractedAt),
    ...extractDocs(sources, sprintCode, extractedAt),
  ];

  const versionId = `K-${appVersion}.${sprintCode}.${seq}`;
  const sourcePaths = uniq([
    "src/lib/indicators.ts",
    "src/lib/analysis/types.ts",
    "src/lib/pilot/service.ts",
    "src/lib/scientific/service.ts",
    "CHANGELOG.md",
    "docs/ROADMAP.md",
    "docs/TECH_DEBT.md",
    ...sources.adrs.map((a) => a.path),
    ...sources.sprints.map((s) => s.path),
  ]);

  const documents = generateDocuments({
    versionId,
    createdAt: extractedAt,
    sprintCode,
    items,
    sourcesUsed: sourcePaths,
    pilotAgg,
    sciAgg,
    sources,
  });

  return {
    versionId,
    createdAt: extractedAt,
    appVersion,
    sprintCode,
    sources: sourcePaths,
    items,
    documents,
  };
}

function uniq<T>(a: T[]): T[] {
  return [...new Set(a)];
}
