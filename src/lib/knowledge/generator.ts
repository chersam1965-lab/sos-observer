import type { PilotAggregate } from "@/lib/pilot";
import type { ScientificAggregate } from "@/lib/scientific";
import type {
  KnowledgeCategory,
  KnowledgeDocument,
  KnowledgeItem,
  KnowledgeSources,
} from "./types";

interface GenerateOptions {
  versionId: string;
  createdAt: string;
  sprintCode: string;
  items: KnowledgeItem[];
  sourcesUsed: string[];
  pilotAgg: PilotAggregate;
  sciAgg: ScientificAggregate;
  sources: KnowledgeSources;
}

const DOC_KINDS: KnowledgeDocument["kind"][] = [
  "methodology",
  "architecture",
  "research",
  "decisionRules",
  "knowledgeBook",
  "evolution",
];

export function generateDocuments(opts: GenerateOptions): KnowledgeDocument[] {
  return DOC_KINDS.map((kind) => buildDocument(kind, opts));
}

function itemsBy(items: KnowledgeItem[], cats: KnowledgeCategory[]): KnowledgeItem[] {
  return items.filter((i) => cats.includes(i.category));
}

function bulletList(items: KnowledgeItem[]): string {
  if (items.length === 0) return "—";
  return items.map((i) => `• ${i.title}\n  ${i.body}`).join("\n\n");
}

function buildDocument(kind: KnowledgeDocument["kind"], opts: GenerateOptions): KnowledgeDocument {
  const { items, versionId, createdAt, sprintCode, sourcesUsed, pilotAgg, sciAgg, sources } = opts;
  const base = {
    version: versionId,
    createdAt,
    sprintCode,
    sourcesUsed,
  };

  switch (kind) {
    case "methodology": {
      const indicators = itemsBy(items, ["indicator"]);
      const rules = itemsBy(items, ["rule", "principle"]);
      return {
        ...base,
        kind,
        title: "GSOS Scientific Methodology",
        extractedComponents: [...indicators, ...rules].map((i) => i.id),
        sections: [
          { heading: "Indicators", body: bulletList(indicators) },
          { heading: "Rules & Principles", body: bulletList(rules) },
          {
            heading: "Protocol",
            body:
              "1. Collect input signals. 2. Compute Reality Gap, Trust, and Response Delay indices. " +
              "3. Apply color-state thresholds. 4. Aggregate to Global Status. " +
              "5. Emit Recommended Action. 6. When Pilot Mode is ON, log an anonymized session. " +
              "7. When operating under an SVF protocol, record the experiment and compute match rate against expert ground truth.",
          },
        ],
      };
    }
    case "architecture": {
      const decisions = itemsBy(items, ["decision"]);
      return {
        ...base,
        kind,
        title: "GSOS Technical Architecture",
        extractedComponents: decisions.map((d) => d.id),
        sections: [
          {
            heading: "Module map",
            body:
              "src/lib/indicators.ts — frozen indicator engine.\n" +
              "src/lib/analysis/* — analysis domain (repository, service, types).\n" +
              "src/lib/pilot/* — Pilot Validation Program (isolated storage).\n" +
              "src/lib/scientific/* — Scientific Validation Framework (isolated storage).\n" +
              "src/lib/knowledge/* — Knowledge Extraction Engine (this module, read-only).\n" +
              "src/routes/* — TanStack Start file-based routes.",
          },
          { heading: "Architecture Decisions", body: bulletList(decisions) },
        ],
      };
    }
    case "research": {
      const pilotItems = items.filter((i) => i.id.startsWith("evidence.pilot"));
      const sciItems = items.filter(
        (i) => i.id.startsWith("experiment.") || i.category === "experiment",
      );
      return {
        ...base,
        kind,
        title: "GSOS Research Notes",
        extractedComponents: [...pilotItems, ...sciItems].map((i) => i.id),
        sections: [
          {
            heading: "Pilot Validation Program",
            body:
              `Total sessions: ${pilotAgg.totalSessions}. Feedback: ${pilotAgg.totalFeedback}. ` +
              `Avg accuracy: ${fmt(pilotAgg.averageAccuracy)}. Avg usefulness: ${fmt(pilotAgg.averageUsefulness)}.`,
          },
          {
            heading: "Scientific Validation Framework",
            body:
              `Total experiments: ${sciAgg.totalExperiments}. ` +
              `Matches: ${sciAgg.matches}. Partials: ${sciAgg.partials}. Mismatches: ${sciAgg.mismatches}. ` +
              `Success rate: ${sciAgg.successRate ?? "—"}%. Avg match rate: ${sciAgg.averageMatchRate ?? "—"}%.`,
          },
          { heading: "Detailed Pilot evidence", body: bulletList(pilotItems) },
          { heading: "Detailed SVF evidence", body: bulletList(sciItems) },
        ],
      };
    }
    case "decisionRules": {
      const rules = itemsBy(items, ["rule", "decision", "principle"]);
      return {
        ...base,
        kind,
        title: "GSOS Decision Rules",
        extractedComponents: rules.map((r) => r.id),
        sections: [
          {
            heading: "Thresholds and status mapping",
            body:
              "Per-indicator bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).\n" +
              "Global status: 0 red → Stable, 1 red → Monitor, ≥2 red → Risk.",
          },
          { heading: "Recommended actions", body: bulletList(itemsBy(items, ["decision"])) },
          { heading: "All rules", body: bulletList(rules) },
        ],
      };
    }
    case "knowledgeBook": {
      const cats: KnowledgeCategory[] = [
        "concept",
        "principle",
        "rule",
        "decision",
        "indicator",
        "experiment",
        "evidence",
        "reference",
      ];
      return {
        ...base,
        kind,
        title: "GSOS Knowledge Book",
        extractedComponents: items.map((i) => i.id),
        sections: cats.map((c) => ({
          heading: c.charAt(0).toUpperCase() + c.slice(1),
          body: bulletList(itemsBy(items, [c])),
        })),
      };
    }
    case "evolution": {
      return {
        ...base,
        kind,
        title: "GSOS Evolution Report",
        extractedComponents: ["CHANGELOG.md", "docs/sprints/*"],
        sections: [
          { heading: "CHANGELOG (verbatim)", body: sources.changelog.trim() || "—" },
          { heading: "Sprint history", body: sources.sprints.map((s) => `— ${s.path}`).join("\n") || "—" },
          { heading: "Roadmap", body: sources.roadmap.trim() || "—" },
        ],
      };
    }
  }
}

function fmt(n: number | null): string {
  return n === null ? "—" : n.toFixed(2);
}
