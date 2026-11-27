import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Lock, AlertCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { getKit, site, type KitId } from "@/config/site";
import { brl } from "@/lib/format";
import { track } from "@/lib/tracking";
import { CtaButton } from "@/components/landing/CtaButton";
import { CustomerFields, type CustomerData, emptyCustomer, validateCustomer } from "./CustomerFields";
import { PaymentSelector, type PaymentMethod } from "./PaymentSelector";
import { OrderSummary } from "./OrderSummary";

export function Checkout({kitId}:{kitId:KitId|string}) {
 const kit=getKit(kitId);
 const [data,setData]=useState<CustomerData>(emptyCustomer);
 const [errors,setErrors]=useState<Partial<Record<keyof CustomerData,string>>>({});
 const [method,setMethod]=useState<PaymentMethod>("pix");
 const [bump,setBump]=useState(false);
 const [checkoutNotice,setCheckoutNotice]=useState("");
 useEffect(()=>{track("InitiateCheckout",{value:kit.price,currency:"BRL",content_ids:[`kit-${kit.id}`]});},[kit.id,kit.price]);
 const totals=useMemo(()=>{
  const shipping=kit.freeShipping?0:site.shippingPrice;
  const subtotal=kit.price+(bump?site.orderBump.price:0);
  const discount=method==="pix"?Math.round(subtotal*site.pixDiscount*100)/100:0;
  return {shipping,subtotal,discount,total:subtotal-discount+shipping};
 },[kit,bump,method]);
 const submit=(e:FormEvent)=>{
  e.preventDefault();setCheckoutNotice("");
  const errs=validateCustomer(data);setErrors(errs);
  if(Object.keys(errs).length){document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();return;}
  setCheckoutNotice("Os dados foram validados, mas o gateway de pagamento ainda não está conectado. Nenhuma cobrança ou compra foi realizada. Conecte o provedor de pagamento para habilitar a finalização.");
 };
 return <main className="min-h-screen bg-background px-4 py-6 sm:py-8">
  <div className="mx-auto max-w-5xl">
   <p className="mb-5 text-center font-serif text-2xl text-night">{site.product}</p>
   <form onSubmit={submit} noValidate className="grid gap-6 md:grid-cols-[1fr_380px]">
    <div className="order-2 space-y-6 md:order-1">
     <CustomerFields data={data} errors={errors} onChange={setData}/>
     <label className="flex cursor-pointer gap-3 rounded-2xl border-2 border-dashed border-gold bg-gold/10 p-4">
      <Checkbox checked={bump} onCheckedChange={v=>setBump(v===true)} className="mt-0.5" aria-label="Adicionar oferta complementar"/>
      <span className="text-sm"><strong className="block">Adicionar {site.orderBump.title} por {brl(site.orderBump.price)}</strong><span className="text-muted-foreground">Uma opção complementar para acompanhar sua rotina.</span></span>
     </label>
     <PaymentSelector value={method} onChange={setMethod} total={totals.subtotal}/>
     {checkoutNotice&&<div role="alert" className="flex gap-3 rounded-xl border border-amber-500/40 bg-amber-50 p-4 text-sm text-amber-950"><AlertCircle className="h-5 w-5 shrink-0"/><p>{checkoutNotice}</p></div>}
     <CtaButton type="submit" size="xl" className="min-h-[56px] w-full">Revisar dados do pedido · {brl(totals.total)}</CtaButton>
     <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5"/>Seus dados são usados para processar o pedido.</p>
    </div>
    <aside className="order-1 space-y-4 md:sticky md:top-6 md:order-2 md:self-start">
     <OrderSummary kit={kit} bump={bump} totals={totals}/>
    </aside>
   </form>
  </div>
 </main>;
}
