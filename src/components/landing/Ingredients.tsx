import { Flower2, Leaf, Sparkles, Sprout } from "lucide-react";
import { site } from "@/config/site";
import { Section } from "./Section";

const items = [
  { icon: Sparkles, title: "Magnésio", text: "Mineral essencial presente em diferentes funções do organismo. Consulte a quantidade declarada no rótulo." },
  { icon: Leaf, title: "L-teanina", text: "Componente naturalmente encontrado no chá, incluído na fórmula do ritual noturno." },
  { icon: Flower2, title: "Camomila", text: "Botânico tradicionalmente associado a infusões e momentos de relaxamento." },
  { icon: Sprout, title: "Maracujá", text: "Ingrediente botânico tradicionalmente presente em preparações de bem-estar." },
];

export function Ingredients() {
  const hasTable = site.ingredients.isReal && site.ingredients.nutrients.length > 0;
  const seals = site.certifications.filter((s) => s.isReal);
  return <Section tone="dark" eyebrow="Fórmula e transparência" title="O que faz parte do seu ritual">
    <p className="mx-auto mb-8 max-w-2xl text-center text-[17px] text-night-foreground/75">Uma combinação de magnésio, L-teanina, camomila e maracujá em uma rotina simples de 2 cápsulas por dia.</p>
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-lilac/30 bg-night/60 p-6"><Icon className="mb-4 h-8 w-8 text-gold" /><h3 className="mb-2 text-2xl">{title}</h3><p className="text-[15px] leading-relaxed text-night-foreground/75">{text}</p></article>)}
    </div>
    <div className="mt-8 rounded-2xl border border-gold/30 bg-night/70 p-5">
      <h3 className="text-xl">Informação nutricional por porção ({site.ingredients.serving})</h3>
      {hasTable ? <div className="mt-4 overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr><th className="p-2">Componente</th><th className="p-2">Quantidade</th><th className="p-2">%VD</th></tr></thead><tbody>{site.ingredients.nutrients.map((n) => <tr key={n.name} className="border-t border-white/15"><td className="p-2">{n.name}</td><td className="p-2">{n.amount}</td><td className="p-2">{n.dailyValue}</td></tr>)}</tbody></table></div> : <p className="mt-2 text-sm text-night-foreground/70">Consulte a tabela nutricional e a lista completa de ingredientes na embalagem do produto. As quantidades e os percentuais diários ainda não foram validados para publicação digital.</p>}
    </div>
    {seals.length > 0 && <div className="mt-5 flex flex-wrap justify-center gap-3">{seals.map((s) => <span key={s.label} className="rounded-full border border-gold/40 px-4 py-2 text-sm">{s.label}</span>)}</div>}
    <p className="mt-6 text-center text-sm text-night-foreground/70">60 cápsulas por pote · Porção diária de 2 cápsulas · 30 dias por pote</p>
  </Section>;
}
