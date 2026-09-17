import {
  ProvenanceEdge,
  ProvenanceGraph,
  ProvenanceNode,
} from "./types";
import { ProvenanceRepository } from "./repository";

const NODES_KEY = "gsos.provenance.nodes";
const EDGES_KEY = "gsos.provenance.edges";

function readArray<T>(key: string): T[] {
  const raw = localStorage.getItem(key);

  if (!raw) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(raw);

    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function writeArray<T>(key: string, value: T[]): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export class LocalStorageProvenanceRepository
  implements ProvenanceRepository
{
  async saveNode(node: ProvenanceNode): Promise<void> {
    const nodes = readArray<ProvenanceNode>(NODES_KEY);

    const index = nodes.findIndex((item) => item.id === node.id);

    if (index >= 0) {
      nodes[index] = node;
    } else {
      nodes.push(node);
    }

    writeArray(NODES_KEY, nodes);
  }

  async saveEdge(edge: ProvenanceEdge): Promise<void> {
    const edges = readArray<ProvenanceEdge>(EDGES_KEY);

    const index = edges.findIndex((item) => item.id === edge.id);

    if (index >= 0) {
      edges[index] = edge;
    } else {
      edges.push(edge);
    }

    writeArray(EDGES_KEY, edges);
  }

  async getNode(id: string): Promise<ProvenanceNode | null> {
    const nodes = readArray<ProvenanceNode>(NODES_KEY);

    return nodes.find((node) => node.id === id) ?? null;
  }

  async getNodes(): Promise<ProvenanceNode[]> {
    return readArray<ProvenanceNode>(NODES_KEY);
  }

  async getEdges(): Promise<ProvenanceEdge[]> {
    return readArray<ProvenanceEdge>(EDGES_KEY);
  }

  async getGraph(caseId?: string): Promise<ProvenanceGraph> {
    const nodes = await this.getNodes();
    const edges = await this.getEdges();

    const now = new Date().toISOString();

    return {
      id: "gsos-provenance",
      caseId,
      nodes,
      edges,
      createdAt: now,
      updatedAt: now,
    };
  }
}
