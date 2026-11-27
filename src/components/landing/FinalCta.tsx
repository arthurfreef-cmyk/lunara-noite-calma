import { kits } from "@/config/site";
import { useCountdown } from "@/hooks/use-countdown";
import { OfferCard } from "./OfferCard";
import { Section } from "./Section";

export function FinalCta() {
  const time = useCountdown();
  return (
    <Section tone="dark" title="Comece hoje o seu ritual noturno">
      <p className="-mt-6 mb-10 text-center text-sm">Condição especial termina em <strong className="tabular-nums text-gold">{time}</strong></p>
      <div className="grid gap-8 md:grid-cols-3 md:gap-5">
        {kits.map((k) => <OfferCard key={k.id} kit={k} compact className={k.featured ? "order-first md:order-none" : ""} />)}
      </div>
    </Section>
  );
}
