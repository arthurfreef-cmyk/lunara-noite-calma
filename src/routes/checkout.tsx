import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Checkout } from "@/components/checkout/Checkout";
import { initPixel } from "@/lib/tracking";


export const Route = createFileRoute("/checkout")({
  validateSearch: (s: Record<string, unknown>): { kit: string } => ({ kit: typeof s["kit"] === "string" || typeof s["kit"] === "number" ? String(s["kit"]) : "4" }),
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
