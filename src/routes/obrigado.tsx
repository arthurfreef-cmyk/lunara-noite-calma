import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock3, MessageCircle, PackageCheck } from "lucide-react";
import { site, getKit } from "@/config/site";
import { brl } from "@/lib/format";
import { track } from "@/lib/tracking";

type VerifiedOrder={id:string;status:"paid";total:number;kitId:"2"|"4"|"6";trackingUrl?:string;bonusAccessUrl?:string;deliveryEstimate?:string};
export const Route=createFileRoute("/obrigado")({validateSearch:(s:Record<string,unknown>)=>({order_id:typeof s.order_id==="string"?s.order_id:""}),head:()=>({meta:[{title:"Pedido · Lunara Noite Calma"},{name:"robots",content:"noindex"}]}),component:ThankYouPage});
function ThankYouPage(){
 const {order_id}=Route.useSearch();const [order,setOrder]=useState<VerifiedOrder|null>(null);const [loading,setLoading]=useState(true);const [error,setError]=useState("");
 useEffect(()=>{
  let alive=true;
  const endpoint=site.checkout.payment.orderStatusEndpoint;
  if(!order_id||!endpoint){setLoading(false);setError("A confirmação automática ainda não está configurada. Consulte o status pelo canal de atendimento da loja.");return;}
  fetch(endpoint+(endpoint.includes("?")?"&":"?")+"order_id="+encodeURIComponent(order_id)).then(async r=>{if(!r.ok)throw new Error("Não foi possível consultar o pedido.");return await r.json() as {order?:VerifiedOrder};}).then(payload=>{
   if(!alive)return;const verified=payload.order;
   if(!verified||verified.status!=="paid"){setError("O pagamento ainda não foi confirmado. Se você pagou via Pix ou boleto, aguarde a atualização do provedor.");return;}
   setOrder(verified);
   try{const key="lunara-purchase-"+verified.id;if(!sessionStorage.getItem(key)){track("Purchase",{value:verified.total,currency:"BRL",content_ids:["kit-"+verified.kitId],order_id:verified.id});sessionStorage.setItem(key,"sent");}}catch{track("Purchase",{value:verified.total,currency:"BRL",content_ids:["kit-"+verified.kitId],order_id:verified.id});}
  }).catch(e=>{if(alive)setError(e instanceof Error?e.message:"Falha ao consultar o pedido.");}).finally(()=>{if(alive)setLoading(false);});
  return()=>{alive=false;};
 },[order_id]);
 const kit=order?getKit(order.kitId):null;
 return <main className="flex min-h-screen items-center justify-center bg-cream px-4 py-12"><div className="w-full max-w-xl rounded-3xl bg-white p-6 text-center shadow-card sm:p-10">
  {loading?<><Clock3 className="mx-auto h-12 w-12 text-lilac"/><h1 className="mt-4 font-serif text-3xl">Consultando seu pedido</h1><p className="mt-2 text-sm text-muted-foreground">Estamos verificando a confirmação com o provedor de pagamento.</p></>:order&&kit?<><CheckCircle2 className="mx-auto h-14 w-14 text-green-600"/><h1 className="mt-4 font-serif text-3xl text-night">Pedido confirmado!</h1><p className="mt-2 text-sm text-muted-foreground">Seu pagamento foi confirmado pelo provedor.</p><div className="mt-6 rounded-2xl bg-cream p-4 text-left"><div className="flex justify-between text-sm"><span>{kit.title}</span><strong>{brl(order.total)}</strong></div><p className="mt-2 text-xs text-muted-foreground">Pedido {order.id}</p>{order.deliveryEstimate&&<p className="mt-3 text-sm">Previsão de entrega: {order.deliveryEstimate}</p>}</div><div className="mt-5 space-y-3 text-left text-sm"><p className="flex items-start gap-2"><PackageCheck size={18} className="shrink-0 text-lilac"/> Você receberá as atualizações de envio no contato informado no pedido.</p><p>Os bônus digitais incluídos no seu kit: {site.bonuses.join(" e ")}. O acesso deve ser disponibilizado pelo fluxo de confirmação da loja.</p>{order.trackingUrl&&<a className="block rounded-xl border border-night/20 p-3 text-center font-semibold" href={order.trackingUrl}>Acompanhar entrega</a>}{order.bonusAccessUrl&&<a className="block rounded-xl border border-night/20 p-3 text-center font-semibold" href={order.bonusAccessUrl}>Acessar bônus digitais</a>}</div></>:<><Clock3 className="mx-auto h-12 w-12 text-amber-600"/><h1 className="mt-4 font-serif text-3xl text-night">Estamos aguardando a confirmação</h1><p className="mt-3 text-sm text-muted-foreground">{error||"Não foi possível confirmar o pagamento neste momento."}</p><p className="mt-3 text-xs text-muted-foreground">Não atualize esta página repetidamente. O status poderá ser consultado novamente quando o provedor estiver conectado.</p></>}
  {site.checkout.supportWhatsapp&&<a href={"https://wa.me/"+site.checkout.supportWhatsapp.replace(/\D/g,"")} className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-night px-5 py-3 text-sm font-semibold text-white"><MessageCircle size={17}/> Suporte pelo WhatsApp</a>}
 </div></main>;
}
