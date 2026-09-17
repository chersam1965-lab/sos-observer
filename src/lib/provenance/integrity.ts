import { ProvenanceGraph } from "./types";

function canonicalize(value: unknown): string {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }

  if (Array.isArray(value)) {
    return `[${value.map(canonicalize).join(",")}]`;
  }

  const record = value as Record<string, unknown>;
  const keys = Object.keys(record).sort();

  return `{${keys
    .map((key) => `${JSON.stringify(key)}:${canonicalize(record[key])}`)
    .join(",")}}`;
}

function normalizedGraph(graph: ProvenanceGraph): unknown {
  return {
    id: graph.id,
    caseId: graph.caseId ?? null,
    nodes: [...graph.nodes].sort((a, b) => a.id.localeCompare(b.id)),
    edges: [...graph.edges].sort((a, b) => a.id.localeCompare(b.id)),
  };
}

export function canonicalGraphString(graph: ProvenanceGraph): string {
  return canonicalize(normalizedGraph(graph));
}

export async function graphIntegrityHash(
  graph: ProvenanceGraph,
): Promise<string> {
  const data = new TextEncoder().encode(canonicalGraphString(graph));
  const digest = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyGraphIntegrity(
  graph: ProvenanceGraph,
  expectedHash: string,
): Promise<boolean> {
  return (await graphIntegrityHash(graph)) === expectedHash;
}
