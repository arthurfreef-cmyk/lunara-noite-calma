import { useEffect, useState } from "react";
import { CtaButton, scrollToOffers } from "./CtaButton";

/** Aparece após o hero e some quando as ofertas estão visíveis (somente mobile). */
export function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [atOffers, setAtOffers] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero");
    const offers = document.getElementById("ofertas");
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setPastHero(!e.isIntersecting);
        if (e.target === offers) setAtOffers(e.isIntersecting);
      }
    });
    if (hero) io.observe(hero);
    if (offers) io.observe(offers);
    return () => io.disconnect();
  }, []);
  if (!pastHero || atOffers) return null;
  return (
    <div className="animate-slide-up fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-night/95 p-3 backdrop-blur md:hidden">
      <CtaButton size="md" onClick={scrollToOffers}>Ver ofertas</CtaButton>
    </div>
  );
}
