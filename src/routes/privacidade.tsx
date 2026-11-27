import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade · Lunara Noite Calma" },
      { name: "description", content: "Política de Privacidade da loja Lunara Noite Calma." },
      { property: "og:title", content: "Política de Privacidade · Lunara" },
      { property: "og:description", content: "Política de Privacidade da loja Lunara Noite Calma." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>Coletamos nome, e-mail, WhatsApp, CPF e endereço exclusivamente para processar e entregar seu pedido, conforme a LGPD (Lei 13.709/2018).</p>
      <p>Utilizamos cookies e o Pixel da Meta para medir campanhas. Você pode solicitar acesso, correção ou exclusão dos seus dados em {site.legal.email}.</p>
      <p>Texto editável: revise com seu jurídico antes de publicar.</p>
    </LegalPage>
  );
}
