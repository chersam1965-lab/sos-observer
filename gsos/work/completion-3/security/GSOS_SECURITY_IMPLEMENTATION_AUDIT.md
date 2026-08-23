# GSOS Security Implementation Audit

HEAD=5b044c16d55fcc30158300dd8a28ea8ad9e546c9
BRANCH=gsos-mobile-lab
DATE=2026-08-14 00:01:39+0100

## Classification

IMPLEMENTED = concrete executable mechanism found
PARTIAL = references or incomplete mechanism found
DOCUMENTATION_ONLY = documentation without executable mechanism

## Validation

src/components/ui/chart.tsx:83:  .join("\n")}
src/components/ui/chart.tsx:87:          .join("\n"),
src/lib/ai-review.functions.ts:23:function validate(input: unknown): ReviewInput {
src/lib/ai-review.functions.ts:38:- Output schema:
src/lib/ai-review.functions.ts:50:  .inputValidator(validate)
src/lib/ai-review.functions.ts:90:      parsed = JSON.parse(content) as ReviewResult;
src/lib/analysis/localStorageRepository.ts:22:    const parsed = JSON.parse(raw);
src/lib/analysis/service.ts:7: * place to add cross-cutting concerns later (auditing, events, validation).
src/lib/i18n.tsx:101:    pilotFeedbackSubtitle: "Your input helps us validate GSOS in the field.",
src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
src/lib/i18n.tsx:132:    // Scientific Validation Framework
src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
src/lib/i18n.tsx:187:    svPlan3: "Publish a versioned validation dataset alongside each release.",
src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
src/lib/i18n.tsx:353:    // Scientific Validation Framework
src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
src/lib/i18n.tsx:408:    svPlan3: "Publier un jeu de données de validation versionné à chaque release.",
src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
src/lib/i18n.tsx:571:    // Scientific Validation Framework
src/lib/indicators.ts:46:        const parsed = JSON.parse(raw);
src/lib/knowledge/extractors/pilotExtractor.ts:15:    title: "Pilot Validation Program — totals",
src/lib/knowledge/extractors/pilotExtractor.ts:51:      body: agg.topKeywords.map((k) => `${k.word} (${k.count})`).join(", "),
src/lib/knowledge/extractors/scientificExtractor.ts:15:    title: "Scientific Validation Framework — totals",
src/lib/knowledge/extractors/scientificExtractor.ts:41:      body: cases.map(([k, v]) => `${k}: ${v}`).join("; "),
src/lib/knowledge/extractors/scientificExtractor.ts:55:        .join("; "),
src/lib/knowledge/generator.ts:40:  return items.map((i) => `• ${i.title}\n  ${i.body}`).join("\n\n");
src/lib/knowledge/generator.ts:88:              "src/lib/pilot/* — Pilot Validation Program (isolated storage).\n" +
src/lib/knowledge/generator.ts:89:              "src/lib/scientific/* — Scientific Validation Framework (isolated storage).\n" +
src/lib/knowledge/generator.ts:109:            heading: "Pilot Validation Program",
src/lib/knowledge/generator.ts:115:            heading: "Scientific Validation Framework",
src/lib/knowledge/generator.ts:175:          { heading: "Sprint history", body: sources.sprints.map((s) => `— ${s.path}`).join("\n") || "—" },
src/lib/knowledge/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
src/lib/knowledge/pdf.ts:52:  write(`Sources used: ${doc.sourcesUsed.join(", ") || "—"}`, 10, false, [90, 90, 90]);
src/lib/knowledge/pdf.ts:54:    `Extracted components: ${doc.extractedComponents.slice(0, 12).join(", ")}${doc.extractedComponents.length > 12 ? "…" : ""}`,
src/lib/pilot/localStorageRepository.ts:28:    const parsed = JSON.parse(raw);
src/lib/pilot/types.ts:2: * Pilot Validation Program — domain model (V1.3 Sprint S0).
src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
src/lib/reasoning/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
src/lib/scientific/localStorageRepository.ts:24:    const parsed = JSON.parse(raw);
src/lib/scientific/types.ts:2: * Scientific Validation Framework — domain model (V1.3 Sprint S1).
src/routes/__root.tsx:57:              router.invalidate();
src/routes/dashboard.tsx:744:          text = text.split(s.original).join(s.suggested);
src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
src/routes/knowledge.tsx:265:                                {activeDocument.sourcesUsed.join(", ")}
src/routes/pilot.tsx:19:      { name: "description", content: "Aggregate pilot validation metrics for GSOS Observer." },
src/routes/pilot.tsx:116:      write(t("pilotValidationReport"), 20, true);
src/routes/pilot.tsx:173:        pdf.text(`GSOS Pilot Validation — ${dateStr}`, margin, pageH - 20);
src/routes/pilot.tsx:179:      const fname = `GSOS-Pilot-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
src/routes/scientific.tsx:17:      { title: "GSOS Observer — Scientific Validation" },
src/routes/scientific.tsx:21:          "Scientific Validation Framework for GSOS Observer — controlled experiments and expert ground-truth comparison.",
src/routes/scientific.tsx:259:        pdf.text(`GSOS Scientific Validation — ${dateStr}`, margin, pageH - 20);
src/routes/scientific.tsx:265:      const fname = `GSOS-Scientific-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/runtime/validate/runtime-health.sh:15:./gsos/runtime/validate/runtime-validator.sh >> "$REPORT"
gsos/runtime/validate/runtime-health.sh:21:./gsos/runtime/validate/config-validator.sh >> "$REPORT"
gsos/runtime/runtime-controller.sh:9:./gsos/runtime/validate/runtime-validator.sh
gsos/runtime/runtime-controller.sh:18:./gsos/runtime/validate/config-validator.sh
gsos/runtime/runtime-controller.sh:27:./gsos/runtime/validate/runtime-health.sh
gsos/runtime-v2/events/s07_doc_audit.log:218:./docs/adr/0004-pilot-validation-program.md
gsos/runtime-v2/events/s07_doc_audit.log:219:./docs/adr/0005-scientific-validation-framework.md
gsos/runtime-v2/events/s07_doc_audit.log:607:./node_modules/zod/README.md
gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:50:gsos/runtime/validate/config-validator.sh
gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:51:gsos/runtime/validate/runtime-health.sh
gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:52:gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:118:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:119:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:120:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:121:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:135:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:136:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:137:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:138:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:151:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:601:docs/adr/0004-pilot-validation-program.md:17:(Arabic searchable PDF), we need evidence that the current product
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:605:docs/sprints/V1.3-S0-PILOT.md:41:- [x] Pilot Validation Report exports in EN/FR (Arabic report uses Latin fallback text).
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:607:docs/sprints/V1.3-S1-SVF.md:57:- [x] Scientific Validation Report PDF exports in EN / FR / AR (RTL) —
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:107:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:716:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:806:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:13:## Validation
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:15:src/components/ui/chart.tsx:83:  .join("\n")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:16:src/components/ui/chart.tsx:87:          .join("\n"),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:17:src/lib/ai-review.functions.ts:23:function validate(input: unknown): ReviewInput {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:18:src/lib/ai-review.functions.ts:38:- Output schema:
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:19:src/lib/ai-review.functions.ts:50:  .inputValidator(validate)
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:20:src/lib/ai-review.functions.ts:90:      parsed = JSON.parse(content) as ReviewResult;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:21:src/lib/analysis/localStorageRepository.ts:22:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:22:src/lib/analysis/service.ts:7: * place to add cross-cutting concerns later (auditing, events, validation).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:23:src/lib/i18n.tsx:101:    pilotFeedbackSubtitle: "Your input helps us validate GSOS in the field.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:24:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:25:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:26:src/lib/i18n.tsx:132:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:27:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:28:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:29:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:30:src/lib/i18n.tsx:187:    svPlan3: "Publish a versioned validation dataset alongside each release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:31:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:32:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:33:src/lib/i18n.tsx:353:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:34:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:35:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:36:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:37:src/lib/i18n.tsx:408:    svPlan3: "Publier un jeu de données de validation versionné à chaque release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:38:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:39:src/lib/i18n.tsx:571:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:40:src/lib/indicators.ts:46:        const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:41:src/lib/knowledge/extractors/pilotExtractor.ts:15:    title: "Pilot Validation Program — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:42:src/lib/knowledge/extractors/pilotExtractor.ts:51:      body: agg.topKeywords.map((k) => `${k.word} (${k.count})`).join(", "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:43:src/lib/knowledge/extractors/scientificExtractor.ts:15:    title: "Scientific Validation Framework — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:44:src/lib/knowledge/extractors/scientificExtractor.ts:41:      body: cases.map(([k, v]) => `${k}: ${v}`).join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:45:src/lib/knowledge/extractors/scientificExtractor.ts:55:        .join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:46:src/lib/knowledge/generator.ts:40:  return items.map((i) => `• ${i.title}\n  ${i.body}`).join("\n\n");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:47:src/lib/knowledge/generator.ts:88:              "src/lib/pilot/* — Pilot Validation Program (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:48:src/lib/knowledge/generator.ts:89:              "src/lib/scientific/* — Scientific Validation Framework (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:49:src/lib/knowledge/generator.ts:109:            heading: "Pilot Validation Program",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:50:src/lib/knowledge/generator.ts:115:            heading: "Scientific Validation Framework",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:51:src/lib/knowledge/generator.ts:175:          { heading: "Sprint history", body: sources.sprints.map((s) => `— ${s.path}`).join("\n") || "—" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:52:src/lib/knowledge/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:53:src/lib/knowledge/pdf.ts:52:  write(`Sources used: ${doc.sourcesUsed.join(", ") || "—"}`, 10, false, [90, 90, 90]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:54:src/lib/knowledge/pdf.ts:54:    `Extracted components: ${doc.extractedComponents.slice(0, 12).join(", ")}${doc.extractedComponents.length > 12 ? "…" : ""}`,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:55:src/lib/pilot/localStorageRepository.ts:28:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:56:src/lib/pilot/types.ts:2: * Pilot Validation Program — domain model (V1.3 Sprint S0).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:57:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:58:src/lib/reasoning/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:59:src/lib/scientific/localStorageRepository.ts:24:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:60:src/lib/scientific/types.ts:2: * Scientific Validation Framework — domain model (V1.3 Sprint S1).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:61:src/routes/__root.tsx:57:              router.invalidate();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:62:src/routes/dashboard.tsx:744:          text = text.split(s.original).join(s.suggested);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:64:src/routes/knowledge.tsx:265:                                {activeDocument.sourcesUsed.join(", ")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:65:src/routes/pilot.tsx:19:      { name: "description", content: "Aggregate pilot validation metrics for GSOS Observer." },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:66:src/routes/pilot.tsx:116:      write(t("pilotValidationReport"), 20, true);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:67:src/routes/pilot.tsx:173:        pdf.text(`GSOS Pilot Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:68:src/routes/pilot.tsx:179:      const fname = `GSOS-Pilot-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:69:src/routes/scientific.tsx:17:      { title: "GSOS Observer — Scientific Validation" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:70:src/routes/scientific.tsx:21:          "Scientific Validation Framework for GSOS Observer — controlled experiments and expert ground-truth comparison.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:71:src/routes/scientific.tsx:259:        pdf.text(`GSOS Scientific Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:72:src/routes/scientific.tsx:265:      const fname = `GSOS-Scientific-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:73:gsos/runtime/validate/runtime-health.sh:15:./gsos/runtime/validate/runtime-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:74:gsos/runtime/validate/runtime-health.sh:21:./gsos/runtime/validate/config-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:75:gsos/runtime/runtime-controller.sh:9:./gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:76:gsos/runtime/runtime-controller.sh:18:./gsos/runtime/validate/config-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:77:gsos/runtime/runtime-controller.sh:27:./gsos/runtime/validate/runtime-health.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:78:gsos/runtime-v2/events/s07_doc_audit.log:218:./docs/adr/0004-pilot-validation-program.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:79:gsos/runtime-v2/events/s07_doc_audit.log:219:./docs/adr/0005-scientific-validation-framework.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:80:gsos/runtime-v2/events/s07_doc_audit.log:607:./node_modules/zod/README.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:81:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:50:gsos/runtime/validate/config-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:82:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:51:gsos/runtime/validate/runtime-health.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:83:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:52:gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:84:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:118:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:85:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:119:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:86:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:120:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:87:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:121:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:88:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:135:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:89:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:136:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:90:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:137:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:91:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:138:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:92:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:151:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:93:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:601:docs/adr/0004-pilot-validation-program.md:17:(Arabic searchable PDF), we need evidence that the current product
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:94:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:605:docs/sprints/V1.3-S0-PILOT.md:41:- [x] Pilot Validation Report exports in EN/FR (Arabic report uses Latin fallback text).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:95:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:607:docs/sprints/V1.3-S1-SVF.md:57:- [x] Scientific Validation Report PDF exports in EN / FR / AR (RTL) —
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:96:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:97:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:107:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:98:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:716:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:99:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:100:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:806:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:101:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:13:## Validation
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:102:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:15:src/components/ui/chart.tsx:83:  .join("\n")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:103:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:16:src/components/ui/chart.tsx:87:          .join("\n"),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:104:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:17:src/lib/ai-review.functions.ts:23:function validate(input: unknown): ReviewInput {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:105:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:18:src/lib/ai-review.functions.ts:38:- Output schema:
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:106:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:19:src/lib/ai-review.functions.ts:50:  .inputValidator(validate)
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:107:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:20:src/lib/ai-review.functions.ts:90:      parsed = JSON.parse(content) as ReviewResult;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:108:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:21:src/lib/analysis/localStorageRepository.ts:22:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:109:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:22:src/lib/analysis/service.ts:7: * place to add cross-cutting concerns later (auditing, events, validation).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:110:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:23:src/lib/i18n.tsx:101:    pilotFeedbackSubtitle: "Your input helps us validate GSOS in the field.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:111:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:24:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:112:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:25:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:113:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:26:src/lib/i18n.tsx:132:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:114:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:27:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:115:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:28:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:116:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:29:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:117:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:30:src/lib/i18n.tsx:187:    svPlan3: "Publish a versioned validation dataset alongside each release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:118:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:31:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:119:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:32:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:120:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:33:src/lib/i18n.tsx:353:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:121:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:34:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:122:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:35:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:123:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:36:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:124:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:37:src/lib/i18n.tsx:408:    svPlan3: "Publier un jeu de données de validation versionné à chaque release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:125:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:38:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:126:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:39:src/lib/i18n.tsx:571:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:127:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:40:src/lib/indicators.ts:46:        const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:128:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:41:src/lib/knowledge/extractors/pilotExtractor.ts:15:    title: "Pilot Validation Program — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:129:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:42:src/lib/knowledge/extractors/pilotExtractor.ts:51:      body: agg.topKeywords.map((k) => `${k.word} (${k.count})`).join(", "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:130:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:43:src/lib/knowledge/extractors/scientificExtractor.ts:15:    title: "Scientific Validation Framework — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:131:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:44:src/lib/knowledge/extractors/scientificExtractor.ts:41:      body: cases.map(([k, v]) => `${k}: ${v}`).join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:132:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:45:src/lib/knowledge/extractors/scientificExtractor.ts:55:        .join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:133:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:46:src/lib/knowledge/generator.ts:40:  return items.map((i) => `• ${i.title}\n  ${i.body}`).join("\n\n");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:134:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:47:src/lib/knowledge/generator.ts:88:              "src/lib/pilot/* — Pilot Validation Program (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:135:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:48:src/lib/knowledge/generator.ts:89:              "src/lib/scientific/* — Scientific Validation Framework (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:136:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:49:src/lib/knowledge/generator.ts:109:            heading: "Pilot Validation Program",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:137:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:50:src/lib/knowledge/generator.ts:115:            heading: "Scientific Validation Framework",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:138:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:51:src/lib/knowledge/generator.ts:175:          { heading: "Sprint history", body: sources.sprints.map((s) => `— ${s.path}`).join("\n") || "—" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:139:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:52:src/lib/knowledge/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:140:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:53:src/lib/knowledge/pdf.ts:52:  write(`Sources used: ${doc.sourcesUsed.join(", ") || "—"}`, 10, false, [90, 90, 90]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:141:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:54:src/lib/knowledge/pdf.ts:54:    `Extracted components: ${doc.extractedComponents.slice(0, 12).join(", ")}${doc.extractedComponents.length > 12 ? "…" : ""}`,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:142:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:55:src/lib/pilot/localStorageRepository.ts:28:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:143:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:56:src/lib/pilot/types.ts:2: * Pilot Validation Program — domain model (V1.3 Sprint S0).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:144:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:57:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:145:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:58:src/lib/reasoning/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:146:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:59:src/lib/scientific/localStorageRepository.ts:24:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:147:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:60:src/lib/scientific/types.ts:2: * Scientific Validation Framework — domain model (V1.3 Sprint S1).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:148:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:61:src/routes/__root.tsx:57:              router.invalidate();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:149:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:62:src/routes/dashboard.tsx:744:          text = text.split(s.original).join(s.suggested);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:151:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:64:src/routes/knowledge.tsx:265:                                {activeDocument.sourcesUsed.join(", ")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:152:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:65:src/routes/pilot.tsx:19:      { name: "description", content: "Aggregate pilot validation metrics for GSOS Observer." },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:153:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:66:src/routes/pilot.tsx:116:      write(t("pilotValidationReport"), 20, true);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:154:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:67:src/routes/pilot.tsx:173:        pdf.text(`GSOS Pilot Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:155:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:68:src/routes/pilot.tsx:179:      const fname = `GSOS-Pilot-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:156:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:69:src/routes/scientific.tsx:17:      { title: "GSOS Observer — Scientific Validation" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:157:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:70:src/routes/scientific.tsx:21:          "Scientific Validation Framework for GSOS Observer — controlled experiments and expert ground-truth comparison.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:158:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:71:src/routes/scientific.tsx:259:        pdf.text(`GSOS Scientific Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:159:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:72:src/routes/scientific.tsx:265:      const fname = `GSOS-Scientific-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:160:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:73:gsos/runtime/validate/runtime-health.sh:15:./gsos/runtime/validate/runtime-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:161:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:74:gsos/runtime/validate/runtime-health.sh:21:./gsos/runtime/validate/config-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:162:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:75:gsos/runtime/runtime-controller.sh:9:./gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:163:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:76:gsos/runtime/runtime-controller.sh:18:./gsos/runtime/validate/config-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:164:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:77:gsos/runtime/runtime-controller.sh:27:./gsos/runtime/validate/runtime-health.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:165:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:78:gsos/runtime-v2/events/s07_doc_audit.log:218:./docs/adr/0004-pilot-validation-program.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:166:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:79:gsos/runtime-v2/events/s07_doc_audit.log:219:./docs/adr/0005-scientific-validation-framework.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:167:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:80:gsos/runtime-v2/events/s07_doc_audit.log:607:./node_modules/zod/README.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:168:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:81:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:50:gsos/runtime/validate/config-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:169:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:82:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:51:gsos/runtime/validate/runtime-health.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:170:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:83:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:52:gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:171:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:84:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:118:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:172:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:85:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:119:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:173:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:86:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:120:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:174:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:87:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:121:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:175:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:88:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:135:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:176:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:89:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:136:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:177:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:90:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:137:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:178:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:91:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:138:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:179:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:92:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:151:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:180:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:93:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:601:docs/adr/0004-pilot-validation-program.md:17:(Arabic searchable PDF), we need evidence that the current product
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:181:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:94:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:605:docs/sprints/V1.3-S0-PILOT.md:41:- [x] Pilot Validation Report exports in EN/FR (Arabic report uses Latin fallback text).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:182:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:95:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:607:docs/sprints/V1.3-S1-SVF.md:57:- [x] Scientific Validation Report PDF exports in EN / FR / AR (RTL) —
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:183:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:96:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:184:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:97:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:107:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:185:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:98:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:716:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:186:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:99:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:187:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:100:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:806:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:188:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:101:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:13:## Validation
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:189:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:102:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:15:src/components/ui/chart.tsx:83:  .join("\n")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:190:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:103:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:16:src/components/ui/chart.tsx:87:          .join("\n"),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:191:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:104:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:17:src/lib/ai-review.functions.ts:23:function validate(input: unknown): ReviewInput {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:192:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:105:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:18:src/lib/ai-review.functions.ts:38:- Output schema:
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:193:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:106:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:19:src/lib/ai-review.functions.ts:50:  .inputValidator(validate)
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:194:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:107:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:20:src/lib/ai-review.functions.ts:90:      parsed = JSON.parse(content) as ReviewResult;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:195:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:108:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:21:src/lib/analysis/localStorageRepository.ts:22:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:196:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:109:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:22:src/lib/analysis/service.ts:7: * place to add cross-cutting concerns later (auditing, events, validation).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:197:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:110:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:23:src/lib/i18n.tsx:101:    pilotFeedbackSubtitle: "Your input helps us validate GSOS in the field.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:198:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:111:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:24:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:199:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:112:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:25:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:200:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:113:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:26:src/lib/i18n.tsx:132:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:201:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:114:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:27:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:202:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:115:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:28:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:203:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:116:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:29:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:204:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:117:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:30:src/lib/i18n.tsx:187:    svPlan3: "Publish a versioned validation dataset alongside each release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:205:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:118:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:31:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:206:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:119:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:32:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:207:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:120:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:33:src/lib/i18n.tsx:353:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:208:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:121:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:34:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:209:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:122:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:35:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:210:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:123:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:36:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:211:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:124:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:37:src/lib/i18n.tsx:408:    svPlan3: "Publier un jeu de données de validation versionné à chaque release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:212:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:125:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:38:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:213:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:126:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:39:src/lib/i18n.tsx:571:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:214:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:127:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:40:src/lib/indicators.ts:46:        const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:215:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:128:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:41:src/lib/knowledge/extractors/pilotExtractor.ts:15:    title: "Pilot Validation Program — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:216:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:129:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:42:src/lib/knowledge/extractors/pilotExtractor.ts:51:      body: agg.topKeywords.map((k) => `${k.word} (${k.count})`).join(", "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:217:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:130:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:43:src/lib/knowledge/extractors/scientificExtractor.ts:15:    title: "Scientific Validation Framework — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:218:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:131:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:44:src/lib/knowledge/extractors/scientificExtractor.ts:41:      body: cases.map(([k, v]) => `${k}: ${v}`).join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:219:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:132:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:45:src/lib/knowledge/extractors/scientificExtractor.ts:55:        .join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:220:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:133:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:46:src/lib/knowledge/generator.ts:40:  return items.map((i) => `• ${i.title}\n  ${i.body}`).join("\n\n");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:221:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:134:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:47:src/lib/knowledge/generator.ts:88:              "src/lib/pilot/* — Pilot Validation Program (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:222:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:135:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:48:src/lib/knowledge/generator.ts:89:              "src/lib/scientific/* — Scientific Validation Framework (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:223:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:136:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:49:src/lib/knowledge/generator.ts:109:            heading: "Pilot Validation Program",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:224:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:137:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:50:src/lib/knowledge/generator.ts:115:            heading: "Scientific Validation Framework",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:225:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:138:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:51:src/lib/knowledge/generator.ts:175:          { heading: "Sprint history", body: sources.sprints.map((s) => `— ${s.path}`).join("\n") || "—" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:226:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:139:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:52:src/lib/knowledge/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:227:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:140:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:53:src/lib/knowledge/pdf.ts:52:  write(`Sources used: ${doc.sourcesUsed.join(", ") || "—"}`, 10, false, [90, 90, 90]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:228:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:141:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:54:src/lib/knowledge/pdf.ts:54:    `Extracted components: ${doc.extractedComponents.slice(0, 12).join(", ")}${doc.extractedComponents.length > 12 ? "…" : ""}`,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:229:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:142:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:55:src/lib/pilot/localStorageRepository.ts:28:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:230:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:143:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:56:src/lib/pilot/types.ts:2: * Pilot Validation Program — domain model (V1.3 Sprint S0).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:231:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:144:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:57:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:232:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:145:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:58:src/lib/reasoning/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:233:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:146:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:59:src/lib/scientific/localStorageRepository.ts:24:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:234:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:147:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:60:src/lib/scientific/types.ts:2: * Scientific Validation Framework — domain model (V1.3 Sprint S1).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:235:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:148:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:61:src/routes/__root.tsx:57:              router.invalidate();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:236:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:149:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:62:src/routes/dashboard.tsx:744:          text = text.split(s.original).join(s.suggested);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:238:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:151:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:64:src/routes/knowledge.tsx:265:                                {activeDocument.sourcesUsed.join(", ")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:239:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:152:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:65:src/routes/pilot.tsx:19:      { name: "description", content: "Aggregate pilot validation metrics for GSOS Observer." },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:240:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:153:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:66:src/routes/pilot.tsx:116:      write(t("pilotValidationReport"), 20, true);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:241:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:154:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:67:src/routes/pilot.tsx:173:        pdf.text(`GSOS Pilot Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:242:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:155:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:68:src/routes/pilot.tsx:179:      const fname = `GSOS-Pilot-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:243:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:156:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:69:src/routes/scientific.tsx:17:      { title: "GSOS Observer — Scientific Validation" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:244:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:157:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:70:src/routes/scientific.tsx:21:          "Scientific Validation Framework for GSOS Observer — controlled experiments and expert ground-truth comparison.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:245:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:158:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:71:src/routes/scientific.tsx:259:        pdf.text(`GSOS Scientific Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:246:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:159:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:72:src/routes/scientific.tsx:265:      const fname = `GSOS-Scientific-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:247:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:160:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:73:gsos/runtime/validate/runtime-health.sh:15:./gsos/runtime/validate/runtime-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:248:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:161:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:74:gsos/runtime/validate/runtime-health.sh:21:./gsos/runtime/validate/config-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:249:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:162:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:75:gsos/runtime/runtime-controller.sh:9:./gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:250:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:163:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:76:gsos/runtime/runtime-controller.sh:18:./gsos/runtime/validate/config-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:251:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:164:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:77:gsos/runtime/runtime-controller.sh:27:./gsos/runtime/validate/runtime-health.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:252:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:165:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:78:gsos/runtime-v2/events/s07_doc_audit.log:218:./docs/adr/0004-pilot-validation-program.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:253:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:166:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:79:gsos/runtime-v2/events/s07_doc_audit.log:219:./docs/adr/0005-scientific-validation-framework.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:254:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:167:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:80:gsos/runtime-v2/events/s07_doc_audit.log:607:./node_modules/zod/README.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:255:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:168:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:81:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:50:gsos/runtime/validate/config-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:256:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:169:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:82:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:51:gsos/runtime/validate/runtime-health.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:257:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:170:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:83:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:52:gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:258:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:171:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:84:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:118:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:259:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:172:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:85:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:119:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:260:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:173:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:86:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:120:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:261:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:174:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:87:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:121:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:262:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:175:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:88:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:135:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:263:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:176:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:89:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:136:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:264:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:177:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:90:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:137:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:265:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:178:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:91:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:138:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:266:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:179:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:92:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:151:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:267:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:180:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:93:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:601:docs/adr/0004-pilot-validation-program.md:17:(Arabic searchable PDF), we need evidence that the current product
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:268:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:181:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:94:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:605:docs/sprints/V1.3-S0-PILOT.md:41:- [x] Pilot Validation Report exports in EN/FR (Arabic report uses Latin fallback text).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:269:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:182:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:95:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:607:docs/sprints/V1.3-S1-SVF.md:57:- [x] Scientific Validation Report PDF exports in EN / FR / AR (RTL) —
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:270:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:183:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:96:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:271:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:184:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:97:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:107:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:272:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:185:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:98:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:716:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:273:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:186:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:99:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:274:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:187:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:100:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:806:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:275:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:188:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:101:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:13:## Validation
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:276:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:189:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:102:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:15:src/components/ui/chart.tsx:83:  .join("\n")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:277:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:190:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:103:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:16:src/components/ui/chart.tsx:87:          .join("\n"),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:278:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:191:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:104:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:17:src/lib/ai-review.functions.ts:23:function validate(input: unknown): ReviewInput {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:279:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:192:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:105:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:18:src/lib/ai-review.functions.ts:38:- Output schema:
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:280:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:193:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:106:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:19:src/lib/ai-review.functions.ts:50:  .inputValidator(validate)
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:281:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:194:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:107:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:20:src/lib/ai-review.functions.ts:90:      parsed = JSON.parse(content) as ReviewResult;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:282:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:195:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:108:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:21:src/lib/analysis/localStorageRepository.ts:22:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:283:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:196:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:109:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:22:src/lib/analysis/service.ts:7: * place to add cross-cutting concerns later (auditing, events, validation).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:284:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:197:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:110:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:23:src/lib/i18n.tsx:101:    pilotFeedbackSubtitle: "Your input helps us validate GSOS in the field.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:285:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:198:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:111:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:24:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:286:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:199:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:112:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:25:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:287:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:200:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:113:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:26:src/lib/i18n.tsx:132:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:288:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:201:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:114:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:27:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:289:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:202:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:115:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:28:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:290:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:203:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:116:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:29:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:291:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:204:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:117:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:30:src/lib/i18n.tsx:187:    svPlan3: "Publish a versioned validation dataset alongside each release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:292:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:205:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:118:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:31:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:293:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:206:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:119:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:32:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:294:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:207:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:120:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:33:src/lib/i18n.tsx:353:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:295:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:208:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:121:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:34:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:296:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:209:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:122:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:35:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:297:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:210:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:123:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:36:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:298:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:211:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:124:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:37:src/lib/i18n.tsx:408:    svPlan3: "Publier un jeu de données de validation versionné à chaque release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:299:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:212:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:125:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:38:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:300:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:213:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:126:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:39:src/lib/i18n.tsx:571:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:301:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:214:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:127:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:40:src/lib/indicators.ts:46:        const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:302:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:215:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:128:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:41:src/lib/knowledge/extractors/pilotExtractor.ts:15:    title: "Pilot Validation Program — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:303:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:216:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:129:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:42:src/lib/knowledge/extractors/pilotExtractor.ts:51:      body: agg.topKeywords.map((k) => `${k.word} (${k.count})`).join(", "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:304:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:217:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:130:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:43:src/lib/knowledge/extractors/scientificExtractor.ts:15:    title: "Scientific Validation Framework — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:305:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:218:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:131:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:44:src/lib/knowledge/extractors/scientificExtractor.ts:41:      body: cases.map(([k, v]) => `${k}: ${v}`).join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:306:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:219:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:132:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:45:src/lib/knowledge/extractors/scientificExtractor.ts:55:        .join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:307:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:220:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:133:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:46:src/lib/knowledge/generator.ts:40:  return items.map((i) => `• ${i.title}\n  ${i.body}`).join("\n\n");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:308:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:221:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:134:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:47:src/lib/knowledge/generator.ts:88:              "src/lib/pilot/* — Pilot Validation Program (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:309:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:222:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:135:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:48:src/lib/knowledge/generator.ts:89:              "src/lib/scientific/* — Scientific Validation Framework (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:310:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:223:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:136:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:49:src/lib/knowledge/generator.ts:109:            heading: "Pilot Validation Program",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:311:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:224:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:137:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:50:src/lib/knowledge/generator.ts:115:            heading: "Scientific Validation Framework",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:312:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:225:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:138:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:51:src/lib/knowledge/generator.ts:175:          { heading: "Sprint history", body: sources.sprints.map((s) => `— ${s.path}`).join("\n") || "—" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:313:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:226:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:139:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:52:src/lib/knowledge/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:314:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:227:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:140:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:53:src/lib/knowledge/pdf.ts:52:  write(`Sources used: ${doc.sourcesUsed.join(", ") || "—"}`, 10, false, [90, 90, 90]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:315:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:228:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:141:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:54:src/lib/knowledge/pdf.ts:54:    `Extracted components: ${doc.extractedComponents.slice(0, 12).join(", ")}${doc.extractedComponents.length > 12 ? "…" : ""}`,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:316:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:229:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:142:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:55:src/lib/pilot/localStorageRepository.ts:28:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:317:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:230:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:143:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:56:src/lib/pilot/types.ts:2: * Pilot Validation Program — domain model (V1.3 Sprint S0).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:318:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:231:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:144:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:57:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:319:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:232:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:145:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:58:src/lib/reasoning/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:320:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:233:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:146:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:59:src/lib/scientific/localStorageRepository.ts:24:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:321:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:234:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:147:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:60:src/lib/scientific/types.ts:2: * Scientific Validation Framework — domain model (V1.3 Sprint S1).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:322:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:235:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:148:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:61:src/routes/__root.tsx:57:              router.invalidate();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:323:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:236:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:149:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:62:src/routes/dashboard.tsx:744:          text = text.split(s.original).join(s.suggested);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:324:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:325:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:238:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:151:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:64:src/routes/knowledge.tsx:265:                                {activeDocument.sourcesUsed.join(", ")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:326:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:239:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:152:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:65:src/routes/pilot.tsx:19:      { name: "description", content: "Aggregate pilot validation metrics for GSOS Observer." },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:327:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:240:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:153:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:66:src/routes/pilot.tsx:116:      write(t("pilotValidationReport"), 20, true);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:328:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:241:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:154:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:67:src/routes/pilot.tsx:173:        pdf.text(`GSOS Pilot Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:329:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:242:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:155:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:68:src/routes/pilot.tsx:179:      const fname = `GSOS-Pilot-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:330:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:243:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:156:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:69:src/routes/scientific.tsx:17:      { title: "GSOS Observer — Scientific Validation" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:331:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:244:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:157:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:70:src/routes/scientific.tsx:21:          "Scientific Validation Framework for GSOS Observer — controlled experiments and expert ground-truth comparison.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:332:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:245:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:158:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:71:src/routes/scientific.tsx:259:        pdf.text(`GSOS Scientific Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:333:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:246:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:159:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:72:src/routes/scientific.tsx:265:      const fname = `GSOS-Scientific-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:334:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:247:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:160:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:73:gsos/runtime/validate/runtime-health.sh:15:./gsos/runtime/validate/runtime-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:335:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:248:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:161:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:74:gsos/runtime/validate/runtime-health.sh:21:./gsos/runtime/validate/config-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:336:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:249:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:162:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:75:gsos/runtime/runtime-controller.sh:9:./gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:337:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:250:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:163:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:76:gsos/runtime/runtime-controller.sh:18:./gsos/runtime/validate/config-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:338:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:251:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:164:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:77:gsos/runtime/runtime-controller.sh:27:./gsos/runtime/validate/runtime-health.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:339:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:252:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:165:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:78:gsos/runtime-v2/events/s07_doc_audit.log:218:./docs/adr/0004-pilot-validation-program.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:340:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:253:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:166:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:79:gsos/runtime-v2/events/s07_doc_audit.log:219:./docs/adr/0005-scientific-validation-framework.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:341:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:254:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:167:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:80:gsos/runtime-v2/events/s07_doc_audit.log:607:./node_modules/zod/README.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:342:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:255:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:168:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:81:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:50:gsos/runtime/validate/config-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:343:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:256:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:169:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:82:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:51:gsos/runtime/validate/runtime-health.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:344:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:257:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:170:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:83:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:52:gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:345:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:258:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:171:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:84:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:118:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:346:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:259:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:172:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:85:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:119:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:347:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:260:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:173:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:86:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:120:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:348:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:261:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:174:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:87:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:121:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:349:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:262:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:175:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:88:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:135:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:350:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:263:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:176:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:89:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:136:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:351:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:264:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:177:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:90:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:137:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:352:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:265:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:178:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:91:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:138:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:353:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:266:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:179:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:92:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:151:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:354:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:267:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:180:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:93:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:601:docs/adr/0004-pilot-validation-program.md:17:(Arabic searchable PDF), we need evidence that the current product
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:355:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:268:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:181:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:94:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:605:docs/sprints/V1.3-S0-PILOT.md:41:- [x] Pilot Validation Report exports in EN/FR (Arabic report uses Latin fallback text).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:356:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:269:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:182:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:95:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:607:docs/sprints/V1.3-S1-SVF.md:57:- [x] Scientific Validation Report PDF exports in EN / FR / AR (RTL) —
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:357:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:270:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:183:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:96:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:358:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:271:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:184:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:97:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:107:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:359:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:272:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:185:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:98:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:716:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:360:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:273:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:186:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:99:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:361:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:274:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:187:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:100:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:806:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:362:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:275:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:188:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:101:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:13:## Validation
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:363:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:276:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:189:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:102:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:15:src/components/ui/chart.tsx:83:  .join("\n")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:364:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:277:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:190:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:103:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:16:src/components/ui/chart.tsx:87:          .join("\n"),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:365:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:278:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:191:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:104:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:17:src/lib/ai-review.functions.ts:23:function validate(input: unknown): ReviewInput {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:366:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:279:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:192:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:105:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:18:src/lib/ai-review.functions.ts:38:- Output schema:
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:367:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:280:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:193:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:106:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:19:src/lib/ai-review.functions.ts:50:  .inputValidator(validate)
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:368:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:281:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:194:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:107:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:20:src/lib/ai-review.functions.ts:90:      parsed = JSON.parse(content) as ReviewResult;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:369:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:282:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:195:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:108:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:21:src/lib/analysis/localStorageRepository.ts:22:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:370:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:283:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:196:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:109:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:22:src/lib/analysis/service.ts:7: * place to add cross-cutting concerns later (auditing, events, validation).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:371:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:284:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:197:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:110:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:23:src/lib/i18n.tsx:101:    pilotFeedbackSubtitle: "Your input helps us validate GSOS in the field.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:372:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:285:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:198:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:111:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:24:src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:373:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:286:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:199:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:112:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:25:src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:374:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:287:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:200:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:113:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:26:src/lib/i18n.tsx:132:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:375:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:288:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:201:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:114:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:27:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:376:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:289:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:202:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:115:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:28:src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:377:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:290:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:203:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:116:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:29:src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:378:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:291:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:204:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:117:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:30:src/lib/i18n.tsx:187:    svPlan3: "Publish a versioned validation dataset alongside each release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:379:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:292:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:205:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:118:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:31:src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:380:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:293:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:206:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:119:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:32:src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:381:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:294:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:207:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:120:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:33:src/lib/i18n.tsx:353:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:382:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:295:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:208:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:121:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:34:src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:383:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:296:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:209:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:122:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:35:src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:384:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:297:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:210:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:123:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:36:src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:385:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:298:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:211:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:124:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:37:src/lib/i18n.tsx:408:    svPlan3: "Publier un jeu de données de validation versionné à chaque release.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:386:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:299:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:212:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:125:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:38:src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:387:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:300:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:213:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:126:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:39:src/lib/i18n.tsx:571:    // Scientific Validation Framework
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:388:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:301:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:214:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:127:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:40:src/lib/indicators.ts:46:        const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:389:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:302:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:215:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:128:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:41:src/lib/knowledge/extractors/pilotExtractor.ts:15:    title: "Pilot Validation Program — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:390:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:303:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:216:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:129:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:42:src/lib/knowledge/extractors/pilotExtractor.ts:51:      body: agg.topKeywords.map((k) => `${k.word} (${k.count})`).join(", "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:391:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:304:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:217:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:130:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:43:src/lib/knowledge/extractors/scientificExtractor.ts:15:    title: "Scientific Validation Framework — totals",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:392:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:305:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:218:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:131:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:44:src/lib/knowledge/extractors/scientificExtractor.ts:41:      body: cases.map(([k, v]) => `${k}: ${v}`).join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:393:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:306:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:219:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:132:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:45:src/lib/knowledge/extractors/scientificExtractor.ts:55:        .join("; "),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:394:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:307:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:220:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:133:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:46:src/lib/knowledge/generator.ts:40:  return items.map((i) => `• ${i.title}\n  ${i.body}`).join("\n\n");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:395:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:308:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:221:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:134:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:47:src/lib/knowledge/generator.ts:88:              "src/lib/pilot/* — Pilot Validation Program (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:396:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:309:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:222:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:135:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:48:src/lib/knowledge/generator.ts:89:              "src/lib/scientific/* — Scientific Validation Framework (isolated storage).\n" +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:397:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:310:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:223:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:136:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:49:src/lib/knowledge/generator.ts:109:            heading: "Pilot Validation Program",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:398:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:311:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:224:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:137:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:50:src/lib/knowledge/generator.ts:115:            heading: "Scientific Validation Framework",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:399:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:312:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:225:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:138:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:51:src/lib/knowledge/generator.ts:175:          { heading: "Sprint history", body: sources.sprints.map((s) => `— ${s.path}`).join("\n") || "—" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:400:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:313:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:226:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:139:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:52:src/lib/knowledge/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:401:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:314:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:227:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:140:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:53:src/lib/knowledge/pdf.ts:52:  write(`Sources used: ${doc.sourcesUsed.join(", ") || "—"}`, 10, false, [90, 90, 90]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:402:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:315:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:228:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:141:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:54:src/lib/knowledge/pdf.ts:54:    `Extracted components: ${doc.extractedComponents.slice(0, 12).join(", ")}${doc.extractedComponents.length > 12 ? "…" : ""}`,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:403:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:316:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:229:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:142:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:55:src/lib/pilot/localStorageRepository.ts:28:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:404:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:317:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:230:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:143:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:56:src/lib/pilot/types.ts:2: * Pilot Validation Program — domain model (V1.3 Sprint S0).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:405:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:318:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:231:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:144:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:57:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:406:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:319:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:232:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:145:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:58:src/lib/reasoning/localStorageRepository.ts:10:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:407:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:320:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:233:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:146:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:59:src/lib/scientific/localStorageRepository.ts:24:    const parsed = JSON.parse(raw);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:408:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:321:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:234:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:147:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:60:src/lib/scientific/types.ts:2: * Scientific Validation Framework — domain model (V1.3 Sprint S1).
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:409:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:322:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:235:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:148:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:61:src/routes/__root.tsx:57:              router.invalidate();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:410:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:323:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:236:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:149:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:62:src/routes/dashboard.tsx:744:          text = text.split(s.original).join(s.suggested);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:411:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:324:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:412:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:325:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:238:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:151:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:64:src/routes/knowledge.tsx:265:                                {activeDocument.sourcesUsed.join(", ")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:413:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:326:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:239:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:152:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:65:src/routes/pilot.tsx:19:      { name: "description", content: "Aggregate pilot validation metrics for GSOS Observer." },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:414:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:327:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:240:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:153:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:66:src/routes/pilot.tsx:116:      write(t("pilotValidationReport"), 20, true);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:415:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:328:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:241:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:154:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:67:src/routes/pilot.tsx:173:        pdf.text(`GSOS Pilot Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:416:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:329:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:242:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:155:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:68:src/routes/pilot.tsx:179:      const fname = `GSOS-Pilot-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:417:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:330:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:243:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:156:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:69:src/routes/scientific.tsx:17:      { title: "GSOS Observer — Scientific Validation" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:418:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:331:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:244:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:157:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:70:src/routes/scientific.tsx:21:          "Scientific Validation Framework for GSOS Observer — controlled experiments and expert ground-truth comparison.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:419:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:332:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:245:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:158:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:71:src/routes/scientific.tsx:259:        pdf.text(`GSOS Scientific Validation — ${dateStr}`, margin, pageH - 20);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:420:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:333:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:246:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:159:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:72:src/routes/scientific.tsx:265:      const fname = `GSOS-Scientific-Validation-Report-${stamp.getFullYear()}-${pad(stamp.getMonth() + 1)}-${pad(stamp.getDate())}-${pad(stamp.getHours())}-${pad(stamp.getMinutes())}.pdf`;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:421:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:334:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:247:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:160:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:73:gsos/runtime/validate/runtime-health.sh:15:./gsos/runtime/validate/runtime-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:422:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:335:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:248:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:161:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:74:gsos/runtime/validate/runtime-health.sh:21:./gsos/runtime/validate/config-validator.sh >> "$REPORT"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:423:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:336:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:249:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:162:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:75:gsos/runtime/runtime-controller.sh:9:./gsos/runtime/validate/runtime-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:424:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:337:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:250:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:163:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:76:gsos/runtime/runtime-controller.sh:18:./gsos/runtime/validate/config-validator.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:425:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:338:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:251:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:164:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:77:gsos/runtime/runtime-controller.sh:27:./gsos/runtime/validate/runtime-health.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:426:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:339:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:252:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:165:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:78:gsos/runtime-v2/events/s07_doc_audit.log:218:./docs/adr/0004-pilot-validation-program.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:427:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:340:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:253:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:166:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:79:gsos/runtime-v2/events/s07_doc_audit.log:219:./docs/adr/0005-scientific-validation-framework.md

## Authentication

src/components/PilotFeedbackForm.tsx:6:  sessionId: string;
src/components/PilotFeedbackForm.tsx:58:export function PilotFeedbackForm({ sessionId }: Props) {
src/components/PilotFeedbackForm.tsx:75:    PilotService.getFeedbackForSession(sessionId).then((f) => {
src/components/PilotFeedbackForm.tsx:86:  }, [sessionId]);
src/components/PilotFeedbackForm.tsx:98:        sessionId,
src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
src/components/ui/badge.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
src/components/ui/button.tsx:3:import { cva, type VariantProps } from "class-variance-authority";
src/components/ui/label.tsx:5:import { cva, type VariantProps } from "class-variance-authority";
src/components/ui/navigation-menu.tsx:3:import { cva } from "class-variance-authority";
src/components/ui/sheet.tsx:5:import { cva, type VariantProps } from "class-variance-authority";
src/components/ui/sidebar.tsx:3:import { cva, type VariantProps } from "class-variance-authority";
src/components/ui/toggle-group.tsx:5:import { type VariantProps } from "class-variance-authority";
src/components/ui/toggle.tsx:3:import { cva, type VariantProps } from "class-variance-authority";
src/lib/auth.ts:1:const KEY = "gsos.auth";
src/lib/auth.ts:3:export function isAuthed(): boolean {
src/lib/i18n.tsx:9:    login: "Login",
src/lib/i18n.tsx:11:    password: "Password",
src/lib/i18n.tsx:98:    pilotModeHint: "Records anonymized sessions and enables the feedback form.",
src/lib/i18n.tsx:111:    pilotSessionsTotal: "Total sessions",
src/lib/i18n.tsx:119:    pilotRecentSessions: "Recent sessions",
src/lib/i18n.tsx:126:    pilotSessionId: "Session",
src/lib/i18n.tsx:230:    login: "Connexion",
src/lib/i18n.tsx:232:    password: "Mot de passe",
src/lib/i18n.tsx:319:    pilotModeHint: "Enregistre les sessions anonymisées et active le formulaire de retour.",
src/lib/i18n.tsx:332:    pilotSessionsTotal: "Sessions totales",
src/lib/i18n.tsx:340:    pilotRecentSessions: "Sessions récentes",
src/lib/i18n.tsx:347:    pilotSessionId: "Session",
src/lib/i18n.tsx:452:    login: "تسجيل الدخول",
src/lib/i18n.tsx:454:    password: "كلمة المرور",
src/lib/i18n.tsx:550:    pilotSessionsTotal: "إجمالي الجلسات",
src/lib/i18n.tsx:558:    pilotRecentSessions: "الجلسات الأخيرة",
src/lib/i18n.tsx:565:    pilotSessionId: "الجلسة",
src/lib/knowledge/__tests__/generator.test.ts:23:  totalSessions: 0,
src/lib/knowledge/__tests__/service.test.ts:48:    localStorage.setItem("gsos.pilot.sessions.v1", "x");
src/lib/knowledge/__tests__/service.test.ts:59:    expect(localStorage.getItem("gsos.pilot.sessions.v1")).toBe("x");
src/lib/knowledge/extractors/pilotExtractor.ts:17:      `Sessions logged: ${agg.totalSessions}. Feedback received: ${agg.totalFeedback}. ` +
src/lib/knowledge/generator.ts:69:              "5. Emit Recommended Action. 6. When Pilot Mode is ON, log an anonymized session. " +
src/lib/knowledge/generator.ts:111:              `Total sessions: ${pilotAgg.totalSessions}. Feedback: ${pilotAgg.totalFeedback}. ` +
src/lib/pilot/__tests__/localStorageRepository.test.ts:3:import type { NewPilotFeedbackInput, NewPilotSessionInput } from "../types";
src/lib/pilot/__tests__/localStorageRepository.test.ts:5:const baseSession = (overrides: Partial<NewPilotSessionInput> = {}): NewPilotSessionInput => ({
src/lib/pilot/__tests__/localStorageRepository.test.ts:16:  sessionId: string,
src/lib/pilot/__tests__/localStorageRepository.test.ts:19:  sessionId,
src/lib/pilot/__tests__/localStorageRepository.test.ts:36:  it("logs a session with generated id and timestamp", async () => {
src/lib/pilot/__tests__/localStorageRepository.test.ts:37:    const s = await repo.logSession(baseSession());
src/lib/pilot/__tests__/localStorageRepository.test.ts:38:    expect(s.sessionId).toMatch(/[0-9a-f-]{36}/i);
src/lib/pilot/__tests__/localStorageRepository.test.ts:42:  it("is idempotent when the same sessionId is logged twice", async () => {
src/lib/pilot/__tests__/localStorageRepository.test.ts:43:    const s = await repo.logSession(baseSession({ sessionId: "fixed" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:45:    const rows = await repo.listSessions();
src/lib/pilot/__tests__/localStorageRepository.test.ts:48:    expect(s.sessionId).toBe("fixed");
src/lib/pilot/__tests__/localStorageRepository.test.ts:51:  it("persists sessions across instances", async () => {
src/lib/pilot/__tests__/localStorageRepository.test.ts:52:    await repo.logSession(baseSession({ sessionId: "s1" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:54:    const rows = await fresh.listSessions();
src/lib/pilot/__tests__/localStorageRepository.test.ts:55:    expect(rows.map((r) => r.sessionId)).toEqual(["s1"]);
src/lib/pilot/__tests__/localStorageRepository.test.ts:58:  it("stores exactly one feedback per session (replaces previous)", async () => {
src/lib/pilot/__tests__/localStorageRepository.test.ts:59:    const s = await repo.logSession(baseSession({ sessionId: "s1" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:60:    await repo.submitFeedback(baseFeedback(s.sessionId, { notes: "v1" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:61:    await repo.submitFeedback(baseFeedback(s.sessionId, { notes: "v2" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:65:    const one = await repo.getFeedbackForSession("s1");
src/lib/pilot/__tests__/localStorageRepository.test.ts:70:    expect(await repo.getFeedbackForSession("nope")).toBeNull();
src/lib/pilot/__tests__/localStorageRepository.test.ts:73:  it("sorts listSessions desc by timestamp", async () => {
src/lib/pilot/__tests__/localStorageRepository.test.ts:74:    await repo.logSession(baseSession({ sessionId: "a" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:76:    await repo.logSession(baseSession({ sessionId: "b" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:77:    const rows = await repo.listSessions();
src/lib/pilot/__tests__/localStorageRepository.test.ts:78:    expect(rows.map((r) => r.sessionId)).toEqual(["b", "a"]);
src/lib/pilot/__tests__/localStorageRepository.test.ts:82:    const s = await repo.logSession(baseSession());
src/lib/pilot/__tests__/localStorageRepository.test.ts:83:    await repo.submitFeedback(baseFeedback(s.sessionId));
src/lib/pilot/__tests__/localStorageRepository.test.ts:85:    expect(await repo.listSessions()).toEqual([]);
src/lib/pilot/__tests__/service.test.ts:16:  it("logSession + submitFeedback flow", async () => {
src/lib/pilot/__tests__/service.test.ts:17:    const s = await PilotService.logSession({
src/lib/pilot/__tests__/service.test.ts:26:      sessionId: s.sessionId,
src/lib/pilot/__tests__/service.test.ts:32:    const fb = await PilotService.getFeedbackForSession(s.sessionId);
src/lib/pilot/__tests__/service.test.ts:40:      const s = await PilotService.logSession({
src/lib/pilot/__tests__/service.test.ts:49:        sessionId: s.sessionId,
src/lib/pilot/__tests__/service.test.ts:57:    expect(agg.totalSessions).toBe(3);
src/lib/pilot/__tests__/service.test.ts:69:    expect(agg.totalSessions).toBe(0);
src/lib/pilot/localStorageRepository.ts:3:  NewPilotSessionInput,
src/lib/pilot/localStorageRepository.ts:6:  PilotSession,
src/lib/pilot/localStorageRepository.ts:9:const SESSIONS_KEY = "gsos.pilot.sessions.v1";
src/lib/pilot/localStorageRepository.ts:41:  async logSession(input: NewPilotSessionInput): Promise<PilotSession> {
src/lib/pilot/localStorageRepository.ts:42:    const session: PilotSession = {
src/lib/pilot/localStorageRepository.ts:43:      sessionId: input.sessionId ?? uuid(),
src/lib/pilot/localStorageRepository.ts:52:    const rows = readAll<PilotSession>(SESSIONS_KEY);
src/lib/pilot/localStorageRepository.ts:53:    // Idempotent: replace if same sessionId already recorded.
src/lib/pilot/localStorageRepository.ts:54:    const idx = rows.findIndex((r) => r.sessionId === session.sessionId);
src/lib/pilot/localStorageRepository.ts:55:    if (idx === -1) rows.push(session);
src/lib/pilot/localStorageRepository.ts:56:    else rows[idx] = session;
src/lib/pilot/localStorageRepository.ts:57:    writeAll(SESSIONS_KEY, rows);
src/lib/pilot/localStorageRepository.ts:58:    return session;
src/lib/pilot/localStorageRepository.ts:64:      sessionId: input.sessionId,
src/lib/pilot/localStorageRepository.ts:72:    // Enforce one feedback per session — replace previous if any.
src/lib/pilot/localStorageRepository.ts:73:    const filtered = rows.filter((r) => r.sessionId !== feedback.sessionId);
src/lib/pilot/localStorageRepository.ts:79:  async listSessions(): Promise<PilotSession[]> {
src/lib/pilot/localStorageRepository.ts:80:    return readAll<PilotSession>(SESSIONS_KEY).sort(
src/lib/pilot/localStorageRepository.ts:89:  async getFeedbackForSession(sessionId: string): Promise<PilotFeedback | null> {
src/lib/pilot/localStorageRepository.ts:91:      readAll<PilotFeedback>(FEEDBACK_KEY).find((r) => r.sessionId === sessionId) ?? null
src/lib/pilot/localStorageRepository.ts:97:    localStorage.removeItem(SESSIONS_KEY);
src/lib/pilot/service.ts:4:  NewPilotSessionInput,
src/lib/pilot/service.ts:7:  PilotSession,
src/lib/pilot/service.ts:22:function tokenize(text: string): string[] {
src/lib/pilot/service.ts:33:    for (const w of tokenize(`${f.notes} ${f.suggestions}`)) {
src/lib/pilot/service.ts:44:  logSession(input: NewPilotSessionInput): Promise<PilotSession> {
src/lib/pilot/service.ts:45:    return getPilotRepository().logSession(input);
src/lib/pilot/service.ts:50:  listSessions(): Promise<PilotSession[]> {
src/lib/pilot/service.ts:51:    return getPilotRepository().listSessions();
src/lib/pilot/service.ts:56:  getFeedbackForSession(sessionId: string) {
src/lib/pilot/service.ts:57:    return getPilotRepository().getFeedbackForSession(sessionId);
src/lib/pilot/service.ts:63:    const [sessions, feedback] = await Promise.all([
src/lib/pilot/service.ts:64:      getPilotRepository().listSessions(),
src/lib/pilot/service.ts:75:    for (const s of sessions) {
src/lib/pilot/service.ts:81:      totalSessions: sessions.length,
src/lib/pilot/types.ts:12:export interface PilotSession {
src/lib/pilot/types.ts:13:  sessionId: string;
src/lib/pilot/types.ts:27:export type NewPilotSessionInput = Omit<PilotSession, "sessionId" | "timestamp"> & {
src/lib/pilot/types.ts:28:  sessionId?: string;
src/lib/pilot/types.ts:34:  sessionId: string;
src/lib/pilot/types.ts:48:  totalSessions: number;
src/lib/pilot/types.ts:59:  logSession(input: NewPilotSessionInput): Promise<PilotSession>;
src/lib/pilot/types.ts:61:  listSessions(): Promise<PilotSession[]>;
src/lib/pilot/types.ts:63:  getFeedbackForSession(sessionId: string): Promise<PilotFeedback | null>;
src/lib/reasoning/__tests__/service.test.ts:35:    localStorage.setItem("gsos.pilot.sessions.v1", "x");
src/lib/reasoning/__tests__/service.test.ts:43:    expect(localStorage.getItem("gsos.pilot.sessions.v1")).toBe("x");
src/lib/scientific/__tests__/localStorageRepository.test.ts:92:    localStorage.setItem("gsos.pilot.sessions.v1", JSON.stringify([{ y: 1 }]));
src/lib/scientific/__tests__/localStorageRepository.test.ts:98:    expect(localStorage.getItem("gsos.pilot.sessions.v1")).not.toBeNull();
src/routeTree.gen.ts:15:import { Route as LoginRouteImport } from './routes/login'
src/routeTree.gen.ts:35:const LoginRoute = LoginRouteImport.update({
src/routeTree.gen.ts:36:  id: '/login',
src/routeTree.gen.ts:37:  path: '/login',
src/routeTree.gen.ts:60:  '/login': typeof LoginRoute
src/routeTree.gen.ts:69:  '/login': typeof LoginRoute
src/routeTree.gen.ts:79:  '/login': typeof LoginRoute
src/routeTree.gen.ts:90:    | '/login'
src/routeTree.gen.ts:99:    | '/login'
src/routeTree.gen.ts:108:    | '/login'
src/routeTree.gen.ts:118:  LoginRoute: typeof LoginRoute
src/routeTree.gen.ts:147:    '/login': {
src/routeTree.gen.ts:148:      id: '/login'
src/routeTree.gen.ts:149:      path: '/login'
src/routeTree.gen.ts:150:      fullPath: '/login'
src/routeTree.gen.ts:151:      preLoaderRoute: typeof LoginRouteImport
src/routeTree.gen.ts:182:  LoginRoute: LoginRoute,
src/routes/__root.tsx:83:      { name: "author", content: "Lovable" },
src/routes/dashboard.tsx:4:import { isAuthed, signOut } from "@/lib/auth";
src/routes/dashboard.tsx:967:  const [pilotSessionId, setPilotSessionId] = useState<string | null>(null);
src/routes/dashboard.tsx:990:      author: `${t("appName")} V1.0`,
src/routes/dashboard.tsx:1207:    if (!isAuthed()) {
src/routes/dashboard.tsx:1208:      navigate({ to: "/login" });
src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
src/routes/dashboard.tsx:1255:      PilotService.logSession({
src/routes/dashboard.tsx:1256:        sessionId: reportMeta.id,
src/routes/dashboard.tsx:1268:        .then((s) => setPilotSessionId(s.sessionId))
src/routes/dashboard.tsx:1273:      setPilotSessionId(null);
src/routes/dashboard.tsx:1311:                navigate({ to: "/login" });
src/routes/dashboard.tsx:1383:        {showAnalysis && pilotEnabled && pilotSessionId && (
src/routes/dashboard.tsx:1384:          <PilotFeedbackForm sessionId={pilotSessionId} />
src/routes/index.tsx:2:import { isAuthed } from "@/lib/auth";
src/routes/index.tsx:7:      throw redirect({ to: isAuthed() ? "/dashboard" : "/login" });
src/routes/knowledge.tsx:3:import { isAuthed } from "@/lib/auth";
src/routes/knowledge.tsx:43:    if (!isAuthed()) {
src/routes/knowledge.tsx:44:      navigate({ to: "/login" });
src/routes/login.tsx:3:import { signIn } from "@/lib/auth";
src/routes/login.tsx:6:export const Route = createFileRoute("/login")({
src/routes/login.tsx:9:      { title: "GSOS Observer — Login" },
src/routes/login.tsx:13:  component: LoginPage,
src/routes/login.tsx:16:function LoginPage() {
src/routes/login.tsx:46:            <h1 className="text-2xl font-semibold tracking-tight">{t("login")}</h1>
src/routes/login.tsx:69:                {t("password")}
src/routes/login.tsx:73:                type="password"
src/routes/login.tsx:76:                autoComplete="current-password"
src/routes/pilot.tsx:3:import { isAuthed } from "@/lib/auth";
src/routes/pilot.tsx:11:  type PilotSession,
src/routes/pilot.tsx:53:  const [sessions, setSessions] = useState<PilotSession[]>([]);
src/routes/pilot.tsx:58:    if (!isAuthed()) {
src/routes/pilot.tsx:59:      navigate({ to: "/login" });
src/routes/pilot.tsx:69:      PilotService.listSessions(),
src/routes/pilot.tsx:73:    setSessions(s);
src/routes/pilot.tsx:120:      write(`${t("pilotSessionsTotal")}: ${agg.totalSessions}`, 12, true);
src/routes/pilot.tsx:189:  const feedbackBySession = new Map(feedback.map((f) => [f.sessionId, f]));
src/routes/pilot.tsx:226:              disabled={exporting || !agg || agg.totalSessions === 0}
src/routes/pilot.tsx:251:        ) : !agg || agg.totalSessions === 0 ? (
src/routes/pilot.tsx:260:                  <GsosCardTitle>{t("pilotSessionsTotal")}</GsosCardTitle>
src/routes/pilot.tsx:262:                <div className="mt-3 text-3xl font-semibold tabular-nums">{agg.totalSessions}</div>
src/routes/pilot.tsx:306:                        max={agg.totalSessions}
src/routes/pilot.tsx:340:                  <GsosCardTitle>{t("pilotRecentSessions")}</GsosCardTitle>
src/routes/pilot.tsx:347:                        <th className="py-2 pr-3 font-medium">{t("pilotSessionId")}</th>
src/routes/pilot.tsx:354:                      {sessions.slice(0, 20).map((s) => {
src/routes/pilot.tsx:355:                        const fb = feedbackBySession.get(s.sessionId);
src/routes/pilot.tsx:357:                          <tr key={s.sessionId} className="border-b border-border/60">
src/routes/reasoning.tsx:3:import { isAuthed } from "@/lib/auth";
src/routes/reasoning.tsx:42:    if (!isAuthed()) {
src/routes/reasoning.tsx:43:      navigate({ to: "/login" });
src/routes/scientific.tsx:3:import { isAuthed } from "@/lib/auth";
src/routes/scientific.tsx:77:    if (!isAuthed()) {
src/routes/scientific.tsx:78:      navigate({ to: "/login" });
src/styles.css:70:  /* GSOS design tokens */
gsos/config/system.conf:5:GSOS_AUTHOR="Sam Cher"
gsos/core/identity.sh:16:echo "Author    : $GSOS_AUTHOR"
gsos/reports/GSOS-AUDIT-REPORT.md:69:gsos/logger/session.log
gsos/reports/GSOS-SECURITY-REPORT.md:18:gsos/logger/session.log
gsos/executive/logs/session-20260804-185354.log:2:GSOS EXECUTIVE SESSION
gsos/executive/logs/session-20260804-185354.log:3:SESSION ID : 20260804-185354
gsos/executive/session.sh:3:SESSION_DIR="./gsos/executive/logs"
gsos/executive/session.sh:5:mkdir -p "$SESSION_DIR"
gsos/executive/session.sh:7:SESSION_ID=$(date "+%Y%m%d-%H%M%S")
gsos/executive/session.sh:9:SESSION_FILE="$SESSION_DIR/session-$SESSION_ID.log"
gsos/executive/session.sh:13:echo "GSOS EXECUTIVE SESSION"
gsos/executive/session.sh:14:echo "SESSION ID : $SESSION_ID"
gsos/executive/session.sh:19:} > "$SESSION_FILE"
gsos/executive/session.sh:21:echo "$SESSION_FILE"
gsos/runtime/logs/runtime-health.log:14:[PASS] session
gsos/runtime/validate/runtime-validator.sh:10:session
gsos/runtime-v2/events/s07_doc_audit.log:266:./node_modules/class-variance-authority/README.md
gsos/runtime-v2/events/s07_doc_audit.log:405:./node_modules/js-tokens/CHANGELOG.md
gsos/runtime-v2/events/s07_doc_audit.log:406:./node_modules/js-tokens/README.md
gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:98:gsos/executive/logs/session-20260804-185354.log
gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:99:gsos/executive/session.sh
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:23:src/components/PilotFeedbackForm.tsx:58:export function PilotFeedbackForm({ sessionId }: Props) {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:97:src/lib/auth.ts:3:export function isAuthed(): boolean {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:98:src/lib/auth.ts:8:export function signIn(user: string, pass: string): boolean {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:99:src/lib/auth.ts:16:export function signOut() {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:237:src/lib/pilot/types.ts:12:export interface PilotSession {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:239:src/lib/pilot/types.ts:27:export type NewPilotSessionInput = Omit<PilotSession, "sessionId" | "timestamp"> & {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:477:src/routes/dashboard.tsx:1256:        sessionId: reportMeta.id,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:508:src/routes/login.tsx:6:export const Route = createFileRoute("/login")({
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:44:src/components/PilotFeedbackForm.tsx:75:    PilotService.getFeedbackForSession(sessionId).then((f) => {
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:136:src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:178:src/components/ui/badge.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:225:src/components/ui/button.tsx:3:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:588:docs/PROGRAMS/CIP.md:25:- TD-001 (Auth), TD-002 (Telemetry), TD-003 (Searchable Arabic PDF)
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:589:docs/ROADMAP.md:8:| **V1.3-DEV** | **Tech Debt: Auth + Telemetry + Arabic PDF** | 🚧 **Active** | **1.3.0-dev** |
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:176:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:367:src/routes/index.tsx:7:      throw redirect({ to: isAuthed() ? "/dashboard" : "/login" });
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:370:src/routes/login.tsx:27:      navigate({ to: "/dashboard" });
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:590:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:477:src/routes/dashboard.tsx:1256:        sessionId: reportMeta.id,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:160:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:382:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:136:src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:452:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:176:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:757:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:160:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:911:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:979:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:382:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:136:src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:324:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:411:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:324:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:498:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:411:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:324:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:516:## Authentication
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:518:src/components/PilotFeedbackForm.tsx:6:  sessionId: string;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:519:src/components/PilotFeedbackForm.tsx:58:export function PilotFeedbackForm({ sessionId }: Props) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:520:src/components/PilotFeedbackForm.tsx:75:    PilotService.getFeedbackForSession(sessionId).then((f) => {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:521:src/components/PilotFeedbackForm.tsx:86:  }, [sessionId]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:522:src/components/PilotFeedbackForm.tsx:98:        sessionId,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:523:src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:524:src/components/ui/badge.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:525:src/components/ui/button.tsx:3:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:526:src/components/ui/label.tsx:5:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:527:src/components/ui/navigation-menu.tsx:3:import { cva } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:528:src/components/ui/sheet.tsx:5:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:529:src/components/ui/sidebar.tsx:3:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:530:src/components/ui/toggle-group.tsx:5:import { type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:531:src/components/ui/toggle.tsx:3:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:532:src/lib/auth.ts:1:const KEY = "gsos.auth";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:533:src/lib/auth.ts:3:export function isAuthed(): boolean {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:534:src/lib/i18n.tsx:9:    login: "Login",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:535:src/lib/i18n.tsx:11:    password: "Password",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:536:src/lib/i18n.tsx:98:    pilotModeHint: "Records anonymized sessions and enables the feedback form.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:537:src/lib/i18n.tsx:111:    pilotSessionsTotal: "Total sessions",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:538:src/lib/i18n.tsx:119:    pilotRecentSessions: "Recent sessions",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:539:src/lib/i18n.tsx:126:    pilotSessionId: "Session",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:540:src/lib/i18n.tsx:230:    login: "Connexion",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:541:src/lib/i18n.tsx:232:    password: "Mot de passe",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:542:src/lib/i18n.tsx:319:    pilotModeHint: "Enregistre les sessions anonymisées et active le formulaire de retour.",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:543:src/lib/i18n.tsx:332:    pilotSessionsTotal: "Sessions totales",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:544:src/lib/i18n.tsx:340:    pilotRecentSessions: "Sessions récentes",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:545:src/lib/i18n.tsx:347:    pilotSessionId: "Session",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:546:src/lib/i18n.tsx:452:    login: "تسجيل الدخول",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:547:src/lib/i18n.tsx:454:    password: "كلمة المرور",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:548:src/lib/i18n.tsx:550:    pilotSessionsTotal: "إجمالي الجلسات",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:549:src/lib/i18n.tsx:558:    pilotRecentSessions: "الجلسات الأخيرة",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:550:src/lib/i18n.tsx:565:    pilotSessionId: "الجلسة",
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:551:src/lib/knowledge/__tests__/generator.test.ts:23:  totalSessions: 0,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:552:src/lib/knowledge/__tests__/service.test.ts:48:    localStorage.setItem("gsos.pilot.sessions.v1", "x");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:553:src/lib/knowledge/__tests__/service.test.ts:59:    expect(localStorage.getItem("gsos.pilot.sessions.v1")).toBe("x");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:554:src/lib/knowledge/extractors/pilotExtractor.ts:17:      `Sessions logged: ${agg.totalSessions}. Feedback received: ${agg.totalFeedback}. ` +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:555:src/lib/knowledge/generator.ts:69:              "5. Emit Recommended Action. 6. When Pilot Mode is ON, log an anonymized session. " +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:556:src/lib/knowledge/generator.ts:111:              `Total sessions: ${pilotAgg.totalSessions}. Feedback: ${pilotAgg.totalFeedback}. ` +
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:557:src/lib/pilot/__tests__/localStorageRepository.test.ts:3:import type { NewPilotFeedbackInput, NewPilotSessionInput } from "../types";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:558:src/lib/pilot/__tests__/localStorageRepository.test.ts:5:const baseSession = (overrides: Partial<NewPilotSessionInput> = {}): NewPilotSessionInput => ({
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:559:src/lib/pilot/__tests__/localStorageRepository.test.ts:16:  sessionId: string,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:560:src/lib/pilot/__tests__/localStorageRepository.test.ts:19:  sessionId,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:561:src/lib/pilot/__tests__/localStorageRepository.test.ts:36:  it("logs a session with generated id and timestamp", async () => {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:562:src/lib/pilot/__tests__/localStorageRepository.test.ts:37:    const s = await repo.logSession(baseSession());
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:563:src/lib/pilot/__tests__/localStorageRepository.test.ts:38:    expect(s.sessionId).toMatch(/[0-9a-f-]{36}/i);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:564:src/lib/pilot/__tests__/localStorageRepository.test.ts:42:  it("is idempotent when the same sessionId is logged twice", async () => {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:565:src/lib/pilot/__tests__/localStorageRepository.test.ts:43:    const s = await repo.logSession(baseSession({ sessionId: "fixed" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:566:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:567:src/lib/pilot/__tests__/localStorageRepository.test.ts:45:    const rows = await repo.listSessions();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:568:src/lib/pilot/__tests__/localStorageRepository.test.ts:48:    expect(s.sessionId).toBe("fixed");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:569:src/lib/pilot/__tests__/localStorageRepository.test.ts:51:  it("persists sessions across instances", async () => {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:570:src/lib/pilot/__tests__/localStorageRepository.test.ts:52:    await repo.logSession(baseSession({ sessionId: "s1" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:571:src/lib/pilot/__tests__/localStorageRepository.test.ts:54:    const rows = await fresh.listSessions();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:572:src/lib/pilot/__tests__/localStorageRepository.test.ts:55:    expect(rows.map((r) => r.sessionId)).toEqual(["s1"]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:573:src/lib/pilot/__tests__/localStorageRepository.test.ts:58:  it("stores exactly one feedback per session (replaces previous)", async () => {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:574:src/lib/pilot/__tests__/localStorageRepository.test.ts:59:    const s = await repo.logSession(baseSession({ sessionId: "s1" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:575:src/lib/pilot/__tests__/localStorageRepository.test.ts:60:    await repo.submitFeedback(baseFeedback(s.sessionId, { notes: "v1" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:576:src/lib/pilot/__tests__/localStorageRepository.test.ts:61:    await repo.submitFeedback(baseFeedback(s.sessionId, { notes: "v2" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:577:src/lib/pilot/__tests__/localStorageRepository.test.ts:65:    const one = await repo.getFeedbackForSession("s1");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:578:src/lib/pilot/__tests__/localStorageRepository.test.ts:70:    expect(await repo.getFeedbackForSession("nope")).toBeNull();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:579:src/lib/pilot/__tests__/localStorageRepository.test.ts:73:  it("sorts listSessions desc by timestamp", async () => {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:580:src/lib/pilot/__tests__/localStorageRepository.test.ts:74:    await repo.logSession(baseSession({ sessionId: "a" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:581:src/lib/pilot/__tests__/localStorageRepository.test.ts:76:    await repo.logSession(baseSession({ sessionId: "b" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:582:src/lib/pilot/__tests__/localStorageRepository.test.ts:77:    const rows = await repo.listSessions();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:583:src/lib/pilot/__tests__/localStorageRepository.test.ts:78:    expect(rows.map((r) => r.sessionId)).toEqual(["b", "a"]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:584:src/lib/pilot/__tests__/localStorageRepository.test.ts:82:    const s = await repo.logSession(baseSession());
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:585:src/lib/pilot/__tests__/localStorageRepository.test.ts:83:    await repo.submitFeedback(baseFeedback(s.sessionId));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:586:src/lib/pilot/__tests__/localStorageRepository.test.ts:85:    expect(await repo.listSessions()).toEqual([]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:587:src/lib/pilot/__tests__/service.test.ts:16:  it("logSession + submitFeedback flow", async () => {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:588:src/lib/pilot/__tests__/service.test.ts:17:    const s = await PilotService.logSession({
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:589:src/lib/pilot/__tests__/service.test.ts:26:      sessionId: s.sessionId,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:590:src/lib/pilot/__tests__/service.test.ts:32:    const fb = await PilotService.getFeedbackForSession(s.sessionId);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:591:src/lib/pilot/__tests__/service.test.ts:40:      const s = await PilotService.logSession({
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:592:src/lib/pilot/__tests__/service.test.ts:49:        sessionId: s.sessionId,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:593:src/lib/pilot/__tests__/service.test.ts:57:    expect(agg.totalSessions).toBe(3);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:594:src/lib/pilot/__tests__/service.test.ts:69:    expect(agg.totalSessions).toBe(0);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:595:src/lib/pilot/localStorageRepository.ts:3:  NewPilotSessionInput,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:596:src/lib/pilot/localStorageRepository.ts:6:  PilotSession,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:597:src/lib/pilot/localStorageRepository.ts:9:const SESSIONS_KEY = "gsos.pilot.sessions.v1";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:598:src/lib/pilot/localStorageRepository.ts:41:  async logSession(input: NewPilotSessionInput): Promise<PilotSession> {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:599:src/lib/pilot/localStorageRepository.ts:42:    const session: PilotSession = {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:600:src/lib/pilot/localStorageRepository.ts:43:      sessionId: input.sessionId ?? uuid(),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:601:src/lib/pilot/localStorageRepository.ts:52:    const rows = readAll<PilotSession>(SESSIONS_KEY);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:602:src/lib/pilot/localStorageRepository.ts:53:    // Idempotent: replace if same sessionId already recorded.
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:603:src/lib/pilot/localStorageRepository.ts:54:    const idx = rows.findIndex((r) => r.sessionId === session.sessionId);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:604:src/lib/pilot/localStorageRepository.ts:55:    if (idx === -1) rows.push(session);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:605:src/lib/pilot/localStorageRepository.ts:56:    else rows[idx] = session;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:606:src/lib/pilot/localStorageRepository.ts:57:    writeAll(SESSIONS_KEY, rows);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:607:src/lib/pilot/localStorageRepository.ts:58:    return session;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:608:src/lib/pilot/localStorageRepository.ts:64:      sessionId: input.sessionId,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:609:src/lib/pilot/localStorageRepository.ts:72:    // Enforce one feedback per session — replace previous if any.
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:610:src/lib/pilot/localStorageRepository.ts:73:    const filtered = rows.filter((r) => r.sessionId !== feedback.sessionId);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:611:src/lib/pilot/localStorageRepository.ts:79:  async listSessions(): Promise<PilotSession[]> {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:612:src/lib/pilot/localStorageRepository.ts:80:    return readAll<PilotSession>(SESSIONS_KEY).sort(
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:613:src/lib/pilot/localStorageRepository.ts:89:  async getFeedbackForSession(sessionId: string): Promise<PilotFeedback | null> {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:614:src/lib/pilot/localStorageRepository.ts:91:      readAll<PilotFeedback>(FEEDBACK_KEY).find((r) => r.sessionId === sessionId) ?? null
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:615:src/lib/pilot/localStorageRepository.ts:97:    localStorage.removeItem(SESSIONS_KEY);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:616:src/lib/pilot/service.ts:4:  NewPilotSessionInput,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:617:src/lib/pilot/service.ts:7:  PilotSession,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:618:src/lib/pilot/service.ts:22:function tokenize(text: string): string[] {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:619:src/lib/pilot/service.ts:33:    for (const w of tokenize(`${f.notes} ${f.suggestions}`)) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:620:src/lib/pilot/service.ts:44:  logSession(input: NewPilotSessionInput): Promise<PilotSession> {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:621:src/lib/pilot/service.ts:45:    return getPilotRepository().logSession(input);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:622:src/lib/pilot/service.ts:50:  listSessions(): Promise<PilotSession[]> {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:623:src/lib/pilot/service.ts:51:    return getPilotRepository().listSessions();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:624:src/lib/pilot/service.ts:56:  getFeedbackForSession(sessionId: string) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:625:src/lib/pilot/service.ts:57:    return getPilotRepository().getFeedbackForSession(sessionId);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:626:src/lib/pilot/service.ts:63:    const [sessions, feedback] = await Promise.all([
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:627:src/lib/pilot/service.ts:64:      getPilotRepository().listSessions(),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:628:src/lib/pilot/service.ts:75:    for (const s of sessions) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:629:src/lib/pilot/service.ts:81:      totalSessions: sessions.length,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:630:src/lib/pilot/types.ts:12:export interface PilotSession {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:631:src/lib/pilot/types.ts:13:  sessionId: string;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:632:src/lib/pilot/types.ts:27:export type NewPilotSessionInput = Omit<PilotSession, "sessionId" | "timestamp"> & {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:633:src/lib/pilot/types.ts:28:  sessionId?: string;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:634:src/lib/pilot/types.ts:34:  sessionId: string;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:635:src/lib/pilot/types.ts:48:  totalSessions: number;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:636:src/lib/pilot/types.ts:59:  logSession(input: NewPilotSessionInput): Promise<PilotSession>;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:637:src/lib/pilot/types.ts:61:  listSessions(): Promise<PilotSession[]>;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:638:src/lib/pilot/types.ts:63:  getFeedbackForSession(sessionId: string): Promise<PilotFeedback | null>;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:639:src/lib/reasoning/__tests__/service.test.ts:35:    localStorage.setItem("gsos.pilot.sessions.v1", "x");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:640:src/lib/reasoning/__tests__/service.test.ts:43:    expect(localStorage.getItem("gsos.pilot.sessions.v1")).toBe("x");
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:641:src/lib/scientific/__tests__/localStorageRepository.test.ts:92:    localStorage.setItem("gsos.pilot.sessions.v1", JSON.stringify([{ y: 1 }]));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:642:src/lib/scientific/__tests__/localStorageRepository.test.ts:98:    expect(localStorage.getItem("gsos.pilot.sessions.v1")).not.toBeNull();
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:643:src/routeTree.gen.ts:15:import { Route as LoginRouteImport } from './routes/login'
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:644:src/routeTree.gen.ts:35:const LoginRoute = LoginRouteImport.update({
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:645:src/routeTree.gen.ts:36:  id: '/login',
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:646:src/routeTree.gen.ts:37:  path: '/login',
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:647:src/routeTree.gen.ts:60:  '/login': typeof LoginRoute
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:648:src/routeTree.gen.ts:69:  '/login': typeof LoginRoute
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:649:src/routeTree.gen.ts:79:  '/login': typeof LoginRoute
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:650:src/routeTree.gen.ts:90:    | '/login'
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:651:src/routeTree.gen.ts:99:    | '/login'
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:652:src/routeTree.gen.ts:108:    | '/login'
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:653:src/routeTree.gen.ts:118:  LoginRoute: typeof LoginRoute
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:654:src/routeTree.gen.ts:147:    '/login': {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:655:src/routeTree.gen.ts:148:      id: '/login'
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:656:src/routeTree.gen.ts:149:      path: '/login'
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:657:src/routeTree.gen.ts:150:      fullPath: '/login'
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:658:src/routeTree.gen.ts:151:      preLoaderRoute: typeof LoginRouteImport
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:659:src/routeTree.gen.ts:182:  LoginRoute: LoginRoute,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:660:src/routes/__root.tsx:83:      { name: "author", content: "Lovable" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:661:src/routes/dashboard.tsx:4:import { isAuthed, signOut } from "@/lib/auth";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:662:src/routes/dashboard.tsx:967:  const [pilotSessionId, setPilotSessionId] = useState<string | null>(null);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:663:src/routes/dashboard.tsx:990:      author: `${t("appName")} V1.0`,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:664:src/routes/dashboard.tsx:1207:    if (!isAuthed()) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:665:src/routes/dashboard.tsx:1208:      navigate({ to: "/login" });
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:666:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:667:src/routes/dashboard.tsx:1255:      PilotService.logSession({
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:668:src/routes/dashboard.tsx:1256:        sessionId: reportMeta.id,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:669:src/routes/dashboard.tsx:1268:        .then((s) => setPilotSessionId(s.sessionId))
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:670:src/routes/dashboard.tsx:1273:      setPilotSessionId(null);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:671:src/routes/dashboard.tsx:1311:                navigate({ to: "/login" });
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:672:src/routes/dashboard.tsx:1383:        {showAnalysis && pilotEnabled && pilotSessionId && (
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:673:src/routes/dashboard.tsx:1384:          <PilotFeedbackForm sessionId={pilotSessionId} />
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:674:src/routes/index.tsx:2:import { isAuthed } from "@/lib/auth";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:675:src/routes/index.tsx:7:      throw redirect({ to: isAuthed() ? "/dashboard" : "/login" });
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:676:src/routes/knowledge.tsx:3:import { isAuthed } from "@/lib/auth";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:677:src/routes/knowledge.tsx:43:    if (!isAuthed()) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:678:src/routes/knowledge.tsx:44:      navigate({ to: "/login" });
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:679:src/routes/login.tsx:3:import { signIn } from "@/lib/auth";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:680:src/routes/login.tsx:6:export const Route = createFileRoute("/login")({
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:681:src/routes/login.tsx:9:      { title: "GSOS Observer — Login" },
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:682:src/routes/login.tsx:13:  component: LoginPage,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:683:src/routes/login.tsx:16:function LoginPage() {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:684:src/routes/login.tsx:46:            <h1 className="text-2xl font-semibold tracking-tight">{t("login")}</h1>
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:685:src/routes/login.tsx:69:                {t("password")}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:686:src/routes/login.tsx:73:                type="password"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:687:src/routes/login.tsx:76:                autoComplete="current-password"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:688:src/routes/pilot.tsx:3:import { isAuthed } from "@/lib/auth";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:689:src/routes/pilot.tsx:11:  type PilotSession,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:690:src/routes/pilot.tsx:53:  const [sessions, setSessions] = useState<PilotSession[]>([]);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:691:src/routes/pilot.tsx:58:    if (!isAuthed()) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:692:src/routes/pilot.tsx:59:      navigate({ to: "/login" });
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:693:src/routes/pilot.tsx:69:      PilotService.listSessions(),
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:694:src/routes/pilot.tsx:73:    setSessions(s);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:695:src/routes/pilot.tsx:120:      write(`${t("pilotSessionsTotal")}: ${agg.totalSessions}`, 12, true);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:696:src/routes/pilot.tsx:189:  const feedbackBySession = new Map(feedback.map((f) => [f.sessionId, f]));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:697:src/routes/pilot.tsx:226:              disabled={exporting || !agg || agg.totalSessions === 0}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:698:src/routes/pilot.tsx:251:        ) : !agg || agg.totalSessions === 0 ? (
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:699:src/routes/pilot.tsx:260:                  <GsosCardTitle>{t("pilotSessionsTotal")}</GsosCardTitle>
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:700:src/routes/pilot.tsx:262:                <div className="mt-3 text-3xl font-semibold tabular-nums">{agg.totalSessions}</div>
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:701:src/routes/pilot.tsx:306:                        max={agg.totalSessions}
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:702:src/routes/pilot.tsx:340:                  <GsosCardTitle>{t("pilotRecentSessions")}</GsosCardTitle>
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:703:src/routes/pilot.tsx:347:                        <th className="py-2 pr-3 font-medium">{t("pilotSessionId")}</th>
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:704:src/routes/pilot.tsx:354:                      {sessions.slice(0, 20).map((s) => {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:705:src/routes/pilot.tsx:355:                        const fb = feedbackBySession.get(s.sessionId);
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:706:src/routes/pilot.tsx:357:                          <tr key={s.sessionId} className="border-b border-border/60">
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:707:src/routes/reasoning.tsx:3:import { isAuthed } from "@/lib/auth";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:708:src/routes/reasoning.tsx:42:    if (!isAuthed()) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:709:src/routes/reasoning.tsx:43:      navigate({ to: "/login" });
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:710:src/routes/scientific.tsx:3:import { isAuthed } from "@/lib/auth";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:711:src/routes/scientific.tsx:77:    if (!isAuthed()) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:712:src/routes/scientific.tsx:78:      navigate({ to: "/login" });
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:713:src/styles.css:70:  /* GSOS design tokens */
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:714:gsos/config/system.conf:5:GSOS_AUTHOR="Sam Cher"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:715:gsos/core/identity.sh:16:echo "Author    : $GSOS_AUTHOR"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:716:gsos/reports/GSOS-AUDIT-REPORT.md:69:gsos/logger/session.log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:717:gsos/reports/GSOS-SECURITY-REPORT.md:18:gsos/logger/session.log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:718:gsos/executive/logs/session-20260804-185354.log:2:GSOS EXECUTIVE SESSION
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:719:gsos/executive/logs/session-20260804-185354.log:3:SESSION ID : 20260804-185354
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:720:gsos/executive/session.sh:3:SESSION_DIR="./gsos/executive/logs"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:721:gsos/executive/session.sh:5:mkdir -p "$SESSION_DIR"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:722:gsos/executive/session.sh:7:SESSION_ID=$(date "+%Y%m%d-%H%M%S")
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:723:gsos/executive/session.sh:9:SESSION_FILE="$SESSION_DIR/session-$SESSION_ID.log"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:724:gsos/executive/session.sh:13:echo "GSOS EXECUTIVE SESSION"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:725:gsos/executive/session.sh:14:echo "SESSION ID : $SESSION_ID"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:726:gsos/executive/session.sh:19:} > "$SESSION_FILE"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:727:gsos/executive/session.sh:21:echo "$SESSION_FILE"
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:728:gsos/runtime/logs/runtime-health.log:14:[PASS] session
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:729:gsos/runtime/validate/runtime-validator.sh:10:session
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:730:gsos/runtime-v2/events/s07_doc_audit.log:266:./node_modules/class-variance-authority/README.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:731:gsos/runtime-v2/events/s07_doc_audit.log:405:./node_modules/js-tokens/CHANGELOG.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:732:gsos/runtime-v2/events/s07_doc_audit.log:406:./node_modules/js-tokens/README.md
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:733:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:98:gsos/executive/logs/session-20260804-185354.log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:734:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:99:gsos/executive/session.sh
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:735:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:23:src/components/PilotFeedbackForm.tsx:58:export function PilotFeedbackForm({ sessionId }: Props) {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:736:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:97:src/lib/auth.ts:3:export function isAuthed(): boolean {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:737:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:98:src/lib/auth.ts:8:export function signIn(user: string, pass: string): boolean {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:738:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:99:src/lib/auth.ts:16:export function signOut() {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:739:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:237:src/lib/pilot/types.ts:12:export interface PilotSession {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:740:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:239:src/lib/pilot/types.ts:27:export type NewPilotSessionInput = Omit<PilotSession, "sessionId" | "timestamp"> & {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:741:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:477:src/routes/dashboard.tsx:1256:        sessionId: reportMeta.id,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:742:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:508:src/routes/login.tsx:6:export const Route = createFileRoute("/login")({
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:743:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:44:src/components/PilotFeedbackForm.tsx:75:    PilotService.getFeedbackForSession(sessionId).then((f) => {
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:744:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:136:src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:745:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:178:src/components/ui/badge.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:746:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:225:src/components/ui/button.tsx:3:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:747:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:588:docs/PROGRAMS/CIP.md:25:- TD-001 (Auth), TD-002 (Telemetry), TD-003 (Searchable Arabic PDF)
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:748:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:589:docs/ROADMAP.md:8:| **V1.3-DEV** | **Tech Debt: Auth + Telemetry + Arabic PDF** | 🚧 **Active** | **1.3.0-dev** |
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:749:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:176:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:750:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:367:src/routes/index.tsx:7:      throw redirect({ to: isAuthed() ? "/dashboard" : "/login" });
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:751:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:370:src/routes/login.tsx:27:      navigate({ to: "/dashboard" });
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:752:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:590:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:477:src/routes/dashboard.tsx:1256:        sessionId: reportMeta.id,
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:753:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:160:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:754:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:755:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:382:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:136:src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:756:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:452:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:176:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:757:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:757:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:160:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:758:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:911:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:759:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:979:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:382:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:136:src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:760:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:761:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:762:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:763:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:324:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:764:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:411:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:324:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:765:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:498:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:411:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:324:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:237:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:150:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:63:src/routes/dashboard.tsx:1252:    // Pilot Validation Program — record a separate, independent session log
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:766:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:516:## Authentication
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:767:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:518:src/components/PilotFeedbackForm.tsx:6:  sessionId: string;
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:768:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:519:src/components/PilotFeedbackForm.tsx:58:export function PilotFeedbackForm({ sessionId }: Props) {

## Permissions / Access Control

src/components/PilotFeedbackForm.tsx:29:        role="radiogroup"
src/components/PilotFeedbackForm.tsx:39:              role="radio"
src/components/PilotToggle.tsx:23:      role="switch"
src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
src/components/ui/breadcrumb.tsx:58:      role="link"
src/components/ui/breadcrumb.tsx:70:    role="presentation"
src/components/ui/breadcrumb.tsx:82:    role="presentation"
src/components/ui/carousel.tsx:124:        role="region"
src/components/ui/carousel.tsx:125:        aria-roledescription="carousel"
src/components/ui/carousel.tsx:163:        role="group"
src/components/ui/carousel.tsx:164:        aria-roledescription="slide"
src/components/ui/input-otp.tsx:63:  <div ref={ref} role="separator" {...props}>
src/components/ui/pagination.tsx:9:    role="navigation"
src/components/ui/table.tsx:63:      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
src/components/ui/table.tsx:78:      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
src/lib/ai-review.functions.ts:71:          { role: "system", content: SYSTEM },
src/lib/ai-review.functions.ts:72:          { role: "user", content: JSON.stringify(userPayload) },
src/lib/auth.ts:9:  if (user.trim().toLowerCase() === "admin" && pass === "admin") {
src/lib/i18n.tsx:27:    invalidCredentials: "Invalid credentials. Try admin / admin.",
src/lib/i18n.tsx:248:    invalidCredentials: "Identifiants invalides. Essayez admin / admin.",
src/lib/i18n.tsx:470:    invalidCredentials: "بيانات اعتماد غير صحيحة. جرّب admin / admin.",
src/routes/dashboard.tsx:88:        role="progressbar"
src/routes/dashboard.tsx:295:                role="status"
src/routes/dashboard.tsx:312:                role="status"
src/routes/dashboard.tsx:324:          role="progressbar"
src/routes/dashboard.tsx:582:            role="progressbar"
src/routes/dashboard.tsx:633:                role="status"
src/routes/dashboard.tsx:654:                role="status"
src/routes/dashboard.tsx:789:            role="status"
src/routes/dashboard.tsx:803:            role="alert"
src/routes/dashboard.tsx:942:                role="status"
src/routes/dashboard.tsx:1231:  // truth for future history / archive / admin surfaces.
src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
src/routes/login.tsx:92:            <p className="text-xs text-muted-foreground text-center">admin / admin</p>
src/routes/pilot.tsx:37:      role="progressbar"
src/routes/scientific.tsx:40:      role="progressbar"
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:148:src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:214:src/components/ui/breadcrumb.tsx:70:    role="presentation"
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:219:src/components/ui/breadcrumb.tsx:82:    role="presentation"
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:348:src/components/ui/carousel.tsx:125:        aria-roledescription="carousel"
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:359:src/components/ui/carousel.tsx:164:        aria-roledescription="slide"
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:75:src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:296:src/routes/dashboard.tsx:803:            role="alert"
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:394:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:148:src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:672:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:75:src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:893:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:296:src/routes/dashboard.tsx:803:            role="alert"
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:911:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:991:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:394:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:148:src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:754:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:758:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:911:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:1003:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:754:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:1007:gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:758:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:911:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:1019:## Permissions / Access Control

## Cryptography / Hash / Integrity

src/lib/analysis/localStorageRepository.ts:6:  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
src/lib/analysis/localStorageRepository.ts:7:    return crypto.randomUUID();
src/lib/pilot/localStorageRepository.ts:13:  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
src/lib/pilot/localStorageRepository.ts:14:    return crypto.randomUUID();
src/lib/scientific/__tests__/localStorageRepository.test.ts:7:    objective: "Verify stable-state detection",
src/lib/scientific/localStorageRepository.ts:11:  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
gsos/docs/s08/CHARTER_BASELINE_METADATA.txt:8:SHA256=dfc656a5ee1bec7ed072f28f4b27357d66eb1c6fb404e3d92448cf2273f77396
gsos/docs/s08/FOUNDING_CHARTER_GSOS_S08_DRAFT_AR.md:143:تستخدم GSOS، حيثما كان ذلك مناسباً، بصمات تشفيرية مثل SHA-256 لإثبات أن محتوى الملف لم يتغير منذ تسجيل البصمة.
gsos/runtime/self-documentation/gsos-self-document.sh:36:        sha256sum |
gsos/runtime/self-documentation/gsos-self-document.sh:73:    sha256sum |
gsos/runtime/self-documentation/gsos-self-document.sh:113:printf 'EVENT_SHA256=%s\n' "$EVENT_HASH"
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:244:src/lib/scientific/__tests__/localStorageRepository.test.ts:7:    objective: "Verify stable-state detection",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:244:src/lib/scientific/__tests__/localStorageRepository.test.ts:7:    objective: "Verify stable-state detection",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:501:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:244:src/lib/scientific/__tests__/localStorageRepository.test.ts:7:    objective: "Verify stable-state detection",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:841:gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:244:src/lib/scientific/__tests__/localStorageRepository.test.ts:7:    objective: "Verify stable-state detection",
gsos/work/completion-3/security/snapshot/git-status.txt:6:?? GSOS_FINAL_DOCUMENTATION_SEAL.sha256
gsos/work/completion-3/security/snapshot/archive-hashes.sha256:1:bef604ab92b22d3a0e81b158c7bd10bbe93566abf10f5247510f8a1a5235b6c2  /data/data/com.termux/files/home/sos-observer/gsos/archive/final-audit/GSOS_FINAL_DOCUMENTATION_SEAL.sha256
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:1076:## Cryptography / Hash / Integrity

## Secrets Handling


## Potential Secret Patterns

src/lib/ai-review.functions.ts:[REDACTED]
src/lib/ai-review.functions.ts:[REDACTED]
src/lib/i18n.tsx:[REDACTED]
src/lib/i18n.tsx:[REDACTED]
src/lib/i18n.tsx:[REDACTED]
src/routes/login.tsx:[REDACTED]
src/routes/login.tsx:[REDACTED]
src/routes/login.tsx:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]
gsos/work/completion-3/security/GSOS_SECURITY_IMPLEMENTATION_AUDIT.md:[REDACTED]

## Security Dependencies

class-variance-authority@^0.7.1
zod@^3.24.2
