import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { site, type Kit } from "@/config/site";
import { brl } from "@/lib/format";

interface Props { kit:Kit; bump:boolean; totals:{shipping:number;subtotal:number;discount:number;total:number} }
export function OrderSummary({kit,bump,totals}:Props){
 const [expanded,setExpanded]=useState(true);
 return <div className="sticky top-2 z-20 space-y-4">
  <div className="overflow-hidden rounded-2xl bg-card shadow-card">
   <button type="button" onClick={()=>setExpanded(v=>!v)} aria-expanded={expanded} className="flex min-h-[54px] w-full items-center justify-between p-4 text-left md:cursor-default">
    <span><strong className="block text-base">Resumo do pedido</strong><span className="text-xs text-muted-foreground">{kit.title} · Total {brl(totals.total)}</span></span>
    <span className="md:hidden">{expanded?<ChevronUp/>:<ChevronDown/>}</span>
   </button>
   {expanded&&<div className="px-5 pb-5">
    <div className="flex items-center gap-3"><img src={kit.image} alt={kit.title} width={72} height={72} className="h-[72px] w-[72px] rounded-xl"/><div className="flex-1 text-sm"><strong className="block">{kit.title}</strong><span className="text-muted-foreground">{kit.duration} · {kit.pots*60} cápsulas</span></div><strong className="text-sm">{brl(kit.price)}</strong></div>
    <dl className="mt-4 space-y-2 border-t pt-4 text-sm">
     {site.bonuses.map(b=><div key={b} className="flex justify-between gap-2"><dt className="text-muted-foreground">{b}</dt><dd className="text-success">Grátis</dd></div>)}
     {bump&&<div className="flex justify-between"><dt>{site.orderBump.title}</dt><dd>{brl(site.orderBump.price)}</dd></div>}
     <div className="flex justify-between"><dt>Frete</dt><dd>{totals.shipping?brl(totals.shipping):<span className="text-success">Grátis</span>}</dd></div>
     {totals.discount>0&&<div className="flex justify-between text-success"><dt>Desconto Pix (7%)</dt><dd>- {brl(totals.discount)}</dd></div>}
     <div className="flex justify-between border-t pt-3 text-lg font-bold"><dt>Total</dt><dd>{brl(totals.total)}</dd></div>
    </dl>
   </div>}
  </div>
 </div>;
}
