import { ProvenanceNodeType, ProvenanceRelation } from "./types";
export const ALLOWED_RELATIONS: Record<ProvenanceNodeType, ProvenanceNodeType[]> = {
  SOURCE: ["DOCUMENT", "CLAIM", "EVIDENCE"],
  DOCUMENT: ["CLAIM", "EVIDENCE", "ENTITY", "EVENT"],
  CLAIM: ["EVIDENCE", "ENTITY", "EVENT", "INFERENCE"],
  EVIDENCE: ["CLAIM", "ENTITY", "EVENT", "INFERENCE"],
  ENTITY: ["EVENT", "CLAIM", "EVIDENCE"],
  EVENT: ["ENTITY", "CLAIM", "INFERENCE"],
  INFERENCE: ["CONCLUSION", "INFERENCE"],
  CONCLUSION: [],
};
export function assertConfidence(value: number): void {
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new Error("PROVENANCE_INVALID_CONFIDENCE");
  }
}
export function assertValidRelation(
  fromType: ProvenanceNodeType,
  toType: ProvenanceNodeType,
  relation: ProvenanceRelation,
): void {
  const allowedTargets = ALLOWED_RELATIONS[fromType];

  if (!allowedTargets.includes(toType)) {
    throw new Error(
      `PROVENANCE_ILLEGAL_EDGE:${fromType}:${relation}:${toType}`,
    );
  }
}
