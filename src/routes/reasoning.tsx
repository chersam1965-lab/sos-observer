import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { isAuthed } from "@/lib/auth";
import { useI18n, LanguageSwitcher } from "@/lib/i18n";
import {
  explain,
  ReasoningService,
  type ReasoningInput,
  type ReasoningTrace,
} from "@/lib/reasoning";
import { AnalysisService } from "@/lib/analysis";
import { GsosCard, GsosCardHeader, GsosCardTitle } from "@/components/GsosCard";

export const Route = createFileRoute("/reasoning")({
  head: () => ({
    meta: [
      { title: "GSOS Observer — Reasoning Console" },
      {
        name: "description",
        content:
          "GSOS Reasoning Console — deterministic rule-based reasoning traces over GSOS analyses.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ReasoningPage,
});

const APP_VERSION = "2.0.0-dev";
const CURRENT_SPRINT = "V2.0-S1-REF";

function ReasoningPage() {
  const { t, lang } = useI18n();
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [traces, setTraces] = useState<ReasoningTrace[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [noAnalysis, setNoAnalysis] = useState(false);

  useEffect(() => {
    if (!isAuthed()) {
      navigate({ to: "/login" });
      return;
    }
    setReady(true);
  }, [navigate]);

  const refresh = async () => {
    const list = await ReasoningService.list();
    setTraces(list);
    if (list.length > 0 && !selectedId) setSelectedId(list[0].traceId);
  };

  useEffect(() => {
    if (ready) refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const selected = traces.find((tr) => tr.traceId === selectedId) ?? null;
  const steps = useMemo(() => (selected ? explain(selected) : []), [selected]);

  const handleRun = async () => {
    setRunning(true);
    setNoAnalysis(false);
    try {
      const list = await AnalysisService.list({ limit: 1, order: "desc" });
      const latest = list[0];
      if (!latest) {
        setNoAnalysis(true);
        return;
      }
      const input: ReasoningInput = {
        timestamp: new Date().toISOString(),
        overallRiskLevel: latest.overallRiskLevel,
        realityGapIndex: latest.realityGapIndex,
        trustIndex: latest.trustIndex,
        responseDelayIndex: latest.responseDelayIndex,
        sourceAnalysisId: latest.analysisId,
        context: {
          engineVersion: latest.engineVersion,
          questionnaireVersion: latest.questionnaireVersion,
        },
      };
      const tr = await ReasoningService.run({
        input,
        sprintCode: CURRENT_SPRINT,
        appVersion: APP_VERSION,
      });
      setSelectedId(tr.traceId);
      await refresh();
    } finally {
      setRunning(false);
    }
  };

  const handleClear = async () => {
    await ReasoningService.clearAll();
    setSelectedId(null);
    setTraces([]);
  };

  if (!ready) return null;
  const isRTL = lang === "ar";

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <header className="border-b border-border bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{t("appName")}</div>
              <div className="text-xs text-muted-foreground">{t("reTitle")}</div>
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
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("reTitle")}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{t("reSubtitle")}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRun}
              disabled={running}
              aria-busy={running}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 disabled:opacity-60"
            >
              {running ? t("reRunning") : t("reRunNow")}
            </button>
            {traces.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="rounded-md border border-input bg-background px-3 py-2 text-xs font-medium hover:bg-secondary"
              >
                {t("reClear")}
              </button>
            )}
          </div>
        </div>

        {noAnalysis && (
          <GsosCard as="section" className="mt-4 border-[color:var(--status-yellow)]/40">
            <p className="text-sm text-muted-foreground">{t("reNoAnalysis")}</p>
          </GsosCard>
        )}

        {traces.length === 0 ? (
          <GsosCard as="section" className="mt-6">
            <p className="text-sm text-muted-foreground">{t("reEmpty")}</p>
          </GsosCard>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr]">
            <GsosCard as="section">
              <GsosCardHeader>
                <GsosCardTitle>{t("reTraces")}</GsosCardTitle>
              </GsosCardHeader>
              <ul className="mt-3 space-y-1">
                {traces.map((tr) => (
                  <li key={tr.traceId}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(tr.traceId)}
                      className={`w-full rounded-md px-2 py-1.5 text-start text-xs transition-colors ${
                        tr.traceId === selectedId
                          ? "bg-primary/10 text-foreground"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <div className="font-mono truncate">{tr.traceId}</div>
                      <div className="opacity-70">
                        {new Date(tr.createdAt).toLocaleString()} — {tr.conclusion.status}
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
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">
                          {t("reConclusion")}
                        </div>
                        <div className="text-lg font-semibold">
                          {selected.conclusion.status.toUpperCase()}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {selected.conclusion.rationale}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {t("reConfidence")}:{" "}
                          {(selected.conclusion.confidence * 100).toFixed(0)}% · {t("reScore")}:{" "}
                          {selected.conclusion.score}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground text-end">
                        <div className="font-mono">{selected.traceId}</div>
                        <div>
                          {t("reSprint")}: {selected.sprintCode}
                        </div>
                      </div>
                    </div>
                  </GsosCard>

                  <GsosCard>
                    <GsosCardHeader>
                      <GsosCardTitle>{t("reSteps")}</GsosCardTitle>
                    </GsosCardHeader>
                    <ol className="mt-3 space-y-2 text-sm">
                      {steps.map((s) => (
                        <li
                          key={s.order}
                          className="rounded-md border border-border p-2"
                          data-kind={s.kind}
                        >
                          <div className="text-xs uppercase text-muted-foreground">
                            {t(stepKindKey(s.kind))} · #{s.order}
                          </div>
                          <div className="font-medium">{s.title}</div>
                          <div className="mt-0.5 text-xs text-muted-foreground">{s.detail}</div>
                        </li>
                      ))}
                    </ol>
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

function stepKindKey(k: "premise" | "rule" | "inference" | "conclusion") {
  switch (k) {
    case "premise":
      return "rePremise" as const;
    case "rule":
      return "reRule" as const;
    case "inference":
      return "reInference" as const;
    case "conclusion":
      return "reConclusion" as const;
  }
}
