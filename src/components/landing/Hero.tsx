import { Moon, Check, ShieldCheck, CreditCard, QrCode } from "lucide-react";
import kit4 from "@/assets/kit-4-potes.jpg";
import { CtaButton, scrollToOffers } from "./CtaButton";

export function Hero() {
  return (
    <header id="hero" className="stars bg-night-gradient px-5 pb-12 pt-24 text-night-foreground md:pb-16 md:pt-28">
      <div className="relative mx-auto grid max-w-6xl items-center gap-7 md:grid-cols-2 md:gap-14">
        <div className="text-center md:text-left">
          <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-lilac/40 px-3 py-1.5 text-xs tracking-widest text-lilac-soft md:mx-0"><Moon className="h-3.5 w-3.5 text-gold" aria-hidden /> LUNARA NOITE CALMA</p>
          <h1 className="text-[2.55rem] leading-[1.08] sm:text-5xl md:text-6xl">Sua mente desacelera. <span className="italic text-gold">Sua noite muda.</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-night-foreground/85 md:mx-0">O ritual noturno de 2 cápsulas com magnésio, L-teanina e camomila para você desligar o dia e cultivar uma rotina de descanso.</p>
          <img src={kit4} alt="Kit com 4 potes de Lunara Noite Calma" width={816} height={816} fetchPriority="high" className="mx-auto my-6 w-full max-w-[340px] rounded-3xl shadow-card md:hidden" />
          <ul className="mx-auto mt-6 grid max-w-md gap-3 text-left text-[15px] md:mx-0">
            {["Ritual simples de 2 cápsulas por dia", "Fórmula com 4 componentes para sua rotina noturna", "Bônus: guia de 21 dias + áudios guiados"].map((t) => <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{t}</li>)}
          </ul>
          <CtaButton size="xl" className="mt-7 min-h-[56px] w-full md:w-auto" onClick={scrollToOffers}>Quero meu ritual noturno</CtaButton>
          <p className="mt-3 text-sm text-night-foreground/75">A partir de <strong className="text-gold">R$ 2,43 por dia</strong> no Kit 6</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-night-foreground/75 md:justify-start">
            <span className="inline-flex items-center gap-1"><QrCode className="h-4 w-4 text-gold" /> Pix com 7% off</span>
            <span className="inline-flex items-center gap-1"><CreditCard className="h-4 w-4 text-gold" /> Até 12x</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-gold" /> 30 dias de garantia</span>
          </div>
        </div>
        <img src={kit4} alt="Kit com 4 potes de Lunara Noite Calma" width={816} height={816} className="hidden w-full rounded-[2rem] shadow-card md:block" />
      </div>
    </header>
  );
}
