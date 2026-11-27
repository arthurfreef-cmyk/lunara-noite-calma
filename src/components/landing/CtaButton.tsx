import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex w-full items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60",
  {
    variants: {
      variant: {
        gold: "bg-gold-gradient text-gold-foreground shadow-gold",
        outline: "border border-gold/60 bg-transparent text-gold",
        ghost: "bg-transparent text-muted-foreground underline underline-offset-4",
      },
      size: { md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg", xl: "px-8 py-5 text-lg md:text-xl" },
      pulse: { true: "animate-soft-pulse", false: "" },
    },
    defaultVariants: { variant: "gold", size: "lg", pulse: true },
  },
);

export interface CtaButtonProps extends ComponentProps<"button">, VariantProps<typeof ctaVariants> {}

export function CtaButton({ className, variant, size, pulse, ...props }: CtaButtonProps) {
  return <button className={cn(ctaVariants({ variant, size, pulse }), className)} {...props} />;
}

export const scrollToOffers = (): void => {
  document.getElementById("ofertas")?.scrollIntoView({ behavior: "smooth" });
};
