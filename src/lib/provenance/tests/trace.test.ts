import { describe, expect, it } from "vitest";
import { traceFromNode } from "../trace";
import { ProvenanceGraph } from "../types";

describe("ProvenanceTrace", () => {
  it("traces SOURCE to CONCLUSION", () => {
    const graph: ProvenanceGraph = {
      id: "trace-test",
      nodes: [
        {
          id: "source-1",
          type: "SOURCE",
          title: "Source",
          confidence: 1,
          verificationStatus: "UNVERIFIED",
          knowledgeStatus: "OBSERVATION",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "document-1",
          type: "DOCUMENT",
          title: "Document",
          confidence: 1,
          verificationStatus: "UNVERIFIED",
          knowledgeStatus: "OBSERVATION",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "conclusion-1",
          type: "CONCLUSION",
          title: "Conclusion",
          confidence: 1,
          verificationStatus: "UNVERIFIED",
          knowledgeStatus: "INFERENCE",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      edges: [
        {
          id: "edge-1",
          fromId: "source-1",
          toId: "document-1",
          relation: "DERIVED_FROM",
          confidence: 1,
          verificationStatus: "UNVERIFIED",
          createdBy: "test",
          sourceIds: ["source-1"],
          createdAt: new Date().toISOString(),
        },
        {
          id: "edge-2",
          fromId: "document-1",
          toId: "conclusion-1",
          relation: "SUPPORTS",
          confidence: 1,
          verificationStatus: "UNVERIFIED",
          createdBy: "test",
          sourceIds: ["source-1"],
          createdAt: new Date().toISOString(),
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const trace = traceFromNode(graph, "source-1");

    expect(trace.path.map((node) => node.type)).toEqual([
      "SOURCE",
      "DOCUMENT",
      "CONCLUSION",
    ]);

    expect(trace.complete).toBe(true);
  });
});
