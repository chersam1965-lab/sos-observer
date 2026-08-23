# GSOS Phase 2 — Reporting Audit

HEAD=5b044c16d55fcc30158300dd8a28ea8ad9e546c9
BRANCH=gsos-mobile-lab
DATE=2026-08-13 19:00:37+0100

## Reporting-related files

./docs/TEST_REPORT.md
./docs/adr/0002-pdf-export-strategy.md
./gsos/reports/GSOS-AUDIT-REPORT.md
./gsos/reports/GSOS-SECURITY-REPORT.md
./gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md
./src/lib/knowledge/pdf.ts
./src/lib/lovable-error-reporting.ts

## PDF / Export references

src/components/GsosCard.tsx:13:export const GsosCard = React.forwardRef<HTMLDivElement, Props>(
src/components/GsosCard.tsx:33:export function GsosCardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
src/components/GsosCard.tsx:37:export function GsosCardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
src/components/GsosCard.tsx:46:export function GsosCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
src/components/PilotFeedbackForm.tsx:58:export function PilotFeedbackForm({ sessionId }: Props) {
src/components/PilotToggle.tsx:5:export function PilotToggle({ onChange }: { onChange?: (enabled: boolean) => void }) {
src/components/ui/accordion.tsx:51:export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
src/components/ui/alert-dialog.tsx:103:export {
src/components/ui/alert.tsx:49:export { Alert, AlertTitle, AlertDescription };
src/components/ui/aspect-ratio.tsx:5:export { AspectRatio };
src/components/ui/avatar.tsx:47:export { Avatar, AvatarImage, AvatarFallback };
src/components/ui/badge.tsx:25:export interface BadgeProps
src/components/ui/badge.tsx:32:export { Badge, badgeVariants };
src/components/ui/breadcrumb.tsx:93:export {
src/components/ui/button.tsx:34:export interface ButtonProps
src/components/ui/button.tsx:49:export { Button, buttonVariants };
src/components/ui/calendar.tsx:177:export { Calendar, CalendarDayButton };
src/components/ui/card.tsx:55:export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
src/components/ui/carousel.tsx:233:export {
src/components/ui/chart.tsx:9:export type ChartConfig = {
src/components/ui/chart.tsx:324:export {
src/components/ui/checkbox.tsx:26:export { Checkbox };
src/components/ui/collapsible.tsx:11:export { Collapsible, CollapsibleTrigger, CollapsibleContent };
src/components/ui/command.tsx:133:export {
src/components/ui/context-menu.tsx:171:export {
src/components/ui/dialog.tsx:93:export {
src/components/ui/drawer.tsx:87:export {
src/components/ui/dropdown-menu.tsx:172:export {
src/components/ui/form.tsx:162:export {
src/components/ui/hover-card.tsx:27:export { HoverCard, HoverCardTrigger, HoverCardContent };
src/components/ui/input-otp.tsx:69:export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
src/components/ui/input.tsx:22:export { Input };
src/components/ui/label.tsx:21:export { Label };
src/components/ui/menubar.tsx:212:export {
src/components/ui/navigation-menu.tsx:110:export {
src/components/ui/pagination.tsx:90:export {
src/components/ui/popover.tsx:31:export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
src/components/ui/progress.tsx:25:export { Progress };
src/components/ui/radio-group.tsx:36:export { RadioGroup, RadioGroupItem };
src/components/ui/resizable.tsx:37:export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
src/components/ui/scroll-area.tsx:44:export { ScrollArea, ScrollBar };
src/components/ui/select.tsx:141:export {
src/components/ui/separator.tsx:24:export { Separator };
src/components/ui/sheet.tsx:111:export {
src/components/ui/sidebar.tsx:719:export {
src/components/ui/skeleton.tsx:7:export { Skeleton };
src/components/ui/slider.tsx:23:export { Slider };
src/components/ui/sonner.tsx:23:export { Toaster };
src/components/ui/switch.tsx:27:export { Switch };
src/components/ui/table.tsx:94:export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
src/components/ui/tabs.tsx:53:export { Tabs, TabsList, TabsTrigger, TabsContent };
src/components/ui/textarea.tsx:21:export { Textarea };
src/components/ui/toggle-group.tsx:57:export { ToggleGroup, ToggleGroupItem };
src/components/ui/toggle.tsx:42:export { Toggle, toggleVariants };
src/components/ui/tooltip.tsx:32:export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
src/hooks/use-mobile.tsx:5:export function useIsMobile() {
src/lib/ai-review.functions.ts:3:export type ReviewSection = { id: string; label: string; text: string };
src/lib/ai-review.functions.ts:4:export type ReviewInput = { lang: "en" | "fr" | "ar"; sections: ReviewSection[] };
src/lib/ai-review.functions.ts:6:export type Suggestion = {
src/lib/ai-review.functions.ts:15:export type ReviewResult = {
src/lib/ai-review.functions.ts:31:const SYSTEM = `You are a professional editorial proofreader for analytical/audit reports.
src/lib/ai-review.functions.ts:49:export const reviewReport = createServerFn({ method: "POST" })
src/lib/analysis/index.ts:1:export * from "./types";
src/lib/analysis/index.ts:2:export { getAnalysisRepository, setAnalysisRepository } from "./repository";
src/lib/analysis/index.ts:3:export { LocalStorageAnalysisRepository } from "./localStorageRepository";
src/lib/analysis/index.ts:4:export { AnalysisService } from "./service";
src/lib/analysis/index.ts:6:export const ENGINE_VERSION = "1.0.0";
src/lib/analysis/index.ts:7:export const QUESTIONNAIRE_VERSION = "1.0.0";
src/lib/analysis/localStorageRepository.ts:38:export class LocalStorageAnalysisRepository implements AnalysisRepository {
src/lib/analysis/repository.ts:13:export function getAnalysisRepository(): AnalysisRepository {
src/lib/analysis/repository.ts:19:export function setAnalysisRepository(repo: AnalysisRepository): void {
src/lib/analysis/service.ts:9:export const AnalysisService = {
src/lib/analysis/types.ts:10:export type AnalysisStatus = "Draft" | "Completed" | "Archived";
src/lib/analysis/types.ts:11:export type OverallRiskLevel = "stable" | "monitor" | "risk";
src/lib/analysis/types.ts:13:export interface Analysis {
src/lib/analysis/types.ts:42:export type NewAnalysisInput = Omit<
src/lib/analysis/types.ts:50:export interface AnalysisListOptions {
src/lib/analysis/types.ts:63:export interface AnalysisRepository {
src/lib/auth.ts:3:export function isAuthed(): boolean {
src/lib/auth.ts:8:export function signIn(user: string, pass: string): boolean {
src/lib/auth.ts:16:export function signOut() {
src/lib/error-capture.ts:18:export function consumeLastCapturedError(): unknown {
src/lib/error-page.ts:1:export function renderErrorPage(): string {
src/lib/i18n.tsx:3:export type Lang = "en" | "fr" | "ar";
src/lib/i18n.tsx:39:    exportPdf: "Export PDF (image)",
src/lib/i18n.tsx:40:    exportPdfText: "Export PDF (searchable)",
src/lib/i18n.tsx:41:    exporting: "Exporting…",
src/lib/i18n.tsx:42:    reportHeader: "GSOS Analysis Report",
src/lib/i18n.tsx:43:    exportDate: "Export date",
src/lib/i18n.tsx:45:      "Note: searchable Arabic export falls back to the image version for proper glyph shaping.",
src/lib/i18n.tsx:49:    reportId: "Report ID",
src/lib/i18n.tsx:61:    reportIdentity: "Report Identity",
src/lib/i18n.tsx:63:    confidentialFooter: "GSOS Observer V1.0 — International Audit Report",
src/lib/i18n.tsx:65:    previewReport: "Preview report",
src/lib/i18n.tsx:66:    previewTitle: "Report preview",
src/lib/i18n.tsx:67:    previewSubtitle: "Review the report before exporting to PDF.",
src/lib/i18n.tsx:75:    aiNoSuggestions: "No suggestions — the report reads well.",
src/lib/i18n.tsx:81:    aiExportCorrected: "Export corrected PDF",
src/lib/i18n.tsx:103:    pilotQ2: "Was the report useful?",
src/lib/i18n.tsx:121:    pilotExportReport: "Export Pilot Validation Report",
src/lib/i18n.tsx:122:    pilotValidationReport: "Pilot Validation Report",
src/lib/i18n.tsx:139:    svExportReport: "Export Scientific Validation Report",
src/lib/i18n.tsx:140:    svReportTitle: "GSOS Scientific Validation Report",
src/lib/i18n.tsx:202:    kcExportPdf: "Export PDF",
src/lib/i18n.tsx:208:    kcDocEvolution: "Evolution Report",
src/lib/i18n.tsx:260:    exportPdf: "Exporter en PDF (image)",
src/lib/i18n.tsx:261:    exportPdfText: "Exporter PDF (recherche)",
src/lib/i18n.tsx:262:    exporting: "Exportation…",
src/lib/i18n.tsx:263:    reportHeader: "Rapport d'analyse GSOS",
src/lib/i18n.tsx:264:    exportDate: "Date d'exportation",
src/lib/i18n.tsx:266:      "Remarque: l'export arabe recherchable bascule sur la version image pour un rendu correct des glyphes.",
src/lib/i18n.tsx:270:    reportId: "ID du rapport",
src/lib/i18n.tsx:282:    reportIdentity: "Identité du rapport",
src/lib/i18n.tsx:286:    previewReport: "Aperçu du rapport",
src/lib/i18n.tsx:288:    previewSubtitle: "Vérifiez le rapport avant l'exportation en PDF.",
src/lib/i18n.tsx:302:    aiExportCorrected: "Exporter PDF corrigé",
src/lib/i18n.tsx:342:    pilotExportReport: "Exporter le rapport de validation",
src/lib/i18n.tsx:343:    pilotValidationReport: "Rapport de validation pilote",
src/lib/i18n.tsx:360:    svExportReport: "Exporter le rapport de validation scientifique",
src/lib/i18n.tsx:361:    svReportTitle: "Rapport de validation scientifique GSOS",
src/lib/i18n.tsx:423:    kcExportPdf: "Exporter en PDF",
src/lib/i18n.tsx:479:    exportPdf: "تصدير PDF (صورة)",
src/lib/i18n.tsx:480:    exportPdfText: "تصدير PDF (نص قابل للبحث)",
src/lib/i18n.tsx:481:    exporting: "جاري التصدير…",
src/lib/i18n.tsx:482:    reportHeader: "تقرير تحليل GSOS",
src/lib/i18n.tsx:483:    exportDate: "تاريخ التصدير",
src/lib/i18n.tsx:488:    reportId: "معرّف التقرير",
src/lib/i18n.tsx:500:    reportIdentity: "هوية التقرير",
src/lib/i18n.tsx:504:    previewReport: "معاينة التقرير",
src/lib/i18n.tsx:506:    previewSubtitle: "راجع التقرير قبل تصديره إلى PDF.",
src/lib/i18n.tsx:520:    aiExportCorrected: "تصدير PDF المصحح",
src/lib/i18n.tsx:560:    pilotExportReport: "تصدير تقرير التحقق التجريبي",
src/lib/i18n.tsx:561:    pilotValidationReport: "تقرير التحقق التجريبي",
src/lib/i18n.tsx:578:    svExportReport: "تصدير تقرير التحقق العلمي",
src/lib/i18n.tsx:579:    svReportTitle: "تقرير التحقق العلمي لـ GSOS",
src/lib/i18n.tsx:641:    kcExportPdf: "تصدير PDF",
src/lib/i18n.tsx:676:export function LanguageProvider({ children }: { children: ReactNode }) {
src/lib/i18n.tsx:701:export const useI18n = () => useContext(LangContext);
src/lib/i18n.tsx:703:export function LanguageSwitcher() {
src/lib/indicators.ts:3:export type Indicator = {
src/lib/indicators.ts:22:export function colorStateFor(value: number): "green" | "yellow" | "red" {
src/lib/indicators.ts:28:export type GlobalStatus = "stable" | "monitor" | "risk";
src/lib/indicators.ts:30:export function computeGlobalStatus(values: Indicator[]): GlobalStatus {
src/lib/indicators.ts:37:export function useIndicators() {
src/lib/knowledge/defaultSources.ts:25:export function loadDefaultSources(): KnowledgeSources {
src/lib/knowledge/engine.ts:11:export interface ExtractOptions {
src/lib/knowledge/engine.ts:22:export async function runExtraction(opts: ExtractOptions): Promise<KnowledgeVersion> {
src/lib/knowledge/extractors/docsExtractor.ts:16:export function extractDocs(
src/lib/knowledge/extractors/indicatorsExtractor.ts:8:export function extractIndicators(sprintCode: string, extractedAt: string): KnowledgeItem[] {
src/lib/knowledge/extractors/indicatorsExtractor.ts:16:        "Measures divergence between operational reality and reported state. " +
src/lib/knowledge/extractors/pilotExtractor.ts:4:export function extractPilotEvidence(
src/lib/knowledge/extractors/rulesExtractor.ts:4:export function extractRules(sprintCode: string, extractedAt: string): KnowledgeItem[] {
src/lib/knowledge/extractors/scientificExtractor.ts:4:export function extractScientificEvidence(
src/lib/knowledge/generator.ts:30:export function generateDocuments(opts: GenerateOptions): KnowledgeDocument[] {
src/lib/knowledge/generator.ts:171:        title: "GSOS Evolution Report",
src/lib/knowledge/index.ts:1:export * from "./types";
src/lib/knowledge/index.ts:2:export {
src/lib/knowledge/index.ts:6:export { LocalStorageKnowledgeRepository } from "./localStorageRepository";
src/lib/knowledge/index.ts:7:export { KnowledgeService } from "./service";
src/lib/knowledge/index.ts:8:export { runExtraction } from "./engine";
src/lib/knowledge/index.ts:9:export { generateDocuments } from "./generator";
src/lib/knowledge/index.ts:10:export { exportKnowledgeDocumentToPDF } from "./pdf";
src/lib/knowledge/index.ts:11:export { loadDefaultSources } from "./defaultSources";
src/lib/knowledge/localStorageRepository.ts:22:export class LocalStorageKnowledgeRepository implements KnowledgeRepository {
src/lib/knowledge/pdf.ts:4: * Isolated PDF rendering for Knowledge documents.
src/lib/knowledge/pdf.ts:5: * Does NOT import from the dashboard PDF pipeline.
src/lib/knowledge/pdf.ts:7:export async function exportKnowledgeDocumentToPDF(
src/lib/knowledge/pdf.ts:11:  const { jsPDF } = await import("jspdf");
src/lib/knowledge/pdf.ts:12:  const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
src/lib/knowledge/pdf.ts:13:  const pageW = pdf.internal.pageSize.getWidth();
src/lib/knowledge/pdf.ts:14:  const pageH = pdf.internal.pageSize.getHeight();
src/lib/knowledge/pdf.ts:29:    pdf.setFont("helvetica", bold ? "bold" : "normal");
src/lib/knowledge/pdf.ts:30:    pdf.setFontSize(size);
src/lib/knowledge/pdf.ts:31:    pdf.setTextColor(...color);
src/lib/knowledge/pdf.ts:32:    const lines = pdf.splitTextToSize(text, pageW - margin * 2) as string[];
src/lib/knowledge/pdf.ts:34:      pdf.addPage();
src/lib/knowledge/pdf.ts:37:    pdf.text(lines, margin, y);
src/lib/knowledge/pdf.ts:42:    pdf.setDrawColor(220, 220, 220);
src/lib/knowledge/pdf.ts:43:    pdf.line(margin, y, pageW - margin, y);
src/lib/knowledge/pdf.ts:67:  const pageCount = pdf.getNumberOfPages();
src/lib/knowledge/pdf.ts:69:    pdf.setPage(p);
src/lib/knowledge/pdf.ts:70:    pdf.setFont("helvetica", "normal");
src/lib/knowledge/pdf.ts:71:    pdf.setFontSize(9);
src/lib/knowledge/pdf.ts:72:    pdf.setTextColor(140, 140, 140);
src/lib/knowledge/pdf.ts:73:    pdf.text(`GSOS Knowledge — ${doc.title} — ${dateStr}`, margin, pageH - 20);
src/lib/knowledge/pdf.ts:74:    pdf.text(`Page ${p} / ${pageCount}`, pageW - margin, pageH - 20, { align: "right" });
src/lib/knowledge/pdf.ts:82:    opts.fileName ?? `GSOS-${safeTitle}-${doc.version}-${dateOnly}.pdf`;
src/lib/knowledge/pdf.ts:83:  pdf.save(fileName);
src/lib/knowledge/repository.ts:6:export function getKnowledgeRepository(): KnowledgeRepository {
src/lib/knowledge/repository.ts:11:export function setKnowledgeRepository(repo: KnowledgeRepository): void {
src/lib/knowledge/service.ts:5:export interface ExtractInput {
src/lib/knowledge/service.ts:11:export const KnowledgeService = {
src/lib/knowledge/types.ts:11:export type KnowledgeCategory =
src/lib/knowledge/types.ts:21:export interface KnowledgeItem {
src/lib/knowledge/types.ts:31:export type KnowledgeDocumentKind =
src/lib/knowledge/types.ts:39:export interface KnowledgeDocumentSection {
src/lib/knowledge/types.ts:44:export interface KnowledgeDocument {
src/lib/knowledge/types.ts:55:export interface KnowledgeVersion {
src/lib/knowledge/types.ts:65:export interface KnowledgeRepository {
src/lib/knowledge/types.ts:73:export interface KnowledgeSources {
src/lib/lovable-error-reporting.ts:21:export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
src/lib/pilot/__tests__/localStorageRepository.test.ts:7:  reportId: "GSOS-20260703-100000-ABCD",
src/lib/pilot/__tests__/localStorageRepository.test.ts:22:  notes: "clear and useful report",
src/lib/pilot/__tests__/service.test.ts:19:      reportId: "A1",
src/lib/pilot/__tests__/service.test.ts:42:        reportId: `A${i}`,
src/lib/pilot/__tests__/service.test.ts:53:        suggestions: "add trend export",
src/lib/pilot/index.ts:1:export * from "./types";
src/lib/pilot/index.ts:2:export { getPilotRepository, setPilotRepository } from "./repository";
src/lib/pilot/index.ts:3:export { LocalStoragePilotRepository } from "./localStorageRepository";
src/lib/pilot/index.ts:4:export {
src/lib/pilot/localStorageRepository.ts:40:export class LocalStoragePilotRepository implements PilotRepository {
src/lib/pilot/localStorageRepository.ts:45:      reportId: input.reportId,
src/lib/pilot/repository.ts:6:export function getPilotRepository(): PilotRepository {
src/lib/pilot/repository.ts:12:export function setPilotRepository(repo: PilotRepository): void {
src/lib/pilot/service.ts:43:export const PilotService = {
src/lib/pilot/service.ts:93:export const PILOT_MODE_KEY = "gsos.pilot.enabled";
src/lib/pilot/service.ts:95:export function isPilotModeEnabled(): boolean {
src/lib/pilot/service.ts:100:export function setPilotModeEnabled(enabled: boolean): void {
src/lib/pilot/types.ts:12:export interface PilotSession {
src/lib/pilot/types.ts:15:  reportId: string;
src/lib/pilot/types.ts:27:export type NewPilotSessionInput = Omit<PilotSession, "sessionId" | "timestamp"> & {
src/lib/pilot/types.ts:32:export interface PilotFeedback {
src/lib/pilot/types.ts:42:export type NewPilotFeedbackInput = Omit<PilotFeedback, "feedbackId" | "createdAt"> & {
src/lib/pilot/types.ts:47:export interface PilotAggregate {
src/lib/pilot/types.ts:58:export interface PilotRepository {
src/lib/reasoning/engine.ts:15:export function buildPremises(input: ReasoningInput): Premise[] {
src/lib/reasoning/engine.ts:72:export function aggregateConclusion(
src/lib/reasoning/engine.ts:90:    parts.push(`Reported overall level '${input.overallRiskLevel}' contributed ${overallBoost}.`);
src/lib/reasoning/engine.ts:102:export function reason(
src/lib/reasoning/explain.ts:3:export interface ExplanationStep {
src/lib/reasoning/explain.ts:14:export function explain(trace: ReasoningTrace): ExplanationStep[] {
src/lib/reasoning/index.ts:1:export * from "./types";
src/lib/reasoning/index.ts:2:export { reason, buildPremises, aggregateConclusion } from "./engine";
src/lib/reasoning/index.ts:3:export { explain, type ExplanationStep } from "./explain";
src/lib/reasoning/index.ts:4:export { getRules, registerRule } from "./rules";
src/lib/reasoning/index.ts:5:export {
src/lib/reasoning/index.ts:9:export { LocalStorageReasoningRepository } from "./localStorageRepository";
src/lib/reasoning/index.ts:10:export { ReasoningService } from "./service";
src/lib/reasoning/localStorageRepository.ts:22:export class LocalStorageReasoningRepository implements ReasoningRepository {
src/lib/reasoning/repository.ts:6:export function getReasoningRepository(): ReasoningRepository {
src/lib/reasoning/repository.ts:11:export function setReasoningRepository(repo: ReasoningRepository): void {
src/lib/reasoning/rules/baseRules.ts:27:export const BASE_RULES: Rule[] = [
src/lib/reasoning/rules/baseRules.ts:132:        "Reported overall risk level is 'risk' — escalation and immediate response protocol apply.",
src/lib/reasoning/rules/index.ts:6:export function getRules(): readonly Rule[] {
src/lib/reasoning/rules/index.ts:10:export function registerRule(rule: Rule): void {
src/lib/reasoning/rules/index.ts:18:export function __resetRulesForTests(): void {
src/lib/reasoning/service.ts:5:export interface RunReasoningInput {
src/lib/reasoning/service.ts:17:export const ReasoningService = {
src/lib/reasoning/types.ts:9:export type ReasoningStatus = "stable" | "monitor" | "risk";
src/lib/reasoning/types.ts:10:export type PremiseKind = "indicator" | "context" | "fact";
src/lib/reasoning/types.ts:11:export type RuleCategory = "indicator" | "aggregation" | "context";
src/lib/reasoning/types.ts:13:export interface Premise {
src/lib/reasoning/types.ts:21:export interface Inference {
src/lib/reasoning/types.ts:29:export interface Rule {
src/lib/reasoning/types.ts:40:export interface FiredRule {
src/lib/reasoning/types.ts:47:export interface ReasoningConclusion {
src/lib/reasoning/types.ts:54:export interface ReasoningInput {
src/lib/reasoning/types.ts:67:export interface ReasoningTrace {
src/lib/reasoning/types.ts:79:export interface ReasoningRepository {
src/lib/scientific/index.ts:1:export * from "./types";
src/lib/scientific/index.ts:2:export { computeMatch } from "./match";
src/lib/scientific/index.ts:3:export {
src/lib/scientific/index.ts:7:export { LocalStorageScientificRepository } from "./localStorageRepository";
src/lib/scientific/index.ts:8:export { ScientificService } from "./service";
src/lib/scientific/localStorageRepository.ts:36:export class LocalStorageScientificRepository implements ScientificRepository {
src/lib/scientific/match.ts:14:export function computeMatch(
src/lib/scientific/repository.ts:6:export function getScientificRepository(): ScientificRepository {
src/lib/scientific/repository.ts:11:export function setScientificRepository(repo: ScientificRepository): void {
src/lib/scientific/service.ts:17:export const ScientificService = {
src/lib/scientific/types.ts:4: * This module is intentionally isolated from Analysis, Dashboard, PDF,
src/lib/scientific/types.ts:12:export type MatchFlag = "match" | "partial" | "mismatch";
src/lib/scientific/types.ts:14:export interface GsosResultSnapshot {
src/lib/scientific/types.ts:22:export interface GroundTruth {
src/lib/scientific/types.ts:27:export interface Experiment {
src/lib/scientific/types.ts:42:export type NewExperimentInput = Omit<
src/lib/scientific/types.ts:50:export interface ScientificAggregate {
src/lib/scientific/types.ts:62:export interface ScientificRepository {
src/lib/utils.ts:4:export function cn(...inputs: ClassValue[]) {
src/routeTree.gen.ts:56:export interface FileRoutesByFullPath {
src/routeTree.gen.ts:65:export interface FileRoutesByTo {
src/routeTree.gen.ts:74:export interface FileRoutesById {
src/routeTree.gen.ts:84:export interface FileRouteTypes {
src/routeTree.gen.ts:114:export interface RootRouteChildren {
src/routeTree.gen.ts:187:export const routeTree = rootRouteImport
src/router.tsx:5:export const getRouter = () => {
src/routes/__root.tsx:13:import { reportLovableError } from "../lib/lovable-error-reporting";
src/routes/__root.tsx:42:    reportLovableError(error, { boundary: "tanstack_root_error_component" });
src/routes/__root.tsx:76:export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
src/routes/dashboard.tsx:22:import { reviewReport, type ReviewResult, type Suggestion } from "@/lib/ai-review.functions";
src/routes/dashboard.tsx:28:export const Route = createFileRoute("/dashboard")({
src/routes/dashboard.tsx:181:function generateReportId(d: Date): string {
src/routes/dashboard.tsx:195:  onExport,
src/routes/dashboard.tsx:196:  onExportText,
src/routes/dashboard.tsx:197:  exporting,
src/routes/dashboard.tsx:198:  exportProgress,
src/routes/dashboard.tsx:199:  reportMeta,
src/routes/dashboard.tsx:206:  onExport: () => void;
src/routes/dashboard.tsx:207:  onExportText: () => void;
src/routes/dashboard.tsx:208:  exporting: boolean;
src/routes/dashboard.tsx:209:  exportProgress: number;
src/routes/dashboard.tsx:210:  reportMeta: { id: string; date: Date };
src/routes/dashboard.tsx:217:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
src/routes/dashboard.tsx:230:      {/* Report Identity */}
src/routes/dashboard.tsx:236:            <div className="text-base font-semibold tracking-tight">{t("reportHeader")}</div>
src/routes/dashboard.tsx:247:            <dt className="text-muted-foreground">{t("reportId")}</dt>
src/routes/dashboard.tsx:248:            <dd className="font-mono font-medium">{reportMeta.id}</dd>
src/routes/dashboard.tsx:262:      <div className="mb-3 flex flex-wrap items-center justify-between gap-3" data-export-ignore>
src/routes/dashboard.tsx:267:            disabled={exporting}
src/routes/dashboard.tsx:268:            aria-disabled={exporting}
src/routes/dashboard.tsx:269:            tabIndex={exporting ? -1 : 0}
src/routes/dashboard.tsx:277:            disabled={exporting}
src/routes/dashboard.tsx:278:            aria-disabled={exporting}
src/routes/dashboard.tsx:279:            tabIndex={exporting ? -1 : 0}
src/routes/dashboard.tsx:282:            {t("previewReport")}
src/routes/dashboard.tsx:285:            onClick={onExportText}
src/routes/dashboard.tsx:286:            disabled={exporting}
src/routes/dashboard.tsx:287:            aria-busy={exporting}
src/routes/dashboard.tsx:288:            aria-disabled={exporting}
src/routes/dashboard.tsx:289:            tabIndex={exporting ? -1 : 0}
src/routes/dashboard.tsx:292:            {exporting && (
src/routes/dashboard.tsx:299:            {exporting ? t("exporting") : t("exportPdfText")}
src/routes/dashboard.tsx:302:            onClick={onExport}
src/routes/dashboard.tsx:303:            disabled={exporting}
src/routes/dashboard.tsx:304:            aria-busy={exporting}
src/routes/dashboard.tsx:305:            aria-disabled={exporting}
src/routes/dashboard.tsx:306:            tabIndex={exporting ? -1 : 0}
src/routes/dashboard.tsx:309:            {exporting && (
src/routes/dashboard.tsx:316:            {exporting ? t("exporting") : t("exportPdf")}
src/routes/dashboard.tsx:321:      {exporting && (
src/routes/dashboard.tsx:323:          data-export-ignore
src/routes/dashboard.tsx:327:          aria-valuenow={Math.round(exportProgress)}
src/routes/dashboard.tsx:328:          aria-valuetext={`${Math.round(exportProgress)}%`}
src/routes/dashboard.tsx:329:          aria-label={t("exporting")}
src/routes/dashboard.tsx:334:            <span>{t("exporting")}</span>
src/routes/dashboard.tsx:335:            <span className="tabular-nums font-medium">{Math.round(exportProgress)}%</span>
src/routes/dashboard.tsx:340:              style={{ width: `${Math.max(4, Math.round(exportProgress))}%` }}
src/routes/dashboard.tsx:422:          data-export-ignore
src/routes/dashboard.tsx:433:        {t("confidentialFooter")} — {reportMeta.id} — {dateStr}
src/routes/dashboard.tsx:439:function ReportPreviewDialog({
src/routes/dashboard.tsx:444:  reportMeta,
src/routes/dashboard.tsx:445:  exporting,
src/routes/dashboard.tsx:446:  exportProgress,
src/routes/dashboard.tsx:447:  onExport,
src/routes/dashboard.tsx:448:  onExportText,
src/routes/dashboard.tsx:454:  reportMeta: { id: string; date: Date };
src/routes/dashboard.tsx:455:  exporting: boolean;
src/routes/dashboard.tsx:456:  exportProgress: number;
src/routes/dashboard.tsx:457:  onExport: () => Promise<void>;
src/routes/dashboard.tsx:458:  onExportText: () => Promise<void>;
src/routes/dashboard.tsx:463:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
src/routes/dashboard.tsx:485:              <div className="text-sm font-semibold tracking-tight">{t("reportHeader")}</div>
src/routes/dashboard.tsx:499:                <dt className="text-muted-foreground">{t("reportId")}</dt>
src/routes/dashboard.tsx:500:                <dd className="font-mono font-medium">{reportMeta.id}</dd>
src/routes/dashboard.tsx:574:              {t("confidentialFooter")} — {reportMeta.id}
src/routes/dashboard.tsx:580:        {exporting && (
src/routes/dashboard.tsx:585:            aria-valuenow={Math.round(exportProgress)}
src/routes/dashboard.tsx:586:            aria-valuetext={`${Math.round(exportProgress)}%`}
src/routes/dashboard.tsx:587:            aria-label={t("exporting")}
src/routes/dashboard.tsx:592:              <span>{t("exporting")}</span>
src/routes/dashboard.tsx:593:              <span className="tabular-nums font-medium">{Math.round(exportProgress)}%</span>
src/routes/dashboard.tsx:601:                style={{ width: `${Math.max(4, Math.round(exportProgress))}%` }}
src/routes/dashboard.tsx:611:            disabled={exporting}
src/routes/dashboard.tsx:612:            aria-disabled={exporting}
src/routes/dashboard.tsx:613:            tabIndex={exporting ? -1 : 0}
src/routes/dashboard.tsx:621:              await onExportText();
src/routes/dashboard.tsx:624:            disabled={exporting}
src/routes/dashboard.tsx:625:            aria-busy={exporting}
src/routes/dashboard.tsx:626:            aria-disabled={exporting}
src/routes/dashboard.tsx:627:            tabIndex={exporting ? -1 : 0}
src/routes/dashboard.tsx:630:            {exporting && (
src/routes/dashboard.tsx:637:            {exporting ? t("exporting") : t("exportPdfText")}
src/routes/dashboard.tsx:642:              await onExport();
src/routes/dashboard.tsx:645:            disabled={exporting}
src/routes/dashboard.tsx:646:            aria-busy={exporting}
src/routes/dashboard.tsx:647:            aria-disabled={exporting}
src/routes/dashboard.tsx:648:            tabIndex={exporting ? -1 : 0}
src/routes/dashboard.tsx:651:            {exporting && (
src/routes/dashboard.tsx:658:            {exporting ? t("exporting") : t("exportPdf")}
src/routes/dashboard.tsx:673:  onExportCorrected,
src/routes/dashboard.tsx:674:  exporting,
src/routes/dashboard.tsx:680:  onExportCorrected: (overrides: Record<string, string>) => Promise<void>;
src/routes/dashboard.tsx:681:  exporting: boolean;
src/routes/dashboard.tsx:685:  const runReview = useServerFn(reviewReport);
src/routes/dashboard.tsx:932:              await onExportCorrected(overrides);
src/routes/dashboard.tsx:934:            disabled={loading || exporting || !result}
src/routes/dashboard.tsx:935:            aria-disabled={loading || exporting || !result}
src/routes/dashboard.tsx:936:            aria-busy={exporting}
src/routes/dashboard.tsx:939:            {exporting && (
src/routes/dashboard.tsx:946:            {t("aiExportCorrected")}
src/routes/dashboard.tsx:961:  const [exporting, setExporting] = useState(false);
src/routes/dashboard.tsx:962:  const [exportProgress, setExportProgress] = useState(0);
src/routes/dashboard.tsx:963:  const [reportMeta, setReportMeta] = useState<{ id: string; date: Date } | null>(null);
src/routes/dashboard.tsx:975:    setExportProgress(value);
src/routes/dashboard.tsx:980:  const setPdfMetadata = (
src/routes/dashboard.tsx:981:    pdf: {
src/routes/dashboard.tsx:987:    pdf.setProperties({
src/routes/dashboard.tsx:988:      title: `${t("reportHeader")} — ${meta.id}`,
src/routes/dashboard.tsx:995:      pdf.setLanguage?.(lang as never);
src/routes/dashboard.tsx:1002:    `GSOS-Observer-${status.toUpperCase()}-${fileStamp(meta.date)}${suffix}.pdf`;
src/routes/dashboard.tsx:1004:  const handleExportPdf = async () => {
src/routes/dashboard.tsx:1005:    if (!analysisRef.current || !reportMeta) return;
src/routes/dashboard.tsx:1006:    setExporting(true);
src/routes/dashboard.tsx:1007:    setExportProgress(0);
src/routes/dashboard.tsx:1010:      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
src/routes/dashboard.tsx:1012:        import("jspdf"),
src/routes/dashboard.tsx:1020:      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
src/routes/dashboard.tsx:1021:      setPdfMetadata(pdf, reportMeta);
src/routes/dashboard.tsx:1022:      const pageW = pdf.internal.pageSize.getWidth();
src/routes/dashboard.tsx:1023:      const pageH = pdf.internal.pageSize.getHeight();
src/routes/dashboard.tsx:1030:        pdf.addImage(imgData, "PNG", margin, margin, maxW, imgH);
src/routes/dashboard.tsx:1034:          pdf.addImage(imgData, "PNG", margin, margin - position, maxW, imgH);
src/routes/dashboard.tsx:1037:          if (remaining > 0) pdf.addPage();
src/routes/dashboard.tsx:1041:      const pageCount = pdf.getNumberOfPages();
src/routes/dashboard.tsx:1044:        pdf.setPage(p);
src/routes/dashboard.tsx:1045:        pdf.setFont("helvetica", "normal");
src/routes/dashboard.tsx:1046:        pdf.setFontSize(9);
src/routes/dashboard.tsx:1047:        pdf.setTextColor(140, 140, 140);
src/routes/dashboard.tsx:1050:          pdf.text(pageLabel, margin, pageH - 14);
src/routes/dashboard.tsx:1052:          pdf.text(pageLabel, pageW - margin, pageH - 14, { align: "right" });
src/routes/dashboard.tsx:1056:      pdf.save(buildFilename(reportMeta));
src/routes/dashboard.tsx:1059:      setExporting(false);
src/routes/dashboard.tsx:1060:      setExportProgress(0);
src/routes/dashboard.tsx:1064:  const handleExportPdfText = async (overrides?: Record<string, string>) => {
src/routes/dashboard.tsx:1065:    if (!reportMeta) return;
src/routes/dashboard.tsx:1067:    // Arabic needs glyph shaping the standard jsPDF fonts can't do — fall back to image.
src/routes/dashboard.tsx:1069:      await handleExportPdf();
src/routes/dashboard.tsx:1074:    setExporting(true);
src/routes/dashboard.tsx:1075:    setExportProgress(0);
src/routes/dashboard.tsx:1078:      const { jsPDF } = await import("jspdf");
src/routes/dashboard.tsx:1080:      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
src/routes/dashboard.tsx:1081:      setPdfMetadata(pdf, reportMeta);
src/routes/dashboard.tsx:1082:      const pageW = pdf.internal.pageSize.getWidth();
src/routes/dashboard.tsx:1083:      const pageH = pdf.internal.pageSize.getHeight();
src/routes/dashboard.tsx:1088:      const dateStr = reportMeta.date.toLocaleString(lang === "fr" ? "fr-FR" : "en-US", {
src/routes/dashboard.tsx:1101:          pdf.addPage();
src/routes/dashboard.tsx:1111:        pdf.setFont("helvetica", opts.bold ? "bold" : "normal");
src/routes/dashboard.tsx:1112:        pdf.setFontSize(size);
src/routes/dashboard.tsx:1114:        pdf.setTextColor(r, g, b);
src/routes/dashboard.tsx:1115:        const lines = pdf.splitTextToSize(text, maxW) as string[];
src/routes/dashboard.tsx:1118:        pdf.text(lines, margin, y);
src/routes/dashboard.tsx:1124:        pdf.setDrawColor(220, 220, 220);
src/routes/dashboard.tsx:1125:        pdf.line(margin, y, pageW - margin, y);
src/routes/dashboard.tsx:1129:      // === Report Identity ===
src/routes/dashboard.tsx:1130:      writeWrapped(t("reportHeader"), 20, { bold: true });
src/routes/dashboard.tsx:1133:      writeWrapped(`${t("reportId")}: ${reportMeta.id}`, 10, { color: [60, 60, 60] });
src/routes/dashboard.tsx:1185:      const pageCount = pdf.getNumberOfPages();
src/routes/dashboard.tsx:1187:        pdf.setPage(p);
src/routes/dashboard.tsx:1188:        pdf.setFont("helvetica", "normal");
src/routes/dashboard.tsx:1189:        pdf.setFontSize(9);
src/routes/dashboard.tsx:1190:        pdf.setTextColor(140, 140, 140);
src/routes/dashboard.tsx:1191:        pdf.text(`${t("confidentialFooter")} — ${reportMeta.id}`, margin, pageH - 20);
src/routes/dashboard.tsx:1193:        pdf.text(pageLabel, pageW - margin, pageH - 20, { align: "right" });
src/routes/dashboard.tsx:1197:      pdf.save(buildFilename(reportMeta, hasOverrides ? "-AI" : ""));
src/routes/dashboard.tsx:1201:      setExporting(false);
src/routes/dashboard.tsx:1202:      setExportProgress(0);
src/routes/dashboard.tsx:1223:      setReportMeta({ id: generateReportId(d), date: d });
src/routes/dashboard.tsx:1233:    if (!showAnalysis || !reportMeta) return;
src/routes/dashboard.tsx:1237:      analysisId: reportMeta.id,
src/routes/dashboard.tsx:1256:        sessionId: reportMeta.id,
src/routes/dashboard.tsx:1257:        analysisId: reportMeta.id,
src/routes/dashboard.tsx:1258:        reportId: reportMeta.id,
src/routes/dashboard.tsx:1275:    // Only re-run when a new report is produced.
src/routes/dashboard.tsx:1277:  }, [reportMeta?.id]);
src/routes/dashboard.tsx:1369:        {showAnalysis && reportMeta && (
src/routes/dashboard.tsx:1374:            onExport={handleExportPdf}
src/routes/dashboard.tsx:1375:            onExportText={() => handleExportPdfText()}
src/routes/dashboard.tsx:1376:            exporting={exporting}
src/routes/dashboard.tsx:1377:            exportProgress={exportProgress}
src/routes/dashboard.tsx:1378:            reportMeta={reportMeta}
src/routes/dashboard.tsx:1386:        {reportMeta && (
src/routes/dashboard.tsx:1387:          <ReportPreviewDialog
src/routes/dashboard.tsx:1392:            reportMeta={reportMeta}
src/routes/dashboard.tsx:1393:            exporting={exporting}
src/routes/dashboard.tsx:1394:            exportProgress={exportProgress}
src/routes/dashboard.tsx:1395:            onExport={async () => {
src/routes/dashboard.tsx:1396:              await handleExportPdf();
src/routes/dashboard.tsx:1398:            onExportText={async () => {
src/routes/dashboard.tsx:1399:              await handleExportPdfText();
src/routes/dashboard.tsx:1403:        {showAnalysis && reportMeta && (
src/routes/dashboard.tsx:1408:            exporting={exporting}
src/routes/dashboard.tsx:1426:            onExportCorrected={async (overrides) => {
src/routes/dashboard.tsx:1427:              await handleExportPdfText(overrides);
src/routes/index.tsx:4:export const Route = createFileRoute("/")({
src/routes/knowledge.tsx:6:  exportKnowledgeDocumentToPDF,
src/routes/knowledge.tsx:14:export const Route = createFileRoute("/knowledge")({
src/routes/knowledge.tsx:93:  const handleExportPdf = async () => {
src/routes/knowledge.tsx:95:    await exportKnowledgeDocumentToPDF(activeDocument);
src/routes/knowledge.tsx:271:                            onClick={handleExportPdf}
src/routes/knowledge.tsx:274:                            {t("kcExportPdf")}
src/routes/login.tsx:6:export const Route = createFileRoute("/login")({
src/routes/pilot.tsx:15:export const Route = createFileRoute("/pilot")({
src/routes/pilot.tsx:55:  const [exporting, setExporting] = useState(false);
src/routes/pilot.tsx:82:  const handleExport = async () => {
src/routes/pilot.tsx:84:    setExporting(true);
src/routes/pilot.tsx:86:      const { jsPDF } = await import("jspdf");
src/routes/pilot.tsx:87:      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
src/routes/pilot.tsx:88:      const pageW = pdf.internal.pageSize.getWidth();
src/routes/pilot.tsx:89:      const pageH = pdf.internal.pageSize.getHeight();
src/routes/pilot.tsx:98:        pdf.setFont("helvetica", bold ? "bold" : "normal");
src/routes/pilot.tsx:99:        pdf.setFontSize(size);
