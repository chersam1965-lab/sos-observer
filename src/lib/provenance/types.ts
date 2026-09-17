export type ProvenanceNodeType =
  | "SOURCE"
  | "DOCUMENT"
  | "CLAIM"
  | "EVIDENCE"
  | "ENTITY"
  | "EVENT"
  | "INFERENCE"
  | "CONCLUSION";

export type ProvenanceRelation =
  | "DERIVED_FROM"
  | "SUPPORTS"
  | "CONTRADICTS"
  | "MENTIONS"
  | "IDENTIFIES"
  | "LOCATES"
  | "OCCURRED_AT"
  | "INFERRED_FROM"
  | "CONCLUDES"
  | "RELATED_TO";

export type VerificationStatus =
  | "UNVERIFIED"
  | "PARTIALLY_VERIFIED"
  | "VERIFIED"
  | "REJECTED"
  | "CONTESTED";

export type KnowledgeStatus =
  | "FACT"
  | "OBSERVATION"
  | "INFERENCE"
  | "HYPOTHESIS";

export interface ProvenanceBase {
  id: string;
  type: ProvenanceNodeType;
  createdAt: string;
  updatedAt: string;
  title: string;
  description?: string;
  sourceId?: string;
  documentId?: string;
  confidence: number;
  verificationStatus: VerificationStatus;
  knowledgeStatus: KnowledgeStatus;
  metadata?: Record<string, unknown>;
}

export interface ProvenanceNode extends ProvenanceBase {
  content?: string;
  hash?: string;
}

export interface ProvenanceEdge {
  id: string;
  fromId: string;
  toId: string;
  relation: ProvenanceRelation;
  createdAt: string;
  createdBy: string;
  confidence: number;
  verificationStatus: VerificationStatus;
  justification?: string;
  sourceIds: string[];
  metadata?: Record<string, unknown>;
}

export interface ProvenanceGraph {
  id: string;
  caseId?: string;
  nodes: ProvenanceNode[];
  edges: ProvenanceEdge[];
  createdAt: string;
  updatedAt: string;
  integrityHash?: string;
}
