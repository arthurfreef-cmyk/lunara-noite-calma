import { BookOpen, Headphones } from "lucide-react";
import { site } from "@/config/site";
import { brl } from "@/lib/format";
import { Section } from "./Section";

const icons = [BookOpen, Headphones];

export function Bonus() {
  return (
    <Section eyebrow="Presentes para você" title="Bônus inclusos no seu ritual">
      <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
        {site.bonuses.map((b, i) => {
          const Icon = icons[i] ?? BookOpen;
          return (
            <article key={b} className="flex items-center gap-4 rounded-2xl border-2 border-dashed border-gold/60 bg-card p-5">
              <Icon className="h-10 w-10 shrink-0 text-lilac" aria-hidden />
              <div>
                <h3 className="text-lg leading-snug">{b}</h3>
                <p className="mt-1 text-sm"><s className="text-muted-foreground">de {brl(site.bonusValue)}</s> <strong className="ml-1 text-success">GRÁTIS hoje</strong></p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
