import { useEffect, useRef } from "react";
import { kits } from "@/config/site";
import { track } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { OfferCard } from "./OfferCard";
import { PaymentIcons } from "./PaymentIcons";
import { Section } from "./Section";

export function Offers() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { track("ViewContent", { content_name: "Ofertas", content_type: "product" }); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section ref={ref} id="ofertas" tone="dark" eyebrow="Escolha seu ritual" title="Quanto mais longo o ritual, maior a economia">
      <div className="grid items-center gap-8 md:grid-cols-3 md:gap-5">
        {kits.map((kit) => <OfferCard key={kit.id} kit={kit} className={cn(kit.featured ? "order-first md:order-none" : "")} />)}
      </div>
      <PaymentIcons />
    </Section>
  );
}
