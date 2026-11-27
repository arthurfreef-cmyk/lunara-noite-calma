import { ShieldCheck } from "lucide-react";
import { Section } from "./Section";

export function Guarantee() {
  return (
    <Section>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-card p-8 text-center shadow-card md:flex-row md:text-left">
        <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full bg-gold-gradient text-gold-foreground shadow-gold">
          <ShieldCheck className="h-8 w-8" aria-hidden />
          <span className="font-serif text-3xl font-bold leading-none">30</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">dias</span>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl">30 dias de garantia incondicional</h2>
          <p className="mt-3 text-muted-foreground">
            Queremos que você experimente o ritual com tranquilidade. Se nos primeiros 30 dias você sentir que não é para você, é só nos chamar. Devolvemos todo o seu dinheiro, sem perguntas difíceis.
          </p>
        </div>
      </div>
    </Section>
  );
}
