import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PilotService } from "@/lib/pilot";

type Props = {
  sessionId: string;
};

function Stars({
  value,
  onChange,
  label,
  minLabel,
  maxLabel,
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
  minLabel: string;
  maxLabel: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
      <div
        role="radiogroup"
        aria-label={label}
        className="inline-flex items-center gap-1"
      >
        {[1, 2, 3, 4, 5].map((n) => {
          const active = n <= value;
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={value === n}
              aria-label={`${label}: ${n} / 5`}
              onClick={() => onChange(n)}
              className={`h-9 w-9 rounded-md border text-sm font-semibold transition-colors ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input bg-background text-muted-foreground hover:bg-secondary"
              }`}
            >
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PilotFeedbackForm({ sessionId }: Props) {
  const { t, lang } = useI18n();
  const isRTL = lang === "ar";
  const [accuracy, setAccuracy] = useState(0);
  const [usefulness, setUsefulness] = useState(0);
  const [notes, setNotes] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [submittedAt, setSubmittedAt] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setSubmittedAt(null);
    setAccuracy(0);
    setUsefulness(0);
    setNotes("");
    setSuggestions("");
    PilotService.getFeedbackForSession(sessionId).then((f) => {
      if (cancelled || !f) return;
      setAccuracy(f.accuracyScore);
      setUsefulness(f.usefulnessScore);
      setNotes(f.notes);
      setSuggestions(f.suggestions);
      setSubmittedAt(f.createdAt);
    });
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  const canSubmit = accuracy >= 1 && usefulness >= 1 && !submitting;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      const trimmedNotes = notes.trim().slice(0, 1000);
      const trimmedSug = suggestions.trim().slice(0, 1000);
      const fb = await PilotService.submitFeedback({
        sessionId,
        accuracyScore: accuracy,
        usefulnessScore: usefulness,
        notes: trimmedNotes,
        suggestions: trimmedSug,
      });
      setSubmittedAt(fb.createdAt);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className={`mt-6 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}
      dir={isRTL ? "rtl" : "ltr"}
      aria-label={t("pilotFeedbackTitle")}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold tracking-tight">{t("pilotFeedbackTitle")}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{t("pilotFeedbackSubtitle")}</p>
        </div>
        {submittedAt && (
          <span className="rounded-full bg-[color:var(--status-green-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[color:var(--status-green)]">
            {t("pilotSubmitted")}
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium">{t("pilotQ1")}</label>
          <Stars
            value={accuracy}
            onChange={setAccuracy}
            label={t("pilotQ1")}
            minLabel={t("pilotScale1")}
            maxLabel={t("pilotScale5")}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium">{t("pilotQ2")}</label>
          <Stars
            value={usefulness}
            onChange={setUsefulness}
            label={t("pilotQ2")}
            minLabel={t("pilotScale1")}
            maxLabel={t("pilotScale5")}
          />
        </div>
        <div>
          <label htmlFor="pilot-notes" className="mb-1.5 block text-xs font-medium">
            {t("pilotQ3")}
          </label>
          <textarea
            id="pilot-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            maxLength={1000}
            rows={3}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div>
          <label htmlFor="pilot-sug" className="mb-1.5 block text-xs font-medium">
            {t("pilotQ4")}
          </label>
          <textarea
            id="pilot-sug"
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
            maxLength={1000}
            rows={3}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submittedAt ? t("pilotSubmitAgain") : t("pilotSubmit")}
          </button>
        </div>
      </form>
    </section>
  );
}
