import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";

const dict = {
  en: {
    appName: "GSOS Observer",
    tagline: "Operational Observation Layer",
    login: "Login",
    username: "Username",
    password: "Password",
    signIn: "Sign in",
    signOut: "Sign out",
    dashboard: "Dashboard",
    realityGap: "Reality Gap Index",
    trust: "Trust Index",
    responseDelay: "Response Delay Index",
    globalStatus: "Global Status",
    stable: "Stable",
    monitor: "Monitor",
    risk: "Risk",
    analyse: "Analyse",
    value: "Value",
    lastUpdate: "Last update",
    analysing: "Analysing…",
    refreshed: "Indicators refreshed",
    invalidCredentials: "Invalid credentials. Try admin / admin.",
    language: "Language",
    analysisTitle: "Analysis Result",
    statusExplanationGreen: "Stable range — within acceptable limits.",
    statusExplanationYellow: "Elevated level — requires monitoring.",
    statusExplanationRed: "Critical state — immediate action required.",
    globalStatusExplanationStable: "All indicators are in the green range. The system is operating normally.",
    globalStatusExplanationMonitor: "One indicator is in the yellow/red range. Caution and monitoring are advised.",
    globalStatusExplanationRisk: "Two or more indicators are in the red range. Immediate response is required.",
    exportPdf: "Export PDF (image)",
    exportPdfText: "Export PDF (searchable)",
    exporting: "Exporting…",
    reportHeader: "GSOS Analysis Report",
    exportDate: "Export date",
    arabicTextNotice: "Note: searchable Arabic export falls back to the image version for proper glyph shaping.",
    indicator: "Indicator",
    status: "Status",
    version: "Version",
    reportId: "Report ID",
    generationDate: "Generation Date",
    languageLabel: "Language",
    langName: "English",
    executiveSummary: "Executive Summary",
    overallRiskLevel: "Overall Risk Level",
    criticalIndicators: "Critical Indicators",
    stableIndicators: "Stable Indicators",
    recommendedAction: "Recommended Action",
    recommendedActionStable: "Maintain routine monitoring and periodic reassessment.",
    recommendedActionMonitor: "Investigate the elevated indicator and prepare a contingency plan.",
    recommendedActionRisk: "Trigger immediate response protocol and escalate to leadership.",
    reportIdentity: "Report Identity",
    pageOf: "Page {x} of {y}",
    confidentialFooter: "GSOS Observer V1.0 — International Audit Report",
    explanation: "Explanation",

  },
  fr: {
    appName: "GSOS Observer",
    tagline: "Couche d'observation opérationnelle",
    login: "Connexion",
    username: "Identifiant",
    password: "Mot de passe",
    signIn: "Se connecter",
    signOut: "Se déconnecter",
    dashboard: "Tableau de bord",
    realityGap: "Indice d'écart à la réalité",
    trust: "Indice de confiance",
    responseDelay: "Indice de délai de réponse",
    globalStatus: "Statut global",
    stable: "Stable",
    monitor: "Surveillance",
    risk: "Risque",
    analyse: "Analyser",
    value: "Valeur",
    lastUpdate: "Dernière mise à jour",
    analysing: "Analyse en cours…",
    refreshed: "Indicateurs actualisés",
    invalidCredentials: "Identifiants invalides. Essayez admin / admin.",
    language: "Langue",
    analysisTitle: "Résultat de l'analyse",
    statusExplanationGreen: "Plage stable — dans les limites acceptables.",
    statusExplanationYellow: "Niveau élevé — surveillance recommandée.",
    statusExplanationRed: "État critique — action immédiate requise.",
    globalStatusExplanationStable: "Tous les indicateurs sont dans la plage verte. Le système fonctionne normalement.",
    globalStatusExplanationMonitor: "Un indicateur est dans la plage jaune/rouge. Prudence et surveillance conseillées.",
    globalStatusExplanationRisk: "Deux indicateurs ou plus sont dans la plage rouge. Réponse immédiate requise.",
    exportPdf: "Exporter en PDF (image)",
    exportPdfText: "Exporter PDF (recherche)",
    exporting: "Exportation…",
    reportHeader: "Rapport d'analyse GSOS",
    exportDate: "Date d'exportation",
    arabicTextNotice: "Remarque: l'export arabe recherchable bascule sur la version image pour un rendu correct des glyphes.",
    indicator: "Indicateur",
    status: "Statut",
    explanation: "Explication",

  },
  ar: {
    appName: "مرصد GSOS",
    tagline: "طبقة المراقبة التشغيلية",
    login: "تسجيل الدخول",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    signIn: "دخول",
    signOut: "خروج",
    dashboard: "لوحة القيادة",
    realityGap: "مؤشر فجوة الواقع",
    trust: "مؤشر الثقة",
    responseDelay: "مؤشر تأخر الاستجابة",
    globalStatus: "الحالة العامة",
    stable: "مستقر",
    monitor: "مراقبة",
    risk: "خطر",
    analyse: "تحليل",
    value: "القيمة",
    lastUpdate: "آخر تحديث",
    analysing: "جاري التحليل…",
    refreshed: "تم تحديث المؤشرات",
    invalidCredentials: "بيانات اعتماد غير صحيحة. جرّب admin / admin.",
    language: "اللغة",
    analysisTitle: "نتيجة التحليل",
    statusExplanationGreen: "نطاق مستقر — ضمن الحدود المقبولة.",
    statusExplanationYellow: "مستوى مرتفع — يتطلب مراقبة.",
    statusExplanationRed: "حالة حرجة — يتطلب تدخل فوري.",
    globalStatusExplanationStable: "جميع المؤشرات في النطاق الأخضر. النظام يعمل بشكل طبيعي.",
    globalStatusExplanationMonitor: "مؤشر واحد في النطاق الأصفر/الأحمر. ينصح بالحذر والمراقبة.",
    globalStatusExplanationRisk: "مؤشران أو أكثر في النطاق الأحمر. يتطلب رد فعل فوري.",
    exportPdf: "تصدير PDF (صورة)",
    exportPdfText: "تصدير PDF (نص قابل للبحث)",
    exporting: "جاري التصدير…",
    reportHeader: "تقرير تحليل GSOS",
    exportDate: "تاريخ التصدير",
    arabicTextNotice: "ملاحظة: التصدير النصي للعربية يتحول إلى نسخة الصورة لضمان تشكيل الحروف.",
    indicator: "المؤشر",
    status: "الحالة",
    explanation: "التفسير",

  },
} as const;

type Key = keyof typeof dict["en"];

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: Key) => string;
}>({ lang: "en", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("gsos.lang")) as Lang | null;
    if (stored && ["en", "fr", "ar"].includes(stored)) setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("gsos.lang", l);
  };

  const t = (k: Key) => dict[lang][k] ?? dict.en[k];

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useI18n = () => useContext(LangContext);

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const options: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "عربي" },
  ];
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card p-1 shadow-sm">
      {options.map((o) => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
            lang === o.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={lang === o.code}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
