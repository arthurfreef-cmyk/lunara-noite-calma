import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { getKit } from "@/config/site";
import { brl } from "@/lib/format";
import { CtaButton, scrollToOffers } from "./CtaButton";

export function StickyCta(){
 const [pastHero,setPastHero]=useState(false);
 const [atOffers,setAtOffers]=useState(false);
 const [seenOffers,setSeenOffers]=useState(false);
 const navigate=useNavigate();
 const featured=getKit("4");
 useEffect(()=>{
  const hero=document.getElementById("hero"),offers=document.getElementById("ofertas");
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
   if(e.target===hero)setPastHero(!e.isIntersecting);
   if(e.target===offers){setAtOffers(e.isIntersecting);if(e.isIntersecting)setSeenOffers(true);}
  }),{threshold:0.15});
  if(hero)io.observe(hero);if(offers)io.observe(offers);
  return()=>io.disconnect();
 },[]);
 if(!pastHero||atOffers)return null;
 return <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-night/95 p-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
  <CtaButton size="md" className="min-h-[52px]" onClick={()=>seenOffers?void navigate({to:"/checkout",search:{kit:"4"}}):scrollToOffers()}>
   {seenOffers?`Comprar Kit 4 · ${brl(featured.price)}`:"Ver ofertas"}
  </CtaButton>
 </div>;
}
