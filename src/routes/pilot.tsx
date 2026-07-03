import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isAuthed } from "@/lib/auth";
import { useI18n, LanguageSwitcher } from "@/lib/i18n";
import {
  isPilotModeEnabled,
  PilotService,
  setPilotModeEnabled,
  type PilotAggregate,
  type PilotFeedback,
  type PilotSession,
} from "@/lib/pilot";
import { GsosCard, GsosCardHeader, GsosCardTitle } from "@/components/GsosCard";

export const Route = createFileRoute("/pilot")({
  head: () => ({
    meta: [
      { title: "GSOS Observer — Pilot Dashboard" },
      { name: "description", content: "Aggregate pilot validation metrics for GSOS Observer." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PilotPage,
});

const STATUS_COLORS = {
  stable: "bg-[color:var(--status-green)]",
  monitor: "bg-[color:var(--status-yellow)]",
  risk: "bg-[color:var(--status-red)]",
} as const;

function Bar({ value, max, className }: { value: number; max: number; className: string }) {
  const w = max === 0 ? 0 : Math.max(4, Math.round((value / max) * 100));
  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-secondary"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
    >
      <div className={`h-full rounded-full ${className}`} style={{ width: `${w}%` }} />
    </div>
  );
}

function PilotPage() {
  const { t, lang } = useI18n();
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [agg, setAgg] = useState<PilotAggregate | null>(null);
  const [sessions, setSessions] = useState<PilotSession[]>([]);
  const [feedback, setFeedback] = useState<PilotFeedback[]>([]);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    if (!isAuthed()) {
      navigate({ to: "/login" });
      return;
    }
    setEnabled(isPilotModeEnabled());
    setReady(true);
  }, [navigate]);

  const refresh = async () => {
    const [a, s, f] = await Promise.all([
      PilotService.aggregate(),
      PilotService.listSessions(),
      PilotService.listFeedback(),
    ]);
    setAgg(a);
    setSessions(s);
    setFeedback(f);
  };

  useEffect(() => {
    if (!ready || !enabled) return;
    refresh();
  }, [ready, enabled]);

  const handleExport = async () => {
    if (!agg) return;
    setExporting(true);
    try {
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 48;
      let y = margin;
      const dateStr = new Date().toLocaleString(
        lang === "fr" ? "fr-FR" : "en-US",
        { dateStyle: "medium", timeStyle: "short" },
      );

      const write = (text: string, size: number, bold = false, color: [number, number, number] = [20, 20, 20]) => {
        pdf.setFont("helvetica", bold ? "bold" : "normal");
        pdf.setFontSize(size);
        pdf.setTextColor(...color);
        const lines = pdf.splitTextToSize(text, pageW - margin * 2) as string[];
        if (y + lines.length * size * 1.35 > pageH - margin) {
          pdf.addPage();
          y = margin;
        }
        pdf.text(lines, margin, y);
        y += lines.length * size * 1.35;
      };
      const hr = () => {
        y += 4;
        pdf.setDrawColor(220, 220, 220);
        pdf.line(margin, y, pageW - margin, y);
        y += 10;
      };

      write(t("pilotValidationReport"), 20, true);
      write(`GSOS Observer — ${dateStr}`, 10, false, [110, 110, 110]);
      hr();

      write(`${t("pilotSessionsTotal")}: ${agg.totalSessions}`, 12, true);
      write(`${t("pilotFeedbackTotal")}: ${agg.totalFeedback}`, 12);
      write(
        `${t("pilotAvgAccuracy")}: ${agg.averageAccuracy?.toFixed(2) ?? "—"} / 5`,
        12,
      );
      write(
        `${t("pilotAvgUsefulness")}: ${agg.averageUsefulness?.toFixed(2) ?? "—"} / 5`,
        12,
      );
      write(
        `${t("pilotAvgCombined")}: ${agg.averageCombined?.toFixed(2) ?? "—"} / 5`,
        12,
      );
      hr();

      write(t("pilotStatusDistribution"), 13, true);
      write(`Stable: ${agg.statusDistribution.stable}`, 11);
      write(`Monitor: ${agg.statusDistribution.monitor}`, 11);
      write(`Risk: ${agg.statusDistribution.risk}`, 11);
      hr();

      write(t("pilotLanguageDistribution"), 13, true);
      write(`EN: ${agg.languageDistribution.en}`, 11);
      write(`FR: ${agg.languageDistribution.fr}`, 11);
      write(`AR: ${agg.languageDistribution.ar}`, 11);
      hr();

      write(t("pilotTopKeywords"), 13, true);
      if (agg.topKeywords.length === 0) {
        write("—", 11, false, [110, 110, 110]);
      } else {
        agg.topKeywords.forEach((k) => write(`• ${k.word} (${k.count})`, 11));
      }
      hr();

      write(t("pilotRecommendations"), 13, true);
      const recs: string[] = [];
      if ((agg.averageAccuracy ?? 0) < 3.5)
        recs.push("Investigate indicator calibration — perceived accuracy below target.");
      if ((agg.averageUsefulness ?? 0) < 3.5)
        recs.push("Enrich report narrative — perceived usefulness below target.");
      if (agg.statusDistribution.risk > agg.statusDistribution.stable)
        recs.push("Field context skews toward Risk — review response protocols.");
      if (recs.length === 0) recs.push("Metrics within expected range. Continue field collection.");
      recs.forEach((r) => write(`• ${r}`, 11));

      const pageCount = pdf.getNumberOfPages();
      for (let p = 1; p <= pageCount; p++) {
        pdf.setPage(p);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(9);
        pdf.setTextColor(140, 140, 140);
        pdf.text(`GSOS Pilot Validation — ${dateStr}`, margin, pageH - 20);
        pdf.text(`Page ${p} / ${pageCount}`, pageW - margin, pageH - 20, { align: "right" });
      }

      const stamp = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      const fname = `GSOS-Pilot-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
      pdf.save(fname);
    } finally {
      setExporting(false);
    }
  };

  if (!ready) return null;

  const isRTL = lang === "ar";
  const feedbackBySession = new Map(feedback.map((f) => [f.sessionId, f]));

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <header className="border-b border-border bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{t("appName")}</div>
              <div className="text-xs text-muted-foreground">{t("pilotDashboard")}</div>
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
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("pilotDashboard")}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{t("pilotFeedbackSubtitle")}</p>
          </div>
          {enabled && (
            <button
              type="button"
              onClick={handleExport}
              disabled={exporting || !agg || agg.totalSessions === 0}
              aria-busy={exporting}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {t("pilotExportReport")}
            </button>
          )}
        </div>

        {!enabled ? (
          <GsosCard as="section" className="mt-6">
            <p className="text-sm text-muted-foreground">{t("pilotDisabled")}</p>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => {
                  setPilotModeEnabled(true);
                  setEnabled(true);
                }}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                {t("pilotEnable")}
              </button>
            </div>
          </GsosCard>
        ) : !agg || agg.totalSessions === 0 ? (
          <GsosCard as="section" className="mt-6">
            <p className="text-sm text-muted-foreground">{t("pilotEmpty")}</p>
          </GsosCard>
        ) : (
          <>
            <section className="mt-6 grid gap-[var(--gsos-gap-grid)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("pilotSessionsTotal")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-3 text-3xl font-semibold tabular-nums">{agg.totalSessions}</div>
              </GsosCard>
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("pilotFeedbackTotal")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-3 text-3xl font-semibold tabular-nums">{agg.totalFeedback}</div>
              </GsosCard>
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("pilotAvgAccuracy")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-3 text-3xl font-semibold tabular-nums">
                  {agg.averageAccuracy?.toFixed(2) ?? "—"}
                  <span className="text-sm text-muted-foreground"> / 5</span>
                </div>
              </GsosCard>
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("pilotAvgUsefulness")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-3 text-3xl font-semibold tabular-nums">
                  {agg.averageUsefulness?.toFixed(2) ?? "—"}
                  <span className="text-sm text-muted-foreground"> / 5</span>
                </div>
              </GsosCard>
            </section>

            <section className="mt-6 grid gap-[var(--gsos-gap-grid)] grid-cols-1 lg:grid-cols-2">
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("pilotStatusDistribution")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-4 space-y-3">
                  {(["stable", "monitor", "risk"] as const).map((k) => (
                    <div key={k}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-medium">{t(k)}</span>
                        <span className="tabular-nums text-muted-foreground">
                          {agg.statusDistribution[k]}
                        </span>
                      </div>
                      <Bar
                        value={agg.statusDistribution[k]}
                        max={agg.totalSessions}
                        className={STATUS_COLORS[k]}
                      />
                    </div>
                  ))}
                </div>
              </GsosCard>

              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("pilotTopKeywords")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-4">
                  {agg.topKeywords.length === 0 ? (
                    <p className="text-sm text-muted-foreground">—</p>
                  ) : (
                    <ul className="flex flex-wrap gap-2">
                      {agg.topKeywords.map((k) => (
                        <li
                          key={k.word}
                          className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-xs"
                        >
                          {k.word} <span className="text-muted-foreground">×{k.count}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </GsosCard>
            </section>

            <section className="mt-6">
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("pilotRecentSessions")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <th className="py-2 pr-3 font-medium">{t("pilotDate")}</th>
                        <th className="py-2 pr-3 font-medium">{t("pilotSessionId")}</th>
                        <th className="py-2 pr-3 font-medium">{t("pilotLang")}</th>
                        <th className="py-2 pr-3 font-medium">{t("pilotStatusCol")}</th>
                        <th className="py-2 pr-3 font-medium">{t("pilotScores")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions.slice(0, 20).map((s) => {
                        const fb = feedbackBySession.get(s.sessionId);
                        return (
                          <tr key={s.sessionId} className="border-b border-border/60">
                            <td className="py-2 pr-3 tabular-nums">
                              {new Date(s.timestamp).toLocaleString(
                                lang === "ar" ? "ar" : lang === "fr" ? "fr-FR" : "en-US",
                                { dateStyle: "short", timeStyle: "short" },
                              )}
                            </td>
                            <td className="py-2 pr-3 font-mono">{s.reportId.slice(-10)}</td>
                            <td className="py-2 pr-3 uppercase">{s.language}</td>
                            <td className="py-2 pr-3">{t(s.globalStatus)}</td>
                            <td className="py-2 pr-3 tabular-nums">
                              {fb ? `${fb.accuracyScore}/${fb.usefulnessScore}` : "—"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </GsosCard>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
