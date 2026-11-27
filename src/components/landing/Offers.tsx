import { useEffect, useRef } from "react";
import { kits } from "@/config/site";
import { track } from "@/lib/tracking";
import { OfferCard } from "./OfferCard";
import { PaymentIcons } from "./PaymentIcons";
import { Section } from "./Section";

export function Offers() {
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e?.isIntersecting){track("ViewContent",{content_name:"Ofertas",content_type:"product"});io.disconnect();}},{threshold:0.3});io.observe(el);return()=>io.disconnect();},[]);
 const ordered=[...kits].sort((a,b)=>Number(b.featured)-Number(a.featured));
 return <Section ref={ref} id="ofertas" tone="dark" eyebrow="Escolha seu ritual" title="Escolha o kit ideal para sua rotina">
  <div className="grid items-center gap-7 md:grid-cols-3 md:gap-5">{ordered.map(kit=><OfferCard key={kit.id} kit={kit}/>)}</div><PaymentIcons/>
 </Section>;
}
