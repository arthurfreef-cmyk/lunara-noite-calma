import { Star } from "lucide-react";
import { testimonials } from "@/config/site";
import { Section } from "./Section";

export function Testimonials() {
  return (
    <Section tone="dark" eyebrow="Quem já faz o ritual" title="Noites mais tranquilas, contadas por quem vive">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl bg-card p-6 text-card-foreground">
            <div className="mb-3 flex gap-0.5" aria-label="5 estrelas">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
            <blockquote className="text-sm leading-relaxed">“{t.text}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-serif text-lg text-lilac" aria-hidden>{t.name.charAt(0)}</span>
              <span><strong className="block text-sm">{t.name}</strong><span className="text-xs text-muted-foreground">{t.city}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
