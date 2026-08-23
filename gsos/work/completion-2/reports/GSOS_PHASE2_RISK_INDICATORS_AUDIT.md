# GSOS Phase 2 — Risk Indicators Audit

HEAD=5b044c16d55fcc30158300dd8a28ea8ad9e546c9
BRANCH=gsos-mobile-lab

## Risk / Indicator files

./gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md
./src/components/ui/alert-dialog.tsx
./src/components/ui/alert.tsx
./src/lib/indicators.ts
./src/lib/knowledge/extractors/indicatorsExtractor.ts

## Risk logic references

src/components/PilotFeedbackForm.tsx:77:      setAccuracy(f.accuracyScore);
src/components/PilotFeedbackForm.tsx:78:      setUsefulness(f.usefulnessScore);
src/components/PilotFeedbackForm.tsx:99:        accuracyScore: accuracy,
src/components/PilotFeedbackForm.tsx:100:        usefulnessScore: usefulness,
src/components/ui/alert-dialog.tsx:2:import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
src/components/ui/alert-dialog.tsx:7:const AlertDialog = AlertDialogPrimitive.Root;
src/components/ui/alert-dialog.tsx:9:const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
src/components/ui/alert-dialog.tsx:11:const AlertDialogPortal = AlertDialogPrimitive.Portal;
src/components/ui/alert-dialog.tsx:13:const AlertDialogOverlay = React.forwardRef<
src/components/ui/alert-dialog.tsx:14:  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
src/components/ui/alert-dialog.tsx:15:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
src/components/ui/alert-dialog.tsx:17:  <AlertDialogPrimitive.Overlay
src/components/ui/alert-dialog.tsx:26:AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
src/components/ui/alert-dialog.tsx:28:const AlertDialogContent = React.forwardRef<
src/components/ui/alert-dialog.tsx:29:  React.ElementRef<typeof AlertDialogPrimitive.Content>,
src/components/ui/alert-dialog.tsx:30:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
src/components/ui/alert-dialog.tsx:32:  <AlertDialogPortal>
src/components/ui/alert-dialog.tsx:33:    <AlertDialogOverlay />
src/components/ui/alert-dialog.tsx:34:    <AlertDialogPrimitive.Content
src/components/ui/alert-dialog.tsx:42:  </AlertDialogPortal>
src/components/ui/alert-dialog.tsx:44:AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
src/components/ui/alert-dialog.tsx:46:const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
src/components/ui/alert-dialog.tsx:49:AlertDialogHeader.displayName = "AlertDialogHeader";
src/components/ui/alert-dialog.tsx:51:const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
src/components/ui/alert-dialog.tsx:57:AlertDialogFooter.displayName = "AlertDialogFooter";
src/components/ui/alert-dialog.tsx:59:const AlertDialogTitle = React.forwardRef<
src/components/ui/alert-dialog.tsx:60:  React.ElementRef<typeof AlertDialogPrimitive.Title>,
src/components/ui/alert-dialog.tsx:61:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
src/components/ui/alert-dialog.tsx:63:  <AlertDialogPrimitive.Title
src/components/ui/alert-dialog.tsx:69:AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
src/components/ui/alert-dialog.tsx:71:const AlertDialogDescription = React.forwardRef<
src/components/ui/alert-dialog.tsx:72:  React.ElementRef<typeof AlertDialogPrimitive.Description>,
src/components/ui/alert-dialog.tsx:73:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
src/components/ui/alert-dialog.tsx:75:  <AlertDialogPrimitive.Description
src/components/ui/alert-dialog.tsx:81:AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
src/components/ui/alert-dialog.tsx:83:const AlertDialogAction = React.forwardRef<
src/components/ui/alert-dialog.tsx:84:  React.ElementRef<typeof AlertDialogPrimitive.Action>,
src/components/ui/alert-dialog.tsx:85:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
src/components/ui/alert-dialog.tsx:87:  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
src/components/ui/alert-dialog.tsx:89:AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
src/components/ui/alert-dialog.tsx:91:const AlertDialogCancel = React.forwardRef<
src/components/ui/alert-dialog.tsx:92:  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
src/components/ui/alert-dialog.tsx:93:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
src/components/ui/alert-dialog.tsx:95:  <AlertDialogPrimitive.Cancel
src/components/ui/alert-dialog.tsx:101:AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
src/components/ui/alert-dialog.tsx:104:  AlertDialog,
src/components/ui/alert-dialog.tsx:105:  AlertDialogPortal,
src/components/ui/alert-dialog.tsx:106:  AlertDialogOverlay,
src/components/ui/alert-dialog.tsx:107:  AlertDialogTrigger,
src/components/ui/alert-dialog.tsx:108:  AlertDialogContent,
src/components/ui/alert-dialog.tsx:109:  AlertDialogHeader,
src/components/ui/alert-dialog.tsx:110:  AlertDialogFooter,
src/components/ui/alert-dialog.tsx:111:  AlertDialogTitle,
src/components/ui/alert-dialog.tsx:112:  AlertDialogDescription,
src/components/ui/alert-dialog.tsx:113:  AlertDialogAction,
src/components/ui/alert-dialog.tsx:114:  AlertDialogCancel,
src/components/ui/alert.tsx:6:const alertVariants = cva(
src/components/ui/alert.tsx:22:const Alert = React.forwardRef<
src/components/ui/alert.tsx:24:  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
src/components/ui/alert.tsx:28:Alert.displayName = "Alert";
src/components/ui/alert.tsx:30:const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
src/components/ui/alert.tsx:39:AlertTitle.displayName = "AlertTitle";
src/components/ui/alert.tsx:41:const AlertDescription = React.forwardRef<
src/components/ui/alert.tsx:47:AlertDescription.displayName = "AlertDescription";
src/components/ui/alert.tsx:49:export { Alert, AlertTitle, AlertDescription };
src/lib/ai-review.functions.ts:17:  writingQualityScore: number; // 0-100
src/lib/ai-review.functions.ts:18:  readabilityScore: number; // 0-100
src/lib/ai-review.functions.ts:43:  "writingQualityScore": 0-100,
src/lib/ai-review.functions.ts:44:  "readabilityScore": 0-100,
src/lib/ai-review.functions.ts:110:      writingQualityScore: clampNum(parsed.writingQualityScore, 0, 100, 75),
src/lib/ai-review.functions.ts:111:      readabilityScore: clampNum(parsed.readabilityScore, 0, 100, 75),
src/lib/analysis/__tests__/localStorageRepository.test.ts:10:  overallRiskLevel: "stable",
src/lib/analysis/__tests__/service.test.ts:12:  overallRiskLevel: "monitor",
src/lib/analysis/localStorageRepository.ts:50:      overallRiskLevel: input.overallRiskLevel,
src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
src/lib/analysis/types.ts:14:  /** UUID v4. Stable business identifier. */
src/lib/analysis/types.ts:31:  overallRiskLevel: OverallRiskLevel;
src/lib/i18n.tsx:19:    stable: "Stable",
src/lib/i18n.tsx:21:    risk: "Risk",
src/lib/i18n.tsx:30:    statusExplanationGreen: "Stable range — within acceptable limits.",
src/lib/i18n.tsx:32:    statusExplanationRed: "Critical state — immediate action required.",
src/lib/i18n.tsx:33:    globalStatusExplanationStable:
src/lib/i18n.tsx:37:    globalStatusExplanationRisk:
src/lib/i18n.tsx:54:    overallRiskLevel: "Overall Risk Level",
src/lib/i18n.tsx:55:    criticalIndicators: "Critical Indicators",
src/lib/i18n.tsx:56:    stableIndicators: "Stable Indicators",
src/lib/i18n.tsx:58:    recommendedActionStable: "Maintain routine monitoring and periodic reassessment.",
src/lib/i18n.tsx:60:    recommendedActionRisk: "Trigger immediate response protocol and escalate to leadership.",
src/lib/i18n.tsx:115:    pilotAvgCombined: "Combined score",
src/lib/i18n.tsx:130:    pilotScores: "Scores (A/U)",
src/lib/i18n.tsx:179:    svWeaknessSmallSample: "Sample size below 10 — statistical confidence limited.",
src/lib/i18n.tsx:180:    svWeaknessNone: "No critical weaknesses detected.",
src/lib/i18n.tsx:181:    svRecCalibrate: "Review indicator thresholds against expert consensus.",
src/lib/i18n.tsx:218:    reConfidence: "Confidence",
src/lib/i18n.tsx:219:    reScore: "Score",
src/lib/i18n.tsx:240:    stable: "Stable",
src/lib/i18n.tsx:242:    risk: "Risque",
src/lib/i18n.tsx:251:    statusExplanationGreen: "Plage stable — dans les limites acceptables.",
src/lib/i18n.tsx:254:    globalStatusExplanationStable:
src/lib/i18n.tsx:258:    globalStatusExplanationRisk:
src/lib/i18n.tsx:275:    overallRiskLevel: "Niveau de risque global",
src/lib/i18n.tsx:276:    criticalIndicators: "Indicateurs critiques",
src/lib/i18n.tsx:277:    stableIndicators: "Indicateurs stables",
src/lib/i18n.tsx:279:    recommendedActionStable: "Maintenir la surveillance de routine et une réévaluation périodique.",
src/lib/i18n.tsx:281:    recommendedActionRisk: "Déclencher le protocole de réponse immédiate et alerter la direction.",
src/lib/i18n.tsx:336:    pilotAvgCombined: "Score combiné",
src/lib/i18n.tsx:351:    pilotScores: "Scores (P/U)",
src/lib/i18n.tsx:439:    reConfidence: "Confiance",
src/lib/i18n.tsx:440:    reScore: "Score",
src/lib/i18n.tsx:462:    stable: "مستقر",
src/lib/i18n.tsx:464:    risk: "خطر",
src/lib/i18n.tsx:476:    globalStatusExplanationStable: "جميع المؤشرات في النطاق الأخضر. النظام يعمل بشكل طبيعي.",
src/lib/i18n.tsx:478:    globalStatusExplanationRisk: "مؤشران أو أكثر في النطاق الأحمر. يتطلب رد فعل فوري.",
src/lib/i18n.tsx:493:    overallRiskLevel: "مستوى الخطر العام",
src/lib/i18n.tsx:494:    criticalIndicators: "المؤشرات الحرجة",
src/lib/i18n.tsx:495:    stableIndicators: "المؤشرات المستقرة",
src/lib/i18n.tsx:497:    recommendedActionStable: "مواصلة المراقبة الدورية وإعادة التقييم المنتظم.",
src/lib/i18n.tsx:499:    recommendedActionRisk: "تفعيل بروتوكول الاستجابة الفورية والتصعيد إلى القيادة.",
src/lib/i18n.tsx:569:    pilotScores: "الدرجات (د/ف)",
src/lib/i18n.tsx:657:    reConfidence: "الثقة",
src/lib/i18n.tsx:658:    reScore: "النتيجة",
src/lib/indicators.ts:28:export type GlobalStatus = "stable" | "monitor" | "risk";
src/lib/indicators.ts:32:  if (reds >= 2) return "risk";
src/lib/indicators.ts:34:  return "stable";
src/lib/knowledge/__tests__/generator.test.ts:28:  statusDistribution: { stable: 0, monitor: 0, risk: 0 },
src/lib/knowledge/extractors/indicatorsExtractor.ts:17:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
src/lib/knowledge/extractors/indicatorsExtractor.ts:27:        "Measures confidence in the operational chain. " +
src/lib/knowledge/extractors/indicatorsExtractor.ts:28:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
src/lib/knowledge/extractors/indicatorsExtractor.ts:39:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
src/lib/knowledge/extractors/pilotExtractor.ts:30:    body: `Stable: ${agg.statusDistribution.stable}. Monitor: ${agg.statusDistribution.monitor}. Risk: ${agg.statusDistribution.risk}.`,
src/lib/knowledge/extractors/rulesExtractor.ts:10:      title: "Color-state thresholds (per indicator)",
src/lib/knowledge/extractors/rulesExtractor.ts:12:        "value ≤ 40 → green (stable); 41–70 → yellow (monitor); ≥ 71 → red (risk). " +
src/lib/knowledge/extractors/rulesExtractor.ts:24:        "0 red → Stable. 1 red → Monitor. ≥ 2 red → Risk.",
src/lib/knowledge/extractors/rulesExtractor.ts:34:        "Stable → maintain routine monitoring. Monitor → investigate the elevated indicator and prepare a contingency plan. Risk → trigger immediate response protocol and escalate.",
src/lib/knowledge/extractors/rulesExtractor.ts:44:        "The analysis engine, indicator computations, and scoring thresholds are frozen at V1.2.0. " +
src/lib/knowledge/generator.ts:68:              "3. Apply color-state thresholds. 4. Aggregate to Global Status. " +
src/lib/knowledge/generator.ts:135:            heading: "Thresholds and status mapping",
src/lib/knowledge/generator.ts:137:              "Per-indicator bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).\n" +
src/lib/knowledge/generator.ts:138:              "Global status: 0 red → Stable, 1 red → Monitor, ≥2 red → Risk.",
src/lib/lovable-error-reporting.ts:4:  severity?: "error" | "warning" | "info";
src/lib/lovable-error-reporting.ts:33:      severity: "error",
src/lib/pilot/__tests__/localStorageRepository.test.ts:20:  accuracyScore: 4,
src/lib/pilot/__tests__/localStorageRepository.test.ts:21:  usefulnessScore: 5,
src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:47:    expect(rows[0].globalStatus).toBe("risk");
src/lib/pilot/__tests__/service.test.ts:22:      globalStatus: "stable",
src/lib/pilot/__tests__/service.test.ts:27:      accuracyScore: 5,
src/lib/pilot/__tests__/service.test.ts:28:      usefulnessScore: 4,
src/lib/pilot/__tests__/service.test.ts:33:    expect(fb?.accuracyScore).toBe(5);
src/lib/pilot/__tests__/service.test.ts:38:    const statuses = ["stable", "risk", "monitor"] as const;
src/lib/pilot/__tests__/service.test.ts:50:        accuracyScore: 4,
src/lib/pilot/__tests__/service.test.ts:51:        usefulnessScore: 5,
src/lib/pilot/__tests__/service.test.ts:62:    expect(agg.statusDistribution).toEqual({ stable: 1, monitor: 1, risk: 1 });
src/lib/pilot/localStorageRepository.ts:66:      accuracyScore: input.accuracyScore,
src/lib/pilot/localStorageRepository.ts:67:      usefulnessScore: input.usefulnessScore,
src/lib/pilot/service.ts:69:    const accScores = feedback.map((f) => f.accuracyScore);
src/lib/pilot/service.ts:70:    const useScores = feedback.map((f) => f.usefulnessScore);
src/lib/pilot/service.ts:71:    const combined = feedback.map((f) => (f.accuracyScore + f.usefulnessScore) / 2);
src/lib/pilot/service.ts:73:    const statusDistribution = { stable: 0, monitor: 0, risk: 0 } as PilotAggregate["statusDistribution"];
src/lib/pilot/service.ts:83:      averageAccuracy: avg(accScores),
src/lib/pilot/service.ts:84:      averageUsefulness: avg(useScores),
src/lib/pilot/types.ts:10:import type { OverallRiskLevel } from "@/lib/analysis/types";
src/lib/pilot/types.ts:23:  globalStatus: OverallRiskLevel;
src/lib/pilot/types.ts:36:  accuracyScore: number; // 1..5
src/lib/pilot/types.ts:37:  usefulnessScore: number; // 1..5
src/lib/pilot/types.ts:53:  statusDistribution: Record<OverallRiskLevel, number>;
src/lib/reasoning/__tests__/engine.test.ts:10:  overallRiskLevel: "monitor",
src/lib/reasoning/__tests__/engine.test.ts:24:  it("builds premises in a stable order including sorted context keys", () => {
src/lib/reasoning/__tests__/engine.test.ts:31:      "overallRiskLevel",
src/lib/reasoning/__tests__/engine.test.ts:46:  it("escalates when overallRiskLevel is 'risk' with critical indicators", () => {
src/lib/reasoning/__tests__/engine.test.ts:51:        overallRiskLevel: "risk",
src/lib/reasoning/__tests__/engine.test.ts:58:    expect(t.conclusion.status).toBe("risk");
src/lib/reasoning/__tests__/engine.test.ts:62:  it("classifies fully-green input as stable", () => {
src/lib/reasoning/__tests__/engine.test.ts:67:        overallRiskLevel: "stable",
src/lib/reasoning/__tests__/engine.test.ts:74:    expect(t.conclusion.status).toBe("stable");
src/lib/reasoning/__tests__/engine.test.ts:75:    expect(t.firedRules.some((r) => r.ruleId === "R7_ALL_STABLE")).toBe(true);
src/lib/reasoning/__tests__/explain.test.ts:12:        overallRiskLevel: "risk",
src/lib/reasoning/__tests__/service.test.ts:10:  overallRiskLevel: "monitor",
src/lib/reasoning/engine.ts:45:      key: "overallRiskLevel",
src/lib/reasoning/engine.ts:46:      value: input.overallRiskLevel,
src/lib/reasoning/engine.ts:68: * score = sum(weight of fired rules) + 4 if overall == 'risk', +1 if 'monitor'
src/lib/reasoning/engine.ts:69: * status: score >= 5 → risk, score >= 2 → monitor, else → stable
src/lib/reasoning/engine.ts:70: * confidence: 0.5 baseline + 0.05 per fired rule, capped to 0.95.
src/lib/reasoning/engine.ts:76:  const ruleScore = fired.reduce((acc, r) => acc + r.weight, 0);
src/lib/reasoning/engine.ts:78:    input.overallRiskLevel === "risk" ? 4 : input.overallRiskLevel === "monitor" ? 1 : 0;
src/lib/reasoning/engine.ts:79:  const score = ruleScore + overallBoost;
src/lib/reasoning/engine.ts:81:  let status: ReasoningStatus = "stable";
src/lib/reasoning/engine.ts:82:  if (score >= 5) status = "risk";
src/lib/reasoning/engine.ts:83:  else if (score >= 2) status = "monitor";
src/lib/reasoning/engine.ts:85:  const confidence = Math.min(0.95, 0.5 + 0.05 * fired.length);
src/lib/reasoning/engine.ts:88:  parts.push(`Fired ${fired.length} rule(s), aggregate score ${score}.`);
src/lib/reasoning/engine.ts:90:    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
src/lib/reasoning/explain.ts:40:      title: `Inference (${(i.confidence * 100).toFixed(0)}%)`,
src/lib/reasoning/explain.ts:49:    detail: `${trace.conclusion.rationale} — confidence ${(trace.conclusion.confidence * 100).toFixed(
src/lib/reasoning/rules/baseRules.ts:6: * Thresholds mirror the documented decision bands used elsewhere in GSOS
src/lib/reasoning/rules/baseRules.ts:10: *   0..39   → green   (stable band)
src/lib/reasoning/rules/baseRules.ts:12: *   70..100 → red     (risk band)
src/lib/reasoning/rules/baseRules.ts:29:    id: "R1_RGI_CRITICAL",
src/lib/reasoning/rules/baseRules.ts:30:    name: "Reality Gap critical",
src/lib/reasoning/rules/baseRules.ts:35:      statement: "Reality Gap Index is in the critical band (>= 70).",
src/lib/reasoning/rules/baseRules.ts:36:      confidence: 0.9,
src/lib/reasoning/rules/baseRules.ts:41:    id: "R2_TRUST_CRITICAL",
src/lib/reasoning/rules/baseRules.ts:42:    name: "Trust critically low",
src/lib/reasoning/rules/baseRules.ts:47:      statement: "Trust Index is critically low (< 40).",
src/lib/reasoning/rules/baseRules.ts:48:      confidence: 0.9,
src/lib/reasoning/rules/baseRules.ts:53:    id: "R3_RDI_CRITICAL",
src/lib/reasoning/rules/baseRules.ts:54:    name: "Response Delay critical",
src/lib/reasoning/rules/baseRules.ts:59:      statement: "Response Delay Index is in the critical band (>= 70).",
src/lib/reasoning/rules/baseRules.ts:60:      confidence: 0.9,
src/lib/reasoning/rules/baseRules.ts:75:      confidence: 0.7,
src/lib/reasoning/rules/baseRules.ts:90:      confidence: 0.7,
src/lib/reasoning/rules/baseRules.ts:105:      confidence: 0.7,
src/lib/reasoning/rules/baseRules.ts:110:    id: "R7_ALL_STABLE",
src/lib/reasoning/rules/baseRules.ts:111:    name: "All indicators stable",
src/lib/reasoning/rules/baseRules.ts:119:      statement: "All three indicators are within their stable bands (trust high, gap/delay low).",
src/lib/reasoning/rules/baseRules.ts:120:      confidence: 0.85,
src/lib/reasoning/rules/baseRules.ts:129:    when: (p) => p.some((x) => x.key === "overallRiskLevel" && x.value === "risk"),
src/lib/reasoning/rules/baseRules.ts:132:        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
src/lib/reasoning/rules/baseRules.ts:133:      confidence: 0.95,
src/lib/reasoning/rules/baseRules.ts:134:      evidence: evidenceFor(p, ["overallRiskLevel"]),
src/lib/reasoning/types.ts:9:export type ReasoningStatus = "stable" | "monitor" | "risk";
src/lib/reasoning/types.ts:25:  confidence: number; // 0..1
src/lib/reasoning/types.ts:33:  weight: number; // contribution to the risk score when fired
src/lib/reasoning/types.ts:50:  confidence: number; // 0..1
src/lib/reasoning/types.ts:51:  score: number;
src/lib/reasoning/types.ts:57:  overallRiskLevel: ReasoningStatus;
src/lib/scientific/__tests__/localStorageRepository.test.ts:7:    objective: "Verify stable-state detection",
src/lib/scientific/__tests__/localStorageRepository.test.ts:9:    caseDescription: "Simulated stable environment",
src/lib/scientific/__tests__/localStorageRepository.test.ts:15:      globalStatus: "stable" as const,
src/lib/scientific/__tests__/localStorageRepository.test.ts:16:      summary: "Stable",
src/lib/scientific/__tests__/localStorageRepository.test.ts:18:    groundTruth: { globalStatus: "stable" as const, notes: "expert confirms stable" },
src/lib/scientific/__tests__/localStorageRepository.test.ts:68:          globalStatus: "risk",
src/lib/scientific/__tests__/localStorageRepository.test.ts:69:          summary: "Risk",
src/lib/scientific/__tests__/localStorageRepository.test.ts:82:      gsosResult: { ...created.gsosResult, globalStatus: "risk" },
src/lib/scientific/__tests__/service.test.ts:16:    globalStatus: "stable" as const,
src/lib/scientific/__tests__/service.test.ts:19:  groundTruth: { globalStatus: "stable" as const, notes: "" },
src/lib/scientific/__tests__/service.test.ts:41:      gsosResult: { ...baseInput.gsosResult, globalStatus: "risk" },
src/lib/scientific/match.ts:7: *   (exact match = 60, adjacent stable↔monitor or monitor↔risk = 30,
src/lib/scientific/match.ts:8: *    stable↔risk = 0).
src/lib/scientific/match.ts:18:  const order = { stable: 0, monitor: 1, risk: 2 } as const;
src/lib/scientific/match.ts:20:  const statusScore = distance === 0 ? 60 : distance === 1 ? 30 : 0;
src/lib/scientific/match.ts:22:  const matchRate = Math.max(0, Math.min(100, Math.round(statusScore + proportional)));
src/lib/scientific/types.ts:10:import type { OverallRiskLevel } from "@/lib/analysis/types";
src/lib/scientific/types.ts:18:  globalStatus: OverallRiskLevel;
src/lib/scientific/types.ts:23:  globalStatus: OverallRiskLevel;
src/routes/dashboard.tsx:116:const STATUS_STYLE: Record<"stable" | "monitor" | "risk", { bg: string; fg: string; dot: string }> =
src/routes/dashboard.tsx:118:    stable: {
src/routes/dashboard.tsx:128:    risk: {
src/routes/dashboard.tsx:149:  status: "stable" | "monitor" | "risk",
src/routes/dashboard.tsx:151:  | "globalStatusExplanationStable"
src/routes/dashboard.tsx:153:  | "globalStatusExplanationRisk" {
src/routes/dashboard.tsx:155:    case "stable":
src/routes/dashboard.tsx:156:      return "globalStatusExplanationStable";
src/routes/dashboard.tsx:159:    case "risk":
src/routes/dashboard.tsx:160:      return "globalStatusExplanationRisk";
src/routes/dashboard.tsx:165:  status: "stable" | "monitor" | "risk",
src/routes/dashboard.tsx:166:): "recommendedActionStable" | "recommendedActionMonitor" | "recommendedActionRisk" {
src/routes/dashboard.tsx:168:    case "stable":
src/routes/dashboard.tsx:169:      return "recommendedActionStable";
src/routes/dashboard.tsx:172:    case "risk":
src/routes/dashboard.tsx:173:      return "recommendedActionRisk";
src/routes/dashboard.tsx:204:  status: "stable" | "monitor" | "risk";
src/routes/dashboard.tsx:221:  const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
src/routes/dashboard.tsx:222:  const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
src/routes/dashboard.tsx:353:            <div className="text-xs text-muted-foreground">{t("overallRiskLevel")}</div>
src/routes/dashboard.tsx:357:            <div className="text-xs text-muted-foreground">{t("criticalIndicators")}</div>
src/routes/dashboard.tsx:359:              {criticalCount} / {indicators.length}
src/routes/dashboard.tsx:363:            <div className="text-xs text-muted-foreground">{t("stableIndicators")}</div>
src/routes/dashboard.tsx:365:              {stableCount} / {indicators.length}
src/routes/dashboard.tsx:453:  status: "stable" | "monitor" | "risk";
src/routes/dashboard.tsx:467:  const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
src/routes/dashboard.tsx:468:  const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
src/routes/dashboard.tsx:518:                  <div className="text-[11px] text-muted-foreground">{t("overallRiskLevel")}</div>
src/routes/dashboard.tsx:522:                  <div className="text-[11px] text-muted-foreground">{t("criticalIndicators")}</div>
src/routes/dashboard.tsx:524:                    {criticalCount} / {indicators.length}
src/routes/dashboard.tsx:528:                  <div className="text-[11px] text-muted-foreground">{t("stableIndicators")}</div>
src/routes/dashboard.tsx:530:                    {stableCount} / {indicators.length}
src/routes/dashboard.tsx:772:  const scoreColor = (n: number) =>
src/routes/dashboard.tsx:803:            role="alert"
src/routes/dashboard.tsx:812:            {/* Scores */}
src/routes/dashboard.tsx:817:                  className={`mt-1 text-2xl font-semibold tabular-nums ${scoreColor(result.writingQualityScore)}`}
src/routes/dashboard.tsx:819:                  {result.writingQualityScore}
src/routes/dashboard.tsx:826:                  className={`mt-1 text-2xl font-semibold ${scoreColor(result.readabilityScore)}`}
src/routes/dashboard.tsx:828:                  {result.readabilityLabel || result.readabilityScore + "/100"}
src/routes/dashboard.tsx:1094:        stable: [22, 163, 74],
src/routes/dashboard.tsx:1096:        risk: [220, 38, 38],
src/routes/dashboard.tsx:1142:      const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
src/routes/dashboard.tsx:1143:      const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
src/routes/dashboard.tsx:1144:      writeWrapped(`${t("overallRiskLevel")}: ${t(status)}`, 11, {
src/routes/dashboard.tsx:1148:      writeWrapped(`${t("criticalIndicators")}: ${criticalCount} / ${indicators.length}`, 11);
src/routes/dashboard.tsx:1149:      writeWrapped(`${t("stableIndicators")}: ${stableCount} / ${indicators.length}`, 11);
src/routes/dashboard.tsx:1235:    const risk = computeGlobalStatus(indicators);
src/routes/dashboard.tsx:1242:      overallRiskLevel: risk,
src/routes/dashboard.tsx:1247:      recommendedAction: t(recommendedActionKey(risk)),
src/routes/dashboard.tsx:1265:        globalStatus: risk,
src/routes/dashboard.tsx:1362:              aria-label={`${indicators.filter((i) => colorStateFor(i.value) === "red").length} of 3 indicators critical`}
src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
src/routes/pilot.tsx:27:  stable: "bg-[color:var(--status-green)]",
src/routes/pilot.tsx:29:  risk: "bg-[color:var(--status-red)]",
src/routes/pilot.tsx:137:      write(`Stable: ${agg.statusDistribution.stable}`, 11);
src/routes/pilot.tsx:139:      write(`Risk: ${agg.statusDistribution.risk}`, 11);
src/routes/pilot.tsx:162:      if (agg.statusDistribution.risk > agg.statusDistribution.stable)
src/routes/pilot.tsx:163:        recs.push("Field context skews toward Risk — review response protocols.");
src/routes/pilot.tsx:296:                  {(["stable", "monitor", "risk"] as const).map((k) => (
src/routes/pilot.tsx:350:                        <th className="py-2 pr-3 font-medium">{t("pilotScores")}</th>
src/routes/pilot.tsx:368:                              {fb ? `${fb.accuracyScore}/${fb.usefulnessScore}` : "—"}
src/routes/reasoning.tsx:75:        overallRiskLevel: latest.overallRiskLevel,
src/routes/reasoning.tsx:211:                          {t("reConfidence")}:{" "}
src/routes/reasoning.tsx:212:                          {(selected.conclusion.confidence * 100).toFixed(0)}% · {t("reScore")}:{" "}
src/routes/reasoning.tsx:213:                          {selected.conclusion.score}
src/routes/scientific.tsx:11:import type { OverallRiskLevel } from "@/lib/analysis/types";
src/routes/scientific.tsx:58:  gsosStatus: "stable" as OverallRiskLevel,
src/routes/scientific.tsx:60:  truthStatus: "stable" as OverallRiskLevel,
src/routes/scientific.tsx:399:                        setForm({ ...form, gsosStatus: e.target.value as OverallRiskLevel })
src/routes/scientific.tsx:403:                      <option value="stable">{t("stable")}</option>
src/routes/scientific.tsx:405:                      <option value="risk">{t("risk")}</option>
src/routes/scientific.tsx:430:                        setForm({ ...form, truthStatus: e.target.value as OverallRiskLevel })
src/routes/scientific.tsx:434:                      <option value="stable">{t("stable")}</option>
src/routes/scientific.tsx:436:                      <option value="risk">{t("risk")}</option>
gsos/runtime-v2/events/s07_doc_audit.log:7:gsos/runtime-v2/audit/stable-baseline.txt
gsos/runtime-v2/events/s07_doc_audit.log:354:./node_modules/fast-json-stable-stringify/README.md
gsos/runtime-v2/audit/stable-baseline.txt:2: GSOS RUNTIME V2 STABLE BASELINE
gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:55:gsos/runtime-v2/audit/stable-baseline.txt
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:26:src/components/ui/alert-dialog.tsx:103:export {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:27:src/components/ui/alert.tsx:49:export { Alert, AlertTitle, AlertDescription };
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:92:src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:160:src/lib/indicators.ts:28:export type GlobalStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:246:src/lib/reasoning/engine.ts:90:    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:261:src/lib/reasoning/rules/baseRules.ts:132:        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:267:src/lib/reasoning/types.ts:9:export type ReasoningStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:102:src/components/ui/alert-dialog.tsx:1:import * as React from "react";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:103:src/components/ui/alert-dialog.tsx:2:import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:104:src/components/ui/alert-dialog.tsx:4:import { cn } from "@/lib/utils";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:105:src/components/ui/alert-dialog.tsx:5:import { buttonVariants } from "@/components/ui/button";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:106:src/components/ui/alert-dialog.tsx:13:const AlertDialogOverlay = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:107:src/components/ui/alert-dialog.tsx:14:  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:108:src/components/ui/alert-dialog.tsx:15:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:109:src/components/ui/alert-dialog.tsx:19:      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:110:src/components/ui/alert-dialog.tsx:28:const AlertDialogContent = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:111:src/components/ui/alert-dialog.tsx:29:  React.ElementRef<typeof AlertDialogPrimitive.Content>,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:112:src/components/ui/alert-dialog.tsx:30:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:113:src/components/ui/alert-dialog.tsx:34:    <AlertDialogPrimitive.Content
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:114:src/components/ui/alert-dialog.tsx:37:        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:115:src/components/ui/alert-dialog.tsx:44:AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:116:src/components/ui/alert-dialog.tsx:46:const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:117:src/components/ui/alert-dialog.tsx:47:  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:118:src/components/ui/alert-dialog.tsx:51:const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:119:src/components/ui/alert-dialog.tsx:53:    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:120:src/components/ui/alert-dialog.tsx:59:const AlertDialogTitle = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:121:src/components/ui/alert-dialog.tsx:60:  React.ElementRef<typeof AlertDialogPrimitive.Title>,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:122:src/components/ui/alert-dialog.tsx:61:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:123:src/components/ui/alert-dialog.tsx:71:const AlertDialogDescription = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:124:src/components/ui/alert-dialog.tsx:72:  React.ElementRef<typeof AlertDialogPrimitive.Description>,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:125:src/components/ui/alert-dialog.tsx:73:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:126:src/components/ui/alert-dialog.tsx:83:const AlertDialogAction = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:127:src/components/ui/alert-dialog.tsx:84:  React.ElementRef<typeof AlertDialogPrimitive.Action>,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:128:src/components/ui/alert-dialog.tsx:85:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:129:src/components/ui/alert-dialog.tsx:87:  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:130:src/components/ui/alert-dialog.tsx:91:const AlertDialogCancel = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:131:src/components/ui/alert-dialog.tsx:92:  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:132:src/components/ui/alert-dialog.tsx:93:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:133:src/components/ui/alert-dialog.tsx:97:    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:134:src/components/ui/alert-dialog.tsx:108:  AlertDialogContent,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:135:src/components/ui/alert.tsx:1:import * as React from "react";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:136:src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:137:src/components/ui/alert.tsx:4:import { cn } from "@/lib/utils";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:138:src/components/ui/alert.tsx:6:const alertVariants = cva(
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:139:src/components/ui/alert.tsx:9:    variants: {
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:140:src/components/ui/alert.tsx:10:      variant: {
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:141:src/components/ui/alert.tsx:13:          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:142:src/components/ui/alert.tsx:16:    defaultVariants: {
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:143:src/components/ui/alert.tsx:17:      variant: "default",
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:144:src/components/ui/alert.tsx:22:const Alert = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:145:src/components/ui/alert.tsx:23:  HTMLDivElement,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:146:src/components/ui/alert.tsx:24:  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:147:src/components/ui/alert.tsx:25:>(({ className, variant, ...props }, ref) => (
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:148:src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:149:src/components/ui/alert.tsx:30:const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:150:src/components/ui/alert.tsx:41:const AlertDescription = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:151:src/components/ui/alert.tsx:42:  HTMLParagraphElement,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:152:src/components/ui/alert.tsx:43:  React.HTMLAttributes<HTMLParagraphElement>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:62:src/lib/analysis/__tests__/localStorageRepository.test.ts:10:  overallRiskLevel: "stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:63:src/lib/analysis/__tests__/service.test.ts:12:  overallRiskLevel: "monitor",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:64:src/lib/analysis/localStorageRepository.ts:50:      overallRiskLevel: input.overallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:65:src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:66:src/lib/analysis/types.ts:14:  /** UUID v4. Stable business identifier. */
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:68:src/lib/analysis/types.ts:31:  overallRiskLevel: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:70:src/lib/i18n.tsx:19:    stable: "Stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:71:src/lib/i18n.tsx:21:    risk: "Risk",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:73:src/lib/i18n.tsx:30:    statusExplanationGreen: "Stable range — within acceptable limits.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:74:src/lib/i18n.tsx:32:    statusExplanationRed: "Critical state — immediate action required.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:75:src/lib/i18n.tsx:33:    globalStatusExplanationStable:
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:78:src/lib/i18n.tsx:37:    globalStatusExplanationRisk:
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:81:src/lib/i18n.tsx:54:    overallRiskLevel: "Overall Risk Level",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:82:src/lib/i18n.tsx:55:    criticalIndicators: "Critical Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:83:src/lib/i18n.tsx:56:    stableIndicators: "Stable Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:84:src/lib/i18n.tsx:58:    recommendedActionStable: "Maintain routine monitoring and periodic reassessment.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:86:src/lib/i18n.tsx:60:    recommendedActionRisk: "Trigger immediate response protocol and escalate to leadership.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:90:src/lib/i18n.tsx:180:    svWeaknessNone: "No critical weaknesses detected.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:91:src/lib/i18n.tsx:181:    svRecCalibrate: "Review indicator thresholds against expert consensus.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:94:src/lib/i18n.tsx:240:    stable: "Stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:95:src/lib/i18n.tsx:242:    risk: "Risque",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:96:src/lib/i18n.tsx:251:    statusExplanationGreen: "Plage stable — dans les limites acceptables.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:97:src/lib/i18n.tsx:254:    globalStatusExplanationStable:
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:98:src/lib/i18n.tsx:258:    globalStatusExplanationRisk:
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:100:src/lib/i18n.tsx:275:    overallRiskLevel: "Niveau de risque global",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:101:src/lib/i18n.tsx:276:    criticalIndicators: "Indicateurs critiques",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:102:src/lib/i18n.tsx:277:    stableIndicators: "Indicateurs stables",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:103:src/lib/i18n.tsx:279:    recommendedActionStable: "Maintenir la surveillance de routine et une réévaluation périodique.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:104:src/lib/i18n.tsx:281:    recommendedActionRisk: "Déclencher le protocole de réponse immédiate et alerter la direction.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:109:src/lib/i18n.tsx:462:    stable: "مستقر",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:110:src/lib/i18n.tsx:464:    risk: "خطر",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:111:src/lib/i18n.tsx:476:    globalStatusExplanationStable: "جميع المؤشرات في النطاق الأخضر. النظام يعمل بشكل طبيعي.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:112:src/lib/i18n.tsx:478:    globalStatusExplanationRisk: "مؤشران أو أكثر في النطاق الأحمر. يتطلب رد فعل فوري.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:114:src/lib/i18n.tsx:493:    overallRiskLevel: "مستوى الخطر العام",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:115:src/lib/i18n.tsx:494:    criticalIndicators: "المؤشرات الحرجة",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:116:src/lib/i18n.tsx:495:    stableIndicators: "المؤشرات المستقرة",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:117:src/lib/i18n.tsx:497:    recommendedActionStable: "مواصلة المراقبة الدورية وإعادة التقييم المنتظم.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:118:src/lib/i18n.tsx:499:    recommendedActionRisk: "تفعيل بروتوكول الاستجابة الفورية والتصعيد إلى القيادة.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:125:src/lib/indicators.ts:28:export type GlobalStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:127:src/lib/indicators.ts:32:  if (reds >= 2) return "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:128:src/lib/indicators.ts:34:  return "stable";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:138:src/lib/knowledge/__tests__/generator.test.ts:28:  statusDistribution: { stable: 0, monitor: 0, risk: 0 },
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:149:src/lib/knowledge/extractors/indicatorsExtractor.ts:17:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:152:src/lib/knowledge/extractors/indicatorsExtractor.ts:28:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:155:src/lib/knowledge/extractors/indicatorsExtractor.ts:39:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:156:src/lib/knowledge/extractors/pilotExtractor.ts:30:    body: `Stable: ${agg.statusDistribution.stable}. Monitor: ${agg.statusDistribution.monitor}. Risk: ${agg.statusDistribution.risk}.`,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:159:src/lib/knowledge/extractors/rulesExtractor.ts:10:      title: "Color-state thresholds (per indicator)",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:160:src/lib/knowledge/extractors/rulesExtractor.ts:12:        "value ≤ 40 → green (stable); 41–70 → yellow (monitor); ≥ 71 → red (risk). " +
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:162:src/lib/knowledge/extractors/rulesExtractor.ts:24:        "0 red → Stable. 1 red → Monitor. ≥ 2 red → Risk.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:163:src/lib/knowledge/extractors/rulesExtractor.ts:34:        "Stable → maintain routine monitoring. Monitor → investigate the elevated indicator and prepare a contingency plan. Risk → trigger immediate response protocol and escalate.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:164:src/lib/knowledge/extractors/rulesExtractor.ts:44:        "The analysis engine, indicator computations, and scoring thresholds are frozen at V1.2.0. " +
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:169:src/lib/knowledge/generator.ts:137:              "Per-indicator bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).\n" +
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:170:src/lib/knowledge/generator.ts:138:              "Global status: 0 red → Stable, 1 red → Monitor, ≥2 red → Risk.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:176:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:177:src/lib/pilot/__tests__/localStorageRepository.test.ts:47:    expect(rows[0].globalStatus).toBe("risk");
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:179:src/lib/pilot/__tests__/service.test.ts:22:      globalStatus: "stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:180:src/lib/pilot/__tests__/service.test.ts:38:    const statuses = ["stable", "risk", "monitor"] as const;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:182:src/lib/pilot/__tests__/service.test.ts:62:    expect(agg.statusDistribution).toEqual({ stable: 1, monitor: 1, risk: 1 });
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:184:src/lib/pilot/service.ts:73:    const statusDistribution = { stable: 0, monitor: 0, risk: 0 } as PilotAggregate["statusDistribution"];
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:185:src/lib/pilot/types.ts:10:import type { OverallRiskLevel } from "@/lib/analysis/types";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:187:src/lib/pilot/types.ts:23:  globalStatus: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:188:src/lib/pilot/types.ts:53:  statusDistribution: Record<OverallRiskLevel, number>;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:189:src/lib/reasoning/__tests__/engine.test.ts:10:  overallRiskLevel: "monitor",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:190:src/lib/reasoning/__tests__/engine.test.ts:24:  it("builds premises in a stable order including sorted context keys", () => {
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:191:src/lib/reasoning/__tests__/engine.test.ts:31:      "overallRiskLevel",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:192:src/lib/reasoning/__tests__/engine.test.ts:46:  it("escalates when overallRiskLevel is 'risk' with critical indicators", () => {
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:193:src/lib/reasoning/__tests__/engine.test.ts:51:        overallRiskLevel: "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:194:src/lib/reasoning/__tests__/engine.test.ts:58:    expect(t.conclusion.status).toBe("risk");
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:195:src/lib/reasoning/__tests__/engine.test.ts:62:  it("classifies fully-green input as stable", () => {
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:196:src/lib/reasoning/__tests__/engine.test.ts:67:        overallRiskLevel: "stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:197:src/lib/reasoning/__tests__/engine.test.ts:74:    expect(t.conclusion.status).toBe("stable");
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:198:src/lib/reasoning/__tests__/engine.test.ts:75:    expect(t.firedRules.some((r) => r.ruleId === "R7_ALL_STABLE")).toBe(true);
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:201:src/lib/reasoning/__tests__/explain.test.ts:12:        overallRiskLevel: "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:202:src/lib/reasoning/__tests__/service.test.ts:10:  overallRiskLevel: "monitor",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:206:src/lib/reasoning/engine.ts:45:      key: "overallRiskLevel",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:207:src/lib/reasoning/engine.ts:46:      value: input.overallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:208:src/lib/reasoning/engine.ts:68: * score = sum(weight of fired rules) + 4 if overall == 'risk', +1 if 'monitor'
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:209:src/lib/reasoning/engine.ts:69: * status: score >= 5 → risk, score >= 2 → monitor, else → stable
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:210:src/lib/reasoning/engine.ts:78:    input.overallRiskLevel === "risk" ? 4 : input.overallRiskLevel === "monitor" ? 1 : 0;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:211:src/lib/reasoning/engine.ts:81:  let status: ReasoningStatus = "stable";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:212:src/lib/reasoning/engine.ts:82:  if (score >= 5) status = "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:213:src/lib/reasoning/engine.ts:90:    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:214:src/lib/reasoning/rules/baseRules.ts:10: *   0..39   → green   (stable band)
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:215:src/lib/reasoning/rules/baseRules.ts:12: *   70..100 → red     (risk band)
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:217:src/lib/reasoning/rules/baseRules.ts:29:    id: "R1_RGI_CRITICAL",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:218:src/lib/reasoning/rules/baseRules.ts:30:    name: "Reality Gap critical",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:220:src/lib/reasoning/rules/baseRules.ts:35:      statement: "Reality Gap Index is in the critical band (>= 70).",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:221:src/lib/reasoning/rules/baseRules.ts:41:    id: "R2_TRUST_CRITICAL",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:222:src/lib/reasoning/rules/baseRules.ts:42:    name: "Trust critically low",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:224:src/lib/reasoning/rules/baseRules.ts:47:      statement: "Trust Index is critically low (< 40).",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:225:src/lib/reasoning/rules/baseRules.ts:53:    id: "R3_RDI_CRITICAL",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:226:src/lib/reasoning/rules/baseRules.ts:54:    name: "Response Delay critical",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:228:src/lib/reasoning/rules/baseRules.ts:59:      statement: "Response Delay Index is in the critical band (>= 70).",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:232:src/lib/reasoning/rules/baseRules.ts:110:    id: "R7_ALL_STABLE",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:233:src/lib/reasoning/rules/baseRules.ts:111:    name: "All indicators stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:234:src/lib/reasoning/rules/baseRules.ts:119:      statement: "All three indicators are within their stable bands (trust high, gap/delay low).",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:235:src/lib/reasoning/rules/baseRules.ts:129:    when: (p) => p.some((x) => x.key === "overallRiskLevel" && x.value === "risk"),
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:236:src/lib/reasoning/rules/baseRules.ts:132:        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:237:src/lib/reasoning/rules/baseRules.ts:134:      evidence: evidenceFor(p, ["overallRiskLevel"]),
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:239:src/lib/reasoning/types.ts:9:export type ReasoningStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:242:src/lib/reasoning/types.ts:33:  weight: number; // contribution to the risk score when fired
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:243:src/lib/reasoning/types.ts:57:  overallRiskLevel: ReasoningStatus;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:244:src/lib/scientific/__tests__/localStorageRepository.test.ts:7:    objective: "Verify stable-state detection",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:245:src/lib/scientific/__tests__/localStorageRepository.test.ts:9:    caseDescription: "Simulated stable environment",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:247:src/lib/scientific/__tests__/localStorageRepository.test.ts:15:      globalStatus: "stable" as const,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:248:src/lib/scientific/__tests__/localStorageRepository.test.ts:16:      summary: "Stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:249:src/lib/scientific/__tests__/localStorageRepository.test.ts:18:    groundTruth: { globalStatus: "stable" as const, notes: "expert confirms stable" },
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:250:src/lib/scientific/__tests__/localStorageRepository.test.ts:68:          globalStatus: "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:251:src/lib/scientific/__tests__/localStorageRepository.test.ts:69:          summary: "Risk",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:252:src/lib/scientific/__tests__/localStorageRepository.test.ts:82:      gsosResult: { ...created.gsosResult, globalStatus: "risk" },
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:253:src/lib/scientific/__tests__/service.test.ts:16:    globalStatus: "stable" as const,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:254:src/lib/scientific/__tests__/service.test.ts:19:  groundTruth: { globalStatus: "stable" as const, notes: "" },
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:255:src/lib/scientific/__tests__/service.test.ts:41:      gsosResult: { ...baseInput.gsosResult, globalStatus: "risk" },
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:256:src/lib/scientific/match.ts:7: *   (exact match = 60, adjacent stable↔monitor or monitor↔risk = 30,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:257:src/lib/scientific/match.ts:8: *    stable↔risk = 0).
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:260:src/lib/scientific/match.ts:18:  const order = { stable: 0, monitor: 1, risk: 2 } as const;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:262:src/lib/scientific/types.ts:10:import type { OverallRiskLevel } from "@/lib/analysis/types";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:263:src/lib/scientific/types.ts:18:  globalStatus: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:264:src/lib/scientific/types.ts:23:  globalStatus: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:297:src/routes/dashboard.tsx:116:const STATUS_STYLE: Record<"stable" | "monitor" | "risk", { bg: string; fg: string; dot: string }> =
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:298:src/routes/dashboard.tsx:118:    stable: {
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:299:src/routes/dashboard.tsx:128:    risk: {
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:300:src/routes/dashboard.tsx:149:  status: "stable" | "monitor" | "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:301:src/routes/dashboard.tsx:151:  | "globalStatusExplanationStable"
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:302:src/routes/dashboard.tsx:153:  | "globalStatusExplanationRisk" {
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:303:src/routes/dashboard.tsx:155:    case "stable":
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:304:src/routes/dashboard.tsx:156:      return "globalStatusExplanationStable";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:305:src/routes/dashboard.tsx:159:    case "risk":
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:306:src/routes/dashboard.tsx:160:      return "globalStatusExplanationRisk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:307:src/routes/dashboard.tsx:165:  status: "stable" | "monitor" | "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:308:src/routes/dashboard.tsx:166:): "recommendedActionStable" | "recommendedActionMonitor" | "recommendedActionRisk" {
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:309:src/routes/dashboard.tsx:168:    case "stable":
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:310:src/routes/dashboard.tsx:169:      return "recommendedActionStable";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:311:src/routes/dashboard.tsx:172:    case "risk":
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:312:src/routes/dashboard.tsx:173:      return "recommendedActionRisk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:315:src/routes/dashboard.tsx:204:  status: "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:316:src/routes/dashboard.tsx:221:  const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:317:src/routes/dashboard.tsx:222:  const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:318:src/routes/dashboard.tsx:353:            <div className="text-xs text-muted-foreground">{t("overallRiskLevel")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:319:src/routes/dashboard.tsx:357:            <div className="text-xs text-muted-foreground">{t("criticalIndicators")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:320:src/routes/dashboard.tsx:359:              {criticalCount} / {indicators.length}
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:321:src/routes/dashboard.tsx:363:            <div className="text-xs text-muted-foreground">{t("stableIndicators")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:322:src/routes/dashboard.tsx:365:              {stableCount} / {indicators.length}
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:327:src/routes/dashboard.tsx:453:  status: "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:328:src/routes/dashboard.tsx:467:  const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:329:src/routes/dashboard.tsx:468:  const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:330:src/routes/dashboard.tsx:518:                  <div className="text-[11px] text-muted-foreground">{t("overallRiskLevel")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:331:src/routes/dashboard.tsx:522:                  <div className="text-[11px] text-muted-foreground">{t("criticalIndicators")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:332:src/routes/dashboard.tsx:524:                    {criticalCount} / {indicators.length}
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:333:src/routes/dashboard.tsx:528:                  <div className="text-[11px] text-muted-foreground">{t("stableIndicators")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:334:src/routes/dashboard.tsx:530:                    {stableCount} / {indicators.length}
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:338:src/routes/dashboard.tsx:1094:        stable: [22, 163, 74],
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:339:src/routes/dashboard.tsx:1096:        risk: [220, 38, 38],
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:340:src/routes/dashboard.tsx:1142:      const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:341:src/routes/dashboard.tsx:1143:      const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:342:src/routes/dashboard.tsx:1144:      writeWrapped(`${t("overallRiskLevel")}: ${t(status)}`, 11, {
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:343:src/routes/dashboard.tsx:1148:      writeWrapped(`${t("criticalIndicators")}: ${criticalCount} / ${indicators.length}`, 11);
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:344:src/routes/dashboard.tsx:1149:      writeWrapped(`${t("stableIndicators")}: ${stableCount} / ${indicators.length}`, 11);
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:350:src/routes/dashboard.tsx:1235:    const risk = computeGlobalStatus(indicators);
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:351:src/routes/dashboard.tsx:1242:      overallRiskLevel: risk,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:352:src/routes/dashboard.tsx:1247:      recommendedAction: t(recommendedActionKey(risk)),
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:354:src/routes/dashboard.tsx:1265:        globalStatus: risk,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:361:src/routes/dashboard.tsx:1362:              aria-label={`${indicators.filter((i) => colorStateFor(i.value) === "red").length} of 3 indicators critical`}
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:372:src/routes/pilot.tsx:27:  stable: "bg-[color:var(--status-green)]",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:373:src/routes/pilot.tsx:29:  risk: "bg-[color:var(--status-red)]",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:374:src/routes/pilot.tsx:137:      write(`Stable: ${agg.statusDistribution.stable}`, 11);
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:375:src/routes/pilot.tsx:139:      write(`Risk: ${agg.statusDistribution.risk}`, 11);
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:377:src/routes/pilot.tsx:162:      if (agg.statusDistribution.risk > agg.statusDistribution.stable)
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:378:src/routes/pilot.tsx:163:        recs.push("Field context skews toward Risk — review response protocols.");
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:383:src/routes/pilot.tsx:296:                  {(["stable", "monitor", "risk"] as const).map((k) => (
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:384:src/routes/reasoning.tsx:75:        overallRiskLevel: latest.overallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:387:src/routes/scientific.tsx:11:import type { OverallRiskLevel } from "@/lib/analysis/types";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:388:src/routes/scientific.tsx:58:  gsosStatus: "stable" as OverallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:389:src/routes/scientific.tsx:60:  truthStatus: "stable" as OverallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:394:src/routes/scientific.tsx:399:                        setForm({ ...form, gsosStatus: e.target.value as OverallRiskLevel })
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:395:src/routes/scientific.tsx:403:                      <option value="stable">{t("stable")}</option>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:396:src/routes/scientific.tsx:405:                      <option value="risk">{t("risk")}</option>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:397:src/routes/scientific.tsx:430:                        setForm({ ...form, truthStatus: e.target.value as OverallRiskLevel })
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:398:src/routes/scientific.tsx:434:                      <option value="stable">{t("stable")}</option>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:399:src/routes/scientific.tsx:436:                      <option value="risk">{t("risk")}</option>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:400:gsos/runtime-v2/events/s07_doc_audit.log:7:gsos/runtime-v2/audit/stable-baseline.txt
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:401:gsos/runtime-v2/events/s07_doc_audit.log:354:./node_modules/fast-json-stable-stringify/README.md
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:402:gsos/runtime-v2/audit/stable-baseline.txt:2: GSOS RUNTIME V2 STABLE BASELINE
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:403:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:55:gsos/runtime-v2/audit/stable-baseline.txt
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:405:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:92:src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:408:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:160:src/lib/indicators.ts:28:export type GlobalStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:414:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:246:src/lib/reasoning/engine.ts:90:    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:415:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:261:src/lib/reasoning/rules/baseRules.ts:132:        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:416:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:267:src/lib/reasoning/types.ts:9:export type ReasoningStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:689:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:62:src/lib/analysis/__tests__/localStorageRepository.test.ts:10:  overallRiskLevel: "stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:690:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:63:src/lib/analysis/__tests__/service.test.ts:12:  overallRiskLevel: "monitor",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:691:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:64:src/lib/analysis/localStorageRepository.ts:50:      overallRiskLevel: input.overallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:692:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:65:src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:693:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:66:src/lib/analysis/types.ts:14:  /** UUID v4. Stable business identifier. */
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:695:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:68:src/lib/analysis/types.ts:31:  overallRiskLevel: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:697:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:70:src/lib/i18n.tsx:19:    stable: "Stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:698:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:71:src/lib/i18n.tsx:21:    risk: "Risk",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:700:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:73:src/lib/i18n.tsx:30:    statusExplanationGreen: "Stable range — within acceptable limits.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:701:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:74:src/lib/i18n.tsx:32:    statusExplanationRed: "Critical state — immediate action required.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:702:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:75:src/lib/i18n.tsx:33:    globalStatusExplanationStable:
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:705:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:78:src/lib/i18n.tsx:37:    globalStatusExplanationRisk:
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:708:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:81:src/lib/i18n.tsx:54:    overallRiskLevel: "Overall Risk Level",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:709:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:82:src/lib/i18n.tsx:55:    criticalIndicators: "Critical Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:710:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:83:src/lib/i18n.tsx:56:    stableIndicators: "Stable Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:711:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:84:src/lib/i18n.tsx:58:    recommendedActionStable: "Maintain routine monitoring and periodic reassessment.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:713:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:86:src/lib/i18n.tsx:60:    recommendedActionRisk: "Trigger immediate response protocol and escalate to leadership.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:717:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:90:src/lib/i18n.tsx:180:    svWeaknessNone: "No critical weaknesses detected.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:718:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:91:src/lib/i18n.tsx:181:    svRecCalibrate: "Review indicator thresholds against expert consensus.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:1:# GSOS Phase 2 — Risk Indicators Audit
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:6:## Risk / Indicator files
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:8:./gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:9:./src/components/ui/alert-dialog.tsx
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:10:./src/components/ui/alert.tsx
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:14:## Risk logic references
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:16:src/components/PilotFeedbackForm.tsx:77:      setAccuracy(f.accuracyScore);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:17:src/components/PilotFeedbackForm.tsx:78:      setUsefulness(f.usefulnessScore);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:18:src/components/PilotFeedbackForm.tsx:99:        accuracyScore: accuracy,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:19:src/components/PilotFeedbackForm.tsx:100:        usefulnessScore: usefulness,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:20:src/components/ui/alert-dialog.tsx:2:import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:21:src/components/ui/alert-dialog.tsx:7:const AlertDialog = AlertDialogPrimitive.Root;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:22:src/components/ui/alert-dialog.tsx:9:const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:23:src/components/ui/alert-dialog.tsx:11:const AlertDialogPortal = AlertDialogPrimitive.Portal;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:24:src/components/ui/alert-dialog.tsx:13:const AlertDialogOverlay = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:25:src/components/ui/alert-dialog.tsx:14:  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:26:src/components/ui/alert-dialog.tsx:15:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:27:src/components/ui/alert-dialog.tsx:17:  <AlertDialogPrimitive.Overlay
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:28:src/components/ui/alert-dialog.tsx:26:AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:29:src/components/ui/alert-dialog.tsx:28:const AlertDialogContent = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:30:src/components/ui/alert-dialog.tsx:29:  React.ElementRef<typeof AlertDialogPrimitive.Content>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:31:src/components/ui/alert-dialog.tsx:30:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:32:src/components/ui/alert-dialog.tsx:32:  <AlertDialogPortal>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:33:src/components/ui/alert-dialog.tsx:33:    <AlertDialogOverlay />
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:34:src/components/ui/alert-dialog.tsx:34:    <AlertDialogPrimitive.Content
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:35:src/components/ui/alert-dialog.tsx:42:  </AlertDialogPortal>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:36:src/components/ui/alert-dialog.tsx:44:AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:37:src/components/ui/alert-dialog.tsx:46:const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:38:src/components/ui/alert-dialog.tsx:49:AlertDialogHeader.displayName = "AlertDialogHeader";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:39:src/components/ui/alert-dialog.tsx:51:const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:40:src/components/ui/alert-dialog.tsx:57:AlertDialogFooter.displayName = "AlertDialogFooter";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:41:src/components/ui/alert-dialog.tsx:59:const AlertDialogTitle = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:42:src/components/ui/alert-dialog.tsx:60:  React.ElementRef<typeof AlertDialogPrimitive.Title>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:43:src/components/ui/alert-dialog.tsx:61:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:44:src/components/ui/alert-dialog.tsx:63:  <AlertDialogPrimitive.Title
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:45:src/components/ui/alert-dialog.tsx:69:AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:46:src/components/ui/alert-dialog.tsx:71:const AlertDialogDescription = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:47:src/components/ui/alert-dialog.tsx:72:  React.ElementRef<typeof AlertDialogPrimitive.Description>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:48:src/components/ui/alert-dialog.tsx:73:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:49:src/components/ui/alert-dialog.tsx:75:  <AlertDialogPrimitive.Description
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:50:src/components/ui/alert-dialog.tsx:81:AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:51:src/components/ui/alert-dialog.tsx:83:const AlertDialogAction = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:52:src/components/ui/alert-dialog.tsx:84:  React.ElementRef<typeof AlertDialogPrimitive.Action>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:53:src/components/ui/alert-dialog.tsx:85:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:54:src/components/ui/alert-dialog.tsx:87:  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:55:src/components/ui/alert-dialog.tsx:89:AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:56:src/components/ui/alert-dialog.tsx:91:const AlertDialogCancel = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:57:src/components/ui/alert-dialog.tsx:92:  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:58:src/components/ui/alert-dialog.tsx:93:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:59:src/components/ui/alert-dialog.tsx:95:  <AlertDialogPrimitive.Cancel
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:60:src/components/ui/alert-dialog.tsx:101:AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:61:src/components/ui/alert-dialog.tsx:104:  AlertDialog,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:62:src/components/ui/alert-dialog.tsx:105:  AlertDialogPortal,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:63:src/components/ui/alert-dialog.tsx:106:  AlertDialogOverlay,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:64:src/components/ui/alert-dialog.tsx:107:  AlertDialogTrigger,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:65:src/components/ui/alert-dialog.tsx:108:  AlertDialogContent,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:66:src/components/ui/alert-dialog.tsx:109:  AlertDialogHeader,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:67:src/components/ui/alert-dialog.tsx:110:  AlertDialogFooter,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:68:src/components/ui/alert-dialog.tsx:111:  AlertDialogTitle,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:69:src/components/ui/alert-dialog.tsx:112:  AlertDialogDescription,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:70:src/components/ui/alert-dialog.tsx:113:  AlertDialogAction,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:71:src/components/ui/alert-dialog.tsx:114:  AlertDialogCancel,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:72:src/components/ui/alert.tsx:6:const alertVariants = cva(
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:73:src/components/ui/alert.tsx:22:const Alert = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:74:src/components/ui/alert.tsx:24:  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:75:src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:76:src/components/ui/alert.tsx:28:Alert.displayName = "Alert";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:77:src/components/ui/alert.tsx:30:const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:78:src/components/ui/alert.tsx:39:AlertTitle.displayName = "AlertTitle";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:79:src/components/ui/alert.tsx:41:const AlertDescription = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:80:src/components/ui/alert.tsx:47:AlertDescription.displayName = "AlertDescription";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:81:src/components/ui/alert.tsx:49:export { Alert, AlertTitle, AlertDescription };
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:82:src/lib/ai-review.functions.ts:17:  writingQualityScore: number; // 0-100
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:83:src/lib/ai-review.functions.ts:18:  readabilityScore: number; // 0-100
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:84:src/lib/ai-review.functions.ts:43:  "writingQualityScore": 0-100,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:85:src/lib/ai-review.functions.ts:44:  "readabilityScore": 0-100,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:86:src/lib/ai-review.functions.ts:110:      writingQualityScore: clampNum(parsed.writingQualityScore, 0, 100, 75),
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:87:src/lib/ai-review.functions.ts:111:      readabilityScore: clampNum(parsed.readabilityScore, 0, 100, 75),
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:88:src/lib/analysis/__tests__/localStorageRepository.test.ts:10:  overallRiskLevel: "stable",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:89:src/lib/analysis/__tests__/service.test.ts:12:  overallRiskLevel: "monitor",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:90:src/lib/analysis/localStorageRepository.ts:50:      overallRiskLevel: input.overallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:91:src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:92:src/lib/analysis/types.ts:14:  /** UUID v4. Stable business identifier. */
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:93:src/lib/analysis/types.ts:31:  overallRiskLevel: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:94:src/lib/i18n.tsx:19:    stable: "Stable",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:95:src/lib/i18n.tsx:21:    risk: "Risk",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:96:src/lib/i18n.tsx:30:    statusExplanationGreen: "Stable range — within acceptable limits.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:97:src/lib/i18n.tsx:32:    statusExplanationRed: "Critical state — immediate action required.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:98:src/lib/i18n.tsx:33:    globalStatusExplanationStable:
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:99:src/lib/i18n.tsx:37:    globalStatusExplanationRisk:
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:100:src/lib/i18n.tsx:54:    overallRiskLevel: "Overall Risk Level",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:101:src/lib/i18n.tsx:55:    criticalIndicators: "Critical Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:102:src/lib/i18n.tsx:56:    stableIndicators: "Stable Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:103:src/lib/i18n.tsx:58:    recommendedActionStable: "Maintain routine monitoring and periodic reassessment.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:104:src/lib/i18n.tsx:60:    recommendedActionRisk: "Trigger immediate response protocol and escalate to leadership.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:105:src/lib/i18n.tsx:115:    pilotAvgCombined: "Combined score",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:106:src/lib/i18n.tsx:130:    pilotScores: "Scores (A/U)",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:107:src/lib/i18n.tsx:179:    svWeaknessSmallSample: "Sample size below 10 — statistical confidence limited.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:108:src/lib/i18n.tsx:180:    svWeaknessNone: "No critical weaknesses detected.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:109:src/lib/i18n.tsx:181:    svRecCalibrate: "Review indicator thresholds against expert consensus.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:110:src/lib/i18n.tsx:218:    reConfidence: "Confidence",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:111:src/lib/i18n.tsx:219:    reScore: "Score",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:112:src/lib/i18n.tsx:240:    stable: "Stable",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:113:src/lib/i18n.tsx:242:    risk: "Risque",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:114:src/lib/i18n.tsx:251:    statusExplanationGreen: "Plage stable — dans les limites acceptables.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:115:src/lib/i18n.tsx:254:    globalStatusExplanationStable:
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:116:src/lib/i18n.tsx:258:    globalStatusExplanationRisk:
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:117:src/lib/i18n.tsx:275:    overallRiskLevel: "Niveau de risque global",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:118:src/lib/i18n.tsx:276:    criticalIndicators: "Indicateurs critiques",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:119:src/lib/i18n.tsx:277:    stableIndicators: "Indicateurs stables",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:120:src/lib/i18n.tsx:279:    recommendedActionStable: "Maintenir la surveillance de routine et une réévaluation périodique.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:121:src/lib/i18n.tsx:281:    recommendedActionRisk: "Déclencher le protocole de réponse immédiate et alerter la direction.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:122:src/lib/i18n.tsx:336:    pilotAvgCombined: "Score combiné",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:123:src/lib/i18n.tsx:351:    pilotScores: "Scores (P/U)",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:124:src/lib/i18n.tsx:439:    reConfidence: "Confiance",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:125:src/lib/i18n.tsx:440:    reScore: "Score",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:126:src/lib/i18n.tsx:462:    stable: "مستقر",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:127:src/lib/i18n.tsx:464:    risk: "خطر",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:128:src/lib/i18n.tsx:476:    globalStatusExplanationStable: "جميع المؤشرات في النطاق الأخضر. النظام يعمل بشكل طبيعي.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:129:src/lib/i18n.tsx:478:    globalStatusExplanationRisk: "مؤشران أو أكثر في النطاق الأحمر. يتطلب رد فعل فوري.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:130:src/lib/i18n.tsx:493:    overallRiskLevel: "مستوى الخطر العام",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:131:src/lib/i18n.tsx:494:    criticalIndicators: "المؤشرات الحرجة",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:132:src/lib/i18n.tsx:495:    stableIndicators: "المؤشرات المستقرة",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:133:src/lib/i18n.tsx:497:    recommendedActionStable: "مواصلة المراقبة الدورية وإعادة التقييم المنتظم.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:134:src/lib/i18n.tsx:499:    recommendedActionRisk: "تفعيل بروتوكول الاستجابة الفورية والتصعيد إلى القيادة.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:135:src/lib/i18n.tsx:569:    pilotScores: "الدرجات (د/ف)",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:136:src/lib/i18n.tsx:657:    reConfidence: "الثقة",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:137:src/lib/i18n.tsx:658:    reScore: "النتيجة",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:138:src/lib/indicators.ts:28:export type GlobalStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:139:src/lib/indicators.ts:32:  if (reds >= 2) return "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:140:src/lib/indicators.ts:34:  return "stable";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:141:src/lib/knowledge/__tests__/generator.test.ts:28:  statusDistribution: { stable: 0, monitor: 0, risk: 0 },
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:142:src/lib/knowledge/extractors/indicatorsExtractor.ts:17:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:143:src/lib/knowledge/extractors/indicatorsExtractor.ts:27:        "Measures confidence in the operational chain. " +
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:144:src/lib/knowledge/extractors/indicatorsExtractor.ts:28:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:145:src/lib/knowledge/extractors/indicatorsExtractor.ts:39:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:146:src/lib/knowledge/extractors/pilotExtractor.ts:30:    body: `Stable: ${agg.statusDistribution.stable}. Monitor: ${agg.statusDistribution.monitor}. Risk: ${agg.statusDistribution.risk}.`,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:147:src/lib/knowledge/extractors/rulesExtractor.ts:10:      title: "Color-state thresholds (per indicator)",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:148:src/lib/knowledge/extractors/rulesExtractor.ts:12:        "value ≤ 40 → green (stable); 41–70 → yellow (monitor); ≥ 71 → red (risk). " +
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:149:src/lib/knowledge/extractors/rulesExtractor.ts:24:        "0 red → Stable. 1 red → Monitor. ≥ 2 red → Risk.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:150:src/lib/knowledge/extractors/rulesExtractor.ts:34:        "Stable → maintain routine monitoring. Monitor → investigate the elevated indicator and prepare a contingency plan. Risk → trigger immediate response protocol and escalate.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:151:src/lib/knowledge/extractors/rulesExtractor.ts:44:        "The analysis engine, indicator computations, and scoring thresholds are frozen at V1.2.0. " +
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:152:src/lib/knowledge/generator.ts:68:              "3. Apply color-state thresholds. 4. Aggregate to Global Status. " +
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:153:src/lib/knowledge/generator.ts:135:            heading: "Thresholds and status mapping",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:154:src/lib/knowledge/generator.ts:137:              "Per-indicator bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).\n" +
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:155:src/lib/knowledge/generator.ts:138:              "Global status: 0 red → Stable, 1 red → Monitor, ≥2 red → Risk.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:156:src/lib/lovable-error-reporting.ts:4:  severity?: "error" | "warning" | "info";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:157:src/lib/lovable-error-reporting.ts:33:      severity: "error",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:158:src/lib/pilot/__tests__/localStorageRepository.test.ts:20:  accuracyScore: 4,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:159:src/lib/pilot/__tests__/localStorageRepository.test.ts:21:  usefulnessScore: 5,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:160:src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:161:src/lib/pilot/__tests__/localStorageRepository.test.ts:47:    expect(rows[0].globalStatus).toBe("risk");
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:162:src/lib/pilot/__tests__/service.test.ts:22:      globalStatus: "stable",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:163:src/lib/pilot/__tests__/service.test.ts:27:      accuracyScore: 5,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:164:src/lib/pilot/__tests__/service.test.ts:28:      usefulnessScore: 4,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:165:src/lib/pilot/__tests__/service.test.ts:33:    expect(fb?.accuracyScore).toBe(5);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:166:src/lib/pilot/__tests__/service.test.ts:38:    const statuses = ["stable", "risk", "monitor"] as const;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:167:src/lib/pilot/__tests__/service.test.ts:50:        accuracyScore: 4,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:168:src/lib/pilot/__tests__/service.test.ts:51:        usefulnessScore: 5,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:169:src/lib/pilot/__tests__/service.test.ts:62:    expect(agg.statusDistribution).toEqual({ stable: 1, monitor: 1, risk: 1 });
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:170:src/lib/pilot/localStorageRepository.ts:66:      accuracyScore: input.accuracyScore,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:171:src/lib/pilot/localStorageRepository.ts:67:      usefulnessScore: input.usefulnessScore,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:172:src/lib/pilot/service.ts:69:    const accScores = feedback.map((f) => f.accuracyScore);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:173:src/lib/pilot/service.ts:70:    const useScores = feedback.map((f) => f.usefulnessScore);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:174:src/lib/pilot/service.ts:71:    const combined = feedback.map((f) => (f.accuracyScore + f.usefulnessScore) / 2);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:175:src/lib/pilot/service.ts:73:    const statusDistribution = { stable: 0, monitor: 0, risk: 0 } as PilotAggregate["statusDistribution"];
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:176:src/lib/pilot/service.ts:83:      averageAccuracy: avg(accScores),
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:177:src/lib/pilot/service.ts:84:      averageUsefulness: avg(useScores),
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:178:src/lib/pilot/types.ts:10:import type { OverallRiskLevel } from "@/lib/analysis/types";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:179:src/lib/pilot/types.ts:23:  globalStatus: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:180:src/lib/pilot/types.ts:36:  accuracyScore: number; // 1..5
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:181:src/lib/pilot/types.ts:37:  usefulnessScore: number; // 1..5
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:182:src/lib/pilot/types.ts:53:  statusDistribution: Record<OverallRiskLevel, number>;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:183:src/lib/reasoning/__tests__/engine.test.ts:10:  overallRiskLevel: "monitor",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:184:src/lib/reasoning/__tests__/engine.test.ts:24:  it("builds premises in a stable order including sorted context keys", () => {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:185:src/lib/reasoning/__tests__/engine.test.ts:31:      "overallRiskLevel",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:186:src/lib/reasoning/__tests__/engine.test.ts:46:  it("escalates when overallRiskLevel is 'risk' with critical indicators", () => {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:187:src/lib/reasoning/__tests__/engine.test.ts:51:        overallRiskLevel: "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:188:src/lib/reasoning/__tests__/engine.test.ts:58:    expect(t.conclusion.status).toBe("risk");
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:189:src/lib/reasoning/__tests__/engine.test.ts:62:  it("classifies fully-green input as stable", () => {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:190:src/lib/reasoning/__tests__/engine.test.ts:67:        overallRiskLevel: "stable",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:191:src/lib/reasoning/__tests__/engine.test.ts:74:    expect(t.conclusion.status).toBe("stable");
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:192:src/lib/reasoning/__tests__/engine.test.ts:75:    expect(t.firedRules.some((r) => r.ruleId === "R7_ALL_STABLE")).toBe(true);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:193:src/lib/reasoning/__tests__/explain.test.ts:12:        overallRiskLevel: "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:194:src/lib/reasoning/__tests__/service.test.ts:10:  overallRiskLevel: "monitor",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:195:src/lib/reasoning/engine.ts:45:      key: "overallRiskLevel",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:196:src/lib/reasoning/engine.ts:46:      value: input.overallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:197:src/lib/reasoning/engine.ts:68: * score = sum(weight of fired rules) + 4 if overall == 'risk', +1 if 'monitor'
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:198:src/lib/reasoning/engine.ts:69: * status: score >= 5 → risk, score >= 2 → monitor, else → stable
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:199:src/lib/reasoning/engine.ts:70: * confidence: 0.5 baseline + 0.05 per fired rule, capped to 0.95.
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:200:src/lib/reasoning/engine.ts:76:  const ruleScore = fired.reduce((acc, r) => acc + r.weight, 0);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:201:src/lib/reasoning/engine.ts:78:    input.overallRiskLevel === "risk" ? 4 : input.overallRiskLevel === "monitor" ? 1 : 0;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:202:src/lib/reasoning/engine.ts:79:  const score = ruleScore + overallBoost;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:203:src/lib/reasoning/engine.ts:81:  let status: ReasoningStatus = "stable";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:204:src/lib/reasoning/engine.ts:82:  if (score >= 5) status = "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:205:src/lib/reasoning/engine.ts:83:  else if (score >= 2) status = "monitor";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:206:src/lib/reasoning/engine.ts:85:  const confidence = Math.min(0.95, 0.5 + 0.05 * fired.length);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:207:src/lib/reasoning/engine.ts:88:  parts.push(`Fired ${fired.length} rule(s), aggregate score ${score}.`);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:208:src/lib/reasoning/engine.ts:90:    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:209:src/lib/reasoning/engine.ts:93:  return { status, rationale: parts.join(" "), confidence, score };
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:210:src/lib/reasoning/explain.ts:40:      title: `Inference (${(i.confidence * 100).toFixed(0)}%)`,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:211:src/lib/reasoning/explain.ts:49:    detail: `${trace.conclusion.rationale} — confidence ${(trace.conclusion.confidence * 100).toFixed(
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:212:src/lib/reasoning/rules/baseRules.ts:6: * Thresholds mirror the documented decision bands used elsewhere in GSOS
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:213:src/lib/reasoning/rules/baseRules.ts:10: *   0..39   → green   (stable band)
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:214:src/lib/reasoning/rules/baseRules.ts:12: *   70..100 → red     (risk band)
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:215:src/lib/reasoning/rules/baseRules.ts:29:    id: "R1_RGI_CRITICAL",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:216:src/lib/reasoning/rules/baseRules.ts:30:    name: "Reality Gap critical",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:217:src/lib/reasoning/rules/baseRules.ts:35:      statement: "Reality Gap Index is in the critical band (>= 70).",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:218:src/lib/reasoning/rules/baseRules.ts:36:      confidence: 0.9,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:219:src/lib/reasoning/rules/baseRules.ts:41:    id: "R2_TRUST_CRITICAL",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:220:src/lib/reasoning/rules/baseRules.ts:42:    name: "Trust critically low",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:221:src/lib/reasoning/rules/baseRules.ts:47:      statement: "Trust Index is critically low (< 40).",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:222:src/lib/reasoning/rules/baseRules.ts:48:      confidence: 0.9,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:223:src/lib/reasoning/rules/baseRules.ts:53:    id: "R3_RDI_CRITICAL",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:224:src/lib/reasoning/rules/baseRules.ts:54:    name: "Response Delay critical",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:225:src/lib/reasoning/rules/baseRules.ts:59:      statement: "Response Delay Index is in the critical band (>= 70).",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:226:src/lib/reasoning/rules/baseRules.ts:60:      confidence: 0.9,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:227:src/lib/reasoning/rules/baseRules.ts:75:      confidence: 0.7,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:228:src/lib/reasoning/rules/baseRules.ts:90:      confidence: 0.7,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:229:src/lib/reasoning/rules/baseRules.ts:105:      confidence: 0.7,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:230:src/lib/reasoning/rules/baseRules.ts:110:    id: "R7_ALL_STABLE",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:231:src/lib/reasoning/rules/baseRules.ts:111:    name: "All indicators stable",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:232:src/lib/reasoning/rules/baseRules.ts:119:      statement: "All three indicators are within their stable bands (trust high, gap/delay low).",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:233:src/lib/reasoning/rules/baseRules.ts:120:      confidence: 0.85,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:234:src/lib/reasoning/rules/baseRules.ts:129:    when: (p) => p.some((x) => x.key === "overallRiskLevel" && x.value === "risk"),
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:235:src/lib/reasoning/rules/baseRules.ts:132:        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:236:src/lib/reasoning/rules/baseRules.ts:133:      confidence: 0.95,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:237:src/lib/reasoning/rules/baseRules.ts:134:      evidence: evidenceFor(p, ["overallRiskLevel"]),
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:238:src/lib/reasoning/types.ts:9:export type ReasoningStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:239:src/lib/reasoning/types.ts:25:  confidence: number; // 0..1
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:240:src/lib/reasoning/types.ts:33:  weight: number; // contribution to the risk score when fired
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:241:src/lib/reasoning/types.ts:50:  confidence: number; // 0..1
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:242:src/lib/reasoning/types.ts:51:  score: number;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:243:src/lib/reasoning/types.ts:57:  overallRiskLevel: ReasoningStatus;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:244:src/lib/scientific/__tests__/localStorageRepository.test.ts:7:    objective: "Verify stable-state detection",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:245:src/lib/scientific/__tests__/localStorageRepository.test.ts:9:    caseDescription: "Simulated stable environment",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:246:src/lib/scientific/__tests__/localStorageRepository.test.ts:15:      globalStatus: "stable" as const,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:247:src/lib/scientific/__tests__/localStorageRepository.test.ts:16:      summary: "Stable",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:248:src/lib/scientific/__tests__/localStorageRepository.test.ts:18:    groundTruth: { globalStatus: "stable" as const, notes: "expert confirms stable" },
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:249:src/lib/scientific/__tests__/localStorageRepository.test.ts:68:          globalStatus: "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:250:src/lib/scientific/__tests__/localStorageRepository.test.ts:69:          summary: "Risk",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:251:src/lib/scientific/__tests__/localStorageRepository.test.ts:82:      gsosResult: { ...created.gsosResult, globalStatus: "risk" },
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:252:src/lib/scientific/__tests__/service.test.ts:16:    globalStatus: "stable" as const,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:253:src/lib/scientific/__tests__/service.test.ts:19:  groundTruth: { globalStatus: "stable" as const, notes: "" },
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:254:src/lib/scientific/__tests__/service.test.ts:41:      gsosResult: { ...baseInput.gsosResult, globalStatus: "risk" },
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:255:src/lib/scientific/match.ts:7: *   (exact match = 60, adjacent stable↔monitor or monitor↔risk = 30,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:256:src/lib/scientific/match.ts:8: *    stable↔risk = 0).
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:257:src/lib/scientific/match.ts:18:  const order = { stable: 0, monitor: 1, risk: 2 } as const;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:258:src/lib/scientific/match.ts:20:  const statusScore = distance === 0 ? 60 : distance === 1 ? 30 : 0;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:259:src/lib/scientific/match.ts:22:  const matchRate = Math.max(0, Math.min(100, Math.round(statusScore + proportional)));
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:260:src/lib/scientific/types.ts:10:import type { OverallRiskLevel } from "@/lib/analysis/types";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:261:src/lib/scientific/types.ts:18:  globalStatus: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:262:src/lib/scientific/types.ts:23:  globalStatus: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:263:src/routes/dashboard.tsx:116:const STATUS_STYLE: Record<"stable" | "monitor" | "risk", { bg: string; fg: string; dot: string }> =
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:264:src/routes/dashboard.tsx:118:    stable: {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:265:src/routes/dashboard.tsx:128:    risk: {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:266:src/routes/dashboard.tsx:149:  status: "stable" | "monitor" | "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:267:src/routes/dashboard.tsx:151:  | "globalStatusExplanationStable"
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:268:src/routes/dashboard.tsx:153:  | "globalStatusExplanationRisk" {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:269:src/routes/dashboard.tsx:155:    case "stable":
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:270:src/routes/dashboard.tsx:156:      return "globalStatusExplanationStable";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:271:src/routes/dashboard.tsx:159:    case "risk":
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:272:src/routes/dashboard.tsx:160:      return "globalStatusExplanationRisk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:273:src/routes/dashboard.tsx:165:  status: "stable" | "monitor" | "risk",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:274:src/routes/dashboard.tsx:166:): "recommendedActionStable" | "recommendedActionMonitor" | "recommendedActionRisk" {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:275:src/routes/dashboard.tsx:168:    case "stable":
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:276:src/routes/dashboard.tsx:169:      return "recommendedActionStable";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:277:src/routes/dashboard.tsx:172:    case "risk":
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:278:src/routes/dashboard.tsx:173:      return "recommendedActionRisk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:279:src/routes/dashboard.tsx:204:  status: "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:280:src/routes/dashboard.tsx:221:  const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:281:src/routes/dashboard.tsx:222:  const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:282:src/routes/dashboard.tsx:353:            <div className="text-xs text-muted-foreground">{t("overallRiskLevel")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:283:src/routes/dashboard.tsx:357:            <div className="text-xs text-muted-foreground">{t("criticalIndicators")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:284:src/routes/dashboard.tsx:359:              {criticalCount} / {indicators.length}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:285:src/routes/dashboard.tsx:363:            <div className="text-xs text-muted-foreground">{t("stableIndicators")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:286:src/routes/dashboard.tsx:365:              {stableCount} / {indicators.length}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:287:src/routes/dashboard.tsx:453:  status: "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:288:src/routes/dashboard.tsx:467:  const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:289:src/routes/dashboard.tsx:468:  const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:290:src/routes/dashboard.tsx:518:                  <div className="text-[11px] text-muted-foreground">{t("overallRiskLevel")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:291:src/routes/dashboard.tsx:522:                  <div className="text-[11px] text-muted-foreground">{t("criticalIndicators")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:292:src/routes/dashboard.tsx:524:                    {criticalCount} / {indicators.length}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:293:src/routes/dashboard.tsx:528:                  <div className="text-[11px] text-muted-foreground">{t("stableIndicators")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:294:src/routes/dashboard.tsx:530:                    {stableCount} / {indicators.length}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:295:src/routes/dashboard.tsx:772:  const scoreColor = (n: number) =>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:296:src/routes/dashboard.tsx:803:            role="alert"
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:297:src/routes/dashboard.tsx:812:            {/* Scores */}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:298:src/routes/dashboard.tsx:817:                  className={`mt-1 text-2xl font-semibold tabular-nums ${scoreColor(result.writingQualityScore)}`}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:299:src/routes/dashboard.tsx:819:                  {result.writingQualityScore}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:300:src/routes/dashboard.tsx:826:                  className={`mt-1 text-2xl font-semibold ${scoreColor(result.readabilityScore)}`}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:301:src/routes/dashboard.tsx:828:                  {result.readabilityLabel || result.readabilityScore + "/100"}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:302:src/routes/dashboard.tsx:1094:        stable: [22, 163, 74],
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:303:src/routes/dashboard.tsx:1096:        risk: [220, 38, 38],
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:304:src/routes/dashboard.tsx:1142:      const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:305:src/routes/dashboard.tsx:1143:      const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:306:src/routes/dashboard.tsx:1144:      writeWrapped(`${t("overallRiskLevel")}: ${t(status)}`, 11, {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:307:src/routes/dashboard.tsx:1148:      writeWrapped(`${t("criticalIndicators")}: ${criticalCount} / ${indicators.length}`, 11);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:308:src/routes/dashboard.tsx:1149:      writeWrapped(`${t("stableIndicators")}: ${stableCount} / ${indicators.length}`, 11);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:309:src/routes/dashboard.tsx:1235:    const risk = computeGlobalStatus(indicators);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:310:src/routes/dashboard.tsx:1242:      overallRiskLevel: risk,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:311:src/routes/dashboard.tsx:1247:      recommendedAction: t(recommendedActionKey(risk)),
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:312:src/routes/dashboard.tsx:1265:        globalStatus: risk,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:313:src/routes/dashboard.tsx:1362:              aria-label={`${indicators.filter((i) => colorStateFor(i.value) === "red").length} of 3 indicators critical`}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:314:src/routes/login.tsx:82:              <p className="text-sm text-[color:var(--status-red)]" role="alert">
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:315:src/routes/pilot.tsx:27:  stable: "bg-[color:var(--status-green)]",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:316:src/routes/pilot.tsx:29:  risk: "bg-[color:var(--status-red)]",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:317:src/routes/pilot.tsx:137:      write(`Stable: ${agg.statusDistribution.stable}`, 11);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:318:src/routes/pilot.tsx:139:      write(`Risk: ${agg.statusDistribution.risk}`, 11);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:319:src/routes/pilot.tsx:162:      if (agg.statusDistribution.risk > agg.statusDistribution.stable)
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:320:src/routes/pilot.tsx:163:        recs.push("Field context skews toward Risk — review response protocols.");
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:321:src/routes/pilot.tsx:296:                  {(["stable", "monitor", "risk"] as const).map((k) => (
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:322:src/routes/pilot.tsx:350:                        <th className="py-2 pr-3 font-medium">{t("pilotScores")}</th>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:323:src/routes/pilot.tsx:368:                              {fb ? `${fb.accuracyScore}/${fb.usefulnessScore}` : "—"}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:324:src/routes/reasoning.tsx:75:        overallRiskLevel: latest.overallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:325:src/routes/reasoning.tsx:211:                          {t("reConfidence")}:{" "}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:326:src/routes/reasoning.tsx:212:                          {(selected.conclusion.confidence * 100).toFixed(0)}% · {t("reScore")}:{" "}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:327:src/routes/reasoning.tsx:213:                          {selected.conclusion.score}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:328:src/routes/scientific.tsx:11:import type { OverallRiskLevel } from "@/lib/analysis/types";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:329:src/routes/scientific.tsx:58:  gsosStatus: "stable" as OverallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:330:src/routes/scientific.tsx:60:  truthStatus: "stable" as OverallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:331:src/routes/scientific.tsx:399:                        setForm({ ...form, gsosStatus: e.target.value as OverallRiskLevel })
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:332:src/routes/scientific.tsx:403:                      <option value="stable">{t("stable")}</option>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:333:src/routes/scientific.tsx:405:                      <option value="risk">{t("risk")}</option>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:334:src/routes/scientific.tsx:430:                        setForm({ ...form, truthStatus: e.target.value as OverallRiskLevel })
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:335:src/routes/scientific.tsx:434:                      <option value="stable">{t("stable")}</option>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:336:src/routes/scientific.tsx:436:                      <option value="risk">{t("risk")}</option>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:337:gsos/runtime-v2/events/s07_doc_audit.log:7:gsos/runtime-v2/audit/stable-baseline.txt
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:338:gsos/runtime-v2/events/s07_doc_audit.log:354:./node_modules/fast-json-stable-stringify/README.md
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:339:gsos/runtime-v2/audit/stable-baseline.txt:2: GSOS RUNTIME V2 STABLE BASELINE
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:340:gsos/work/completion-1/reports/GSOS_PHASE1_ARCH_RUNTIME_SECURITY_AUDIT.md:55:gsos/runtime-v2/audit/stable-baseline.txt
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:341:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:26:src/components/ui/alert-dialog.tsx:103:export {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:342:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:27:src/components/ui/alert.tsx:49:export { Alert, AlertTitle, AlertDescription };
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:343:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:92:src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:344:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:160:src/lib/indicators.ts:28:export type GlobalStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:345:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:246:src/lib/reasoning/engine.ts:90:    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:346:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:261:src/lib/reasoning/rules/baseRules.ts:132:        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:347:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:267:src/lib/reasoning/types.ts:9:export type ReasoningStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:348:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:102:src/components/ui/alert-dialog.tsx:1:import * as React from "react";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:349:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:103:src/components/ui/alert-dialog.tsx:2:import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:350:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:104:src/components/ui/alert-dialog.tsx:4:import { cn } from "@/lib/utils";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:351:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:105:src/components/ui/alert-dialog.tsx:5:import { buttonVariants } from "@/components/ui/button";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:352:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:106:src/components/ui/alert-dialog.tsx:13:const AlertDialogOverlay = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:353:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:107:src/components/ui/alert-dialog.tsx:14:  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:354:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:108:src/components/ui/alert-dialog.tsx:15:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:355:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:109:src/components/ui/alert-dialog.tsx:19:      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:356:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:110:src/components/ui/alert-dialog.tsx:28:const AlertDialogContent = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:357:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:111:src/components/ui/alert-dialog.tsx:29:  React.ElementRef<typeof AlertDialogPrimitive.Content>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:358:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:112:src/components/ui/alert-dialog.tsx:30:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:359:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:113:src/components/ui/alert-dialog.tsx:34:    <AlertDialogPrimitive.Content
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:360:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:114:src/components/ui/alert-dialog.tsx:37:        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:361:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:115:src/components/ui/alert-dialog.tsx:44:AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:362:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:116:src/components/ui/alert-dialog.tsx:46:const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:363:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:117:src/components/ui/alert-dialog.tsx:47:  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:364:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:118:src/components/ui/alert-dialog.tsx:51:const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:365:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:119:src/components/ui/alert-dialog.tsx:53:    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:366:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:120:src/components/ui/alert-dialog.tsx:59:const AlertDialogTitle = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:367:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:121:src/components/ui/alert-dialog.tsx:60:  React.ElementRef<typeof AlertDialogPrimitive.Title>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:368:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:122:src/components/ui/alert-dialog.tsx:61:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:369:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:123:src/components/ui/alert-dialog.tsx:71:const AlertDialogDescription = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:370:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:124:src/components/ui/alert-dialog.tsx:72:  React.ElementRef<typeof AlertDialogPrimitive.Description>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:371:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:125:src/components/ui/alert-dialog.tsx:73:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:372:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:126:src/components/ui/alert-dialog.tsx:83:const AlertDialogAction = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:373:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:127:src/components/ui/alert-dialog.tsx:84:  React.ElementRef<typeof AlertDialogPrimitive.Action>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:374:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:128:src/components/ui/alert-dialog.tsx:85:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:375:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:129:src/components/ui/alert-dialog.tsx:87:  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:376:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:130:src/components/ui/alert-dialog.tsx:91:const AlertDialogCancel = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:377:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:131:src/components/ui/alert-dialog.tsx:92:  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:378:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:132:src/components/ui/alert-dialog.tsx:93:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:379:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:133:src/components/ui/alert-dialog.tsx:97:    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:380:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:134:src/components/ui/alert-dialog.tsx:108:  AlertDialogContent,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:381:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:135:src/components/ui/alert.tsx:1:import * as React from "react";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:382:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:136:src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:383:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:137:src/components/ui/alert.tsx:4:import { cn } from "@/lib/utils";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:384:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:138:src/components/ui/alert.tsx:6:const alertVariants = cva(
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:385:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:139:src/components/ui/alert.tsx:9:    variants: {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:386:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:140:src/components/ui/alert.tsx:10:      variant: {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:387:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:141:src/components/ui/alert.tsx:13:          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:388:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:142:src/components/ui/alert.tsx:16:    defaultVariants: {
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:389:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:143:src/components/ui/alert.tsx:17:      variant: "default",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:390:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:144:src/components/ui/alert.tsx:22:const Alert = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:391:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:145:src/components/ui/alert.tsx:23:  HTMLDivElement,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:392:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:146:src/components/ui/alert.tsx:24:  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:393:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:147:src/components/ui/alert.tsx:25:>(({ className, variant, ...props }, ref) => (
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:394:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:148:src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:395:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:149:src/components/ui/alert.tsx:30:const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:396:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:150:src/components/ui/alert.tsx:41:const AlertDescription = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:397:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:151:src/components/ui/alert.tsx:42:  HTMLParagraphElement,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:398:gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:152:src/components/ui/alert.tsx:43:  React.HTMLAttributes<HTMLParagraphElement>
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:399:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:62:src/lib/analysis/__tests__/localStorageRepository.test.ts:10:  overallRiskLevel: "stable",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:400:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:63:src/lib/analysis/__tests__/service.test.ts:12:  overallRiskLevel: "monitor",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:401:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:64:src/lib/analysis/localStorageRepository.ts:50:      overallRiskLevel: input.overallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:402:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:65:src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:403:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:66:src/lib/analysis/types.ts:14:  /** UUID v4. Stable business identifier. */
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:404:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:68:src/lib/analysis/types.ts:31:  overallRiskLevel: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:405:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:70:src/lib/i18n.tsx:19:    stable: "Stable",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:406:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:71:src/lib/i18n.tsx:21:    risk: "Risk",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:407:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:73:src/lib/i18n.tsx:30:    statusExplanationGreen: "Stable range — within acceptable limits.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:408:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:74:src/lib/i18n.tsx:32:    statusExplanationRed: "Critical state — immediate action required.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:409:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:75:src/lib/i18n.tsx:33:    globalStatusExplanationStable:
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:410:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:78:src/lib/i18n.tsx:37:    globalStatusExplanationRisk:
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:411:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:81:src/lib/i18n.tsx:54:    overallRiskLevel: "Overall Risk Level",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:412:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:82:src/lib/i18n.tsx:55:    criticalIndicators: "Critical Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:413:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:83:src/lib/i18n.tsx:56:    stableIndicators: "Stable Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:414:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:84:src/lib/i18n.tsx:58:    recommendedActionStable: "Maintain routine monitoring and periodic reassessment.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:415:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:86:src/lib/i18n.tsx:60:    recommendedActionRisk: "Trigger immediate response protocol and escalate to leadership.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:416:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:90:src/lib/i18n.tsx:180:    svWeaknessNone: "No critical weaknesses detected.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:417:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:91:src/lib/i18n.tsx:181:    svRecCalibrate: "Review indicator thresholds against expert consensus.",
gsos/work/completion-2/reports/GSOS_PHASE2_RISK_INDICATORS_AUDIT.md:418:gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:94:src/lib/i18n.tsx:240:    stable: "Stable",
