import { describe, expect, it } from "vitest";
import { graphIntegrityHash, verifyGraphIntegrity } from "../integrity";
import { ProvenanceGraph } from "../types";

const graph: ProvenanceGraph = {
  id: "integrity-test",
  nodes: [],
  edges: [],
  createdAt: "2026-01-01T00:00:00.000Z",
  updatedAt: "2026-01-01T00:00:00.000Z",
};

describe("Graph Integrity", () => {
  it("creates a deterministic SHA-256 hash", async () => {
    const hash1 = await graphIntegrityHash(graph);
    const hash2 = await graphIntegrityHash(graph);

    expect(hash1).toBe(hash2);
    expect(hash1).toMatch(/^[0-9a-f]{64}$/);
  });

  it("verifies the original graph", async () => {
    const hash = await graphIntegrityHash(graph);

    expect(await verifyGraphIntegrity(graph, hash)).toBe(true);
  });

  it("detects a modified graph", async () => {
    const hash = await graphIntegrityHash(graph);

    const modified: ProvenanceGraph = {
      ...graph,
      id: "modified",
    };

    expect(await verifyGraphIntegrity(modified, hash)).toBe(false);
  });
});
