import { useEffect, useState } from "react";

export type Indicator = {
  key: "realityGap" | "trust" | "responseDelay";
  value: number;
};

const STORAGE_KEY = "gsos.indicators";

function randomValue() {
  return Math.floor(Math.random() * 101);
}

function defaultIndicators(): Indicator[] {
  return [
    { key: "realityGap", value: 32 },
    { key: "trust", value: 58 },
    { key: "responseDelay", value: 21 },
  ];
}

export function colorStateFor(value: number): "green" | "yellow" | "red" {
  if (value <= 40) return "green";
  if (value <= 70) return "yellow";
  return "red";
}

export type GlobalStatus = "stable" | "monitor" | "risk";

export function computeGlobalStatus(values: Indicator[]): GlobalStatus {
  const reds = values.filter((i) => colorStateFor(i.value) === "red").length;
  if (reds >= 2) return "risk";
  if (reds === 1) return "monitor";
  return "stable";
}

export function useIndicators() {
  const [indicators, setIndicators] = useState<Indicator[]>(defaultIndicators);
  const [updatedAt, setUpdatedAt] = useState<number>(() => Date.now());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed.indicators) setIndicators(parsed.indicators);
        if (parsed.updatedAt) setUpdatedAt(parsed.updatedAt);
      } catch {
        // ignore
      }
    }
  }, []);

  const analyse = () => {
    const next = indicators.map((i) => ({ ...i, value: randomValue() }));
    const ts = Date.now();
    setIndicators(next);
    setUpdatedAt(ts);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ indicators: next, updatedAt: ts }));
    }
  };

  return { indicators, updatedAt, analyse };
}
