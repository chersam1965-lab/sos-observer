import { describe, expect, it } from "vitest";
import { validateGraph } from "../graph";
import { ProvenanceGraph } from "../types";

function node(id: string, type: "SOURCE" | "DOCUMENT") {
  return {
    id,
    type,
    title: id,
    confidence: 1,
    verificationStatus: "UNVERIFIED" as const,
    knowledgeStatus: "OBSERVATION" as const,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function edge(id: string, fromId: string, toId: string) {
  return {
    id,
    fromId,
    toId,
    relation: "DERIVED_FROM" as const,
    confidence: 1,
    verificationStatus: "UNVERIFIED" as const,
    createdBy: "test",
    sourceIds: [],
    createdAt: new Date().toISOString(),
  };
}

function graph(nodes: ProvenanceGraph["nodes"], edges: ProvenanceGraph["edges"]): ProvenanceGraph {
  const now = new Date().toISOString();
  return { id: "test", nodes, edges, createdAt: now, updatedAt: now };
}

describe("Graph Validation", () => {
  it("accepts a valid graph", () => {
    const result = validateGraph(
      graph([node("s", "SOURCE"), node("d", "DOCUMENT")], [edge("e1", "s", "d")]),
    );
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it("rejects a missing target node", () => {
    const result = validateGraph(
      graph([node("s", "SOURCE")], [edge("e1", "s", "missing")]),
    );
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.startsWith("PROVENANCE_MISSING_TO_NODE:missing"))).toBe(true);
  });

  it("rejects duplicate node ids", () => {
    const result = validateGraph(
      graph([node("s", "SOURCE"), node("s", "SOURCE")], []),
    );
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("PROVENANCE_DUPLICATE_NODE:s");
  });

  it("rejects a cycle", () => {
    const result = validateGraph(
      graph(
        [node("s", "SOURCE"), node("d", "DOCUMENT")],
        [edge("e1", "s", "d"), edge("e2", "d", "s")],
      ),
    );
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.startsWith("PROVENANCE_GRAPH_CYCLE:"))).toBe(true);
  });
});
