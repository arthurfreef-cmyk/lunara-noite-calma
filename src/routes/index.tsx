import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { TopBar } from "@/components/landing/TopBar";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Problem } from "@/components/landing/Problem";
import { Ingredients } from "@/components/landing/Ingredients";
import { Comparison } from "@/components/landing/Comparison";
import { Ritual } from "@/components/landing/Ritual";
import { Testimonials } from "@/components/landing/Testimonials";
import { Bonus } from "@/components/landing/Bonus";
import { Offers } from "@/components/landing/Offers";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { StickyCta } from "@/components/landing/StickyCta";
import { initPixel, track } from "@/lib/tracking";

export const Route=createFileRoute("/")({
 head:()=>({meta:[
  {title:"Lunara Noite Calma · Seu ritual noturno"},
  {name:"description",content:"Magnésio, L-teanina, camomila e maracujá em uma rotina noturna simples de 2 cápsulas por dia."},
  {property:"og:title",content:"Lunara Noite Calma · Sua mente desacelera. Sua noite muda."},
  {property:"og:description",content:"Conheça o ritual noturno Lunara Noite Calma."},
  {property:"og:type",content:"product"},
  {name:"twitter:card",content:"summary_large_image"}
 ]}),
 component:Index
});
function Index(){
 useEffect(()=>{initPixel();track("PageView");},[]);
 return <><TopBar/><Hero/><SocialProof/><main><Problem/><Ingredients/><Comparison/><Ritual/><Testimonials/><Bonus/><Offers/><Guarantee/><FAQ/><FinalCta/></main><Footer/><StickyCta/></>;
}
