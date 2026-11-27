import { kits } from "@/config/site";
import { OfferCard } from "./OfferCard";
import { Section } from "./Section";

export function FinalCta(){
 const ordered=[...kits].sort((a,b)=>Number(Boolean(b.featured))-Number(Boolean(a.featured)));
 return <Section tone="dark" title="Comece hoje o seu ritual noturno">
  <p className="-mt-6 mb-8 text-center text-[17px]">Escolha a duração que combina com a sua rotina. Você tem 30 dias de garantia.</p>
  <div className="grid gap-6 md:grid-cols-3">{ordered.map(k=><OfferCard key={k.id} kit={k} compact/>)}</div>
 </Section>;
}
