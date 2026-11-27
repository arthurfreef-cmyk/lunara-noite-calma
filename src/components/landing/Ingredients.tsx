import { Flower2, Leaf, Sparkles } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Sparkles, title: "Magnésio", text: "Mineral essencial que contribui para o funcionamento normal dos músculos e do sistema nervoso." },
  { icon: Leaf, title: "L-teanina", text: "Aminoácido presente naturalmente no chá verde, conhecido por acompanhar momentos de calma e foco tranquilo." },
  { icon: Flower2, title: "Camomila e maracujá", text: "Extratos botânicos tradicionalmente usados em rituais noturnos de relaxamento e conforto." },
];

export function Ingredients() {
  return (
    <Section tone="dark" eyebrow="Fórmula" title="O que tem dentro de cada cápsula">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-2xl border border-lilac/30 bg-night/60 p-6 backdrop-blur">
            <Icon className="mb-4 h-8 w-8 text-gold" aria-hidden />
            <h3 className="mb-2 text-2xl">{title}</h3>
            <p className="text-sm text-night-foreground/75">{text}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-night-foreground/70">60 cápsulas por pote · 2 ao dia · 30 dias de ritual</p>
    </Section>
  );
}
