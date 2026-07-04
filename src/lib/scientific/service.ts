import type { Lang } from "@/lib/i18n";
import { getScientificRepository } from "./repository";
import type {
  Experiment,
  NewExperimentInput,
  ScientificAggregate,
} from "./types";

function weekStartISO(iso: string): string {
  const d = new Date(iso);
  const day = d.getUTCDay(); // 0=Sun..6=Sat
  const diff = (day + 6) % 7; // Monday-based week
  const monday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - diff));
  return monday.toISOString().slice(0, 10);
}

export const ScientificService = {
  create(input: NewExperimentInput): Promise<Experiment> {
    return getScientificRepository().create(input);
  },
  save(exp: Experiment): Promise<Experiment> {
    return getScientificRepository().save(exp);
  },
  getById(id: string) {
    return getScientificRepository().getById(id);
  },
  list(): Promise<Experiment[]> {
    return getScientificRepository().list();
  },
  delete(id: string) {
    return getScientificRepository().delete(id);
  },
  clearAll() {
    return getScientificRepository().clearAll();
  },
  async aggregate(): Promise<ScientificAggregate> {
    const rows = await getScientificRepository().list();
    const total = rows.length;
    const matches = rows.filter((r) => r.matchFlag === "match").length;
    const partials = rows.filter((r) => r.matchFlag === "partial").length;
    const mismatches = rows.filter((r) => r.matchFlag === "mismatch").length;

    const langDist: Record<Lang, number> = { en: 0, fr: 0, ar: 0 };
    const caseDist: Record<string, number> = {};
    for (const r of rows) {
      langDist[r.language] = (langDist[r.language] ?? 0) + 1;
      const key = (r.caseType || "").trim() || "—";
      caseDist[key] = (caseDist[key] ?? 0) + 1;
    }

    // Group by ISO week start
    const buckets = new Map<string, { total: number; matches: number }>();
    for (const r of rows) {
      const w = weekStartISO(r.createdAt);
      const b = buckets.get(w) ?? { total: 0, matches: 0 };
      b.total += 1;
      if (r.matchFlag === "match") b.matches += 1;
      buckets.set(w, b);
    }
    const performanceOverTime = [...buckets.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([weekStart, b]) => ({
        weekStart,
        total: b.total,
        matches: b.matches,
        successRate: b.total === 0 ? 0 : Math.round((b.matches / b.total) * 100),
      }));

    return {
      totalExperiments: total,
      matches,
      partials,
      mismatches,
      successRate: total === 0 ? null : Math.round((matches / total) * 100),
      averageMatchRate:
        total === 0 ? null : Math.round(rows.reduce((a, r) => a + r.matchRate, 0) / total),
      languageDistribution: langDist,
      caseTypeDistribution: caseDist,
      performanceOverTime,
    };
  },
};
