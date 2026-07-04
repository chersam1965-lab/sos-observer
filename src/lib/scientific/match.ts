import type { GroundTruth, GsosResultSnapshot, MatchFlag } from "./types";

/**
 * Deterministic, engine-free match rate.
 *
 * - Global status agreement is worth up to 60 points.
 *   (exact match = 60, adjacent stable↔monitor or monitor↔risk = 30,
 *    stable↔risk = 0).
 * - The remaining 40 points scale with 1 − mean(|Δindicator|)/100
 *   when ground-truth numeric fields are provided (future extension).
 *   In v1 no ground-truth indicators are captured, so we award those
 *   40 points proportionally to the status agreement.
 */
export function computeMatch(
  gsos: GsosResultSnapshot,
  truth: GroundTruth,
): { matchRate: number; matchFlag: MatchFlag } {
  const order = { stable: 0, monitor: 1, risk: 2 } as const;
  const distance = Math.abs(order[gsos.globalStatus] - order[truth.globalStatus]);
  const statusScore = distance === 0 ? 60 : distance === 1 ? 30 : 0;
  const proportional = distance === 0 ? 40 : distance === 1 ? 20 : 0;
  const matchRate = Math.max(0, Math.min(100, Math.round(statusScore + proportional)));
  const matchFlag: MatchFlag =
    matchRate >= 80 ? "match" : matchRate >= 50 ? "partial" : "mismatch";
  return { matchRate, matchFlag };
}
