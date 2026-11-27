import { Check, Truck } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { site, type Kit } from "@/config/site";
import { brl, kitPricing } from "@/lib/format";
import { trackCustom } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { CtaButton } from "./CtaButton";

export interface OfferCardProps { kit: Kit; compact?: boolean; className?: string }

export function OfferCard({ kit, compact = false, className }: OfferCardProps) {
  const navigate = useNavigate();
  const p = kitPricing(kit.price, kit.priceFrom, kit.pots, site.pixDiscount, site.installments);
  const choose = () => {
    trackCustom("ClickKit", { kit: kit.id, value: kit.price });
    void navigate({ to: "/checkout", search: { kit: kit.id } });
  };

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-3xl bg-card p-6 text-card-foreground shadow-card",
        kit.featured ? "z-10 border-4 border-gold md:scale-105" : "border border-border",
        className,
      )}
    >
      {kit.badge && (
        <span className={cn("absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold tracking-wider", kit.featured ? "bg-gold-gradient text-gold-foreground" : "bg-lilac text-accent-foreground")}>
          {kit.badge}
        </span>
      )}
      <h3 className="text-center text-2xl">{kit.title}</h3>
      <p className="text-center text-sm text-muted-foreground">{kit.duration} de ritual</p>
      {!compact && <img src={kit.image} alt={`${kit.title} de Lunara Noite Calma`} width={816} height={816} loading="lazy" className="mx-auto my-4 w-full max-w-[240px] rounded-2xl" />}
      <div className={cn("text-center", compact && "mt-3")}>
        <p className="text-sm text-muted-foreground">de <s>{brl(kit.priceFrom)}</s> por</p>
        <p className="font-serif text-5xl font-bold text-night">{brl(kit.price)}</p>
        <p className="text-sm text-muted-foreground">{brl(p.perPot)} por pote · ou {site.installments}x de {brl(p.installment)}</p>
        <p className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">Você economiza {brl(p.savings)}</p>
      </div>
      {!compact && (
        <ul className="my-5 space-y-2 text-sm">
          {site.bonuses.map((b) => <li key={b} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-success" aria-hidden />{b}</li>)}
          <li className="flex gap-2"><Truck className="h-4 w-4 shrink-0 text-success" aria-hidden />{kit.freeShipping ? <strong>Frete grátis</strong> : `Frete ${brl(site.shippingPrice)}`}</li>
        </ul>
      )}
      <div className="mt-auto space-y-3">
        <CtaButton size={kit.featured ? "xl" : "md"} pulse={kit.featured ?? false} onClick={choose}>{kit.cta}</CtaButton>
        <div className="flex justify-center gap-2 text-[11px] font-medium">
          <span className="rounded-full border border-gold/50 px-2 py-1">Pix com 7% de desconto</span>
          <span className="rounded-full border border-gold/50 px-2 py-1">Até 12x no cartão</span>
        </div>
      </div>
    </article>
  );
}
