import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";
import { site } from "@/config/site";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de uso · Lunara Noite Calma" },
      { name: "description", content: "Termos de uso da loja Lunara Noite Calma." },
      { property: "og:title", content: "Termos de uso · Lunara" },
      { property: "og:description", content: "Termos de uso da loja Lunara Noite Calma." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Termos de uso">
      <p>Ao utilizar este site e realizar compras, você concorda com estes termos. Texto editável: substitua pelo conteúdo revisado pelo seu jurídico.</p>
      <p>Os produtos comercializados são suplementos alimentares e não substituem uma alimentação equilibrada nem orientação profissional.</p>
      <p>Preços e condições podem ser alterados sem aviso prévio. Dúvidas: {site.legal.email}.</p>
    </LegalPage>
  );
}
