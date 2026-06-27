import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * GsosCard — single reusable card primitive for the GSOS dashboard.
 * Standardizes radius, padding, border, shadow, hover animation, and focus.
 */
type Props = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "article";
  interactive?: boolean;
};

export const GsosCard = React.forwardRef<HTMLDivElement, Props>(
  ({ className, as: Tag = "div", interactive = false, ...props }, ref) => {
    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(
          "flex h-full flex-col border border-border bg-card text-card-foreground",
          "rounded-[var(--gsos-radius-card)] p-[var(--gsos-pad-card)]",
          "shadow-[var(--gsos-shadow-card)] transition-all duration-200 ease-out",
          interactive &&
            "hover:-translate-y-0.5 hover:shadow-[var(--gsos-shadow-card-hover)] focus-within:-translate-y-0.5",
          className,
        )}
        {...props}
      />
    );
  },
);
GsosCard.displayName = "GsosCard";

export function GsosCardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-start justify-between gap-3", className)} {...props} />;
}

export function GsosCardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-sm font-medium text-muted-foreground tracking-tight", className)}
      {...props}
    />
  );
}

export function GsosCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-3 flex-1", className)} {...props} />;
}
