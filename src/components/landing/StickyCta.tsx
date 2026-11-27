import { useEffect, useState } from "react";
import { CtaButton, scrollToOffers } from "./CtaButton";

/** CTA fixo apenas no mobile: aparece depois do hero e some nas ofertas. */
export function StickyCta() {
 const [pastHero,setPastHero]=useState(false);
 const [atOffers,setAtOffers]=useState(false);
 useEffect(()=>{
  const hero=document.getElementById("hero"), offers=document.getElementById("ofertas");
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
   if(e.target===hero)setPastHero(!e.isIntersecting);
   if(e.target===offers)setAtOffers(e.isIntersecting);
  }),{threshold:0.15});
  if(hero)io.observe(hero);if(offers)io.observe(offers);
  return()=>io.disconnect();
 },[]);
 if(!pastHero||atOffers)return null;
 return <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-night/95 p-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
  <CtaButton size="md" onClick={()=>{scrollToOffers();}} className="min-h-[52px]">Ver ofertas</CtaButton>
 </div>;
}
