import { Brain, BatteryLow, Smartphone, MoonStar } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Brain, text: "Deito, mas a cabeça não para" },
  { icon: BatteryLow, text: "O dia termina, mas eu continuo ligada(o)" },
  { icon: MoonStar, text: "Estou cansada(o) e ainda assim não consigo desacelerar" },
  { icon: Smartphone, text: "Gasto minha noite no celular" },
];

export function Problem() {
  return <Section eyebrow="Você se reconhece nisso?" title="Quando o dia termina, mas a mente continua no ritmo dele">
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map(({ icon: Icon, text }) => <article key={text} className="flex min-h-24 items-center gap-4 rounded-2xl bg-card p-5 shadow-card"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary"><Icon className="h-6 w-6 text-lilac" /></span><p className="text-[16px] font-medium">{text}</p></article>)}
    </div>
    <p className="mx-auto mt-8 max-w-2xl text-center text-[17px] leading-relaxed text-muted-foreground">Nem sempre é fácil sair do ritmo do dia de uma hora para outra. Criar um pequeno momento de transição pode ajudar você a sinalizar que chegou a hora de desacelerar, sem cobrança e sem complicação.</p>
    <div className="mt-10 rounded-3xl bg-night p-6 text-night-foreground sm:p-8">
      <h3 className="mb-5 text-center text-2xl">O ciclo da mente acelerada à noite</h3>
      <div className="grid gap-3 sm:grid-cols-3">
        {["Dia em alerta", "Sem transição", "Noite sem ritual"].map((s, i) => <div key={s} className="rounded-2xl border border-lilac/30 bg-white/5 p-4 text-center"><span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-night">{i + 1}</span><p className="font-semibold">{s}</p></div>)}
      </div>
      <p className="mt-5 text-center text-sm text-night-foreground/75">O Lunara entra como um ritual de transição: 2 cápsulas, menos telas e um momento reservado para você.</p>
    </div>
  </Section>;
}
