import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { disclaimer, faq } from "@/config/site";
import { Section } from "./Section";

export function FAQ() {
  return (
    <Section eyebrow="Dúvidas" title="Perguntas frequentes">
      <Accordion type="single" collapsible className="mx-auto max-w-2xl">
        {faq.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="mx-auto mt-8 max-w-2xl rounded-xl bg-muted p-4 text-center text-xs text-muted-foreground">{disclaimer}</p>
    </Section>
  );
}
