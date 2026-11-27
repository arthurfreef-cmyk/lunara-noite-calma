import { Star } from "lucide-react";
import { testimonials } from "@/config/site";
import { Section } from "./Section";

export function Testimonials() {
  const realTestimonials = testimonials.filter((t) => t.isReal);
  if (!realTestimonials.length) return null;
  return <Section tone="dark" eyebrow="Experiências reais" title="Relatos de quem já conhece o Lunara">
    <div className="flex snap-x gap-4 overflow-x-auto pb-4">
      {realTestimonials.map((t, i) => <figure key={t.name + i} className="w-[min(86vw,340px)] shrink-0 snap-center rounded-2xl bg-card p-6 text-card-foreground">
        <div className="mb-3 flex gap-0.5" aria-label="5 estrelas">{Array.from({ length: 5 }, (_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}</div>
        <blockquote className="text-[15px] leading-relaxed">“{t.text}”</blockquote>
        <figcaption className="mt-4"><strong className="block">{t.name}</strong><span className="text-xs text-muted-foreground">{t.city}</span><span className="mt-2 block text-xs font-semibold text-success">Cliente verificado</span></figcaption>
      </figure>)}
    </div>
  </Section>;
}
