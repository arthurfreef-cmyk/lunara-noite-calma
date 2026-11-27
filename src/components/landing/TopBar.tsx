import { ShieldCheck, Truck, QrCode } from "lucide-react";
import { useCountdown } from "@/hooks/use-countdown";

export function TopBar(){
 const countdown=useCountdown();
 return <div className="fixed inset-x-0 top-0 z-40 bg-night text-night-foreground">
  <div className="mx-auto flex min-h-10 max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-3 py-2 text-center text-[11px] font-medium sm:text-xs">
   <span className="inline-flex items-center gap-1"><Truck className="h-3.5 w-3.5 text-gold"/>Frete grátis nos kits de 4 e 6 potes</span><span className="hidden text-gold sm:inline">·</span>
   <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-gold"/>Garantia de 30 dias</span><span className="hidden text-gold sm:inline">·</span>
   <span className="inline-flex items-center gap-1"><QrCode className="h-3.5 w-3.5 text-gold"/>Pix com 7% off</span>
   {countdown&&<span className="text-gold" aria-live="off">Termina em {countdown}</span>}
  </div>
 </div>;
}
