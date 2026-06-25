import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isAuthed, signOut } from "@/lib/auth";
import { useI18n, LanguageSwitcher } from "@/lib/i18n";
import {
  colorStateFor,
  computeGlobalStatus,
  useIndicators,
  type Indicator,
} from "@/lib/indicators";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "GSOS Observer — Dashboard" },
      { name: "description", content: "Operational indicators dashboard." },
    ],
  }),
  component: DashboardPage,
});

const COLOR_CLASSES = {
  green: {
    ring: "ring-[color:var(--status-green)]",
    bg: "bg-[color:var(--status-green-soft)]",
    fg: "text-[color:var(--status-green)]",
    dot: "bg-[color:var(--status-green)]",
    bar: "bg-[color:var(--status-green)]",
  },
  yellow: {
    ring: "ring-[color:var(--status-yellow)]",
    bg: "bg-[color:var(--status-yellow-soft)]",
    fg: "text-[color:var(--status-yellow)]",
    dot: "bg-[color:var(--status-yellow)]",
    bar: "bg-[color:var(--status-yellow)]",
  },
  red: {
    ring: "ring-[color:var(--status-red)]",
    bg: "bg-[color:var(--status-red-soft)]",
    fg: "text-[color:var(--status-red)]",
    dot: "bg-[color:var(--status-red)]",
    bar: "bg-[color:var(--status-red)]",
  },
};

function IndicatorCard({ indicator }: { indicator: Indicator }) {
  const { t } = useI18n();
  const state = colorStateFor(indicator.value);
  const c = COLOR_CLASSES[state];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-medium text-muted-foreground">{t(indicator.key)}</h3>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${c.bg} ${c.fg}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
          {state.toUpperCase()}
        </span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tabular-nums tracking-tight">{indicator.value}</span>
        <span className="text-sm text-muted-foreground">/ 100</span>
      </div>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={`h-full rounded-full transition-all duration-500 ${c.bar}`}
          style={{ width: `${indicator.value}%` }}
        />
      </div>
    </div>
  );
}

const STATUS_STYLE: Record<"stable" | "monitor" | "risk", { bg: string; fg: string; dot: string }> = {
  stable: {
    bg: "bg-[color:var(--status-green-soft)]",
    fg: "text-[color:var(--status-green)]",
    dot: "bg-[color:var(--status-green)]",
  },
  monitor: {
    bg: "bg-[color:var(--status-yellow-soft)]",
    fg: "text-[color:var(--status-yellow)]",
    dot: "bg-[color:var(--status-yellow)]",
  },
  risk: {
    bg: "bg-[color:var(--status-red-soft)]",
    fg: "text-[color:var(--status-red)]",
    dot: "bg-[color:var(--status-red)]",
  },
};

function statusExplanationKey(state: "green" | "yellow" | "red"): "statusExplanationGreen" | "statusExplanationYellow" | "statusExplanationRed" {
  return `statusExplanation${state.charAt(0).toUpperCase() + state.slice(1)}` as const;
}

function globalStatusExplanationKey(status: "stable" | "monitor" | "risk"): "globalStatusExplanationStable" | "globalStatusExplanationMonitor" | "globalStatusExplanationRisk" {
  return `globalStatusExplanation${status.charAt(0).toUpperCase() + status.slice(1)}` as const;
}

function AnalysisPanel({ indicators, status }: { indicators: Indicator[]; status: "stable" | "monitor" | "risk" }) {
  const { t } = useI18n();
  const s = STATUS_STYLE[status];

  return (
    <section className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="mb-3 text-lg font-semibold tracking-tight">{t("analysisTitle")}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {indicators.map((i) => {
          const state = colorStateFor(i.value);
          const c = COLOR_CLASSES[state];
          return (
            <div key={i.key} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-muted-foreground">{t(i.key)}</span>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${c.bg} ${c.fg}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                  {state.toUpperCase()}
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold tabular-nums">{i.value}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(statusExplanationKey(state))}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-muted-foreground">{t("globalStatus")}</h3>
            <div className="mt-2 flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${s.dot}`} />
              <span className={`text-xl font-semibold ${s.fg}`}>{t(status)}</span>
            </div>
          </div>
          <div className="flex-1">
            <p className={`text-sm leading-relaxed ${s.fg}`}>
              {t(globalStatusExplanationKey(status))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPage() {
  const { t, lang } = useI18n();
  const navigate = useNavigate();
  const { indicators, updatedAt, analyse } = useIndicators();
  const [analysing, setAnalysing] = useState(false);
  const [ready, setReady] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  useEffect(() => {
    if (!isAuthed()) {
      navigate({ to: "/login" });
    } else {
      setReady(true);
    }
  }, [navigate]);

  const status = computeGlobalStatus(indicators);
  const s = STATUS_STYLE[status];

  const handleAnalyse = () => {
    setAnalysing(true);
    setShowAnalysis(false);
    setTimeout(() => {
      analyse();
      setAnalysing(false);
      setShowAnalysis(true);
    }, 400);
  };

  const formattedDate = new Date(updatedAt).toLocaleString(
    lang === "ar" ? "ar" : lang === "fr" ? "fr-FR" : "en-US",
    { dateStyle: "medium", timeStyle: "short" },
  );

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{t("appName")}</div>
              <div className="text-xs text-muted-foreground">{t("dashboard")}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => {
                signOut();
                navigate({ to: "/login" });
              }}
              className="rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-secondary"
            >
              {t("signOut")}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("dashboard")}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("lastUpdate")}: <span className="tabular-nums">{formattedDate}</span>
            </p>
          </div>
          <button
            onClick={handleAnalyse}
            disabled={analysing}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {analysing ? t("analysing") : t("analyse")}
          </button>
        </div>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {indicators.map((i) => (
            <IndicatorCard key={i.key} indicator={i} />
          ))}
        </section>

        <section className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">{t("globalStatus")}</h2>
              <div className="mt-2 flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${s.dot}`} />
                <span className={`text-2xl font-semibold ${s.fg}`}>{t(status)}</span>
              </div>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${s.bg} ${s.fg}`}>
              {indicators.filter((i) => colorStateFor(i.value) === "red").length} / 3 RED
            </span>
          </div>
        </section>

        {showAnalysis && <AnalysisPanel indicators={indicators} status={status} />}
      </main>
    </div>
  );
}
