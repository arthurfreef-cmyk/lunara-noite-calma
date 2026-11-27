import { Moon } from "lucide-react";
import kit4 from "@/assets/kit-4-potes.jpg";
import { CtaButton, scrollToOffers } from "./CtaButton";
import { TrustBadges } from "./TrustBadges";

export function Hero() {
  return (
    <header id="hero" className="stars bg-night-gradient px-5 pb-14 pt-24 text-night-foreground md:pt-32">
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className="text-center md:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-lilac/40 px-3 py-1 text-xs tracking-widest text-lilac-soft">
            <Moon className="h-3.5 w-3.5 text-gold" aria-hidden /> LUNARA NOITE CALMA
          </p>
          <h1 className="text-4xl leading-[1.1] md:text-6xl">
            Sua mente desacelera. <span className="italic text-gold">Sua noite muda.</span>
          </h1>
          <p className="mt-5 text-base text-night-foreground/80 md:text-lg">
            O ritual noturno de 30 dias com magnésio, L-teanina e camomila para você desligar e descansar melhor.
          </p>
          <img
            src={kit4}
            alt="Kit com 4 potes de Lunara Noite Calma"
            width={816}
            height={816}
            fetchPriority="high"
            className="mx-auto my-7 w-full max-w-sm rounded-3xl shadow-card md:hidden"
          />
          <CtaButton size="xl" className="mt-2 md:mt-8 md:w-auto" onClick={scrollToOffers}>Quero meu ritual noturno</CtaButton>
          <TrustBadges className="mt-6 md:max-w-md" />
        </div>
        <img src={kit4} alt="Kit com 4 potes de Lunara Noite Calma" width={816} height={816} className="hidden w-full rounded-[2rem] shadow-card md:block" />
      </div>
    </header>
  );
}
