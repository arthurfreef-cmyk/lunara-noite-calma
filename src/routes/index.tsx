import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { TopBar } from "@/components/landing/TopBar";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Problem } from "@/components/landing/Problem";
import { Ingredients } from "@/components/landing/Ingredients";
import { Ritual } from "@/components/landing/Ritual";
import { Testimonials } from "@/components/landing/Testimonials";
import { Bonus } from "@/components/landing/Bonus";
import { Offers } from "@/components/landing/Offers";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { StickyCta } from "@/components/landing/StickyCta";
import { ExitPopup } from "@/components/landing/ExitPopup";
import { SalesNotification } from "@/components/landing/SalesNotification";
import { initPixel, track } from "@/lib/tracking";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lunara Noite Calma · Seu ritual noturno de 30 dias" },
      { name: "description", content: "Magnésio, L-teanina, camomila e maracujá em um ritual noturno para desacelerar e descansar melhor. Frete grátis e garantia de 30 dias." },
      { property: "og:title", content: "Lunara Noite Calma · Sua mente desacelera. Sua noite muda." },
      { property: "og:description", content: "O ritual noturno de 30 dias para você desligar e descansar melhor." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => { initPixel(); track("PageView"); }, []);
  return (
    <>
      <TopBar />
      <Hero />
      <SocialProof />
      <main>
        <Problem />
        <Ingredients />
        <Ritual />
        <Testimonials />
        <Bonus />
        <Offers />
        <Guarantee />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      <ExitPopup />
      <SalesNotification />
    </>
  );
}
