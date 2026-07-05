import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { isAuthed } from "@/lib/auth";
import { useI18n, LanguageSwitcher } from "@/lib/i18n";
import {
  exportKnowledgeDocumentToPDF,
  KnowledgeService,
  loadDefaultSources,
  type KnowledgeDocument,
  type KnowledgeVersion,
} from "@/lib/knowledge";
import { GsosCard, GsosCardHeader, GsosCardTitle } from "@/components/GsosCard";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "GSOS Observer — Knowledge Center" },
      {
        name: "description",
        content:
          "GSOS Knowledge Center — versioned, auto-extracted scientific documentation of the GSOS Observer project.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: KnowledgePage,
});

const APP_VERSION = "1.3.0-dev";
const CURRENT_SPRINT = "V1.3-S2-GKE";

function KnowledgePage() {
  const { t, lang } = useI18n();
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [versions, setVersions] = useState<KnowledgeVersion[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeDoc, setActiveDoc] = useState<KnowledgeDocument["kind"]>("methodology");
  const [query, setQuery] = useState("");
  const [extracting, setExtracting] = useState(false);

  useEffect(() => {
    if (!isAuthed()) {
      navigate({ to: "/login" });
      return;
    }
    setReady(true);
  }, [navigate]);

  const refresh = async () => {
    const list = await KnowledgeService.list();
    setVersions(list);
    if (list.length > 0 && !selectedId) setSelectedId(list[0].versionId);
  };

  useEffect(() => {
    if (ready) refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const isRTL = lang === "ar";
  const selected = versions.find((v) => v.versionId === selectedId) ?? null;

  const activeDocument = useMemo(() => {
    if (!selected) return null;
    return selected.documents.find((d) => d.kind === activeDoc) ?? selected.documents[0];
  }, [selected, activeDoc]);

  const searchResults = useMemo(() => {
    if (!selected || !query.trim()) return [];
    const q = query.trim().toLowerCase();
    return selected.items.filter(
      (i) => i.title.toLowerCase().includes(q) || i.body.toLowerCase().includes(q),
    );
  }, [selected, query]);

  const handleExtract = async () => {
    setExtracting(true);
    try {
      const sources = loadDefaultSources();
      const v = await KnowledgeService.extract({
        sources,
        sprintCode: CURRENT_SPRINT,
        appVersion: APP_VERSION,
      });
      setSelectedId(v.versionId);
      await refresh();
    } finally {
      setExtracting(false);
    }
  };

  const handleExportPdf = async () => {
    if (!activeDocument) return;
    await exportKnowledgeDocumentToPDF(activeDocument);
  };

  if (!ready) return null;

  const docKinds: KnowledgeDocument["kind"][] = [
    "methodology",
    "architecture",
    "research",
    "decisionRules",
    "knowledgeBook",
    "evolution",
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <header className="border-b border-border bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{t("appName")}</div>
              <div className="text-xs text-muted-foreground">{t("kcTitle")}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to="/dashboard"
              className="rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-secondary"
            >
              {t("backToDashboard")}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("kcTitle")}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{t("kcSubtitle")}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExtract}
              disabled={extracting}
              aria-busy={extracting}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 disabled:opacity-60"
            >
              {extracting ? t("kcExtracting") : t("kcExtractNow")}
            </button>
          </div>
        </div>

        {versions.length === 0 ? (
          <GsosCard as="section" className="mt-6">
            <p className="text-sm text-muted-foreground">{t("kcEmpty")}</p>
          </GsosCard>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[240px_1fr]">
            <GsosCard as="section">
              <GsosCardHeader>
                <GsosCardTitle>{t("kcVersions")}</GsosCardTitle>
              </GsosCardHeader>
              <ul className="mt-3 space-y-1">
                {versions.map((v) => (
                  <li key={v.versionId}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(v.versionId)}
                      className={`w-full rounded-md px-2 py-1.5 text-start text-xs transition-colors ${
                        v.versionId === selectedId
                          ? "bg-primary/10 text-foreground"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <div className="font-mono">{v.versionId}</div>
                      <div className="opacity-70">
                        {new Date(v.createdAt).toLocaleString()} — {v.sprintCode}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </GsosCard>

            <section className="space-y-4">
              {selected && (
                <>
                  <GsosCard>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">
                          {t("kcVersion")}
                        </div>
                        <div className="font-mono text-sm">{selected.versionId}</div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {t("kcSprint")}: {selected.sprintCode} · {t("kcCreatedAt")}:{" "}
                          {new Date(selected.createdAt).toLocaleString()}
                        </div>
                      </div>
                      <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t("kcSearchPlaceholder")}
                        className="w-full max-w-xs rounded-md border border-input bg-background px-3 py-1.5 text-sm"
                      />
                    </div>
                  </GsosCard>

                  {query.trim() && (
                    <GsosCard>
                      <GsosCardHeader>
                        <GsosCardTitle>
                          {t("kcSearchResults")} ({searchResults.length})
                        </GsosCardTitle>
                      </GsosCardHeader>
                      <ul className="mt-3 space-y-2 text-sm">
                        {searchResults.length === 0 && (
                          <li className="text-xs text-muted-foreground">{t("kcNoResults")}</li>
                        )}
                        {searchResults.map((r) => (
                          <li key={r.id} className="rounded-md border border-border p-2">
                            <div className="text-xs uppercase text-muted-foreground">
                              {r.category}
                            </div>
                            <div className="font-medium">{r.title}</div>
                            <div className="mt-1 text-xs text-muted-foreground">{r.body}</div>
                            <div className="mt-1 font-mono text-[10px] opacity-70">
                              {r.sourcePath}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </GsosCard>
                  )}

                  <GsosCard>
                    <div className="flex flex-wrap gap-1 border-b border-border pb-2">
                      {docKinds.map((k) => (
                        <button
                          key={k}
                          type="button"
                          onClick={() => setActiveDoc(k)}
                          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                            k === activeDoc
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-secondary"
                          }`}
                        >
                          {t(docKindKey(k))}
                        </button>
                      ))}
                    </div>

                    {activeDocument && (
                      <article className="mt-4">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h2 className="text-lg font-semibold">{activeDocument.title}</h2>
                            <div className="mt-1 text-xs text-muted-foreground">
                              {t("kcVersion")}: {activeDocument.version} · {t("kcSprint")}:{" "}
                              {activeDocument.sprintCode}
                            </div>
                            <div className="mt-0.5 text-xs text-muted-foreground">
                              {t("kcSourcesUsed")}:{" "}
                              <span className="font-mono">
                                {activeDocument.sourcesUsed.join(", ")}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={handleExportPdf}
                            className="rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-secondary"
                          >
                            {t("kcExportPdf")}
                          </button>
                        </div>

                        <div className="mt-4 space-y-4">
                          {activeDocument.sections.map((s, i) => (
                            <div key={i}>
                              <h3 className="text-sm font-semibold">{s.heading}</h3>
                              <pre className="mt-1 whitespace-pre-wrap font-sans text-sm text-muted-foreground">
                                {s.body}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </article>
                    )}
                  </GsosCard>
                </>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

function docKindKey(k: KnowledgeDocument["kind"]) {
  switch (k) {
    case "methodology":
      return "kcDocMethodology" as const;
    case "architecture":
      return "kcDocArchitecture" as const;
    case "research":
      return "kcDocResearch" as const;
    case "decisionRules":
      return "kcDocDecisionRules" as const;
    case "knowledgeBook":
      return "kcDocKnowledgeBook" as const;
    case "evolution":
      return "kcDocEvolution" as const;
  }
}
