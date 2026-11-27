import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentProps<"section"> { tone?: "light" | "dark"; eyebrow?: string; title?: ReactNode }

export function Section({ tone = "light", eyebrow, title, className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("px-5 py-16 md:py-24", tone === "dark" ? "stars bg-night-gradient text-night-foreground" : "bg-background", className)}
      {...props}
    >
      <div className="relative mx-auto max-w-6xl">
        {eyebrow && <p className={cn("mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em]", tone === "dark" ? "text-gold" : "text-lilac")}>{eyebrow}</p>}
        {title && <h2 className="mx-auto mb-10 max-w-2xl text-center text-3xl leading-tight md:text-4xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
