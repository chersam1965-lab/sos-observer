import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { isAuthed, signOut } from "@/lib/auth";
import { useI18n, LanguageSwitcher } from "@/lib/i18n";
import {
  colorStateFor,
  computeGlobalStatus,
  useIndicators,
  type Indicator,
} from "@/lib/indicators";
import { GsosCard, GsosCardHeader, GsosCardTitle } from "@/components/GsosCard";
import { Skeleton } from "@/components/ui/skeleton";

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
  const label = t(indicator.key);

  return (
    <GsosCard
      interactive
      as="article"
      aria-label={`${label}: ${indicator.value} of 100, ${state}`}
    >
      <GsosCardHeader>
        <GsosCardTitle>{label}</GsosCardTitle>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${c.bg} ${c.fg}`}
          aria-hidden="true"
        >
          <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
          {state.toUpperCase()}
        </span>
      </GsosCardHeader>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tabular-nums tracking-tight">{indicator.value}</span>
        <span className="text-sm text-muted-foreground">/ 100</span>
      </div>
      <div
        className="mt-auto pt-4 h-2 w-full overflow-hidden rounded-full bg-secondary"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={indicator.value}
        aria-label={label}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ${c.bar}`}
          style={{ width: `${indicator.value}%` }}
        />
      </div>
    </GsosCard>
  );
}

function IndicatorSkeleton() {
  return (
    <GsosCard aria-hidden="true">
      <div className="flex items-start justify-between gap-3">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-5 w-14 rounded-full" />
      </div>
      <Skeleton className="mt-4 h-9 w-20" />
      <Skeleton className="mt-auto pt-4 h-2 w-full rounded-full" />
    </GsosCard>
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
  switch (state) {
    case "green": return "statusExplanationGreen";
    case "yellow": return "statusExplanationYellow";
    case "red": return "statusExplanationRed";
  }
}

function globalStatusExplanationKey(status: "stable" | "monitor" | "risk"): "globalStatusExplanationStable" | "globalStatusExplanationMonitor" | "globalStatusExplanationRisk" {
  switch (status) {
    case "stable": return "globalStatusExplanationStable";
    case "monitor": return "globalStatusExplanationMonitor";
    case "risk": return "globalStatusExplanationRisk";
  }
}

function recommendedActionKey(status: "stable" | "monitor" | "risk"): "recommendedActionStable" | "recommendedActionMonitor" | "recommendedActionRisk" {
  switch (status) {
    case "stable": return "recommendedActionStable";
    case "monitor": return "recommendedActionMonitor";
    case "risk": return "recommendedActionRisk";
  }
}

function formatPad(n: number) { return String(n).padStart(2, "0"); }

function generateReportId(d: Date): string {
  const stamp = `${d.getFullYear()}${formatPad(d.getMonth() + 1)}${formatPad(d.getDate())}-${formatPad(d.getHours())}${formatPad(d.getMinutes())}${formatPad(d.getSeconds())}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `GSOS-${stamp}-${rand}`;
}

function fileStamp(d: Date): string {
  return `${d.getFullYear()}-${formatPad(d.getMonth() + 1)}-${formatPad(d.getDate())}-${formatPad(d.getHours())}-${formatPad(d.getMinutes())}`;
}

function AnalysisPanel({
  indicators,
  status,
  panelRef,
  onExport,
  onExportText,
  exporting,
  exportProgress,
  reportMeta,
}: {
  indicators: Indicator[];
  status: "stable" | "monitor" | "risk";
  panelRef: React.RefObject<HTMLElement | null>;
  onExport: () => void;
  onExportText: () => void;
  exporting: boolean;
  exportProgress: number;
  reportMeta: { id: string; date: Date };
}) {
  const { t, lang } = useI18n();
  const s = STATUS_STYLE[status];
  const isRTL = lang === "ar";
  const dateStr = reportMeta.date.toLocaleString(
    isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US",
    { dateStyle: "medium", timeStyle: "short" },
  );
  const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
  const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;

  return (
    <section ref={panelRef} className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-500" dir={isRTL ? "rtl" : "ltr"}>
      {/* Report Identity */}
      <div className={`mb-4 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-base font-semibold tracking-tight">{t("reportHeader")}</div>
            <div className="text-xs text-muted-foreground">{t("appName")} — {t("version")} 1.0</div>
          </div>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.bg} ${s.fg}`}>{t(status)}</span>
        </div>
        <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 text-xs sm:grid-cols-3">
          <div><dt className="text-muted-foreground">{t("reportId")}</dt><dd className="font-mono font-medium">{reportMeta.id}</dd></div>
          <div><dt className="text-muted-foreground">{t("generationDate")}</dt><dd className="tabular-nums font-medium">{dateStr}</dd></div>
          <div><dt className="text-muted-foreground">{t("languageLabel")}</dt><dd className="font-medium">{t("langName")}</dd></div>
        </dl>
      </div>

      {/* Toolbar */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3" data-export-ignore>
        <h2 className="text-lg font-semibold tracking-tight">{t("analysisTitle")}</h2>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onExportText}
            disabled={exporting}
            aria-busy={exporting}
            aria-disabled={exporting}
            tabIndex={exporting ? -1 : 0}
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {exporting && <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" role="status" aria-hidden="true" />}
            {exporting ? t("exporting") : t("exportPdfText")}
          </button>
          <button
            onClick={onExport}
            disabled={exporting}
            aria-busy={exporting}
            aria-disabled={exporting}
            tabIndex={exporting ? -1 : 0}
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {exporting && <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" role="status" aria-hidden="true" />}
            {exporting ? t("exporting") : t("exportPdf")}
          </button>
        </div>
      </div>

      {exporting && (
        <div
          data-export-ignore
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(exportProgress)}
          aria-valuetext={`${Math.round(exportProgress)}%`}
          aria-label={t("exporting")}
          aria-live="polite"
          className="mb-4 rounded-lg border border-border bg-card p-3 shadow-sm"
        >
          <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
            <span>{t("exporting")}</span>
            <span className="tabular-nums font-medium">{Math.round(exportProgress)}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary" aria-hidden="true">
            <div className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out" style={{ width: `${Math.max(4, Math.round(exportProgress))}%` }} />
          </div>
        </div>
      )}

      {/* Executive Summary */}
      <div className={`mb-4 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}>
        <h3 className="text-sm font-semibold tracking-tight">{t("executiveSummary")}</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-background p-3">
            <div className="text-xs text-muted-foreground">{t("overallRiskLevel")}</div>
            <div className={`mt-1 text-lg font-semibold ${s.fg}`}>{t(status)}</div>
          </div>
          <div className="rounded-lg border border-border bg-background p-3">
            <div className="text-xs text-muted-foreground">{t("criticalIndicators")}</div>
            <div className="mt-1 text-lg font-semibold tabular-nums text-[color:var(--status-red)]">{criticalCount} / {indicators.length}</div>
          </div>
          <div className="rounded-lg border border-border bg-background p-3">
            <div className="text-xs text-muted-foreground">{t("stableIndicators")}</div>
            <div className="mt-1 text-lg font-semibold tabular-nums text-[color:var(--status-green)]">{stableCount} / {indicators.length}</div>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-border bg-background p-3">
          <div className="text-xs text-muted-foreground">{t("recommendedAction")}</div>
          <p className={`mt-1 text-sm leading-relaxed font-medium ${s.fg}`}>{t(recommendedActionKey(status))}</p>
        </div>
      </div>

      {/* Per-indicator */}
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

      {/* Global Status */}
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

      {isRTL && (
        <div data-export-ignore className="mt-3 rounded-md border border-border bg-secondary/40 p-2 text-xs text-muted-foreground text-right">
          {t("arabicTextNotice")}
        </div>
      )}

      {/* Footer */}
      <div className={`mt-4 rounded-xl border border-border bg-card p-3 shadow-sm text-xs text-muted-foreground ${isRTL ? "text-right" : "text-left"}`}>
        {t("confidentialFooter")} — {reportMeta.id} — {dateStr}
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
  const [exporting, setExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [reportMeta, setReportMeta] = useState<{ id: string; date: Date } | null>(null);
  const analysisRef = useRef<HTMLElement | null>(null);

  const tick = async (value: number) => {
    setExportProgress(value);
    // yield to the browser so the UI repaints between heavy steps
    await new Promise((r) => setTimeout(r, 30));
  };

  const handleExportPdf = async () => {
    if (!analysisRef.current) return;
    setExporting(true);
    setExportProgress(0);
    try {
      await tick(8);
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      await tick(30);
      const el = analysisRef.current;
      const bg = getComputedStyle(document.body).backgroundColor || "#ffffff";
      const canvas = await html2canvas(el, { scale: 2, backgroundColor: bg, useCORS: true });
      await tick(70);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 24;
      const maxW = pageW - margin * 2;
      const imgH = (canvas.height * maxW) / canvas.width;
      let y = margin;
      let remaining = imgH;
      await tick(85);
      if (imgH <= pageH - margin * 2) {
        pdf.addImage(imgData, "PNG", margin, y, maxW, imgH);
      } else {
        let position = 0;
        while (remaining > 0) {
          pdf.addImage(imgData, "PNG", margin, margin - position, maxW, imgH);
          remaining -= pageH - margin * 2;
          position += pageH - margin * 2;
          if (remaining > 0) pdf.addPage();
        }
      }
      await tick(95);
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      const dateStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}-${pad(d.getMinutes())}`;
      pdf.save(`gsos-analysis-${status.toUpperCase()}-${dateStr}.pdf`);
      await tick(100);
    } finally {
      setExporting(false);
      setExportProgress(0);
    }
  };

  const handleExportPdfText = async () => {
    // Arabic needs glyph shaping the standard jsPDF fonts can't do — fall back to image.
    if (lang === "ar") {
      await handleExportPdf();
      return;
    }
    setExporting(true);
    setExportProgress(0);
    try {
      await tick(10);
      const { jsPDF } = await import("jspdf");
      await tick(35);
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 48;
      const maxW = pageW - margin * 2;
      let y = margin;

      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      const stamp = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}-${pad(d.getMinutes())}`;
      const dateStr = d.toLocaleString(lang === "fr" ? "fr-FR" : "en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      const statusColor: Record<typeof status, [number, number, number]> = {
        stable: [22, 163, 74],
        monitor: [202, 138, 4],
        risk: [220, 38, 38],
      };

      const ensureSpace = (h: number) => {
        if (y + h > pageH - margin) {
          pdf.addPage();
          y = margin;
        }
      };

      const writeWrapped = (text: string, size: number, opts: { bold?: boolean; color?: [number, number, number] } = {}) => {
        pdf.setFont("helvetica", opts.bold ? "bold" : "normal");
        pdf.setFontSize(size);
        const [r, g, b] = opts.color ?? [20, 20, 20];
        pdf.setTextColor(r, g, b);
        const lines = pdf.splitTextToSize(text, maxW) as string[];
        const lineH = size * 1.35;
        ensureSpace(lines.length * lineH);
        pdf.text(lines, margin, y);
        y += lines.length * lineH;
      };

      // Header
      writeWrapped(t("reportHeader"), 18, { bold: true });
      y += 4;
      writeWrapped(`${t("exportDate")}: ${dateStr}`, 10, { color: [110, 110, 110] });
      writeWrapped(
        `${t("globalStatus")}: ${t(status)}`,
        12,
        { bold: true, color: statusColor[status] },
      );
      y += 8;
      pdf.setDrawColor(220, 220, 220);
      pdf.line(margin, y, pageW - margin, y);
      y += 16;
      await tick(55);


      // Analysis title
      writeWrapped(t("analysisTitle"), 14, { bold: true });
      y += 6;

      // Per-indicator
      indicators.forEach((i) => {
        const state = colorStateFor(i.value);
        const color: [number, number, number] =
          state === "green" ? [22, 163, 74] : state === "yellow" ? [202, 138, 4] : [220, 38, 38];
        writeWrapped(`${t(i.key)} — ${i.value} / 100 [${state.toUpperCase()}]`, 12, { bold: true, color });
        writeWrapped(t(statusExplanationKey(state)), 11, { color: [60, 60, 60] });
        y += 6;
      });

      // Global explanation
      y += 4;
      writeWrapped(t("globalStatus"), 14, { bold: true });
      writeWrapped(t(globalStatusExplanationKey(status)), 11, { color: statusColor[status] });
      await tick(80);

      // Footer on every page
      const pageCount = pdf.getNumberOfPages();
      for (let p = 1; p <= pageCount; p++) {
        pdf.setPage(p);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(9);
        pdf.setTextColor(140, 140, 140);
        pdf.text(`${t("appName")} — ${dateStr}`, margin, pageH - 20);
        pdf.text(`${p} / ${pageCount}`, pageW - margin, pageH - 20, { align: "right" });
      }
      await tick(95);

      pdf.save(`gsos-analysis-${status.toUpperCase()}-${stamp}-text.pdf`);
      await tick(100);
    } finally {
      setExporting(false);
      setExportProgress(0);
    }
  };


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
            aria-busy={analysing}
            aria-disabled={analysing}
            tabIndex={analysing ? -1 : 0}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {analysing ? t("analysing") : t("analyse")}
          </button>
        </div>

        <section
          className="mt-6 grid gap-[var(--gsos-gap-grid)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
          aria-label={t("dashboard")}
          aria-busy={analysing}
        >
          {analysing
            ? indicators.map((i) => <IndicatorSkeleton key={i.key} />)
            : indicators.map((i) => <IndicatorCard key={i.key} indicator={i} />)}
        </section>

        <GsosCard as="section" className="mt-6" aria-label={t("globalStatus")}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">{t("globalStatus")}</h2>
              <div className="mt-2 flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${s.dot}`} aria-hidden="true" />
                <span className={`text-2xl font-semibold ${s.fg}`}>{t(status)}</span>
              </div>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${s.bg} ${s.fg}`}
              aria-label={`${indicators.filter((i) => colorStateFor(i.value) === "red").length} of 3 indicators critical`}
            >
              {indicators.filter((i) => colorStateFor(i.value) === "red").length} / 3 RED
            </span>
          </div>
        </GsosCard>

        {showAnalysis && <AnalysisPanel indicators={indicators} status={status} panelRef={analysisRef} onExport={handleExportPdf} onExportText={handleExportPdfText} exporting={exporting} exportProgress={exportProgress} exportDate={new Date()} />}
      </main>
    </div>
  );
}
