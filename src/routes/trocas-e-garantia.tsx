import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";
import { site } from "@/config/site";

export const Route = createFileRoute("/trocas-e-garantia")({
  head: () => ({
    meta: [
      { title: "Trocas e garantia · Lunara Noite Calma" },
      { name: "description", content: "Trocas e garantia da loja Lunara Noite Calma." },
      { property: "og:title", content: "Trocas e garantia · Lunara" },
      { property: "og:description", content: "Trocas e garantia da loja Lunara Noite Calma." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Trocas e garantia">
      <p>Você tem 30 dias a partir do recebimento para solicitar a devolução de 100% do valor pago, mesmo com o produto aberto.</p>
      <p>Para solicitar, envie um e-mail para {site.legal.email} com o número do pedido. O reembolso é feito pelo mesmo meio de pagamento em até 10 dias úteis após a aprovação.</p>
      <p>Produtos com avaria no transporte são trocados sem custo.</p>
    </LegalPage>
  );
}
