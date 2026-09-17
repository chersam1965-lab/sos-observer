import {
  ProvenanceEdge,
  ProvenanceGraph,
  ProvenanceNode,
} from "./types";

export interface ProvenanceRepository {
  saveNode(node: ProvenanceNode): Promise<void>;

  saveEdge(edge: ProvenanceEdge): Promise<void>;

  getNode(id: string): Promise<ProvenanceNode | null>;

  getNodes(): Promise<ProvenanceNode[]>;

  getEdges(): Promise<ProvenanceEdge[]>;

  getGraph(caseId?: string): Promise<ProvenanceGraph>;
}
