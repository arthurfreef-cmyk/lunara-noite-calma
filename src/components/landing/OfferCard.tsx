import { Check, Truck } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { site, type Kit } from "@/config/site";
import { brl, kitPricing } from "@/lib/format";
import { trackCustom } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { CtaButton } from "./CtaButton";

export interface OfferCardProps { kit: Kit; compact?: boolean; className?: string }
const dailyCost: Record<string,string> = { "2":"3,28", "4":"2,73", "6":"2,43" };

export function OfferCard({ kit, compact=false, className }: OfferCardProps) {
 const navigate=useNavigate();
 const p=kitPricing(kit.price,kit.priceFrom,kit.pots,site.pixDiscount,site.installments);
 const pixPrice=Math.round(kit.price*(1-site.pixDiscount)*100)/100;
 const choose=()=>{trackCustom("ClickKit",{kit:kit.id,value:kit.price});void navigate({to:"/checkout",search:{kit:kit.id}});};
 return <article className={cn("relative flex flex-col rounded-3xl bg-card p-5 text-card-foreground shadow-card sm:p-6",kit.featured?"z-10 border-4 border-gold md:scale-[1.04]":"border border-border",className)}>
 {kit.badge&&<span className={cn("absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider",kit.featured?"bg-gold-gradient text-gold-foreground":"bg-lilac text-accent-foreground")}>{kit.badge}</span>}
 <h3 className="mt-2 text-center text-2xl">{kit.title}</h3><p className="text-center text-sm text-muted-foreground">{kit.duration} de ritual · {kit.pots*60} cápsulas</p>
 {!compact&&<img src={kit.image} alt={kit.title+" de Lunara Noite Calma"} width={816} height={816} loading="lazy" className="mx-auto my-3 w-full max-w-[220px] rounded-2xl"/>}
 <div className="text-center"><p className="text-sm text-muted-foreground">De <s>{brl(kit.priceFrom)}</s> por</p><p className="font-serif text-5xl font-bold text-night">{brl(kit.price)}</p><p className="mt-1 text-sm text-muted-foreground">{brl(p.perPot)} por pote · {site.installments}x de {brl(p.installment)}</p><p className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">Economize {brl(p.savings)}</p></div>
 <div className="my-4 rounded-xl bg-secondary/60 p-3 text-center"><p className="text-xs text-muted-foreground">No Pix, com 7% off</p><p className="text-xl font-bold text-night">{brl(pixPrice)}</p><p className="text-xs text-muted-foreground">Apenas R$ {dailyCost[kit.id]} por dia</p></div>
 {!compact&&<ul className="my-3 space-y-3 text-sm">{site.bonuses.map(b=><li key={b} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-success"/>{b}</li>)}<li className="flex gap-2"><Truck className="h-4 w-4 shrink-0 text-success"/>{kit.freeShipping?<strong>Frete grátis</strong>:`Frete ${brl(site.shippingPrice)}`}</li></ul>}
 <div className="mt-auto pt-3"><CtaButton size="xl" className="min-h-[54px] w-full" pulse={kit.featured??false} onClick={choose}>{kit.cta}</CtaButton><p className="mt-3 text-center text-xs text-muted-foreground">Compra segura · Garantia de 30 dias</p></div>
 </article>;
}
