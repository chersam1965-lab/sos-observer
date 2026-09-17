import { ProvenanceGraph } from "./types";

export interface GraphValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateGraph(
  graph: ProvenanceGraph,
): GraphValidationResult {
  const errors: string[] = [];
  const nodeIds = new Set<string>();
  const edgeIds = new Set<string>();

  for (const node of graph.nodes) {
    if (nodeIds.has(node.id)) {
      errors.push(`PROVENANCE_DUPLICATE_NODE:${node.id}`);
    }
    nodeIds.add(node.id);
  }

  for (const edge of graph.edges) {
    if (edgeIds.has(edge.id)) {
      errors.push(`PROVENANCE_DUPLICATE_EDGE:${edge.id}`);
    }
    edgeIds.add(edge.id);

    if (!nodeIds.has(edge.fromId)) {
      errors.push(`PROVENANCE_MISSING_FROM_NODE:${edge.fromId}`);
    }

    if (!nodeIds.has(edge.toId)) {
      errors.push(`PROVENANCE_MISSING_TO_NODE:${edge.toId}`);
    }

    for (const sourceId of edge.sourceIds) {
      if (!nodeIds.has(sourceId)) {
        errors.push(`PROVENANCE_MISSING_SOURCE:${sourceId}`);
      }
    }
  }

  const adjacency = new Map<string, string[]>();

  for (const node of graph.nodes) {
    adjacency.set(node.id, []);
  }

  for (const edge of graph.edges) {
    const targets = adjacency.get(edge.fromId);

    if (targets) {
      targets.push(edge.toId);
    }
  }

  const visiting = new Set<string>();
  const visited = new Set<string>();

  function visit(nodeId: string): void {
    if (visiting.has(nodeId)) {
      errors.push(`PROVENANCE_GRAPH_CYCLE:${nodeId}`);
      return;
    }

    if (visited.has(nodeId)) {
      return;
    }

    visiting.add(nodeId);

    for (const nextId of adjacency.get(nodeId) ?? []) {
      visit(nextId);
    }

    visiting.delete(nodeId);
    visited.add(nodeId);
  }

  for (const node of graph.nodes) {
    visit(node.id);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
