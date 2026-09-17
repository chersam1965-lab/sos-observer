import {
  ProvenanceEdge,
  ProvenanceGraph,
  ProvenanceNode,
  ProvenanceNodeType,
  ProvenanceRelation,
  VerificationStatus,
  KnowledgeStatus,
} from "./types";

import { ProvenanceRepository } from "./repository";
import { assertConfidence, assertValidRelation } from "./validators";
export interface CreateNodeInput {
  type: ProvenanceNodeType;
  title: string;
  description?: string;
  content?: string;
  sourceId?: string;
  documentId?: string;
  confidence: number;
  verificationStatus: VerificationStatus;
  knowledgeStatus: KnowledgeStatus;
  metadata?: Record<string, unknown>;
}
export interface CreateEdgeInput {
  fromId: string;
  toId: string;
  relation: ProvenanceRelation;
  confidence: number;
  verificationStatus: VerificationStatus;
  createdBy: string;
  sourceIds: string[];
  justification?: string;
  metadata?: Record<string, unknown>;
}

export class ProvenanceService {
  constructor(
    private readonly repository: ProvenanceRepository,
  ) {}

  async createNode(
    input: CreateNodeInput,
  ): Promise<ProvenanceNode> {
    if (input.type === "INFERENCE" && !input.sourceId && !input.documentId && !input.metadata?.["sourceIds"]) {
      throw new Error("PROVENANCE_INFERENCE_REQUIRES_PROVENANCE");
    }

    assertConfidence(input.confidence);

    const now = new Date().toISOString();

    const node: ProvenanceNode = {
      id: crypto.randomUUID(),
      ...input,
      createdAt: now,
      updatedAt: now,
    };

    await this.repository.saveNode(node);
    return node;
  }
  async createEdge(
    input: CreateEdgeInput,
  ): Promise<ProvenanceEdge> {
    assertConfidence(input.confidence);

    const fromNode = await this.repository.getNode(input.fromId);
    const toNode = await this.repository.getNode(input.toId);

    if (!fromNode || !toNode) {
      throw new Error("PROVENANCE_NODE_NOT_FOUND");
    }

    assertValidRelation(
      fromNode.type,
      toNode.type,
      input.relation,
    );

    const edge: ProvenanceEdge = {
      id: crypto.randomUUID(),
      ...input,
      createdAt: new Date().toISOString(),
    };

    await this.repository.saveEdge(edge);

    return edge;
  }

  async getGraph(caseId?: string): Promise<ProvenanceGraph> {
    return this.repository.getGraph(caseId);
  }


}
