import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import kit2 from "@/assets/kit-2-potes.jpg";
import { site } from "@/config/site";
import { brl } from "@/lib/format";
import { track } from "@/lib/tracking";
import { CtaButton } from "@/components/landing/CtaButton";

export const Route = createFileRoute("/obrigado-upsell")({
  head: () => ({
    meta: [
      { title: "Pedido confirmado · Lunara Noite Calma" },
      { name: "description", content: "Seu pedido foi recebido. Aproveite uma oferta exclusiva." },
      { property: "og:title", content: "Pedido confirmado · Lunara" },
      { property: "og:description", content: "Obrigado por começar seu ritual noturno." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Upsell,
});

function Upsell() {
  const [status, setStatus] = useState<"offer" | "accepted" | "declined">("offer");
  const { pots, discount, unitPrice } = site.upsell;
  const full = pots * unitPrice;
  const price = Math.round(full * (1 - discount) * 100) / 100;

  return (
    <main className="stars flex min-h-screen items-center bg-night-gradient px-5 py-12 text-night-foreground">
      <div className="relative mx-auto max-w-lg text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" aria-hidden />
        <p className="mt-3 text-sm">Pedido recebido! Enviamos os detalhes para seu e-mail.</p>
        {status === "offer" ? (
          <div className="mt-8 rounded-3xl bg-card p-6 text-card-foreground shadow-card">
            <p className="text-xs font-bold uppercase tracking-widest text-lilac">Oferta única, só nesta página</p>
            <h1 className="mt-2 text-3xl">Adicione +{pots} potes com {Math.round(discount * 100)}% de desconto</h1>
            <img src={kit2} alt="2 potes adicionais" width={816} height={816} className="mx-auto my-5 w-48 rounded-2xl" />
            <p className="text-sm text-muted-foreground">de <s>{brl(full)}</s> por</p>
            <p className="font-serif text-4xl font-bold text-night">{brl(price)}</p>
            <p className="mb-6 text-xs text-muted-foreground">Enviado junto com seu pedido, sem frete adicional.</p>
            <CtaButton size="lg" onClick={() => { track("Purchase", { value: price, currency: "BRL", content_ids: ["upsell-2"] }); setStatus("accepted"); }}>Sim, adicionar</CtaButton>
            <CtaButton variant="ghost" size="md" pulse={false} className="mt-2" onClick={() => setStatus("declined")}>Não, obrigado</CtaButton>
          </div>
        ) : (
          <div className="mt-8">
            <h1 className="text-3xl">{status === "accepted" ? "Potes adicionados ao seu pedido!" : "Tudo certo com seu pedido!"}</h1>
            <p className="mt-3 text-night-foreground/80">Seus bônus chegam no seu e-mail em instantes. Boas noites com Lunara.</p>
          </div>
        )}
      </div>
    </main>
  );
}
