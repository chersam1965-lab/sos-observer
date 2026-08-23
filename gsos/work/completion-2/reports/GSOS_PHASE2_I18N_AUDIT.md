# GSOS Phase 2 — Internationalization Audit

HEAD=5b044c16d55fcc30158300dd8a28ea8ad9e546c9
BRANCH=gsos-mobile-lab
DATE=2026-08-13 19:00:38+0100

## Locale / Translation files

./gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md
./src/lib/i18n.tsx

## Language references

src/components/GsosCard.tsx:1:import * as React from "react";
src/components/GsosCard.tsx:2:import { cn } from "@/lib/utils";
src/components/GsosCard.tsx:5: * GsosCard — single reusable card primitive for the GSOS dashboard.
src/components/GsosCard.tsx:6: * Standardizes radius, padding, border, shadow, hover animation, and focus.
src/components/GsosCard.tsx:8:type Props = React.HTMLAttributes<HTMLDivElement> & {
src/components/GsosCard.tsx:9:  as?: "div" | "section" | "article";
src/components/GsosCard.tsx:13:export const GsosCard = React.forwardRef<HTMLDivElement, Props>(
src/components/GsosCard.tsx:17:        ref={ref as React.Ref<HTMLDivElement>}
src/components/GsosCard.tsx:19:          "flex h-full flex-col border border-border bg-card text-card-foreground",
src/components/GsosCard.tsx:20:          "rounded-[var(--gsos-radius-card)] p-[var(--gsos-pad-card)]",
src/components/GsosCard.tsx:21:          "shadow-[var(--gsos-shadow-card)] transition-all duration-200 ease-out",
src/components/GsosCard.tsx:23:            "hover:-translate-y-0.5 hover:shadow-[var(--gsos-shadow-card-hover)] focus-within:-translate-y-0.5",
src/components/GsosCard.tsx:31:GsosCard.displayName = "GsosCard";
src/components/GsosCard.tsx:33:export function GsosCardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
src/components/GsosCard.tsx:34:  return <div className={cn("flex items-start justify-between gap-3", className)} {...props} />;
src/components/GsosCard.tsx:37:export function GsosCardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
src/components/GsosCard.tsx:46:export function GsosCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
src/components/PilotFeedbackForm.tsx:1:import { useEffect, useState } from "react";
src/components/PilotFeedbackForm.tsx:2:import { useI18n } from "@/lib/i18n";
src/components/PilotFeedbackForm.tsx:3:import { PilotService } from "@/lib/pilot";
src/components/PilotFeedbackForm.tsx:9:function Stars({
src/components/PilotFeedbackForm.tsx:24:      <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
src/components/PilotFeedbackForm.tsx:30:        aria-label={label}
src/components/PilotFeedbackForm.tsx:31:        className="inline-flex items-center gap-1"
src/components/PilotFeedbackForm.tsx:40:              aria-checked={value === n}
src/components/PilotFeedbackForm.tsx:41:              aria-label={`${label}: ${n} / 5`}
src/components/PilotFeedbackForm.tsx:45:                  ? "border-primary bg-primary text-primary-foreground"
src/components/PilotFeedbackForm.tsx:46:                  : "border-input bg-background text-muted-foreground hover:bg-secondary"
src/components/PilotFeedbackForm.tsx:59:  const { t, lang } = useI18n();
src/components/PilotFeedbackForm.tsx:60:  const isRTL = lang === "ar";
src/components/PilotFeedbackForm.tsx:75:    PilotService.getFeedbackForSession(sessionId).then((f) => {
src/components/PilotFeedbackForm.tsx:90:  const handleSubmit = async (e: React.FormEvent) => {
src/components/PilotFeedbackForm.tsx:91:    e.preventDefault();
src/components/PilotFeedbackForm.tsx:112:      className={`mt-6 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}
src/components/PilotFeedbackForm.tsx:113:      dir={isRTL ? "rtl" : "ltr"}
src/components/PilotFeedbackForm.tsx:114:      aria-label={t("pilotFeedbackTitle")}
src/components/PilotFeedbackForm.tsx:116:      <div className="flex flex-wrap items-start justify-between gap-2">
src/components/PilotFeedbackForm.tsx:122:          <span className="rounded-full bg-[color:var(--status-green-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[color:var(--status-green)]">
src/components/PilotFeedbackForm.tsx:131:          <Stars
src/components/PilotFeedbackForm.tsx:141:          <Stars
src/components/PilotFeedbackForm.tsx:153:          <textarea
src/components/PilotFeedbackForm.tsx:156:            onChange={(e) => setNotes(e.target.value)}
src/components/PilotFeedbackForm.tsx:157:            maxLength={1000}
src/components/PilotFeedbackForm.tsx:159:            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
src/components/PilotFeedbackForm.tsx:166:          <textarea
src/components/PilotFeedbackForm.tsx:169:            onChange={(e) => setSuggestions(e.target.value)}
src/components/PilotFeedbackForm.tsx:170:            maxLength={1000}
src/components/PilotFeedbackForm.tsx:172:            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
src/components/PilotFeedbackForm.tsx:175:        <div className="flex items-center justify-end">
src/components/PilotFeedbackForm.tsx:179:            aria-disabled={!canSubmit}
src/components/PilotFeedbackForm.tsx:180:            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
src/components/PilotToggle.tsx:1:import { useEffect, useState } from "react";
src/components/PilotToggle.tsx:2:import { useI18n } from "@/lib/i18n";
src/components/PilotToggle.tsx:3:import { isPilotModeEnabled, setPilotModeEnabled } from "@/lib/pilot";
src/components/PilotToggle.tsx:5:export function PilotToggle({ onChange }: { onChange?: (enabled: boolean) => void }) {
src/components/PilotToggle.tsx:6:  const { t } = useI18n();
src/components/PilotToggle.tsx:10:    setOn(isPilotModeEnabled());
src/components/PilotToggle.tsx:15:    setPilotModeEnabled(next);
src/components/PilotToggle.tsx:24:      aria-checked={on}
src/components/PilotToggle.tsx:25:      aria-label={t("pilotMode")}
src/components/PilotToggle.tsx:28:      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${
src/components/PilotToggle.tsx:30:          ? "border-primary bg-primary/10 text-primary"
src/components/PilotToggle.tsx:31:          : "border-input bg-background text-muted-foreground hover:bg-secondary"
src/components/PilotToggle.tsx:35:        className={`inline-block h-2 w-2 rounded-full ${on ? "bg-primary" : "bg-muted-foreground/50"}`}
src/components/PilotToggle.tsx:36:        aria-hidden="true"
src/components/ui/accordion.tsx:1:import * as React from "react";
src/components/ui/accordion.tsx:2:import * as AccordionPrimitive from "@radix-ui/react-accordion";
src/components/ui/accordion.tsx:3:import { ChevronDown } from "lucide-react";
src/components/ui/accordion.tsx:5:import { cn } from "@/lib/utils";
src/components/ui/accordion.tsx:9:const AccordionItem = React.forwardRef<
src/components/ui/accordion.tsx:10:  React.ElementRef<typeof AccordionPrimitive.Item>,
src/components/ui/accordion.tsx:11:  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
src/components/ui/accordion.tsx:17:const AccordionTrigger = React.forwardRef<
src/components/ui/accordion.tsx:18:  React.ElementRef<typeof AccordionPrimitive.Trigger>,
src/components/ui/accordion.tsx:19:  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
src/components/ui/accordion.tsx:20:>(({ className, children, ...props }, ref) => (
src/components/ui/accordion.tsx:25:        "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
src/components/ui/accordion.tsx:30:      {children}
src/components/ui/accordion.tsx:37:const AccordionContent = React.forwardRef<
src/components/ui/accordion.tsx:38:  React.ElementRef<typeof AccordionPrimitive.Content>,
src/components/ui/accordion.tsx:39:  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
src/components/ui/accordion.tsx:40:>(({ className, children, ...props }, ref) => (
src/components/ui/accordion.tsx:41:  <AccordionPrimitive.Content
src/components/ui/accordion.tsx:43:    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
src/components/ui/accordion.tsx:46:    <div className={cn("pb-4 pt-0", className)}>{children}</div>
src/components/ui/accordion.tsx:47:  </AccordionPrimitive.Content>
src/components/ui/accordion.tsx:49:AccordionContent.displayName = AccordionPrimitive.Content.displayName;
src/components/ui/accordion.tsx:51:export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
src/components/ui/alert-dialog.tsx:1:import * as React from "react";
src/components/ui/alert-dialog.tsx:2:import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
src/components/ui/alert-dialog.tsx:4:import { cn } from "@/lib/utils";
src/components/ui/alert-dialog.tsx:5:import { buttonVariants } from "@/components/ui/button";
src/components/ui/alert-dialog.tsx:13:const AlertDialogOverlay = React.forwardRef<
src/components/ui/alert-dialog.tsx:14:  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
src/components/ui/alert-dialog.tsx:15:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
src/components/ui/alert-dialog.tsx:19:      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
src/components/ui/alert-dialog.tsx:28:const AlertDialogContent = React.forwardRef<
src/components/ui/alert-dialog.tsx:29:  React.ElementRef<typeof AlertDialogPrimitive.Content>,
src/components/ui/alert-dialog.tsx:30:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
src/components/ui/alert-dialog.tsx:34:    <AlertDialogPrimitive.Content
src/components/ui/alert-dialog.tsx:37:        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
src/components/ui/alert-dialog.tsx:44:AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
src/components/ui/alert-dialog.tsx:46:const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
src/components/ui/alert-dialog.tsx:47:  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
src/components/ui/alert-dialog.tsx:51:const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
src/components/ui/alert-dialog.tsx:53:    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
src/components/ui/alert-dialog.tsx:59:const AlertDialogTitle = React.forwardRef<
src/components/ui/alert-dialog.tsx:60:  React.ElementRef<typeof AlertDialogPrimitive.Title>,
src/components/ui/alert-dialog.tsx:61:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
src/components/ui/alert-dialog.tsx:71:const AlertDialogDescription = React.forwardRef<
src/components/ui/alert-dialog.tsx:72:  React.ElementRef<typeof AlertDialogPrimitive.Description>,
src/components/ui/alert-dialog.tsx:73:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
src/components/ui/alert-dialog.tsx:83:const AlertDialogAction = React.forwardRef<
src/components/ui/alert-dialog.tsx:84:  React.ElementRef<typeof AlertDialogPrimitive.Action>,
src/components/ui/alert-dialog.tsx:85:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
src/components/ui/alert-dialog.tsx:87:  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
src/components/ui/alert-dialog.tsx:91:const AlertDialogCancel = React.forwardRef<
src/components/ui/alert-dialog.tsx:92:  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
src/components/ui/alert-dialog.tsx:93:  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
src/components/ui/alert-dialog.tsx:97:    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
src/components/ui/alert-dialog.tsx:108:  AlertDialogContent,
src/components/ui/alert.tsx:1:import * as React from "react";
src/components/ui/alert.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
src/components/ui/alert.tsx:4:import { cn } from "@/lib/utils";
src/components/ui/alert.tsx:6:const alertVariants = cva(
src/components/ui/alert.tsx:9:    variants: {
src/components/ui/alert.tsx:10:      variant: {
src/components/ui/alert.tsx:13:          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
src/components/ui/alert.tsx:16:    defaultVariants: {
src/components/ui/alert.tsx:17:      variant: "default",
src/components/ui/alert.tsx:22:const Alert = React.forwardRef<
src/components/ui/alert.tsx:23:  HTMLDivElement,
src/components/ui/alert.tsx:24:  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
src/components/ui/alert.tsx:25:>(({ className, variant, ...props }, ref) => (
src/components/ui/alert.tsx:26:  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
src/components/ui/alert.tsx:30:const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
src/components/ui/alert.tsx:41:const AlertDescription = React.forwardRef<
src/components/ui/alert.tsx:42:  HTMLParagraphElement,
src/components/ui/alert.tsx:43:  React.HTMLAttributes<HTMLParagraphElement>
src/components/ui/aspect-ratio.tsx:1:import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
src/components/ui/avatar.tsx:1:"use client";
src/components/ui/avatar.tsx:3:import * as React from "react";
src/components/ui/avatar.tsx:4:import * as AvatarPrimitive from "@radix-ui/react-avatar";
src/components/ui/avatar.tsx:6:import { cn } from "@/lib/utils";
src/components/ui/avatar.tsx:8:const Avatar = React.forwardRef<
src/components/ui/avatar.tsx:9:  React.ElementRef<typeof AvatarPrimitive.Root>,
src/components/ui/avatar.tsx:10:  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
src/components/ui/avatar.tsx:12:  <AvatarPrimitive.Root
src/components/ui/avatar.tsx:14:    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
src/components/ui/avatar.tsx:18:Avatar.displayName = AvatarPrimitive.Root.displayName;
src/components/ui/avatar.tsx:20:const AvatarImage = React.forwardRef<
src/components/ui/avatar.tsx:21:  React.ElementRef<typeof AvatarPrimitive.Image>,
src/components/ui/avatar.tsx:22:  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
src/components/ui/avatar.tsx:24:  <AvatarPrimitive.Image
src/components/ui/avatar.tsx:26:    className={cn("aspect-square h-full w-full", className)}
src/components/ui/avatar.tsx:30:AvatarImage.displayName = AvatarPrimitive.Image.displayName;
src/components/ui/avatar.tsx:32:const AvatarFallback = React.forwardRef<
src/components/ui/avatar.tsx:33:  React.ElementRef<typeof AvatarPrimitive.Fallback>,
src/components/ui/avatar.tsx:34:  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
src/components/ui/avatar.tsx:36:  <AvatarPrimitive.Fallback
src/components/ui/avatar.tsx:39:      "flex h-full w-full items-center justify-center rounded-full bg-muted",
src/components/ui/avatar.tsx:45:AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
src/components/ui/avatar.tsx:47:export { Avatar, AvatarImage, AvatarFallback };
src/components/ui/badge.tsx:1:import * as React from "react";
src/components/ui/badge.tsx:2:import { cva, type VariantProps } from "class-variance-authority";
src/components/ui/badge.tsx:4:import { cn } from "@/lib/utils";
src/components/ui/badge.tsx:6:const badgeVariants = cva(
src/components/ui/badge.tsx:7:  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
src/components/ui/badge.tsx:9:    variants: {
src/components/ui/badge.tsx:10:      variant: {
src/components/ui/badge.tsx:11:        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
src/components/ui/badge.tsx:12:        secondary:
src/components/ui/badge.tsx:13:          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
src/components/ui/badge.tsx:15:          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
src/components/ui/badge.tsx:19:    defaultVariants: {
src/components/ui/badge.tsx:20:      variant: "default",
src/components/ui/badge.tsx:26:  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}
src/components/ui/badge.tsx:28:function Badge({ className, variant, ...props }: BadgeProps) {
src/components/ui/badge.tsx:29:  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
src/components/ui/badge.tsx:32:export { Badge, badgeVariants };
src/components/ui/breadcrumb.tsx:1:import * as React from "react";
src/components/ui/breadcrumb.tsx:2:import { Slot } from "@radix-ui/react-slot";
src/components/ui/breadcrumb.tsx:3:import { ChevronRight, MoreHorizontal } from "lucide-react";
src/components/ui/breadcrumb.tsx:5:import { cn } from "@/lib/utils";
src/components/ui/breadcrumb.tsx:7:const Breadcrumb = React.forwardRef<
src/components/ui/breadcrumb.tsx:8:  HTMLElement,
src/components/ui/breadcrumb.tsx:9:  React.ComponentPropsWithoutRef<"nav"> & {
src/components/ui/breadcrumb.tsx:10:    separator?: React.ReactNode;
src/components/ui/breadcrumb.tsx:12:>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
src/components/ui/breadcrumb.tsx:15:const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
src/components/ui/breadcrumb.tsx:20:        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
src/components/ui/breadcrumb.tsx:29:const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
src/components/ui/breadcrumb.tsx:31:    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
src/components/ui/breadcrumb.tsx:36:const BreadcrumbLink = React.forwardRef<
src/components/ui/breadcrumb.tsx:37:  HTMLAnchorElement,
src/components/ui/breadcrumb.tsx:38:  React.ComponentPropsWithoutRef<"a"> & {
src/components/ui/breadcrumb.tsx:54:const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
src/components/ui/breadcrumb.tsx:59:      aria-disabled="true"
src/components/ui/breadcrumb.tsx:60:      aria-current="page"
src/components/ui/breadcrumb.tsx:68:const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
src/components/ui/breadcrumb.tsx:70:    role="presentation"
src/components/ui/breadcrumb.tsx:71:    aria-hidden="true"
src/components/ui/breadcrumb.tsx:75:    {children ?? <ChevronRight />}
src/components/ui/breadcrumb.tsx:78:BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
src/components/ui/breadcrumb.tsx:80:const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
src/components/ui/breadcrumb.tsx:82:    role="presentation"
src/components/ui/breadcrumb.tsx:83:    aria-hidden="true"
src/components/ui/breadcrumb.tsx:84:    className={cn("flex h-9 w-9 items-center justify-center", className)}
src/components/ui/breadcrumb.tsx:99:  BreadcrumbSeparator,
src/components/ui/button.tsx:1:import * as React from "react";
src/components/ui/button.tsx:2:import { Slot } from "@radix-ui/react-slot";
src/components/ui/button.tsx:3:import { cva, type VariantProps } from "class-variance-authority";
src/components/ui/button.tsx:5:import { cn } from "@/lib/utils";
src/components/ui/button.tsx:7:const buttonVariants = cva(
src/components/ui/button.tsx:8:  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
src/components/ui/button.tsx:10:    variants: {
src/components/ui/button.tsx:11:      variant: {
src/components/ui/button.tsx:12:        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
src/components/ui/button.tsx:15:          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
src/components/ui/button.tsx:16:        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
src/components/ui/button.tsx:17:        ghost: "hover:bg-accent hover:text-accent-foreground",
src/components/ui/button.tsx:18:        link: "text-primary underline-offset-4 hover:underline",
src/components/ui/button.tsx:27:    defaultVariants: {
src/components/ui/button.tsx:28:      variant: "default",
src/components/ui/button.tsx:35:  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
src/components/ui/button.tsx:39:const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
src/components/ui/button.tsx:40:  ({ className, variant, size, asChild = false, ...props }, ref) => {
src/components/ui/button.tsx:43:      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
src/components/ui/button.tsx:49:export { Button, buttonVariants };
src/components/ui/calendar.tsx:1:"use client";
src/components/ui/calendar.tsx:3:import * as React from "react";
src/components/ui/calendar.tsx:4:import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
src/components/ui/calendar.tsx:5:import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";
src/components/ui/calendar.tsx:7:import { cn } from "@/lib/utils";
src/components/ui/calendar.tsx:8:import { Button, buttonVariants } from "@/components/ui/button";
src/components/ui/calendar.tsx:10:function Calendar({
src/components/ui/calendar.tsx:15:  buttonVariant = "ghost",
src/components/ui/calendar.tsx:17:  components,
src/components/ui/calendar.tsx:19:}: React.ComponentProps<typeof DayPicker> & {
src/components/ui/calendar.tsx:20:  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
src/components/ui/calendar.tsx:28:        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
src/components/ui/calendar.tsx:29:        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
src/components/ui/calendar.tsx:30:        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
src/components/ui/calendar.tsx:35:        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
src/components/ui/calendar.tsx:43:          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
src/components/ui/calendar.tsx:47:          buttonVariants({ variant: buttonVariant }),
src/components/ui/calendar.tsx:48:          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
src/components/ui/calendar.tsx:52:          buttonVariants({ variant: buttonVariant }),
src/components/ui/calendar.tsx:53:          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
src/components/ui/calendar.tsx:57:          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
src/components/ui/calendar.tsx:61:          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
src/components/ui/calendar.tsx:73:            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
src/components/ui/calendar.tsx:89:          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
src/components/ui/calendar.tsx:92:        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
src/components/ui/calendar.tsx:94:        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
src/components/ui/calendar.tsx:96:          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
src/components/ui/calendar.tsx:100:          "text-muted-foreground aria-selected:text-muted-foreground",
src/components/ui/calendar.tsx:104:        hidden: cn("invisible", defaultClassNames.hidden),
src/components/ui/calendar.tsx:107:      components={{
src/components/ui/calendar.tsx:109:          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
src/components/ui/calendar.tsx:111:        Chevron: ({ className, orientation, ...props }) => {
src/components/ui/calendar.tsx:112:          if (orientation === "left") {
src/components/ui/calendar.tsx:116:          if (orientation === "right") {
src/components/ui/calendar.tsx:122:        DayButton: CalendarDayButton,
src/components/ui/calendar.tsx:123:        WeekNumber: ({ children, ...props }) => {
src/components/ui/calendar.tsx:126:              <div className="flex size-(--cell-size) items-center justify-center text-center">
src/components/ui/calendar.tsx:127:                {children}
src/components/ui/calendar.tsx:132:        ...components,
src/components/ui/calendar.tsx:139:function CalendarDayButton({
src/components/ui/calendar.tsx:144:}: React.ComponentProps<typeof DayButton>) {
src/components/ui/calendar.tsx:147:  const ref = React.useRef<HTMLButtonElement>(null);
src/components/ui/calendar.tsx:149:    if (modifiers.focused) ref.current?.focus();
src/components/ui/calendar.tsx:155:      variant="ghost"
src/components/ui/calendar.tsx:157:      data-day={day.date.toLocaleDateString()}
src/components/ui/calendar.tsx:160:        !modifiers.range_start &&
src/components/ui/calendar.tsx:161:        !modifiers.range_end &&
src/components/ui/calendar.tsx:164:      data-range-start={modifiers.range_start}
src/components/ui/calendar.tsx:165:      data-range-end={modifiers.range_end}
src/components/ui/calendar.tsx:168:        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
src/components/ui/calendar.tsx:177:export { Calendar, CalendarDayButton };
src/components/ui/card.tsx:1:import * as React from "react";
src/components/ui/card.tsx:3:import { cn } from "@/lib/utils";
src/components/ui/card.tsx:5:const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
src/components/ui/card.tsx:9:      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
src/components/ui/card.tsx:14:Card.displayName = "Card";
src/components/ui/card.tsx:16:const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
src/components/ui/card.tsx:21:CardHeader.displayName = "CardHeader";
src/components/ui/card.tsx:23:const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
src/components/ui/card.tsx:32:CardTitle.displayName = "CardTitle";
src/components/ui/card.tsx:34:const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
src/components/ui/card.tsx:39:CardDescription.displayName = "CardDescription";
src/components/ui/card.tsx:41:const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
src/components/ui/card.tsx:46:CardContent.displayName = "CardContent";
src/components/ui/card.tsx:48:const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
src/components/ui/card.tsx:50:    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
src/components/ui/card.tsx:53:CardFooter.displayName = "CardFooter";
src/components/ui/card.tsx:55:export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
src/components/ui/carousel.tsx:1:import * as React from "react";
src/components/ui/carousel.tsx:2:import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
src/components/ui/carousel.tsx:3:import { ArrowLeft, ArrowRight } from "lucide-react";
src/components/ui/carousel.tsx:5:import { cn } from "@/lib/utils";
src/components/ui/carousel.tsx:6:import { Button } from "@/components/ui/button";
src/components/ui/carousel.tsx:8:type CarouselApi = UseEmblaCarouselType[1];
src/components/ui/carousel.tsx:9:type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
src/components/ui/carousel.tsx:10:type CarouselOptions = UseCarouselParameters[0];
src/components/ui/carousel.tsx:11:type CarouselPlugin = UseCarouselParameters[1];
src/components/ui/carousel.tsx:13:type CarouselProps = {
src/components/ui/carousel.tsx:14:  opts?: CarouselOptions;
src/components/ui/carousel.tsx:15:  plugins?: CarouselPlugin;
src/components/ui/carousel.tsx:16:  orientation?: "horizontal" | "vertical";
src/components/ui/carousel.tsx:17:  setApi?: (api: CarouselApi) => void;
src/components/ui/carousel.tsx:20:type CarouselContextProps = {
src/components/ui/carousel.tsx:21:  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
src/components/ui/carousel.tsx:22:  api: ReturnType<typeof useEmblaCarousel>[1];
src/components/ui/carousel.tsx:27:} & CarouselProps;
src/components/ui/carousel.tsx:29:const CarouselContext = React.createContext<CarouselContextProps | null>(null);
src/components/ui/carousel.tsx:31:function useCarousel() {
src/components/ui/carousel.tsx:32:  const context = React.useContext(CarouselContext);
src/components/ui/carousel.tsx:35:    throw new Error("useCarousel must be used within a <Carousel />");
src/components/ui/carousel.tsx:41:const Carousel = React.forwardRef<
src/components/ui/carousel.tsx:42:  HTMLDivElement,
src/components/ui/carousel.tsx:43:  React.HTMLAttributes<HTMLDivElement> & CarouselProps
src/components/ui/carousel.tsx:44:>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
src/components/ui/carousel.tsx:45:  const [carouselRef, api] = useEmblaCarousel(
src/components/ui/carousel.tsx:48:      axis: orientation === "horizontal" ? "x" : "y",
src/components/ui/carousel.tsx:55:  const onSelect = React.useCallback((api: CarouselApi) => {
src/components/ui/carousel.tsx:73:    (event: React.KeyboardEvent<HTMLDivElement>) => {
src/components/ui/carousel.tsx:74:      if (event.key === "ArrowLeft") {
src/components/ui/carousel.tsx:75:        event.preventDefault();
src/components/ui/carousel.tsx:77:      } else if (event.key === "ArrowRight") {
src/components/ui/carousel.tsx:78:        event.preventDefault();
src/components/ui/carousel.tsx:108:    <CarouselContext.Provider
src/components/ui/carousel.tsx:110:        carouselRef,
src/components/ui/carousel.tsx:113:        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
src/components/ui/carousel.tsx:125:        aria-roledescription="carousel"
src/components/ui/carousel.tsx:128:        {children}
src/components/ui/carousel.tsx:130:    </CarouselContext.Provider>
src/components/ui/carousel.tsx:133:Carousel.displayName = "Carousel";
src/components/ui/carousel.tsx:135:const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
src/components/ui/carousel.tsx:137:    const { carouselRef, orientation } = useCarousel();
src/components/ui/carousel.tsx:140:      <div ref={carouselRef} className="overflow-hidden">
src/components/ui/carousel.tsx:145:            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
src/components/ui/carousel.tsx:154:CarouselContent.displayName = "CarouselContent";
src/components/ui/carousel.tsx:156:const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
src/components/ui/carousel.tsx:158:    const { orientation } = useCarousel();
src/components/ui/carousel.tsx:164:        aria-roledescription="slide"
src/components/ui/carousel.tsx:167:          orientation === "horizontal" ? "pl-4" : "pt-4",
src/components/ui/carousel.tsx:175:CarouselItem.displayName = "CarouselItem";
src/components/ui/carousel.tsx:177:const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
src/components/ui/carousel.tsx:178:  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
src/components/ui/carousel.tsx:179:    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
src/components/ui/carousel.tsx:184:        variant={variant}
src/components/ui/carousel.tsx:188:          orientation === "horizontal"
src/components/ui/carousel.tsx:197:        <ArrowLeft className="h-4 w-4" />
src/components/ui/carousel.tsx:203:CarouselPrevious.displayName = "CarouselPrevious";
src/components/ui/carousel.tsx:205:const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
src/components/ui/carousel.tsx:206:  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
src/components/ui/carousel.tsx:207:    const { orientation, scrollNext, canScrollNext } = useCarousel();
src/components/ui/carousel.tsx:212:        variant={variant}
src/components/ui/carousel.tsx:216:          orientation === "horizontal"
src/components/ui/carousel.tsx:225:        <ArrowRight className="h-4 w-4" />
src/components/ui/carousel.tsx:231:CarouselNext.displayName = "CarouselNext";
src/components/ui/carousel.tsx:234:  type CarouselApi,
src/components/ui/carousel.tsx:235:  Carousel,
src/components/ui/carousel.tsx:236:  CarouselContent,
src/components/ui/carousel.tsx:237:  CarouselItem,
src/components/ui/carousel.tsx:238:  CarouselPrevious,
src/components/ui/carousel.tsx:239:  CarouselNext,
src/components/ui/chart.tsx:1:import * as React from "react";
src/components/ui/chart.tsx:2:import * as RechartsPrimitive from "recharts";
src/components/ui/chart.tsx:4:import { cn } from "@/lib/utils";
src/components/ui/chart.tsx:7:const THEMES = { light: "", dark: ".dark" } as const;
src/components/ui/chart.tsx:9:export type ChartConfig = {
src/components/ui/chart.tsx:12:    icon?: React.ComponentType;
src/components/ui/chart.tsx:19:type ChartContextProps = {
src/components/ui/chart.tsx:20:  config: ChartConfig;
src/components/ui/chart.tsx:23:const ChartContext = React.createContext<ChartContextProps | null>(null);
src/components/ui/chart.tsx:25:function useChart() {
src/components/ui/chart.tsx:26:  const context = React.useContext(ChartContext);
src/components/ui/chart.tsx:29:    throw new Error("useChart must be used within a <ChartContainer />");
src/components/ui/chart.tsx:35:const ChartContainer = React.forwardRef<
src/components/ui/chart.tsx:36:  HTMLDivElement,
src/components/ui/chart.tsx:37:  React.ComponentProps<"div"> & {
src/components/ui/chart.tsx:38:    config: ChartConfig;
src/components/ui/chart.tsx:39:    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
src/components/ui/chart.tsx:41:>(({ id, className, children, config, ...props }, ref) => {
src/components/ui/chart.tsx:43:  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
src/components/ui/chart.tsx:46:    <ChartContext.Provider value={{ config }}>
src/components/ui/chart.tsx:48:        data-chart={chartId}
src/components/ui/chart.tsx:51:          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
src/components/ui/chart.tsx:56:        <ChartStyle id={chartId} config={config} />
src/components/ui/chart.tsx:57:        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
src/components/ui/chart.tsx:59:    </ChartContext.Provider>
src/components/ui/chart.tsx:62:ChartContainer.displayName = "Chart";
src/components/ui/chart.tsx:64:const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
src/components/ui/chart.tsx:65:  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);
src/components/ui/chart.tsx:67:  if (!colorConfig.length) {
src/components/ui/chart.tsx:74:        __html: Object.entries(THEMES)
src/components/ui/chart.tsx:77:${prefix} [data-chart=${id}] {
src/components/ui/chart.tsx:93:const ChartTooltip = RechartsPrimitive.Tooltip;
src/components/ui/chart.tsx:95:const ChartTooltipContent = React.forwardRef<
src/components/ui/chart.tsx:96:  HTMLDivElement,
src/components/ui/chart.tsx:97:  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
src/components/ui/chart.tsx:98:    React.ComponentProps<"div"> & {
src/components/ui/chart.tsx:124:    const { config } = useChart();
src/components/ui/chart.tsx:127:      if (hideLabel || !payload?.length) {
src/components/ui/chart.tsx:133:      const itemConfig = getPayloadConfigFromPayload(config, item, key);
src/components/ui/chart.tsx:152:    if (!active || !payload?.length) {
src/components/ui/chart.tsx:156:    const nestLabel = payload.length === 1 && indicator !== "dot";
src/components/ui/chart.tsx:162:          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
src/components/ui/chart.tsx:172:              const itemConfig = getPayloadConfigFromPayload(config, item, key);
src/components/ui/chart.tsx:180:                    indicator === "dot" && "items-center",
src/components/ui/chart.tsx:197:                                "w-0 border-[1.5px] border-dashed bg-transparent":
src/components/ui/chart.tsx:213:                          "flex flex-1 justify-between leading-none",
src/components/ui/chart.tsx:214:                          nestLabel ? "items-end" : "items-center",
src/components/ui/chart.tsx:224:                          <span className="font-mono font-medium tabular-nums text-foreground">
src/components/ui/chart.tsx:225:                            {item.value.toLocaleString()}
src/components/ui/chart.tsx:239:ChartTooltipContent.displayName = "ChartTooltip";
src/components/ui/chart.tsx:241:const ChartLegend = RechartsPrimitive.Legend;
src/components/ui/chart.tsx:243:const ChartLegendContent = React.forwardRef<
src/components/ui/chart.tsx:244:  HTMLDivElement,
src/components/ui/chart.tsx:245:  React.ComponentProps<"div"> &
src/components/ui/chart.tsx:246:    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
src/components/ui/chart.tsx:251:  const { config } = useChart();
src/components/ui/chart.tsx:253:  if (!payload?.length) {
src/components/ui/chart.tsx:261:        "flex items-center justify-center gap-4",
src/components/ui/chart.tsx:270:          const itemConfig = getPayloadConfigFromPayload(config, item, key);
src/components/ui/chart.tsx:276:                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
src/components/ui/chart.tsx:296:ChartLegendContent.displayName = "ChartLegend";
src/components/ui/chart.tsx:298:// Helper to extract item config from a payload.
src/components/ui/chart.tsx:299:function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
src/components/ui/chart.tsx:325:  ChartContainer,
src/components/ui/chart.tsx:326:  ChartTooltip,
src/components/ui/chart.tsx:327:  ChartTooltipContent,
src/components/ui/chart.tsx:328:  ChartLegend,
src/components/ui/chart.tsx:329:  ChartLegendContent,
src/components/ui/chart.tsx:330:  ChartStyle,
src/components/ui/checkbox.tsx:1:import * as React from "react";
src/components/ui/checkbox.tsx:2:import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
src/components/ui/checkbox.tsx:3:import { Check } from "lucide-react";
src/components/ui/checkbox.tsx:5:import { cn } from "@/lib/utils";
src/components/ui/checkbox.tsx:7:const Checkbox = React.forwardRef<
src/components/ui/checkbox.tsx:8:  React.ElementRef<typeof CheckboxPrimitive.Root>,
src/components/ui/checkbox.tsx:9:  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
src/components/ui/checkbox.tsx:14:      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
src/components/ui/checkbox.tsx:19:    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
src/components/ui/collapsible.tsx:1:"use client";
src/components/ui/collapsible.tsx:3:import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
src/components/ui/collapsible.tsx:9:const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
src/components/ui/collapsible.tsx:11:export { Collapsible, CollapsibleTrigger, CollapsibleContent };
src/components/ui/command.tsx:1:"use client";
src/components/ui/command.tsx:3:import * as React from "react";
src/components/ui/command.tsx:4:import { type DialogProps } from "@radix-ui/react-dialog";
src/components/ui/command.tsx:5:import { Command as CommandPrimitive } from "cmdk";
src/components/ui/command.tsx:6:import { Search } from "lucide-react";
src/components/ui/command.tsx:8:import { cn } from "@/lib/utils";
src/components/ui/command.tsx:9:import { Dialog, DialogContent } from "@/components/ui/dialog";
src/components/ui/command.tsx:11:const Command = React.forwardRef<
src/components/ui/command.tsx:12:  React.ElementRef<typeof CommandPrimitive>,
src/components/ui/command.tsx:13:  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
src/components/ui/command.tsx:18:      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
src/components/ui/command.tsx:26:const CommandDialog = ({ children, ...props }: DialogProps) => {
src/components/ui/command.tsx:29:      <DialogContent className="overflow-hidden p-0">
src/components/ui/command.tsx:30:        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
src/components/ui/command.tsx:31:          {children}
src/components/ui/command.tsx:33:      </DialogContent>
src/components/ui/command.tsx:38:const CommandInput = React.forwardRef<
src/components/ui/command.tsx:39:  React.ElementRef<typeof CommandPrimitive.Input>,
src/components/ui/command.tsx:40:  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
src/components/ui/command.tsx:42:  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
src/components/ui/command.tsx:43:    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
src/components/ui/command.tsx:47:        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
src/components/ui/command.tsx:57:const CommandList = React.forwardRef<
src/components/ui/command.tsx:58:  React.ElementRef<typeof CommandPrimitive.List>,
src/components/ui/command.tsx:59:  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
src/components/ui/command.tsx:63:    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
src/components/ui/command.tsx:70:const CommandEmpty = React.forwardRef<
src/components/ui/command.tsx:71:  React.ElementRef<typeof CommandPrimitive.Empty>,
src/components/ui/command.tsx:72:  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
src/components/ui/command.tsx:74:  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
src/components/ui/command.tsx:79:const CommandGroup = React.forwardRef<
src/components/ui/command.tsx:80:  React.ElementRef<typeof CommandPrimitive.Group>,
src/components/ui/command.tsx:81:  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
src/components/ui/command.tsx:86:      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
src/components/ui/command.tsx:95:const CommandSeparator = React.forwardRef<
src/components/ui/command.tsx:96:  React.ElementRef<typeof CommandPrimitive.Separator>,
src/components/ui/command.tsx:97:  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
src/components/ui/command.tsx:99:  <CommandPrimitive.Separator
src/components/ui/command.tsx:105:CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
src/components/ui/command.tsx:107:const CommandItem = React.forwardRef<
src/components/ui/command.tsx:108:  React.ElementRef<typeof CommandPrimitive.Item>,
src/components/ui/command.tsx:109:  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
src/components/ui/command.tsx:114:      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
src/components/ui/command.tsx:123:const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
src/components/ui/command.tsx:142:  CommandSeparator,
src/components/ui/context-menu.tsx:1:import * as React from "react";
src/components/ui/context-menu.tsx:2:import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
src/components/ui/context-menu.tsx:3:import { Check, ChevronRight, Circle } from "lucide-react";
src/components/ui/context-menu.tsx:5:import { cn } from "@/lib/utils";
src/components/ui/context-menu.tsx:7:const ContextMenu = ContextMenuPrimitive.Root;

## Arabic / RTL references

src/components/PilotFeedbackForm.tsx:60:  const isRTL = lang === "ar";
src/components/PilotFeedbackForm.tsx:112:      className={`mt-6 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}
src/components/PilotFeedbackForm.tsx:113:      dir={isRTL ? "rtl" : "ltr"}
src/components/ui/calendar.tsx:29:        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
src/components/ui/calendar.tsx:30:        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
src/components/ui/chart.tsx:241:const ChartLegend = RechartsPrimitive.Legend;
src/components/ui/chart.tsx:243:const ChartLegendContent = React.forwardRef<
src/components/ui/chart.tsx:296:ChartLegendContent.displayName = "ChartLegend";
src/components/ui/chart.tsx:328:  ChartLegend,
src/components/ui/chart.tsx:329:  ChartLegendContent,
src/lib/ai-review.functions.ts:37:- Preserve the input language (English, French, or Arabic). For Arabic, keep RTL-compatible text.
src/lib/ai-review.functions.ts:80:      if (res.status === 429) throw new Error("AI rate limit exceeded. Please retry shortly.");
src/lib/i18n.tsx:44:    arabicTextNotice:
src/lib/i18n.tsx:45:      "Note: searchable Arabic export falls back to the image version for proper glyph shaping.",
src/lib/i18n.tsx:265:    arabicTextNotice:
src/lib/i18n.tsx:484:    arabicTextNotice: "ملاحظة: التصدير النصي للعربية يتحول إلى نسخة الصورة لضمان تشكيل الحروف.",
src/lib/i18n.tsx:688:    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
src/lib/lovable-error-reporting.ts:21:export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
src/routes/__root.tsx:13:import { reportLovableError } from "../lib/lovable-error-reporting";
src/routes/__root.tsx:42:    reportLovableError(error, { boundary: "tanstack_root_error_component" });
src/routes/dashboard.tsx:216:  const isRTL = lang === "ar";
src/routes/dashboard.tsx:217:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
src/routes/dashboard.tsx:228:      dir={isRTL ? "rtl" : "ltr"}
src/routes/dashboard.tsx:232:        className={`mb-4 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}
src/routes/dashboard.tsx:348:        className={`mb-4 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}
src/routes/dashboard.tsx:420:      {isRTL && (
src/routes/dashboard.tsx:425:          {t("arabicTextNotice")}
src/routes/dashboard.tsx:431:        className={`mt-4 rounded-xl border border-border bg-card p-3 shadow-sm text-xs text-muted-foreground ${isRTL ? "text-right" : "text-left"}`}
src/routes/dashboard.tsx:462:  const isRTL = lang === "ar";
src/routes/dashboard.tsx:463:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
src/routes/dashboard.tsx:472:      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" dir={isRTL ? "rtl" : "ltr"}>
src/routes/dashboard.tsx:473:        <DialogHeader className={isRTL ? "text-right" : "text-left"}>
src/routes/dashboard.tsx:480:          className={`mt-2 rounded-lg border border-border bg-card shadow-sm ${isRTL ? "text-right" : "text-left"}`}
src/routes/dashboard.tsx:571:            className={`flex flex-wrap items-center justify-between gap-2 border-t border-border px-5 py-2 text-[11px] text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}
src/routes/dashboard.tsx:684:  const isRTL = lang === "ar";
src/routes/dashboard.tsx:781:      <DialogContent className="max-w-3xl" dir={isRTL ? "rtl" : "ltr"}>
src/routes/dashboard.tsx:1042:      const isRTL = lang === "ar";
src/routes/dashboard.tsx:1049:        if (isRTL) {
src/routes/dashboard.tsx:1067:    // Arabic needs glyph shaping the standard jsPDF fonts can't do — fall back to image.
src/routes/knowledge.tsx:61:  const isRTL = lang === "ar";
src/routes/knowledge.tsx:110:    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
src/routes/pilot.tsx:188:  const isRTL = lang === "ar";
src/routes/pilot.tsx:192:    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
src/routes/reasoning.tsx:104:  const isRTL = lang === "ar";
src/routes/reasoning.tsx:107:    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
src/routes/scientific.tsx:98:  const isRTL = lang === "ar";
src/routes/scientific.tsx:275:    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
gsos/docs/s08/FOUNDING_CHARTER_GSOS_S08_DRAFT_AR.md:11:**اتجاه النص:** RTL  
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:108:src/lib/i18n.tsx:45:      "Note: searchable Arabic export falls back to the image version for proper glyph shaping.",
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:219:src/lib/lovable-error-reporting.ts:21:export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:304:src/routes/__root.tsx:13:import { reportLovableError } from "../lib/lovable-error-reporting";
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:305:src/routes/__root.tsx:42:    reportLovableError(error, { boundary: "tanstack_root_error_component" });
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:320:src/routes/dashboard.tsx:217:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:368:src/routes/dashboard.tsx:463:  const dateStr = reportMeta.date.toLocaleString(isRTL ? "ar" : lang === "fr" ? "fr-FR" : "en-US", {
gsos/work/completion-2/reports/GSOS_PHASE2_REPORTING_AUDIT.md:443:src/routes/dashboard.tsx:1067:    // Arabic needs glyph shaping the standard jsPDF fonts can't do — fall back to image.
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:43:src/components/PilotFeedbackForm.tsx:60:  const isRTL = lang === "ar";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:47:src/components/PilotFeedbackForm.tsx:112:      className={`mt-6 rounded-xl border border-border bg-card p-5 shadow-sm ${isRTL ? "text-right" : "text-left"}`}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:48:src/components/PilotFeedbackForm.tsx:113:      dir={isRTL ? "rtl" : "ltr"}
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:255:src/components/ui/calendar.tsx:29:        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:256:src/components/ui/calendar.tsx:30:        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:432:src/components/ui/chart.tsx:241:const ChartLegend = RechartsPrimitive.Legend;
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:433:src/components/ui/chart.tsx:243:const ChartLegendContent = React.forwardRef<
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:442:src/components/ui/chart.tsx:296:ChartLegendContent.displayName = "ChartLegend";
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:448:src/components/ui/chart.tsx:328:  ChartLegend,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:449:src/components/ui/chart.tsx:329:  ChartLegendContent,
gsos/work/completion-2/reports/GSOS_PHASE2_I18N_AUDIT.md:515:## Arabic / RTL references
docs/PRODUCTION_READINESS.md:29:`dir="rtl"`).
docs/PRODUCTION_READINESS.md:36:| Safari | 17+ | ✅ Full support; PDF text export and RTL verified |
docs/PRODUCTION_READINESS.md:48:| Mobile 360–767 px | ✅ Single column, buttons stack, dialogs scroll, Arabic RTL preserved |
docs/PRODUCTION_READINESS.md:79:| Language + direction | ✅ `<html lang>` + `dir="rtl"` toggled for Arabic across app and dialogs |
docs/PRODUCTION_READINESS.md:117:3. **TD-003 — Arabic searchable PDF** falls back to image (larger file,
docs/PROGRAMS/CIP.md:25:- TD-001 (Auth), TD-002 (Telemetry), TD-003 (Searchable Arabic PDF)
docs/ROADMAP.md:8:| **V1.3-DEV** | **Tech Debt: Auth + Telemetry + Arabic PDF** | 🚧 **Active** | **1.3.0-dev** |
docs/TECH_DEBT.md:18:| TD-003 | PDF export uses raster fallback for Arabic because jsPDF lacks built-in Arabic glyph shaping. | Sprint 2 | Larger PDF size, no searchable AR text. | Medium | Open |
docs/TEST_REPORT.md:15:| i18n | Arabic enables `dir="rtl"` globally and inside AI dialog | PASS |
docs/TEST_REPORT.md:29:| AI Review | Arabic preserves RTL inside dialog and corrected export | PASS |
docs/adr/0002-pdf-export-strategy.md:8:EN, FR, and AR, including RTL Arabic glyphs. Reports are generated on
docs/adr/0002-pdf-export-strategy.md:13:`html2canvas` for image-based fallback. Arabic searchable export falls
docs/adr/0002-pdf-export-strategy.md:22:  the on-screen Arabic rendering exactly.
docs/adr/0002-pdf-export-strategy.md:29:  requires bundled Arabic fonts.
docs/adr/0002-pdf-export-strategy.md:34:- Arabic searchable PDFs are deferred to a future Arabic-font bundle
docs/adr/0003-ai-writing-assistant.md:10:The assistant must support EN, FR, and AR with full RTL.
docs/adr/0003-ai-writing-assistant.md:29:  three project languages, including Arabic, well.
docs/adr/0003-ai-writing-assistant.md:38:  in-browser do not reach acceptable Arabic and French quality.
docs/adr/0004-pilot-validation-program.md:17:(Arabic searchable PDF), we need evidence that the current product
docs/branches/V1.3-DEV.md:22:| TD-003 | Searchable Arabic PDF | Replace the image fallback with a searchable Arabic PDF using a shaping-capable pipeline (evaluate `pdf-lib` + `HarfBuzz`/`fontkit`, or embed an Arabic-capable TTF into jsPDF with a shaping step). Deliverable: AR export is text-selectable and copy-pasteable. |
docs/branches/V1.3-DEV.md:36:- ADR-0006: PDF pipeline v2 (Arabic shaping).
docs/sprints/V1.3-S0-PILOT.md:21:  suggestions) rendered under the Analysis panel; EN/FR/AR + RTL.
docs/sprints/V1.3-S0-PILOT.md:41:- [x] Pilot Validation Report exports in EN/FR (Arabic report uses Latin fallback text).
docs/sprints/V1.3-S1-SVF.md:36:- Full EN / FR / AR translations with RTL support (additive keys only).
docs/sprints/V1.3-S1-SVF.md:57:- [x] Scientific Validation Report PDF exports in EN / FR / AR (RTL) —
docs/sprints/V1.3-S1-SVF.md:58:      Arabic uses Latin fallback pending TD-003.
docs/sprints/V1.3-S2-GKE.md:21:- i18n additions: `kc.*` keys in EN / FR / AR (RTL preserved).
docs/sprints/V2.0-S1-REF.md:22:  EN / FR / AR / RTL).
