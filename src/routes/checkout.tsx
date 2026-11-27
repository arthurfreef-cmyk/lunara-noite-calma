import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useEffect } from "react";
import { Checkout } from "@/components/checkout/Checkout";
import { initPixel } from "@/lib/tracking";

const schema = z.object({ kit: fallback(z.string(), "4").default("4") });

export const Route = createFileRoute("/checkout")({
  validateSearch: zodValidator(schema),
  head: () => ({
    meta: [
      { title: "Checkout seguro · Lunara Noite Calma" },
      { name: "description", content: "Finalize seu pedido de Lunara Noite Calma com Pix, cartão ou boleto." },
      { property: "og:title", content: "Checkout · Lunara Noite Calma" },
      { property: "og:description", content: "Compra 100% segura com garantia de 30 dias." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { kit } = Route.useSearch();
  useEffect(() => { initPixel(); }, []);
  return <Checkout kitId={kit} />;
}
