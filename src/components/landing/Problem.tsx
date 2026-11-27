import { Brain, BatteryLow, CalendarX } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Brain, title: "Mente ligada", text: "O dia acaba, mas os pensamentos continuam rodando: tarefas, telas, conversas. A cabeça não recebe o sinal de que é hora de parar." },
  { icon: BatteryLow, title: "Corpo cansado", text: "Você está exausto, mas não consegue relaxar. Corpo e mente seguem em ritmos diferentes no fim do dia." },
  { icon: CalendarX, title: "Rotina sem ritual", text: "Sem um momento de transição, a noite vira extensão do dia. Um ritual simples ajuda a criar o caminho para desacelerar." },
];

export function Problem() {
  return (
    <Section eyebrow="Entenda" title="Por que sua mente não desliga à noite?">
      <p className="mx-auto -mt-4 mb-10 max-w-2xl text-center text-muted-foreground">
        Durante o dia, vivemos em modo alerta. À noite, muita gente simplesmente não tem um momento de pausa entre esse modo e o descanso. O resultado é a sensação de mente acelerada justamente quando você queria desligar.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-2xl bg-card p-6 shadow-card">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary"><Icon className="h-6 w-6 text-lilac" aria-hidden /></span>
            <h3 className="mb-2 text-xl">{title}</h3>
            <p className="text-sm text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
