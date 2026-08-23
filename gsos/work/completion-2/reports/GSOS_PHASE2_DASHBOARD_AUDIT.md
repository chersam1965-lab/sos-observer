# GSOS Phase 2 — Dashboard Audit

HEAD=5b044c16d55fcc30158300dd8a28ea8ad9e546c9
BRANCH=gsos-mobile-lab

## Dashboard-related files

./gsos/executive/status.sh
./gsos/executive/status.state
./gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md
./src/components/GsosCard.tsx
./src/components/ui/card.tsx
./src/components/ui/hover-card.tsx
./src/lib/indicators.ts
./src/lib/knowledge/extractors/indicatorsExtractor.ts
./src/routes/dashboard.tsx

## Dashboard references in source

src/components/GsosCard.tsx:5: * GsosCard — single reusable card primitive for the GSOS dashboard.
src/components/ui/chart.tsx:100:      hideIndicator?: boolean;
src/components/ui/chart.tsx:101:      indicator?: "line" | "dot" | "dashed";
src/components/ui/chart.tsx:111:      indicator = "dot",
src/components/ui/chart.tsx:113:      hideIndicator = false,
src/components/ui/chart.tsx:156:    const nestLabel = payload.length === 1 && indicator !== "dot";
src/components/ui/chart.tsx:173:              const indicatorColor = color || item.payload.fill || item.color;
src/components/ui/chart.tsx:180:                    indicator === "dot" && "items-center",
src/components/ui/chart.tsx:190:                        !hideIndicator && (
src/components/ui/chart.tsx:195:                                "h-2.5 w-2.5": indicator === "dot",
src/components/ui/chart.tsx:196:                                "w-1": indicator === "line",
src/components/ui/chart.tsx:198:                                  indicator === "dashed",
src/components/ui/chart.tsx:199:                                "my-0.5": nestLabel && indicator === "dashed",
src/components/ui/chart.tsx:204:                                "--color-bg": indicatorColor,
src/components/ui/chart.tsx:205:                                "--color-border": indicatorColor,
src/components/ui/checkbox.tsx:19:    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
src/components/ui/checkbox.tsx:21:    </CheckboxPrimitive.Indicator>
src/components/ui/context-menu.tsx:104:      <ContextMenuPrimitive.ItemIndicator>
src/components/ui/context-menu.tsx:106:      </ContextMenuPrimitive.ItemIndicator>
src/components/ui/context-menu.tsx:126:      <ContextMenuPrimitive.ItemIndicator>
src/components/ui/context-menu.tsx:128:      </ContextMenuPrimitive.ItemIndicator>
src/components/ui/dropdown-menu.tsx:108:      <DropdownMenuPrimitive.ItemIndicator>
src/components/ui/dropdown-menu.tsx:110:      </DropdownMenuPrimitive.ItemIndicator>
src/components/ui/dropdown-menu.tsx:130:      <DropdownMenuPrimitive.ItemIndicator>
src/components/ui/dropdown-menu.tsx:132:      </DropdownMenuPrimitive.ItemIndicator>
src/components/ui/menubar.tsx:145:      <MenubarPrimitive.ItemIndicator>
src/components/ui/menubar.tsx:147:      </MenubarPrimitive.ItemIndicator>
src/components/ui/menubar.tsx:167:      <MenubarPrimitive.ItemIndicator>
src/components/ui/menubar.tsx:169:      </MenubarPrimitive.ItemIndicator>
src/components/ui/navigation-menu.tsx:93:const NavigationMenuIndicator = React.forwardRef<
src/components/ui/navigation-menu.tsx:94:  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
src/components/ui/navigation-menu.tsx:95:  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
src/components/ui/navigation-menu.tsx:97:  <NavigationMenuPrimitive.Indicator
src/components/ui/navigation-menu.tsx:106:  </NavigationMenuPrimitive.Indicator>
src/components/ui/navigation-menu.tsx:108:NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
src/components/ui/navigation-menu.tsx:118:  NavigationMenuIndicator,
src/components/ui/progress.tsx:17:    <ProgressPrimitive.Indicator
src/components/ui/radio-group.tsx:28:      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
src/components/ui/radio-group.tsx:30:      </RadioGroupPrimitive.Indicator>
src/components/ui/select.tsx:120:      <SelectPrimitive.ItemIndicator>
src/components/ui/select.tsx:122:      </SelectPrimitive.ItemIndicator>
src/lib/ai-review.functions.ts:33:- Suggest improvements ONLY. Never modify numerical values, dates, IDs, indicator names, or technical metrics.
src/lib/analysis/__tests__/localStorageRepository.test.ts:10:  overallRiskLevel: "stable",
src/lib/analysis/__tests__/service.test.ts:12:  overallRiskLevel: "monitor",
src/lib/analysis/localStorageRepository.ts:50:      overallRiskLevel: input.overallRiskLevel,
src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
src/lib/analysis/types.ts:14:  /** UUID v4. Stable business identifier. */
src/lib/analysis/types.ts:26:  /** Version of the computation/engine that produced the indicators. */
src/lib/analysis/types.ts:31:  overallRiskLevel: OverallRiskLevel;
src/lib/i18n.tsx:14:    dashboard: "Dashboard",
src/lib/i18n.tsx:19:    stable: "Stable",
src/lib/i18n.tsx:21:    risk: "Risk",
src/lib/i18n.tsx:26:    refreshed: "Indicators refreshed",
src/lib/i18n.tsx:30:    statusExplanationGreen: "Stable range — within acceptable limits.",
src/lib/i18n.tsx:32:    statusExplanationRed: "Critical state — immediate action required.",
src/lib/i18n.tsx:33:    globalStatusExplanationStable:
src/lib/i18n.tsx:34:      "All indicators are in the green range. The system is operating normally.",
src/lib/i18n.tsx:36:      "One indicator is in the yellow/red range. Caution and monitoring are advised.",
src/lib/i18n.tsx:37:    globalStatusExplanationRisk:
src/lib/i18n.tsx:38:      "Two or more indicators are in the red range. Immediate response is required.",
src/lib/i18n.tsx:46:    indicator: "Indicator",
src/lib/i18n.tsx:54:    overallRiskLevel: "Overall Risk Level",
src/lib/i18n.tsx:55:    criticalIndicators: "Critical Indicators",
src/lib/i18n.tsx:56:    stableIndicators: "Stable Indicators",
src/lib/i18n.tsx:58:    recommendedActionStable: "Maintain routine monitoring and periodic reassessment.",
src/lib/i18n.tsx:59:    recommendedActionMonitor: "Investigate the elevated indicator and prepare a contingency plan.",
src/lib/i18n.tsx:60:    recommendedActionRisk: "Trigger immediate response protocol and escalate to leadership.",
src/lib/i18n.tsx:99:    pilotDashboard: "Pilot Dashboard",
src/lib/i18n.tsx:125:    backToDashboard: "Back to dashboard",
src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
src/lib/i18n.tsx:180:    svWeaknessNone: "No critical weaknesses detected.",
src/lib/i18n.tsx:181:    svRecCalibrate: "Review indicator thresholds against expert consensus.",
src/lib/i18n.tsx:215:    reNoAnalysis: "No analysis found. Run an analysis on the Dashboard first.",
src/lib/i18n.tsx:235:    dashboard: "Tableau de bord",
src/lib/i18n.tsx:240:    stable: "Stable",
src/lib/i18n.tsx:242:    risk: "Risque",
src/lib/i18n.tsx:251:    statusExplanationGreen: "Plage stable — dans les limites acceptables.",
src/lib/i18n.tsx:254:    globalStatusExplanationStable:
src/lib/i18n.tsx:258:    globalStatusExplanationRisk:
src/lib/i18n.tsx:267:    indicator: "Indicateur",
src/lib/i18n.tsx:275:    overallRiskLevel: "Niveau de risque global",
src/lib/i18n.tsx:276:    criticalIndicators: "Indicateurs critiques",
src/lib/i18n.tsx:277:    stableIndicators: "Indicateurs stables",
src/lib/i18n.tsx:279:    recommendedActionStable: "Maintenir la surveillance de routine et une réévaluation périodique.",
src/lib/i18n.tsx:281:    recommendedActionRisk: "Déclencher le protocole de réponse immédiate et alerter la direction.",
src/lib/i18n.tsx:320:    pilotDashboard: "Tableau Pilote",
src/lib/i18n.tsx:346:    backToDashboard: "Retour au tableau de bord",
src/lib/i18n.tsx:354:    svDashboard: "Validation scientifique",
src/lib/i18n.tsx:457:    dashboard: "لوحة القيادة",
src/lib/i18n.tsx:462:    stable: "مستقر",
src/lib/i18n.tsx:464:    risk: "خطر",
src/lib/i18n.tsx:476:    globalStatusExplanationStable: "جميع المؤشرات في النطاق الأخضر. النظام يعمل بشكل طبيعي.",
src/lib/i18n.tsx:478:    globalStatusExplanationRisk: "مؤشران أو أكثر في النطاق الأحمر. يتطلب رد فعل فوري.",
src/lib/i18n.tsx:485:    indicator: "المؤشر",
src/lib/i18n.tsx:493:    overallRiskLevel: "مستوى الخطر العام",
src/lib/i18n.tsx:494:    criticalIndicators: "المؤشرات الحرجة",
src/lib/i18n.tsx:495:    stableIndicators: "المؤشرات المستقرة",
src/lib/i18n.tsx:497:    recommendedActionStable: "مواصلة المراقبة الدورية وإعادة التقييم المنتظم.",
src/lib/i18n.tsx:499:    recommendedActionRisk: "تفعيل بروتوكول الاستجابة الفورية والتصعيد إلى القيادة.",
src/lib/i18n.tsx:538:    pilotDashboard: "لوحة الوضع التجريبي",
src/lib/i18n.tsx:564:    backToDashboard: "العودة إلى لوحة القيادة",
src/lib/i18n.tsx:572:    svDashboard: "التحقق العلمي",
src/lib/indicators.ts:3:export type Indicator = {
src/lib/indicators.ts:8:const STORAGE_KEY = "gsos.indicators";
src/lib/indicators.ts:14:function defaultIndicators(): Indicator[] {
src/lib/indicators.ts:28:export type GlobalStatus = "stable" | "monitor" | "risk";
src/lib/indicators.ts:30:export function computeGlobalStatus(values: Indicator[]): GlobalStatus {
src/lib/indicators.ts:32:  if (reds >= 2) return "risk";
src/lib/indicators.ts:34:  return "stable";
src/lib/indicators.ts:37:export function useIndicators() {
src/lib/indicators.ts:38:  const [indicators, setIndicators] = useState<Indicator[]>(defaultIndicators);
src/lib/indicators.ts:47:        if (parsed.indicators) setIndicators(parsed.indicators);
src/lib/indicators.ts:56:    const next = indicators.map((i) => ({ ...i, value: randomValue() }));
src/lib/indicators.ts:58:    setIndicators(next);
src/lib/indicators.ts:61:      localStorage.setItem(STORAGE_KEY, JSON.stringify({ indicators: next, updatedAt: ts }));
src/lib/indicators.ts:65:  return { indicators, updatedAt, analyse };
src/lib/knowledge/__tests__/engine.test.ts:30:    for (const c of ["indicator", "rule", "principle", "decision", "reference", "concept"])
src/lib/knowledge/__tests__/generator.test.ts:8:  { id: "indicator.a", category: "indicator", title: "A", body: "b", sourcePath: "s", sprintCode: "S", extractedAt: now },
src/lib/knowledge/__tests__/generator.test.ts:28:  statusDistribution: { stable: 0, monitor: 0, risk: 0 },
src/lib/knowledge/engine.ts:4:import { extractIndicators } from "./extractors/indicatorsExtractor";
src/lib/knowledge/engine.ts:32:    ...extractIndicators(sprintCode, extractedAt),
src/lib/knowledge/engine.ts:41:    "src/lib/indicators.ts",
src/lib/knowledge/extractors/indicatorsExtractor.ts:4: * Read-only view of the three GSOS indicators and their color bands.
src/lib/knowledge/extractors/indicatorsExtractor.ts:5: * Values MUST mirror the constants defined in src/lib/indicators.ts.
src/lib/knowledge/extractors/indicatorsExtractor.ts:6: * The engine never mutates indicators — this extractor only describes them.
src/lib/knowledge/extractors/indicatorsExtractor.ts:8:export function extractIndicators(sprintCode: string, extractedAt: string): KnowledgeItem[] {
src/lib/knowledge/extractors/indicatorsExtractor.ts:9:  const source = "src/lib/indicators.ts";
src/lib/knowledge/extractors/indicatorsExtractor.ts:12:      id: "indicator.realityGap",
src/lib/knowledge/extractors/indicatorsExtractor.ts:13:      category: "indicator",
src/lib/knowledge/extractors/indicatorsExtractor.ts:17:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
src/lib/knowledge/extractors/indicatorsExtractor.ts:23:      id: "indicator.trust",
src/lib/knowledge/extractors/indicatorsExtractor.ts:24:      category: "indicator",
src/lib/knowledge/extractors/indicatorsExtractor.ts:28:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
src/lib/knowledge/extractors/indicatorsExtractor.ts:34:      id: "indicator.responseDelay",
src/lib/knowledge/extractors/indicatorsExtractor.ts:35:      category: "indicator",
src/lib/knowledge/extractors/indicatorsExtractor.ts:39:        "Range 0–100. Bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).",
src/lib/knowledge/extractors/pilotExtractor.ts:30:    body: `Stable: ${agg.statusDistribution.stable}. Monitor: ${agg.statusDistribution.monitor}. Risk: ${agg.statusDistribution.risk}.`,
src/lib/knowledge/extractors/rulesExtractor.ts:3:/** Decision rules extracted from src/lib/indicators.ts and analysis/types.ts. */
src/lib/knowledge/extractors/rulesExtractor.ts:5:  const src = "src/lib/indicators.ts";
src/lib/knowledge/extractors/rulesExtractor.ts:10:      title: "Color-state thresholds (per indicator)",
src/lib/knowledge/extractors/rulesExtractor.ts:12:        "value ≤ 40 → green (stable); 41–70 → yellow (monitor); ≥ 71 → red (risk). " +
src/lib/knowledge/extractors/rulesExtractor.ts:23:        "Count red indicators across the three indices. " +
src/lib/knowledge/extractors/rulesExtractor.ts:24:        "0 red → Stable. 1 red → Monitor. ≥ 2 red → Risk.",
src/lib/knowledge/extractors/rulesExtractor.ts:34:        "Stable → maintain routine monitoring. Monitor → investigate the elevated indicator and prepare a contingency plan. Risk → trigger immediate response protocol and escalate.",
src/lib/knowledge/extractors/rulesExtractor.ts:44:        "The analysis engine, indicator computations, and scoring thresholds are frozen at V1.2.0. " +
src/lib/knowledge/generator.ts:54:      const indicators = itemsBy(items, ["indicator"]);
src/lib/knowledge/generator.ts:60:        extractedComponents: [...indicators, ...rules].map((i) => i.id),
src/lib/knowledge/generator.ts:62:          { heading: "Indicators", body: bulletList(indicators) },
src/lib/knowledge/generator.ts:86:              "src/lib/indicators.ts — frozen indicator engine.\n" +
src/lib/knowledge/generator.ts:137:              "Per-indicator bands: 0–40 green (stable), 41–70 yellow (monitor), 71–100 red (risk).\n" +
src/lib/knowledge/generator.ts:138:              "Global status: 0 red → Stable, 1 red → Monitor, ≥2 red → Risk.",
src/lib/knowledge/generator.ts:151:        "indicator",
src/lib/knowledge/pdf.ts:5: * Does NOT import from the dashboard PDF pipeline.
src/lib/knowledge/types.ts:4: * GKE turns knowledge already present inside GSOS Observer (indicators,
src/lib/knowledge/types.ts:16:  | "indicator"
src/lib/pilot/__tests__/localStorageRepository.test.ts:9:  indicators: { realityGap: 20, trust: 40, responseDelay: 55 },
src/lib/pilot/__tests__/localStorageRepository.test.ts:44:    await repo.logSession(baseSession({ sessionId: "fixed", globalStatus: "risk" }));
src/lib/pilot/__tests__/localStorageRepository.test.ts:47:    expect(rows[0].globalStatus).toBe("risk");
src/lib/pilot/__tests__/service.test.ts:21:      indicators: { realityGap: 10, trust: 20, responseDelay: 30 },
src/lib/pilot/__tests__/service.test.ts:22:      globalStatus: "stable",
src/lib/pilot/__tests__/service.test.ts:38:    const statuses = ["stable", "risk", "monitor"] as const;
src/lib/pilot/__tests__/service.test.ts:44:        indicators: { realityGap: 10, trust: 20, responseDelay: 30 },
src/lib/pilot/__tests__/service.test.ts:62:    expect(agg.statusDistribution).toEqual({ stable: 1, monitor: 1, risk: 1 });
src/lib/pilot/localStorageRepository.ts:48:      indicators: input.indicators,
src/lib/pilot/service.ts:73:    const statusDistribution = { stable: 0, monitor: 0, risk: 0 } as PilotAggregate["statusDistribution"];
src/lib/pilot/types.ts:10:import type { OverallRiskLevel } from "@/lib/analysis/types";
src/lib/pilot/types.ts:18:  indicators: {
src/lib/pilot/types.ts:23:  globalStatus: OverallRiskLevel;
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
src/lib/reasoning/__tests__/engine.test.ts:80:      { ruleId: "x", name: "x", category: "indicator", weight: 3 },
src/lib/reasoning/__tests__/engine.test.ts:83:      { ruleId: "x", name: "x", category: "indicator", weight: 3 },
src/lib/reasoning/__tests__/explain.test.ts:12:        overallRiskLevel: "risk",
src/lib/reasoning/__tests__/service.test.ts:10:  overallRiskLevel: "monitor",
src/lib/reasoning/engine.ts:23:      kind: "indicator",
src/lib/reasoning/engine.ts:30:      kind: "indicator",
src/lib/reasoning/engine.ts:37:      kind: "indicator",
src/lib/reasoning/engine.ts:45:      key: "overallRiskLevel",
src/lib/reasoning/engine.ts:46:      value: input.overallRiskLevel,
src/lib/reasoning/engine.ts:68: * score = sum(weight of fired rules) + 4 if overall == 'risk', +1 if 'monitor'
src/lib/reasoning/engine.ts:69: * status: score >= 5 → risk, score >= 2 → monitor, else → stable
src/lib/reasoning/engine.ts:78:    input.overallRiskLevel === "risk" ? 4 : input.overallRiskLevel === "monitor" ? 1 : 0;
src/lib/reasoning/engine.ts:81:  let status: ReasoningStatus = "stable";
src/lib/reasoning/engine.ts:82:  if (score >= 5) status = "risk";
src/lib/reasoning/engine.ts:90:    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
src/lib/reasoning/rules/baseRules.ts:10: *   0..39   → green   (stable band)
src/lib/reasoning/rules/baseRules.ts:12: *   70..100 → red     (risk band)
src/lib/reasoning/rules/baseRules.ts:19:  const p = premises.find((x) => x.key === key && x.kind === "indicator");
src/lib/reasoning/rules/baseRules.ts:29:    id: "R1_RGI_CRITICAL",
src/lib/reasoning/rules/baseRules.ts:30:    name: "Reality Gap critical",
src/lib/reasoning/rules/baseRules.ts:31:    category: "indicator",
src/lib/reasoning/rules/baseRules.ts:35:      statement: "Reality Gap Index is in the critical band (>= 70).",
src/lib/reasoning/rules/baseRules.ts:41:    id: "R2_TRUST_CRITICAL",
src/lib/reasoning/rules/baseRules.ts:42:    name: "Trust critically low",
src/lib/reasoning/rules/baseRules.ts:43:    category: "indicator",
src/lib/reasoning/rules/baseRules.ts:47:      statement: "Trust Index is critically low (< 40).",
src/lib/reasoning/rules/baseRules.ts:53:    id: "R3_RDI_CRITICAL",
src/lib/reasoning/rules/baseRules.ts:54:    name: "Response Delay critical",
src/lib/reasoning/rules/baseRules.ts:55:    category: "indicator",
src/lib/reasoning/rules/baseRules.ts:59:      statement: "Response Delay Index is in the critical band (>= 70).",
src/lib/reasoning/rules/baseRules.ts:67:    category: "indicator",
src/lib/reasoning/rules/baseRules.ts:82:    category: "indicator",
src/lib/reasoning/rules/baseRules.ts:97:    category: "indicator",
src/lib/reasoning/rules/baseRules.ts:110:    id: "R7_ALL_STABLE",
src/lib/reasoning/rules/baseRules.ts:111:    name: "All indicators stable",
src/lib/reasoning/rules/baseRules.ts:119:      statement: "All three indicators are within their stable bands (trust high, gap/delay low).",
src/lib/reasoning/rules/baseRules.ts:129:    when: (p) => p.some((x) => x.key === "overallRiskLevel" && x.value === "risk"),
src/lib/reasoning/rules/baseRules.ts:132:        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
src/lib/reasoning/rules/baseRules.ts:134:      evidence: evidenceFor(p, ["overallRiskLevel"]),
src/lib/reasoning/types.ts:6: * internals or indicator computation logic.
src/lib/reasoning/types.ts:9:export type ReasoningStatus = "stable" | "monitor" | "risk";
src/lib/reasoning/types.ts:10:export type PremiseKind = "indicator" | "context" | "fact";
src/lib/reasoning/types.ts:11:export type RuleCategory = "indicator" | "aggregation" | "context";
src/lib/reasoning/types.ts:33:  weight: number; // contribution to the risk score when fired
src/lib/reasoning/types.ts:57:  overallRiskLevel: ReasoningStatus;
src/lib/scientific/__tests__/localStorageRepository.test.ts:7:    objective: "Verify stable-state detection",
src/lib/scientific/__tests__/localStorageRepository.test.ts:9:    caseDescription: "Simulated stable environment",
src/lib/scientific/__tests__/localStorageRepository.test.ts:10:    inputData: "indicators within normal ranges",
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
src/lib/scientific/match.ts:9: * - The remaining 40 points scale with 1 − mean(|Δindicator|)/100
src/lib/scientific/match.ts:11: *   In v1 no ground-truth indicators are captured, so we award those
src/lib/scientific/match.ts:18:  const order = { stable: 0, monitor: 1, risk: 2 } as const;
src/lib/scientific/types.ts:4: * This module is intentionally isolated from Analysis, Dashboard, PDF,
src/lib/scientific/types.ts:10:import type { OverallRiskLevel } from "@/lib/analysis/types";
src/lib/scientific/types.ts:18:  globalStatus: OverallRiskLevel;
src/lib/scientific/types.ts:23:  globalStatus: OverallRiskLevel;
src/routeTree.gen.ts:17:import { Route as DashboardRouteImport } from './routes/dashboard'
src/routeTree.gen.ts:45:const DashboardRoute = DashboardRouteImport.update({
src/routeTree.gen.ts:46:  id: '/dashboard',
src/routeTree.gen.ts:47:  path: '/dashboard',
src/routeTree.gen.ts:58:  '/dashboard': typeof DashboardRoute
src/routeTree.gen.ts:67:  '/dashboard': typeof DashboardRoute
src/routeTree.gen.ts:77:  '/dashboard': typeof DashboardRoute
src/routeTree.gen.ts:88:    | '/dashboard'
src/routeTree.gen.ts:97:    | '/dashboard'
src/routeTree.gen.ts:106:    | '/dashboard'
src/routeTree.gen.ts:116:  DashboardRoute: typeof DashboardRoute
src/routeTree.gen.ts:161:    '/dashboard': {
src/routeTree.gen.ts:162:      id: '/dashboard'
src/routeTree.gen.ts:163:      path: '/dashboard'
src/routeTree.gen.ts:164:      fullPath: '/dashboard'
src/routeTree.gen.ts:165:      preLoaderRoute: typeof DashboardRouteImport
src/routeTree.gen.ts:180:  DashboardRoute: DashboardRoute,
src/routes/dashboard.tsx:9:  useIndicators,
src/routes/dashboard.tsx:10:  type Indicator,
src/routes/dashboard.tsx:11:} from "@/lib/indicators";
src/routes/dashboard.tsx:28:export const Route = createFileRoute("/dashboard")({
src/routes/dashboard.tsx:31:      { title: "GSOS Observer — Dashboard" },
src/routes/dashboard.tsx:32:      { name: "description", content: "Operational indicators dashboard." },
src/routes/dashboard.tsx:35:  component: DashboardPage,
src/routes/dashboard.tsx:62:function IndicatorCard({ indicator }: { indicator: Indicator }) {
src/routes/dashboard.tsx:64:  const state = colorStateFor(indicator.value);
src/routes/dashboard.tsx:66:  const label = t(indicator.key);
src/routes/dashboard.tsx:69:    <GsosCard interactive as="article" aria-label={`${label}: ${indicator.value} of 100, ${state}`}>
src/routes/dashboard.tsx:82:          {indicator.value}
src/routes/dashboard.tsx:91:        aria-valuenow={indicator.value}
src/routes/dashboard.tsx:96:          style={{ width: `${indicator.value}%` }}
src/routes/dashboard.tsx:103:function IndicatorSkeleton() {
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
src/routes/dashboard.tsx:192:  indicators,
src/routes/dashboard.tsx:203:  indicators: Indicator[];
src/routes/dashboard.tsx:204:  status: "stable" | "monitor" | "risk";
src/routes/dashboard.tsx:221:  const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
src/routes/dashboard.tsx:222:  const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
src/routes/dashboard.tsx:353:            <div className="text-xs text-muted-foreground">{t("overallRiskLevel")}</div>
src/routes/dashboard.tsx:357:            <div className="text-xs text-muted-foreground">{t("criticalIndicators")}</div>
src/routes/dashboard.tsx:359:              {criticalCount} / {indicators.length}
src/routes/dashboard.tsx:363:            <div className="text-xs text-muted-foreground">{t("stableIndicators")}</div>
src/routes/dashboard.tsx:365:              {stableCount} / {indicators.length}
src/routes/dashboard.tsx:377:      {/* Per-indicator */}
src/routes/dashboard.tsx:379:        {indicators.map((i) => {
src/routes/dashboard.tsx:442:  indicators,
src/routes/dashboard.tsx:452:  indicators: Indicator[];
src/routes/dashboard.tsx:453:  status: "stable" | "monitor" | "risk";
src/routes/dashboard.tsx:467:  const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
src/routes/dashboard.tsx:468:  const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
src/routes/dashboard.tsx:518:                  <div className="text-[11px] text-muted-foreground">{t("overallRiskLevel")}</div>
src/routes/dashboard.tsx:522:                  <div className="text-[11px] text-muted-foreground">{t("criticalIndicators")}</div>
src/routes/dashboard.tsx:524:                    {criticalCount} / {indicators.length}
src/routes/dashboard.tsx:528:                  <div className="text-[11px] text-muted-foreground">{t("stableIndicators")}</div>
src/routes/dashboard.tsx:530:                    {stableCount} / {indicators.length}
src/routes/dashboard.tsx:547:                {indicators.map((i) => {
src/routes/dashboard.tsx:954:function DashboardPage() {
src/routes/dashboard.tsx:957:  const { indicators, updatedAt, analyse } = useIndicators();
src/routes/dashboard.tsx:1094:        stable: [22, 163, 74],
src/routes/dashboard.tsx:1096:        risk: [220, 38, 38],
src/routes/dashboard.tsx:1142:      const criticalCount = indicators.filter((i) => colorStateFor(i.value) === "red").length;
src/routes/dashboard.tsx:1143:      const stableCount = indicators.filter((i) => colorStateFor(i.value) === "green").length;
src/routes/dashboard.tsx:1144:      writeWrapped(`${t("overallRiskLevel")}: ${t(status)}`, 11, {
src/routes/dashboard.tsx:1148:      writeWrapped(`${t("criticalIndicators")}: ${criticalCount} / ${indicators.length}`, 11);
src/routes/dashboard.tsx:1149:      writeWrapped(`${t("stableIndicators")}: ${stableCount} / ${indicators.length}`, 11);
src/routes/dashboard.tsx:1161:      indicators.forEach((i) => {
src/routes/dashboard.tsx:1169:        writeWrapped(ov[`indicator_${i.key}`] ?? t(statusExplanationKey(state)), 11, {
src/routes/dashboard.tsx:1214:  const status = computeGlobalStatus(indicators);
src/routes/dashboard.tsx:1230:  // The dashboard remains a read-through view; the repository is the source of
src/routes/dashboard.tsx:1234:    const findValue = (k: Indicator["key"]) => indicators.find((i) => i.key === k)?.value ?? 0;
src/routes/dashboard.tsx:1235:    const risk = computeGlobalStatus(indicators);
src/routes/dashboard.tsx:1242:      overallRiskLevel: risk,
src/routes/dashboard.tsx:1247:      recommendedAction: t(recommendedActionKey(risk)),
src/routes/dashboard.tsx:1260:        indicators: {
src/routes/dashboard.tsx:1265:        globalStatus: risk,
src/routes/dashboard.tsx:1294:              <div className="text-xs text-muted-foreground">{t("dashboard")}</div>
src/routes/dashboard.tsx:1304:                {t("pilotDashboard")}
src/routes/dashboard.tsx:1324:            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t("dashboard")}</h1>
src/routes/dashboard.tsx:1343:          aria-label={t("dashboard")}
src/routes/dashboard.tsx:1347:            ? indicators.map((i) => <IndicatorSkeleton key={i.key} />)
src/routes/dashboard.tsx:1348:            : indicators.map((i) => <IndicatorCard key={i.key} indicator={i} />)}
src/routes/dashboard.tsx:1362:              aria-label={`${indicators.filter((i) => colorStateFor(i.value) === "red").length} of 3 indicators critical`}
src/routes/dashboard.tsx:1364:              {indicators.filter((i) => colorStateFor(i.value) === "red").length} / 3 RED
src/routes/dashboard.tsx:1371:            indicators={indicators}
src/routes/dashboard.tsx:1390:            indicators={indicators}
src/routes/dashboard.tsx:1415:              ...indicators.map((i) => ({
src/routes/dashboard.tsx:1416:                id: `indicator_${i.key}`,
src/routes/index.tsx:7:      throw redirect({ to: isAuthed() ? "/dashboard" : "/login" });
src/routes/knowledge.tsx:123:              to="/dashboard"
src/routes/knowledge.tsx:126:              {t("backToDashboard")}
src/routes/login.tsx:27:      navigate({ to: "/dashboard" });
src/routes/pilot.tsx:18:      { title: "GSOS Observer — Pilot Dashboard" },
src/routes/pilot.tsx:27:  stable: "bg-[color:var(--status-green)]",
src/routes/pilot.tsx:29:  risk: "bg-[color:var(--status-red)]",
src/routes/pilot.tsx:137:      write(`Stable: ${agg.statusDistribution.stable}`, 11);
src/routes/pilot.tsx:139:      write(`Risk: ${agg.statusDistribution.risk}`, 11);
src/routes/pilot.tsx:159:        recs.push("Investigate indicator calibration — perceived accuracy below target.");
src/routes/pilot.tsx:162:      if (agg.statusDistribution.risk > agg.statusDistribution.stable)
src/routes/pilot.tsx:163:        recs.push("Field context skews toward Risk — review response protocols.");
src/routes/pilot.tsx:199:              <div className="text-xs text-muted-foreground">{t("pilotDashboard")}</div>
src/routes/pilot.tsx:205:              to="/dashboard"
src/routes/pilot.tsx:208:              {t("backToDashboard")}
src/routes/pilot.tsx:218:              {t("pilotDashboard")}
src/routes/pilot.tsx:296:                  {(["stable", "monitor", "risk"] as const).map((k) => (
src/routes/reasoning.tsx:75:        overallRiskLevel: latest.overallRiskLevel,
src/routes/reasoning.tsx:120:              to="/dashboard"
src/routes/reasoning.tsx:123:              {t("backToDashboard")}
src/routes/scientific.tsx:11:import type { OverallRiskLevel } from "@/lib/analysis/types";
src/routes/scientific.tsx:58:  gsosStatus: "stable" as OverallRiskLevel,
src/routes/scientific.tsx:60:  truthStatus: "stable" as OverallRiskLevel,
src/routes/scientific.tsx:282:              <div className="text-xs text-muted-foreground">{t("svDashboard")}</div>
src/routes/scientific.tsx:288:              to="/dashboard"
src/routes/scientific.tsx:291:              {t("backToDashboard")}
src/routes/scientific.tsx:301:              {t("svDashboard")}
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
gsos/work/completion-1/README.md:2:Architecture + Runtime + Dashboard + I18n + Reporting
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:92:src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:158:src/lib/indicators.ts:3:export type Indicator = {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:159:src/lib/indicators.ts:22:export function colorStateFor(value: number): "green" | "yellow" | "red" {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:160:src/lib/indicators.ts:28:export type GlobalStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:161:src/lib/indicators.ts:30:export function computeGlobalStatus(values: Indicator[]): GlobalStatus {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:162:src/lib/indicators.ts:37:export function useIndicators() {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:167:src/lib/knowledge/extractors/indicatorsExtractor.ts:8:export function extractIndicators(sprintCode: string, extractedAt: string): KnowledgeItem[] {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:168:src/lib/knowledge/extractors/indicatorsExtractor.ts:16:        "Measures divergence between operational reality and reported state. " +
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:184:src/lib/knowledge/pdf.ts:5: * Does NOT import from the dashboard PDF pipeline.
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:246:src/lib/reasoning/engine.ts:90:    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:261:src/lib/reasoning/rules/baseRules.ts:132:        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:267:src/lib/reasoning/types.ts:9:export type ReasoningStatus = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:268:src/lib/reasoning/types.ts:10:export type PremiseKind = "indicator" | "context" | "fact";
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:269:src/lib/reasoning/types.ts:11:export type RuleCategory = "indicator" | "aggregation" | "context";
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:288:src/lib/scientific/types.ts:4: * This module is intentionally isolated from Analysis, Dashboard, PDF,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:307:src/routes/dashboard.tsx:22:import { reviewReport, type ReviewResult, type Suggestion } from "@/lib/ai-review.functions";
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:308:src/routes/dashboard.tsx:28:export const Route = createFileRoute("/dashboard")({
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:309:src/routes/dashboard.tsx:181:function generateReportId(d: Date): string {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:310:src/routes/dashboard.tsx:195:  onExport,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:311:src/routes/dashboard.tsx:196:  onExportText,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:312:src/routes/dashboard.tsx:197:  exporting,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:313:src/routes/dashboard.tsx:198:  exportProgress,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:314:src/routes/dashboard.tsx:199:  reportMeta,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:315:src/routes/dashboard.tsx:206:  onExport: () => void;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:316:src/routes/dashboard.tsx:207:  onExportText: () => void;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:317:src/routes/dashboard.tsx:208:  exporting: boolean;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:318:src/routes/dashboard.tsx:209:  exportProgress: number;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:319:src/routes/dashboard.tsx:210:  reportMeta: { id: string; date: Date };
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:320:src/routes/dashboard.tsx:217:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:321:src/routes/dashboard.tsx:230:      {/* Report Identity */}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:322:src/routes/dashboard.tsx:236:            <div className="text-base font-semibold tracking-tight">{t("reportHeader")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:323:src/routes/dashboard.tsx:247:            <dt className="text-muted-foreground">{t("reportId")}</dt>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:324:src/routes/dashboard.tsx:248:            <dd className="font-mono font-medium">{reportMeta.id}</dd>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:325:src/routes/dashboard.tsx:262:      <div className="mb-3 flex flex-wrap items-center justify-between gap-3" data-export-ignore>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:326:src/routes/dashboard.tsx:267:            disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:327:src/routes/dashboard.tsx:268:            aria-disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:328:src/routes/dashboard.tsx:269:            tabIndex={exporting ? -1 : 0}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:329:src/routes/dashboard.tsx:277:            disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:330:src/routes/dashboard.tsx:278:            aria-disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:331:src/routes/dashboard.tsx:279:            tabIndex={exporting ? -1 : 0}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:332:src/routes/dashboard.tsx:282:            {t("previewReport")}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:333:src/routes/dashboard.tsx:285:            onClick={onExportText}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:334:src/routes/dashboard.tsx:286:            disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:335:src/routes/dashboard.tsx:287:            aria-busy={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:336:src/routes/dashboard.tsx:288:            aria-disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:337:src/routes/dashboard.tsx:289:            tabIndex={exporting ? -1 : 0}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:338:src/routes/dashboard.tsx:292:            {exporting && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:339:src/routes/dashboard.tsx:299:            {exporting ? t("exporting") : t("exportPdfText")}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:340:src/routes/dashboard.tsx:302:            onClick={onExport}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:341:src/routes/dashboard.tsx:303:            disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:342:src/routes/dashboard.tsx:304:            aria-busy={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:343:src/routes/dashboard.tsx:305:            aria-disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:344:src/routes/dashboard.tsx:306:            tabIndex={exporting ? -1 : 0}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:345:src/routes/dashboard.tsx:309:            {exporting && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:346:src/routes/dashboard.tsx:316:            {exporting ? t("exporting") : t("exportPdf")}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:347:src/routes/dashboard.tsx:321:      {exporting && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:348:src/routes/dashboard.tsx:323:          data-export-ignore
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:349:src/routes/dashboard.tsx:327:          aria-valuenow={Math.round(exportProgress)}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:350:src/routes/dashboard.tsx:328:          aria-valuetext={`${Math.round(exportProgress)}%`}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:351:src/routes/dashboard.tsx:329:          aria-label={t("exporting")}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:352:src/routes/dashboard.tsx:334:            <span>{t("exporting")}</span>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:353:src/routes/dashboard.tsx:335:            <span className="tabular-nums font-medium">{Math.round(exportProgress)}%</span>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:354:src/routes/dashboard.tsx:340:              style={{ width: `${Math.max(4, Math.round(exportProgress))}%` }}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:355:src/routes/dashboard.tsx:422:          data-export-ignore
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:356:src/routes/dashboard.tsx:433:        {t("confidentialFooter")} — {reportMeta.id} — {dateStr}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:357:src/routes/dashboard.tsx:439:function ReportPreviewDialog({
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:358:src/routes/dashboard.tsx:444:  reportMeta,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:359:src/routes/dashboard.tsx:445:  exporting,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:360:src/routes/dashboard.tsx:446:  exportProgress,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:361:src/routes/dashboard.tsx:447:  onExport,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:362:src/routes/dashboard.tsx:448:  onExportText,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:363:src/routes/dashboard.tsx:454:  reportMeta: { id: string; date: Date };
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:364:src/routes/dashboard.tsx:455:  exporting: boolean;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:365:src/routes/dashboard.tsx:456:  exportProgress: number;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:366:src/routes/dashboard.tsx:457:  onExport: () => Promise<void>;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:367:src/routes/dashboard.tsx:458:  onExportText: () => Promise<void>;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:368:src/routes/dashboard.tsx:463:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:369:src/routes/dashboard.tsx:485:              <div className="text-sm font-semibold tracking-tight">{t("reportHeader")}</div>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:370:src/routes/dashboard.tsx:499:                <dt className="text-muted-foreground">{t("reportId")}</dt>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:371:src/routes/dashboard.tsx:500:                <dd className="font-mono font-medium">{reportMeta.id}</dd>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:372:src/routes/dashboard.tsx:574:              {t("confidentialFooter")} — {reportMeta.id}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:373:src/routes/dashboard.tsx:580:        {exporting && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:374:src/routes/dashboard.tsx:585:            aria-valuenow={Math.round(exportProgress)}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:375:src/routes/dashboard.tsx:586:            aria-valuetext={`${Math.round(exportProgress)}%`}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:376:src/routes/dashboard.tsx:587:            aria-label={t("exporting")}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:377:src/routes/dashboard.tsx:592:              <span>{t("exporting")}</span>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:378:src/routes/dashboard.tsx:593:              <span className="tabular-nums font-medium">{Math.round(exportProgress)}%</span>
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:379:src/routes/dashboard.tsx:601:                style={{ width: `${Math.max(4, Math.round(exportProgress))}%` }}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:380:src/routes/dashboard.tsx:611:            disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:381:src/routes/dashboard.tsx:612:            aria-disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:382:src/routes/dashboard.tsx:613:            tabIndex={exporting ? -1 : 0}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:383:src/routes/dashboard.tsx:621:              await onExportText();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:384:src/routes/dashboard.tsx:624:            disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:385:src/routes/dashboard.tsx:625:            aria-busy={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:386:src/routes/dashboard.tsx:626:            aria-disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:387:src/routes/dashboard.tsx:627:            tabIndex={exporting ? -1 : 0}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:388:src/routes/dashboard.tsx:630:            {exporting && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:389:src/routes/dashboard.tsx:637:            {exporting ? t("exporting") : t("exportPdfText")}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:390:src/routes/dashboard.tsx:642:              await onExport();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:391:src/routes/dashboard.tsx:645:            disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:392:src/routes/dashboard.tsx:646:            aria-busy={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:393:src/routes/dashboard.tsx:647:            aria-disabled={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:394:src/routes/dashboard.tsx:648:            tabIndex={exporting ? -1 : 0}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:395:src/routes/dashboard.tsx:651:            {exporting && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:396:src/routes/dashboard.tsx:658:            {exporting ? t("exporting") : t("exportPdf")}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:397:src/routes/dashboard.tsx:673:  onExportCorrected,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:398:src/routes/dashboard.tsx:674:  exporting,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:399:src/routes/dashboard.tsx:680:  onExportCorrected: (overrides: Record<string, string>) => Promise<void>;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:400:src/routes/dashboard.tsx:681:  exporting: boolean;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:401:src/routes/dashboard.tsx:685:  const runReview = useServerFn(reviewReport);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:402:src/routes/dashboard.tsx:932:              await onExportCorrected(overrides);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:403:src/routes/dashboard.tsx:934:            disabled={loading || exporting || !result}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:404:src/routes/dashboard.tsx:935:            aria-disabled={loading || exporting || !result}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:405:src/routes/dashboard.tsx:936:            aria-busy={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:406:src/routes/dashboard.tsx:939:            {exporting && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:407:src/routes/dashboard.tsx:946:            {t("aiExportCorrected")}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:408:src/routes/dashboard.tsx:961:  const [exporting, setExporting] = useState(false);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:409:src/routes/dashboard.tsx:962:  const [exportProgress, setExportProgress] = useState(0);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:410:src/routes/dashboard.tsx:963:  const [reportMeta, setReportMeta] = useState<{ id: string; date: Date } | null>(null);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:411:src/routes/dashboard.tsx:975:    setExportProgress(value);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:412:src/routes/dashboard.tsx:980:  const setPdfMetadata = (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:413:src/routes/dashboard.tsx:981:    pdf: {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:414:src/routes/dashboard.tsx:987:    pdf.setProperties({
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:415:src/routes/dashboard.tsx:988:      title: `${t("reportHeader")} — ${meta.id}`,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:416:src/routes/dashboard.tsx:995:      pdf.setLanguage?.(lang as never);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:417:src/routes/dashboard.tsx:1002:    `GSOS-Observer-${status.toUpperCase()}-${fileStamp(meta.date)}${suffix}.pdf`;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:418:src/routes/dashboard.tsx:1004:  const handleExportPdf = async () => {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:419:src/routes/dashboard.tsx:1005:    if (!analysisRef.current || !reportMeta) return;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:420:src/routes/dashboard.tsx:1006:    setExporting(true);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:421:src/routes/dashboard.tsx:1007:    setExportProgress(0);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:422:src/routes/dashboard.tsx:1010:      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:423:src/routes/dashboard.tsx:1012:        import("jspdf"),
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:424:src/routes/dashboard.tsx:1020:      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:425:src/routes/dashboard.tsx:1021:      setPdfMetadata(pdf, reportMeta);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:426:src/routes/dashboard.tsx:1022:      const pageW = pdf.internal.pageSize.getWidth();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:427:src/routes/dashboard.tsx:1023:      const pageH = pdf.internal.pageSize.getHeight();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:428:src/routes/dashboard.tsx:1030:        pdf.addImage(imgData, "PNG", margin, margin, maxW, imgH);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:429:src/routes/dashboard.tsx:1034:          pdf.addImage(imgData, "PNG", margin, margin - position, maxW, imgH);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:430:src/routes/dashboard.tsx:1037:          if (remaining > 0) pdf.addPage();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:431:src/routes/dashboard.tsx:1041:      const pageCount = pdf.getNumberOfPages();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:432:src/routes/dashboard.tsx:1044:        pdf.setPage(p);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:433:src/routes/dashboard.tsx:1045:        pdf.setFont("helvetica", "normal");
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:434:src/routes/dashboard.tsx:1046:        pdf.setFontSize(9);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:435:src/routes/dashboard.tsx:1047:        pdf.setTextColor(140, 140, 140);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:436:src/routes/dashboard.tsx:1050:          pdf.text(pageLabel, margin, pageH - 14);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:437:src/routes/dashboard.tsx:1052:          pdf.text(pageLabel, pageW - margin, pageH - 14, { align: "right" });
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:438:src/routes/dashboard.tsx:1056:      pdf.save(buildFilename(reportMeta));
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:439:src/routes/dashboard.tsx:1059:      setExporting(false);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:440:src/routes/dashboard.tsx:1060:      setExportProgress(0);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:441:src/routes/dashboard.tsx:1064:  const handleExportPdfText = async (overrides?: Record<string, string>) => {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:442:src/routes/dashboard.tsx:1065:    if (!reportMeta) return;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:443:src/routes/dashboard.tsx:1067:    // Arabic needs glyph shaping the standard jsPDF fonts can't do — fall back to image.
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:444:src/routes/dashboard.tsx:1069:      await handleExportPdf();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:445:src/routes/dashboard.tsx:1074:    setExporting(true);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:446:src/routes/dashboard.tsx:1075:    setExportProgress(0);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:447:src/routes/dashboard.tsx:1078:      const { jsPDF } = await import("jspdf");
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:448:src/routes/dashboard.tsx:1080:      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:449:src/routes/dashboard.tsx:1081:      setPdfMetadata(pdf, reportMeta);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:450:src/routes/dashboard.tsx:1082:      const pageW = pdf.internal.pageSize.getWidth();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:451:src/routes/dashboard.tsx:1083:      const pageH = pdf.internal.pageSize.getHeight();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:452:src/routes/dashboard.tsx:1088:      const dateStr = reportMeta.date.toLocaleString(lang === "fr" ? "fr-FR" : "en-US", {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:453:src/routes/dashboard.tsx:1101:          pdf.addPage();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:454:src/routes/dashboard.tsx:1111:        pdf.setFont("helvetica", opts.bold ? "bold" : "normal");
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:455:src/routes/dashboard.tsx:1112:        pdf.setFontSize(size);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:456:src/routes/dashboard.tsx:1114:        pdf.setTextColor(r, g, b);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:457:src/routes/dashboard.tsx:1115:        const lines = pdf.splitTextToSize(text, maxW) as string[];
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:458:src/routes/dashboard.tsx:1118:        pdf.text(lines, margin, y);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:459:src/routes/dashboard.tsx:1124:        pdf.setDrawColor(220, 220, 220);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:460:src/routes/dashboard.tsx:1125:        pdf.line(margin, y, pageW - margin, y);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:461:src/routes/dashboard.tsx:1129:      // === Report Identity ===
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:462:src/routes/dashboard.tsx:1130:      writeWrapped(t("reportHeader"), 20, { bold: true });
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:463:src/routes/dashboard.tsx:1133:      writeWrapped(`${t("reportId")}: ${reportMeta.id}`, 10, { color: [60, 60, 60] });
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:464:src/routes/dashboard.tsx:1185:      const pageCount = pdf.getNumberOfPages();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:465:src/routes/dashboard.tsx:1187:        pdf.setPage(p);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:466:src/routes/dashboard.tsx:1188:        pdf.setFont("helvetica", "normal");
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:467:src/routes/dashboard.tsx:1189:        pdf.setFontSize(9);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:468:src/routes/dashboard.tsx:1190:        pdf.setTextColor(140, 140, 140);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:469:src/routes/dashboard.tsx:1191:        pdf.text(`${t("confidentialFooter")} — ${reportMeta.id}`, margin, pageH - 20);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:470:src/routes/dashboard.tsx:1193:        pdf.text(pageLabel, pageW - margin, pageH - 20, { align: "right" });
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:471:src/routes/dashboard.tsx:1197:      pdf.save(buildFilename(reportMeta, hasOverrides ? "-AI" : ""));
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:472:src/routes/dashboard.tsx:1201:      setExporting(false);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:473:src/routes/dashboard.tsx:1202:      setExportProgress(0);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:474:src/routes/dashboard.tsx:1223:      setReportMeta({ id: generateReportId(d), date: d });
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:475:src/routes/dashboard.tsx:1233:    if (!showAnalysis || !reportMeta) return;
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:476:src/routes/dashboard.tsx:1237:      analysisId: reportMeta.id,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:477:src/routes/dashboard.tsx:1256:        sessionId: reportMeta.id,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:478:src/routes/dashboard.tsx:1257:        analysisId: reportMeta.id,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:479:src/routes/dashboard.tsx:1258:        reportId: reportMeta.id,
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:480:src/routes/dashboard.tsx:1275:    // Only re-run when a new report is produced.
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:481:src/routes/dashboard.tsx:1277:  }, [reportMeta?.id]);
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:482:src/routes/dashboard.tsx:1369:        {showAnalysis && reportMeta && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:483:src/routes/dashboard.tsx:1374:            onExport={handleExportPdf}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:484:src/routes/dashboard.tsx:1375:            onExportText={() => handleExportPdfText()}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:485:src/routes/dashboard.tsx:1376:            exporting={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:486:src/routes/dashboard.tsx:1377:            exportProgress={exportProgress}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:487:src/routes/dashboard.tsx:1378:            reportMeta={reportMeta}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:488:src/routes/dashboard.tsx:1386:        {reportMeta && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:489:src/routes/dashboard.tsx:1387:          <ReportPreviewDialog
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:490:src/routes/dashboard.tsx:1392:            reportMeta={reportMeta}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:491:src/routes/dashboard.tsx:1393:            exporting={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:492:src/routes/dashboard.tsx:1394:            exportProgress={exportProgress}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:493:src/routes/dashboard.tsx:1395:            onExport={async () => {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:494:src/routes/dashboard.tsx:1396:              await handleExportPdf();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:495:src/routes/dashboard.tsx:1398:            onExportText={async () => {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:496:src/routes/dashboard.tsx:1399:              await handleExportPdfText();
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:497:src/routes/dashboard.tsx:1403:        {showAnalysis && reportMeta && (
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:498:src/routes/dashboard.tsx:1408:            exporting={exporting}
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:499:src/routes/dashboard.tsx:1426:            onExportCorrected={async (overrides) => {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:500:src/routes/dashboard.tsx:1427:              await handleExportPdfText(overrides);
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:16:src/components/GsosCard.tsx:5: * GsosCard — single reusable card primitive for the GSOS dashboard.
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:422:src/components/ui/chart.tsx:156:    const nestLabel = payload.length === 1 && indicator !== "dot";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:425:src/components/ui/chart.tsx:180:                    indicator === "dot" && "items-center",
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:459:src/components/ui/checkbox.tsx:19:    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:537:src/routes/dashboard.tsx:216:  const isRTL = lang === "ar";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:538:src/routes/dashboard.tsx:217:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:539:src/routes/dashboard.tsx:228:      dir={isRTL ? "rtl" : "ltr"}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:540:src/routes/dashboard.tsx:232:        className={`mb-4 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:541:src/routes/dashboard.tsx:348:        className={`mb-4 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:542:src/routes/dashboard.tsx:420:      {isRTL && (
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:543:src/routes/dashboard.tsx:425:          {t("arabicTextNotice")}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:544:src/routes/dashboard.tsx:431:        className={`mt-4 rounded-xl border border-border bg-card p-3 shadow-sm text-xs text-muted-foreground ${isRTL ? "text-right" : "text-left"}`}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:545:src/routes/dashboard.tsx:462:  const isRTL = lang === "ar";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:546:src/routes/dashboard.tsx:463:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:547:src/routes/dashboard.tsx:472:      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" dir={isRTL ? "rtl" : "ltr"}>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:548:src/routes/dashboard.tsx:473:        <DialogHeader className={isRTL ? "text-right" : "text-left"}>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:549:src/routes/dashboard.tsx:480:          className={`mt-2 rounded-lg border border-border bg-card shadow-sm ${isRTL ? "text-right" : "text-left"}`}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:550:src/routes/dashboard.tsx:571:            className={`flex flex-wrap items-center justify-between gap-2 border-t border-border px-5 py-2 text-[11px] text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:551:src/routes/dashboard.tsx:684:  const isRTL = lang === "ar";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:552:src/routes/dashboard.tsx:781:      <DialogContent className="max-w-3xl" dir={isRTL ? "rtl" : "ltr"}>
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:553:src/routes/dashboard.tsx:1042:      const isRTL = lang === "ar";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:554:src/routes/dashboard.tsx:1049:        if (isRTL) {
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:555:src/routes/dashboard.tsx:1067:    // Arabic needs glyph shaping the standard jsPDF fonts can't do — fall back to image.
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:569:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:320:src/routes/dashboard.tsx:217:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:570:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:368:src/routes/dashboard.tsx:463:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:571:gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:443:src/routes/dashboard.tsx:1067:    // Arabic needs glyph shaping the standard jsPDF fonts can't do — fall back to image.
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:1:# GSOS Phase 2 — Dashboard Audit
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:6:## Dashboard-related files
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:10:./gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:14:./src/lib/indicators.ts
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:15:./src/lib/knowledge/extractors/indicatorsExtractor.ts
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:16:./src/routes/dashboard.tsx
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:18:## Dashboard references in source
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:20:src/components/GsosCard.tsx:5: * GsosCard — single reusable card primitive for the GSOS dashboard.
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:21:src/components/ui/chart.tsx:100:      hideIndicator?: boolean;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:22:src/components/ui/chart.tsx:101:      indicator?: "line" | "dot" | "dashed";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:23:src/components/ui/chart.tsx:111:      indicator = "dot",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:24:src/components/ui/chart.tsx:113:      hideIndicator = false,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:25:src/components/ui/chart.tsx:156:    const nestLabel = payload.length === 1 && indicator !== "dot";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:26:src/components/ui/chart.tsx:173:              const indicatorColor = color || item.payload.fill || item.color;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:27:src/components/ui/chart.tsx:180:                    indicator === "dot" && "items-center",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:28:src/components/ui/chart.tsx:190:                        !hideIndicator && (
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:29:src/components/ui/chart.tsx:195:                                "h-2.5 w-2.5": indicator === "dot",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:30:src/components/ui/chart.tsx:196:                                "w-1": indicator === "line",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:31:src/components/ui/chart.tsx:198:                                  indicator === "dashed",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:32:src/components/ui/chart.tsx:199:                                "my-0.5": nestLabel && indicator === "dashed",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:33:src/components/ui/chart.tsx:204:                                "--color-bg": indicatorColor,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:34:src/components/ui/chart.tsx:205:                                "--color-border": indicatorColor,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:35:src/components/ui/checkbox.tsx:19:    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:36:src/components/ui/checkbox.tsx:21:    </CheckboxPrimitive.Indicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:37:src/components/ui/context-menu.tsx:104:      <ContextMenuPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:38:src/components/ui/context-menu.tsx:106:      </ContextMenuPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:39:src/components/ui/context-menu.tsx:126:      <ContextMenuPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:40:src/components/ui/context-menu.tsx:128:      </ContextMenuPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:41:src/components/ui/dropdown-menu.tsx:108:      <DropdownMenuPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:42:src/components/ui/dropdown-menu.tsx:110:      </DropdownMenuPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:43:src/components/ui/dropdown-menu.tsx:130:      <DropdownMenuPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:44:src/components/ui/dropdown-menu.tsx:132:      </DropdownMenuPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:45:src/components/ui/menubar.tsx:145:      <MenubarPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:46:src/components/ui/menubar.tsx:147:      </MenubarPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:47:src/components/ui/menubar.tsx:167:      <MenubarPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:48:src/components/ui/menubar.tsx:169:      </MenubarPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:49:src/components/ui/navigation-menu.tsx:93:const NavigationMenuIndicator = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:50:src/components/ui/navigation-menu.tsx:94:  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:51:src/components/ui/navigation-menu.tsx:95:  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:52:src/components/ui/navigation-menu.tsx:97:  <NavigationMenuPrimitive.Indicator
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:53:src/components/ui/navigation-menu.tsx:106:  </NavigationMenuPrimitive.Indicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:54:src/components/ui/navigation-menu.tsx:108:NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:55:src/components/ui/navigation-menu.tsx:118:  NavigationMenuIndicator,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:56:src/components/ui/progress.tsx:17:    <ProgressPrimitive.Indicator
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:57:src/components/ui/radio-group.tsx:28:      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:58:src/components/ui/radio-group.tsx:30:      </RadioGroupPrimitive.Indicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:59:src/components/ui/select.tsx:120:      <SelectPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:60:src/components/ui/select.tsx:122:      </SelectPrimitive.ItemIndicator>
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:61:src/lib/ai-review.functions.ts:33:- Suggest improvements ONLY. Never modify numerical values, dates, IDs, indicator names, or technical metrics.
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:62:src/lib/analysis/__tests__/localStorageRepository.test.ts:10:  overallRiskLevel: "stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:63:src/lib/analysis/__tests__/service.test.ts:12:  overallRiskLevel: "monitor",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:64:src/lib/analysis/localStorageRepository.ts:50:      overallRiskLevel: input.overallRiskLevel,
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:65:src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:66:src/lib/analysis/types.ts:14:  /** UUID v4. Stable business identifier. */
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:67:src/lib/analysis/types.ts:26:  /** Version of the computation/engine that produced the indicators. */
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:68:src/lib/analysis/types.ts:31:  overallRiskLevel: OverallRiskLevel;
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:69:src/lib/i18n.tsx:14:    dashboard: "Dashboard",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:70:src/lib/i18n.tsx:19:    stable: "Stable",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:71:src/lib/i18n.tsx:21:    risk: "Risk",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:72:src/lib/i18n.tsx:26:    refreshed: "Indicators refreshed",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:73:src/lib/i18n.tsx:30:    statusExplanationGreen: "Stable range — within acceptable limits.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:74:src/lib/i18n.tsx:32:    statusExplanationRed: "Critical state — immediate action required.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:75:src/lib/i18n.tsx:33:    globalStatusExplanationStable:
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:76:src/lib/i18n.tsx:34:      "All indicators are in the green range. The system is operating normally.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:77:src/lib/i18n.tsx:36:      "One indicator is in the yellow/red range. Caution and monitoring are advised.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:78:src/lib/i18n.tsx:37:    globalStatusExplanationRisk:
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:79:src/lib/i18n.tsx:38:      "Two or more indicators are in the red range. Immediate response is required.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:80:src/lib/i18n.tsx:46:    indicator: "Indicator",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:81:src/lib/i18n.tsx:54:    overallRiskLevel: "Overall Risk Level",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:82:src/lib/i18n.tsx:55:    criticalIndicators: "Critical Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:83:src/lib/i18n.tsx:56:    stableIndicators: "Stable Indicators",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:84:src/lib/i18n.tsx:58:    recommendedActionStable: "Maintain routine monitoring and periodic reassessment.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:85:src/lib/i18n.tsx:59:    recommendedActionMonitor: "Investigate the elevated indicator and prepare a contingency plan.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:86:src/lib/i18n.tsx:60:    recommendedActionRisk: "Trigger immediate response protocol and escalate to leadership.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:87:src/lib/i18n.tsx:99:    pilotDashboard: "Pilot Dashboard",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:88:src/lib/i18n.tsx:125:    backToDashboard: "Back to dashboard",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:89:src/lib/i18n.tsx:133:    svDashboard: "Scientific Validation",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:90:src/lib/i18n.tsx:180:    svWeaknessNone: "No critical weaknesses detected.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:91:src/lib/i18n.tsx:181:    svRecCalibrate: "Review indicator thresholds against expert consensus.",
gsos/work/completion-2/reports/GSOS_PHASE2_DASHBOARD_AUDIT.md:92:src/lib/i18n.tsx:215:    reNoAnalysis: "No analysis found. Run an analysis on the Dashboard first.",
