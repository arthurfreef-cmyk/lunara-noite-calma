import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
export const Route=createFileRoute("/obrigado-upsell")({validateSearch:(s:Record<string,unknown>)=>({order_id:typeof s.order_id==="string"?s.order_id:""}),component:LegacyUpsellRedirect});
function LegacyUpsellRedirect(){const {order_id}=Route.useSearch();useEffect(()=>{window.location.replace(order_id?"/oferta-especial?order_id="+encodeURIComponent(order_id):"/obrigado");},[order_id]);return <main className="flex min-h-screen items-center justify-center bg-cream p-6 text-center"><p className="text-sm text-muted-foreground">Redirecionando para a confirmação segura do pedido…</p></main>;}
