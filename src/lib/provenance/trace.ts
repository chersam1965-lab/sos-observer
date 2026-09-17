import { ProvenanceGraph, ProvenanceNode } from "./types";
export interface ProvenanceTrace {
  nodeId: string;
  path: ProvenanceNode[];
  complete: boolean;
}
export function traceFromNode(graph: ProvenanceGraph, startNodeId: string): ProvenanceTrace {
  const startNode = graph.nodes.find((node) => node.id === startNodeId);
  if (!startNode) throw new Error("PROVENANCE_NODE_NOT_FOUND");
  const path: ProvenanceNode[] = [startNode];
  const visited = new Set<string>([startNode.id]);
  let currentId = startNode.id;
  while (true) {
    const edge = graph.edges.find((item) => item.fromId === currentId);
    if (!edge) break;
    if (visited.has(edge.toId)) throw new Error("PROVENANCE_TRACE_CYCLE");
    const nextNode = graph.nodes.find((node) => node.id === edge.toId);
    if (!nextNode) throw new Error("PROVENANCE_NODE_NOT_FOUND");
    path.push(nextNode);
    visited.add(nextNode.id);
    currentId = nextNode.id;
  }
  return {
    nodeId: startNodeId,
    path,
    complete: path[path.length - 1]?.type === "CONCLUSION",
  };
}
