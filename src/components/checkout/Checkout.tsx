import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { getKit, site, type KitId } from "@/config/site";
import { brl } from "@/lib/format";
import { track } from "@/lib/tracking";
import { CtaButton } from "@/components/landing/CtaButton";
import { CustomerFields, type CustomerData, emptyCustomer, validateCustomer } from "./CustomerFields";
import { PaymentSelector, type PaymentMethod } from "./PaymentSelector";
import { OrderSummary } from "./OrderSummary";

export function Checkout({ kitId }: { kitId: KitId | string }) {
  const kit = getKit(kitId);
  const navigate = useNavigate();
  const [data, setData] = useState<CustomerData>(emptyCustomer);
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerData, string>>>({});
  const [method, setMethod] = useState<PaymentMethod>("pix");
  const [bump, setBump] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { track("InitiateCheckout", { value: kit.price, currency: "BRL", content_ids: [`kit-${kit.id}`] }); }, [kit.id, kit.price]);

  const totals = useMemo(() => {
    const shipping = kit.freeShipping ? 0 : site.shippingPrice;
    const subtotal = kit.price + (bump ? site.orderBump.price : 0);
    const discount = method === "pix" ? Math.round(subtotal * site.pixDiscount * 100) / 100 : 0;
    return { shipping, subtotal, discount, total: subtotal - discount + shipping };
  }, [kit, bump, method]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateCustomer(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setSubmitting(true);
    // Integração futura com gateway de pagamento. Aqui simulamos a aprovação.
    const order = { kit: kit.id, total: totals.total, method, bump, name: data.name };
    sessionStorage.setItem("lunara_order", JSON.stringify(order));
    track("Purchase", { value: totals.total, currency: "BRL", content_ids: [`kit-${kit.id}`] });
    void navigate({ to: "/obrigado-upsell" });
  };

  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center font-serif text-2xl text-night">{site.product}</p>
        <form onSubmit={submit} noValidate className="grid gap-6 md:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            <CustomerFields data={data} errors={errors} onChange={setData} />
            <PaymentSelector value={method} onChange={setMethod} total={totals.subtotal} />
          </div>
          <aside className="space-y-4 md:sticky md:top-6 md:self-start">
            <OrderSummary kit={kit} bump={bump} onBump={setBump} totals={totals} />
            <CtaButton type="submit" size="xl" disabled={submitting}>
              {submitting ? "Processando..." : `Finalizar compra · ${brl(totals.total)}`}
            </CtaButton>
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" aria-hidden />Compra 100% segura · Garantia de 30 dias</p>
          </aside>
        </form>
      </div>
    </main>
  );
}
