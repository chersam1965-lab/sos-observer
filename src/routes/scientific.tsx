import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { isAuthed } from "@/lib/auth";
import { useI18n, LanguageSwitcher, type Lang } from "@/lib/i18n";
import {
  ScientificService,
  type Experiment,
  type ScientificAggregate,
  type MatchFlag,
} from "@/lib/scientific";
import type { OverallRiskLevel } from "@/lib/analysis/types";
import { GsosCard, GsosCardHeader, GsosCardTitle } from "@/components/GsosCard";

export const Route = createFileRoute("/scientific")({
  head: () => ({
    meta: [
      { title: "GSOS Observer — Scientific Validation" },
      {
        name: "description",
        content:
          "Scientific Validation Framework for GSOS Observer — controlled experiments and expert ground-truth comparison.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ScientificPage,
});

const FLAG_COLORS: Record<MatchFlag, string> = {
  match: "bg-[color:var(--status-green)]",
  partial: "bg-[color:var(--status-yellow)]",
  mismatch: "bg-[color:var(--status-red)]",
};

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

const defaultForm = {
  objective: "",
  caseType: "",
  caseDescription: "",
  inputData: "",
  gsosRealityGap: 20,
  gsosTrust: 20,
  gsosResponseDelay: 20,
  gsosStatus: "stable" as OverallRiskLevel,
  gsosSummary: "",
  truthStatus: "stable" as OverallRiskLevel,
  truthNotes: "",
  evaluatorNotes: "",
};

function ScientificPage() {
  const { t, lang } = useI18n();
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [rows, setRows] = useState<Experiment[]>([]);
  const [agg, setAgg] = useState<ScientificAggregate | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (!isAuthed()) {
      navigate({ to: "/login" });
      return;
    }
    setReady(true);
  }, [navigate]);

  const refresh = async () => {
    const [list, a] = await Promise.all([
      ScientificService.list(),
      ScientificService.aggregate(),
    ]);
    setRows(list);
    setAgg(a);
  };

  useEffect(() => {
    if (!ready) return;
    refresh();
  }, [ready]);

  const isRTL = lang === "ar";
  const totals = agg?.totalExperiments ?? 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await ScientificService.create({
        language: lang as Lang,
        objective: form.objective,
        caseType: form.caseType,
        caseDescription: form.caseDescription,
        inputData: form.inputData,
        gsosResult: {
          realityGap: form.gsosRealityGap,
          trust: form.gsosTrust,
          responseDelay: form.gsosResponseDelay,
          globalStatus: form.gsosStatus,
          summary: form.gsosSummary,
        },
        groundTruth: { globalStatus: form.truthStatus, notes: form.truthNotes },
        evaluatorNotes: form.evaluatorNotes,
      });
      setForm(defaultForm);
      setShowForm(false);
      await refresh();
    } finally {
      setSaving(false);
    }
  };

  const strengths = useMemo(() => {
    const s: string[] = [];
    if (!agg || agg.totalExperiments === 0) return s;
    if ((agg.successRate ?? 0) >= 80) s.push(t("svStrengthHighSuccess"));
    if (agg.matches > agg.mismatches) s.push(t("svStrengthMoreMatches"));
    if (agg.languageDistribution.ar > 0 && agg.languageDistribution.fr > 0 && agg.languageDistribution.en > 0)
      s.push(t("svStrengthMultilingual"));
    if (s.length === 0) s.push(t("svStrengthNone"));
    return s;
  }, [agg, t]);

  const weaknesses = useMemo(() => {
    const w: string[] = [];
    if (!agg || agg.totalExperiments === 0) return w;
    if ((agg.successRate ?? 0) < 50) w.push(t("svWeaknessLowSuccess"));
    if (agg.mismatches >= agg.matches && agg.mismatches > 0)
      w.push(t("svWeaknessManyMismatches"));
    if (agg.totalExperiments < 10) w.push(t("svWeaknessSmallSample"));
    if (w.length === 0) w.push(t("svWeaknessNone"));
    return w;
  }, [agg, t]);

  const recommendations = useMemo(() => {
    const r: string[] = [];
    if (!agg || agg.totalExperiments === 0) return r;
    if ((agg.successRate ?? 0) < 70) r.push(t("svRecCalibrate"));
    if (agg.totalExperiments < 30) r.push(t("svRecExpandSample"));
    if (Object.keys(agg.caseTypeDistribution).length < 3)
      r.push(t("svRecDiversifyCases"));
    if (r.length === 0) r.push(t("svRecMaintain"));
    return r;
  }, [agg, t]);

  const improvementPlan = useMemo(() => {
    return [
      t("svPlan1"),
      t("svPlan2"),
      t("svPlan3"),
      t("svPlan4"),
    ];
  }, [t]);

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

      const write = (
        text: string,
        size: number,
        bold = false,
        color: [number, number, number] = [20, 20, 20],
      ) => {
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

      write(t("svReportTitle"), 20, true);
      write(`GSOS Observer — ${dateStr}`, 10, false, [110, 110, 110]);
      hr();

      write(t("svSectionSummary"), 13, true);
      write(`${t("svTotalExperiments")}: ${agg.totalExperiments}`, 11);
      write(`${t("svMatches")}: ${agg.matches}`, 11);
      write(`${t("svPartials")}: ${agg.partials}`, 11);
      write(`${t("svMismatches")}: ${agg.mismatches}`, 11);
      write(
        `${t("svSuccessRate")}: ${agg.successRate ?? "—"}%`,
        11,
      );
      write(
        `${t("svAvgMatchRate")}: ${agg.averageMatchRate ?? "—"}%`,
        11,
      );
      hr();

      write(t("svSectionStats"), 13, true);
      write(`${t("svLanguageDistribution")}:`, 11, true);
      write(`EN: ${agg.languageDistribution.en}  •  FR: ${agg.languageDistribution.fr}  •  AR: ${agg.languageDistribution.ar}`, 11);
      write(`${t("svCaseTypeDistribution")}:`, 11, true);
      const cases = Object.entries(agg.caseTypeDistribution);
      if (cases.length === 0) write("—", 11, false, [110, 110, 110]);
      else cases.forEach(([k, v]) => write(`• ${k} — ${v}`, 11));
      hr();

      write(t("svSectionStrengths"), 13, true);
      strengths.forEach((s) => write(`• ${s}`, 11));
      hr();

      write(t("svSectionWeaknesses"), 13, true);
      weaknesses.forEach((s) => write(`• ${s}`, 11));
      hr();

      write(t("svSectionRecommendations"), 13, true);
      recommendations.forEach((s) => write(`• ${s}`, 11));
      hr();

      write(t("svSectionPlan"), 13, true);
      improvementPlan.forEach((s, i) => write(`${i + 1}. ${s}`, 11));

      const pageCount = pdf.getNumberOfPages();
      for (let p = 1; p <= pageCount; p++) {
        pdf.setPage(p);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(9);
        pdf.setTextColor(140, 140, 140);
        pdf.text(`GSOS Scientific Validation — ${dateStr}`, margin, pageH - 20);
        pdf.text(`Page ${p} / ${pageCount}`, pageW - margin, pageH - 20, { align: "right" });
      }

      const stamp = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      const fname = `GSOS-Scientific-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
      pdf.save(fname);
    } finally {
      setExporting(false);
    }
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <header className="border-b border-border bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{t("appName")}</div>
              <div className="text-xs text-muted-foreground">{t("svDashboard")}</div>
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
              {t("svDashboard")}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{t("svSubtitle")}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowForm((v) => !v)}
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-secondary"
            >
              {showForm ? t("svCancel") : t("svNewExperiment")}
            </button>
            <button
              type="button"
              onClick={handleExport}
              disabled={exporting || totals === 0}
              aria-busy={exporting}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {t("svExportReport")}
            </button>
          </div>
        </div>

        {showForm && (
          <GsosCard as="section" className="mt-6">
            <GsosCardHeader>
              <GsosCardTitle>{t("svNewExperiment")}</GsosCardTitle>
            </GsosCardHeader>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="col-span-2 text-sm">
                <span className="mb-1 block font-medium">{t("svObjective")}</span>
                <input
                  required
                  value={form.objective}
                  onChange={(e) => setForm({ ...form, objective: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium">{t("svCaseType")}</span>
                <input
                  required
                  value={form.caseType}
                  onChange={(e) => setForm({ ...form, caseType: e.target.value })}
                  placeholder={t("svCaseTypePlaceholder")}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium">{t("svCaseDescription")}</span>
                <input
                  value={form.caseDescription}
                  onChange={(e) => setForm({ ...form, caseDescription: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="col-span-2 text-sm">
                <span className="mb-1 block font-medium">{t("svInputData")}</span>
                <textarea
                  rows={2}
                  value={form.inputData}
                  onChange={(e) => setForm({ ...form, inputData: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </label>

              <fieldset className="col-span-2 rounded-md border border-border p-3">
                <legend className="px-2 text-xs font-semibold text-muted-foreground">
                  {t("svGsosResult")}
                </legend>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {(["gsosRealityGap", "gsosTrust", "gsosResponseDelay"] as const).map((k) => (
                    <label key={k} className="text-sm">
                      <span className="mb-1 block font-medium">
                        {k === "gsosRealityGap"
                          ? t("realityGap")
                          : k === "gsosTrust"
                            ? t("trust")
                            : t("responseDelay")}
                      </span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={form[k]}
                        onChange={(e) =>
                          setForm({ ...form, [k]: Number(e.target.value) } as typeof form)
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </label>
                  ))}
                  <label className="text-sm">
                    <span className="mb-1 block font-medium">{t("globalStatus")}</span>
                    <select
                      value={form.gsosStatus}
                      onChange={(e) =>
                        setForm({ ...form, gsosStatus: e.target.value as OverallRiskLevel })
                      }
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="stable">{t("stable")}</option>
                      <option value="monitor">{t("monitor")}</option>
                      <option value="risk">{t("risk")}</option>
                    </select>
                  </label>
                </div>
                <label className="mt-3 block text-sm">
                  <span className="mb-1 block font-medium">{t("executiveSummary")}</span>
                  <textarea
                    rows={2}
                    value={form.gsosSummary}
                    onChange={(e) => setForm({ ...form, gsosSummary: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </label>
              </fieldset>

              <fieldset className="col-span-2 rounded-md border border-border p-3">
                <legend className="px-2 text-xs font-semibold text-muted-foreground">
                  {t("svGroundTruth")}
                </legend>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="text-sm">
                    <span className="mb-1 block font-medium">{t("globalStatus")}</span>
                    <select
                      value={form.truthStatus}
                      onChange={(e) =>
                        setForm({ ...form, truthStatus: e.target.value as OverallRiskLevel })
                      }
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="stable">{t("stable")}</option>
                      <option value="monitor">{t("monitor")}</option>
                      <option value="risk">{t("risk")}</option>
                    </select>
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block font-medium">{t("svTruthNotes")}</span>
                    <input
                      value={form.truthNotes}
                      onChange={(e) => setForm({ ...form, truthNotes: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </label>
                </div>
              </fieldset>

              <label className="col-span-2 text-sm">
                <span className="mb-1 block font-medium">{t("svEvaluatorNotes")}</span>
                <textarea
                  rows={2}
                  value={form.evaluatorNotes}
                  onChange={(e) => setForm({ ...form, evaluatorNotes: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </label>

              <div className="col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
                >
                  {saving ? t("svSaving") : t("svSaveExperiment")}
                </button>
              </div>
            </form>
          </GsosCard>
        )}

        {totals === 0 ? (
          <GsosCard as="section" className="mt-6">
            <p className="text-sm text-muted-foreground">{t("svEmpty")}</p>
          </GsosCard>
        ) : (
          <>
            <section className="mt-6 grid gap-[var(--gsos-gap-grid)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("svTotalExperiments")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-3 text-3xl font-semibold tabular-nums">{agg!.totalExperiments}</div>
              </GsosCard>
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("svSuccessRate")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-3 text-3xl font-semibold tabular-nums">
                  {agg!.successRate ?? "—"}
                  <span className="text-sm text-muted-foreground"> %</span>
                </div>
              </GsosCard>
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("svAvgMatchRate")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-3 text-3xl font-semibold tabular-nums">
                  {agg!.averageMatchRate ?? "—"}
                  <span className="text-sm text-muted-foreground"> %</span>
                </div>
              </GsosCard>
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("svMatches")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-3 text-3xl font-semibold tabular-nums">
                  {agg!.matches}
                  <span className="text-sm text-muted-foreground"> / {agg!.totalExperiments}</span>
                </div>
              </GsosCard>
            </section>

            <section className="mt-6 grid gap-[var(--gsos-gap-grid)] grid-cols-1 lg:grid-cols-2">
              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("svMatchDistribution")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-4 space-y-3">
                  {(["match", "partial", "mismatch"] as const).map((k) => (
                    <div key={k}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-medium">
                          {k === "match" ? t("svMatch") : k === "partial" ? t("svPartial") : t("svMismatch")}
                        </span>
                        <span className="tabular-nums text-muted-foreground">
                          {k === "match" ? agg!.matches : k === "partial" ? agg!.partials : agg!.mismatches}
                        </span>
                      </div>
                      <Bar
                        value={k === "match" ? agg!.matches : k === "partial" ? agg!.partials : agg!.mismatches}
                        max={agg!.totalExperiments}
                        className={FLAG_COLORS[k]}
                      />
                    </div>
                  ))}
                </div>
              </GsosCard>

              <GsosCard>
                <GsosCardHeader>
                  <GsosCardTitle>{t("svPerformanceOverTime")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-4">
                  {agg!.performanceOverTime.length === 0 ? (
                    <p className="text-sm text-muted-foreground">—</p>
                  ) : (
                    <ul className="space-y-2">
                      {agg!.performanceOverTime.map((p) => (
                        <li key={p.weekStart} className="text-xs">
                          <div className="mb-1 flex items-center justify-between">
                            <span className="font-mono">{p.weekStart}</span>
                            <span className="tabular-nums text-muted-foreground">
                              {p.matches}/{p.total} • {p.successRate}%
                            </span>
                          </div>
                          <Bar
                            value={p.successRate}
                            max={100}
                            className="bg-primary"
                          />
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
                  <GsosCardTitle>{t("svRecentExperiments")}</GsosCardTitle>
                </GsosCardHeader>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <th className="py-2 pr-3 font-medium">{t("pilotDate")}</th>
                        <th className="py-2 pr-3 font-medium">{t("svCaseType")}</th>
                        <th className="py-2 pr-3 font-medium">{t("pilotLang")}</th>
                        <th className="py-2 pr-3 font-medium">GSOS</th>
                        <th className="py-2 pr-3 font-medium">{t("svGroundTruthShort")}</th>
                        <th className="py-2 pr-3 font-medium">{t("svMatchRate")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.slice(0, 20).map((r) => (
                        <tr key={r.experimentId} className="border-b border-border/60">
                          <td className="py-2 pr-3 tabular-nums">
                            {new Date(r.createdAt).toLocaleString(
                              lang === "ar" ? "ar" : lang === "fr" ? "fr-FR" : "en-US",
                              { dateStyle: "short", timeStyle: "short" },
                            )}
                          </td>
                          <td className="py-2 pr-3">{r.caseType || "—"}</td>
                          <td className="py-2 pr-3 uppercase">{r.language}</td>
                          <td className="py-2 pr-3">{t(r.gsosResult.globalStatus)}</td>
                          <td className="py-2 pr-3">{t(r.groundTruth.globalStatus)}</td>
                          <td className="py-2 pr-3 tabular-nums">
                            <span
                              className={`inline-block h-2 w-2 rounded-full ${FLAG_COLORS[r.matchFlag]}`}
                              aria-hidden
                            />{" "}
                            {r.matchRate}%
                          </td>
                        </tr>
                      ))}
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
