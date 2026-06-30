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
    previewReport: "Preview report",
    previewTitle: "Report preview",
    previewSubtitle: "Review the report before exporting to PDF.",
    closePreview: "Close",
    pageOnePreview: "Page 1 of 1 (preview)",
    aiReview: "AI Review",
    aiReviewing: "AI reviewing…",
    aiReviewTitle: "AI Writing Assistant",
    aiReviewSubtitle: "Suggestions to improve clarity, grammar, and style. Numerical values, IDs, and dates are never modified.",
    aiNoSuggestions: "No suggestions — the report reads well.",
    aiWritingQuality: "Writing Quality",
    aiReadability: "Readability",
    aiAcceptAll: "Accept all",
    aiAcceptSelected: "Accept selected",
    aiRejectAll: "Reject all",
    aiExportCorrected: "Export corrected PDF",
    aiOriginal: "Original",
    aiSuggested: "Suggested",
    aiSection: "Section",
    aiType: "Type",
    aiTypeSpelling: "Spelling",
    aiTypeGrammar: "Grammar",
    aiTypeStyle: "Style",
    aiTypeClarity: "Clarity",
    aiTypeDuplication: "Duplication",
    aiTypeReadability: "Readability",
    aiClose: "Close",
    aiError: "AI review failed. Please try again.",
    aiSelectAll: "Select all",
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
    version: "Version",
    reportId: "ID du rapport",
    generationDate: "Date de génération",
    languageLabel: "Langue",
    langName: "Français",
    executiveSummary: "Résumé exécutif",
    overallRiskLevel: "Niveau de risque global",
    criticalIndicators: "Indicateurs critiques",
    stableIndicators: "Indicateurs stables",
    recommendedAction: "Action recommandée",
    recommendedActionStable: "Maintenir la surveillance de routine et une réévaluation périodique.",
    recommendedActionMonitor: "Investiguer l'indicateur élevé et préparer un plan de contingence.",
    recommendedActionRisk: "Déclencher le protocole de réponse immédiate et alerter la direction.",
    reportIdentity: "Identité du rapport",
    pageOf: "Page {x} sur {y}",
    confidentialFooter: "GSOS Observer V1.0 — Rapport d'audit international",
    explanation: "Explication",
    previewReport: "Aperçu du rapport",
    previewTitle: "Aperçu du rapport",
    previewSubtitle: "Vérifiez le rapport avant l'exportation en PDF.",
    closePreview: "Fermer",
    pageOnePreview: "Page 1 sur 1 (aperçu)",
    aiReview: "Revue IA",
    aiReviewing: "Analyse IA en cours…",
    aiReviewTitle: "Assistant d'écriture IA",
    aiReviewSubtitle: "Suggestions pour améliorer la clarté, la grammaire et le style. Les valeurs numériques, identifiants et dates ne sont jamais modifiés.",
    aiNoSuggestions: "Aucune suggestion — le rapport est bien rédigé.",
    aiWritingQuality: "Qualité d'écriture",
    aiReadability: "Lisibilité",
    aiAcceptAll: "Tout accepter",
    aiAcceptSelected: "Accepter la sélection",
    aiRejectAll: "Tout rejeter",
    aiExportCorrected: "Exporter PDF corrigé",
    aiOriginal: "Original",
    aiSuggested: "Suggéré",
    aiSection: "Section",
    aiType: "Type",
    aiTypeSpelling: "Orthographe",
    aiTypeGrammar: "Grammaire",
    aiTypeStyle: "Style",
    aiTypeClarity: "Clarté",
    aiTypeDuplication: "Duplication",
    aiTypeReadability: "Lisibilité",
    aiClose: "Fermer",
    aiError: "Échec de la revue IA. Veuillez réessayer.",
    aiSelectAll: "Tout sélectionner",
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
    version: "الإصدار",
    reportId: "معرّف التقرير",
    generationDate: "تاريخ الإصدار",
    languageLabel: "اللغة",
    langName: "العربية",
    executiveSummary: "الملخص التنفيذي",
    overallRiskLevel: "مستوى الخطر العام",
    criticalIndicators: "المؤشرات الحرجة",
    stableIndicators: "المؤشرات المستقرة",
    recommendedAction: "الإجراء الموصى به",
    recommendedActionStable: "مواصلة المراقبة الدورية وإعادة التقييم المنتظم.",
    recommendedActionMonitor: "التحقق من المؤشر المرتفع وإعداد خطة طوارئ.",
    recommendedActionRisk: "تفعيل بروتوكول الاستجابة الفورية والتصعيد إلى القيادة.",
    reportIdentity: "هوية التقرير",
    pageOf: "صفحة {x} من {y}",
    confidentialFooter: "مرصد GSOS الإصدار 1.0 — تقرير تدقيق دولي",
    explanation: "التفسير",
    previewReport: "معاينة التقرير",
    previewTitle: "معاينة التقرير",
    previewSubtitle: "راجع التقرير قبل تصديره إلى PDF.",
    closePreview: "إغلاق",
    pageOnePreview: "صفحة 1 من 1 (معاينة)",
    aiReview: "مراجعة بالذكاء الاصطناعي",
    aiReviewing: "جاري التحليل بالذكاء الاصطناعي…",
    aiReviewTitle: "مساعد الكتابة بالذكاء الاصطناعي",
    aiReviewSubtitle: "اقتراحات لتحسين الوضوح والقواعد والأسلوب. لا يتم تعديل القيم الرقمية أو المعرفات أو التواريخ أبدًا.",
    aiNoSuggestions: "لا توجد اقتراحات — التقرير مكتوب بشكل جيد.",
    aiWritingQuality: "جودة الكتابة",
    aiReadability: "سهولة القراءة",
    aiAcceptAll: "قبول الكل",
    aiAcceptSelected: "قبول المحدد",
    aiRejectAll: "رفض الكل",
    aiExportCorrected: "تصدير PDF المصحح",
    aiOriginal: "الأصلي",
    aiSuggested: "المقترح",
    aiSection: "القسم",
    aiType: "النوع",
    aiTypeSpelling: "إملاء",
    aiTypeGrammar: "قواعد",
    aiTypeStyle: "أسلوب",
    aiTypeClarity: "وضوح",
    aiTypeDuplication: "تكرار",
    aiTypeReadability: "قابلية القراءة",
    aiClose: "إغلاق",
    aiError: "فشلت المراجعة بالذكاء الاصطناعي. يرجى المحاولة مرة أخرى.",
    aiSelectAll: "تحديد الكل",
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
