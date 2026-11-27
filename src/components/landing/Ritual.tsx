import { Section } from "./Section";

const steps = [
  { week: "Semana 1", title: "Criando o hábito", text: "Escolha um horário fixo, tome suas 2 cápsulas e inicie o guia de 21 dias." },
  { week: "Semana 2", title: "Ajustando a rotina", text: "Diminua as telas antes de deitar e experimente os áudios guiados." },
  { week: "Semana 3", title: "Ganhando constância", text: "O ritual começa a ficar natural. Perceba como você se sente no fim do dia." },
  { week: "Semana 4", title: "Seu novo momento", text: "Ritual consolidado. Mantenha a constância para aproveitar sua rotina noturna." },
];

export function Ritual() {
  return (
    <Section eyebrow="Passo a passo" title="Seu ritual de 30 dias">
      <ol className="relative mx-auto max-w-2xl border-l-2 border-lilac/40 pl-8">
        {steps.map((s) => (
          <li key={s.week} className="relative mb-8 last:mb-0">
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-gold ring-4 ring-background" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-widest text-lilac">{s.week}</p>
            <h3 className="mt-1 text-xl">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted-foreground">As experiências variam de pessoa para pessoa. Constância e bons hábitos fazem parte do ritual.</p>
    </Section>
  );
}
