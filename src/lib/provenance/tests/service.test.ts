import { describe, expect, it } from "vitest";
import { ProvenanceService } from "../service";
import {
  ProvenanceEdge,
  ProvenanceGraph,
  ProvenanceNode,
} from "../types";
import { ProvenanceRepository } from "../repository";

class TestRepository implements ProvenanceRepository {
  private nodes: ProvenanceNode[] = [];
  private edges: ProvenanceEdge[] = [];

  async saveNode(node: ProvenanceNode): Promise<void> {
    this.nodes.push(node);
  }

  async saveEdge(edge: ProvenanceEdge): Promise<void> {
    this.edges.push(edge);
  }

  async getNode(id: string): Promise<ProvenanceNode | null> {
    return this.nodes.find((node) => node.id === id) ?? null;
  }

  async getNodes(): Promise<ProvenanceNode[]> {
    return this.nodes;
  }

  async getEdges(): Promise<ProvenanceEdge[]> {
    return this.edges;
  }

  async getGraph(caseId?: string): Promise<ProvenanceGraph> {
    return {
      id: "test",
      caseId,
      nodes: this.nodes,
      edges: this.edges,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
}

describe("ProvenanceService", () => {
  it("creates nodes through the repository", async () => {
    const repository = new TestRepository();
    const service = new ProvenanceService(repository);

    const node = await service.createNode({
      type: "SOURCE",
      title: "Test source",
      confidence: 1,
      verificationStatus: "UNVERIFIED",
      knowledgeStatus: "OBSERVATION",
    });

    expect(node.type).toBe("SOURCE");
    expect(await repository.getNode(node.id)).not.toBeNull();
  });
  it("rejects an illegal edge", async () => {
    const repository = new TestRepository();
    const service = new ProvenanceService(repository);

    const source = await service.createNode({
      type: "SOURCE",
      title: "Source",
      confidence: 1,
      verificationStatus: "UNVERIFIED",
      knowledgeStatus: "OBSERVATION",
    });

    const conclusion = await service.createNode({
      type: "CONCLUSION",
      title: "Conclusion",
      confidence: 1,
      verificationStatus: "UNVERIFIED",
      knowledgeStatus: "INFERENCE",
    });

    await expect(
      service.createEdge({
        fromId: source.id,
        toId: conclusion.id,
        relation: "CONCLUDES",
        confidence: 1,
        verificationStatus: "UNVERIFIED",
        createdBy: "test",
        sourceIds: [source.id],
      }),
    ).rejects.toThrow(
      "PROVENANCE_ILLEGAL_EDGE:SOURCE:CONCLUDES:CONCLUSION",
    );
  });

  it("creates a valid edge", async () => {
    const repository = new TestRepository();
    const service = new ProvenanceService(repository);

    const source = await service.createNode({
      type: "SOURCE",
      title: "Source",
      confidence: 1,
      verificationStatus: "UNVERIFIED",
      knowledgeStatus: "OBSERVATION",
    });

    const document = await service.createNode({
      type: "DOCUMENT",
      title: "Document",
      confidence: 1,
      verificationStatus: "UNVERIFIED",
      knowledgeStatus: "OBSERVATION",
    });

    const edge = await service.createEdge({
      fromId: source.id,
      toId: document.id,
      relation: "DERIVED_FROM",
      confidence: 1,
      verificationStatus: "UNVERIFIED",
      createdBy: "test",
      sourceIds: [source.id],
    });

    expect(edge.fromId).toBe(source.id);
    expect(edge.toId).toBe(document.id);
    expect(edge.relation).toBe("DERIVED_FROM");
  });

});
