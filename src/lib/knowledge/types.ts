/**
 * Knowledge Extraction Engine — domain model (V1.3 Sprint S2).
 *
 * GKE turns knowledge already present inside GSOS Observer (indicators,
 * decision rules, ADRs, CHANGELOG, ROADMAP, Pilot + Scientific results)
 * into a structured, versioned, publishable body. It is READ-ONLY vs.
 * every other domain — nothing here mutates Analysis, Pilot, or
 * Scientific data.
 */

export type KnowledgeCategory =
  | "concept"
  | "principle"
  | "rule"
  | "decision"
  | "indicator"
  | "experiment"
  | "evidence"
  | "reference";

export interface KnowledgeItem {
  id: string;
  category: KnowledgeCategory;
  title: string;
  body: string;
  sourcePath: string;
  sprintCode: string;
  extractedAt: string;
}

export type KnowledgeDocumentKind =
  | "methodology"
  | "architecture"
  | "research"
  | "decisionRules"
  | "knowledgeBook"
  | "evolution";

export interface KnowledgeDocumentSection {
  heading: string;
  body: string;
}

export interface KnowledgeDocument {
  kind: KnowledgeDocumentKind;
  title: string;
  version: string;
  createdAt: string;
  sprintCode: string;
  sourcesUsed: string[];
  extractedComponents: string[];
  sections: KnowledgeDocumentSection[];
}

export interface KnowledgeVersion {
  versionId: string;
  createdAt: string;
  appVersion: string;
  sprintCode: string;
  sources: string[];
  items: KnowledgeItem[];
  documents: KnowledgeDocument[];
}

export interface KnowledgeRepository {
  append(version: KnowledgeVersion): Promise<KnowledgeVersion>;
  list(): Promise<KnowledgeVersion[]>;
  getById(versionId: string): Promise<KnowledgeVersion | null>;
  clearAll(): Promise<void>;
}

/** Raw text/data pulled from the project — injected into the engine. */
export interface KnowledgeSources {
  changelog: string;
  roadmap: string;
  techDebt: string;
  adrs: { path: string; content: string }[];
  sprints: { path: string; content: string }[];
}
