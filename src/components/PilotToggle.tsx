import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { isPilotModeEnabled, setPilotModeEnabled } from "@/lib/pilot";

export function PilotToggle({ onChange }: { onChange?: (enabled: boolean) => void }) {
  const { t } = useI18n();
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(isPilotModeEnabled());
  }, []);

  const toggle = () => {
    const next = !on;
    setPilotModeEnabled(next);
    setOn(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={t("pilotMode")}
      title={t("pilotModeHint")}
      onClick={toggle}
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${
        on
          ? "border-primary bg-primary/10 text-primary"
          : "border-input bg-background text-muted-foreground hover:bg-secondary"
      }`}
    >
      <span
        className={`inline-block h-2 w-2 rounded-full ${on ? "bg-primary" : "bg-muted-foreground/50"}`}
        aria-hidden="true"
      />
      {on ? t("pilotModeOn") : t("pilotModeOff")}
    </button>
  );
}
