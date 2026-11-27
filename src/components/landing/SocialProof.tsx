import { Star, ShieldCheck, LockKeyhole, Truck, Headset } from "lucide-react";
import { site } from "@/config/site";

export function SocialProof() {
 const proof=site.socialProof;
 return <section className="border-y border-gold/30 bg-night-soft px-4 py-5 text-night-foreground">
  <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
   {[{I:ShieldCheck,t:"Garantia de 30 dias"},{I:LockKeyhole,t:"Compra segura"},{I:Truck,t:"Entrega para todo o Brasil"},{I:Headset,t:"Suporte humano"}].map(({I,t})=><div key={t} className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm"><I className="h-5 w-5 shrink-0 text-gold"/><span>{t}</span></div>)}
  </div>
  {proof.isReal&&proof.rating&&proof.reviews&&<div className="mt-4 flex items-center justify-center gap-2 text-sm"><span className="flex">{Array.from({length:5},(_,i)=><Star key={i} className="h-4 w-4 fill-gold text-gold"/>)}</span><strong>{proof.rating}/5</strong><span className="text-night-foreground/70">· {proof.reviews}</span></div>}
 </section>;
}
