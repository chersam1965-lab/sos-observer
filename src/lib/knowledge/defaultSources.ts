import type { KnowledgeSources } from "./types";

// Vite raw-imports of project docs; bundled at build time (no runtime fetch).
import changelogRaw from "../../../CHANGELOG.md?raw";
import roadmapRaw from "../../../docs/ROADMAP.md?raw";
import techDebtRaw from "../../../docs/TECH_DEBT.md?raw";

const adrModules = import.meta.glob("../../../docs/adr/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const sprintModules = import.meta.glob("../../../docs/sprints/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function toRelative(vitePath: string): string {
  // Strip the "../../../" prefix so sourcePath reads like "docs/adr/...".
  return vitePath.replace(/^(\.\.\/)+/, "");
}

export function loadDefaultSources(): KnowledgeSources {
  return {
    changelog: changelogRaw,
    roadmap: roadmapRaw,
    techDebt: techDebtRaw,
    adrs: Object.entries(adrModules).map(([path, content]) => ({
      path: toRelative(path),
      content,
    })),
    sprints: Object.entries(sprintModules).map(([path, content]) => ({
      path: toRelative(path),
      content,
    })),
  };
}
