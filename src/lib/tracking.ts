/**
 * Camada de tracking. Pronta para Meta Pixel (fbq) e estruturada para a API de Conversões:
 * cada evento recebe um eventID, que deve ser reenviado pelo servidor para deduplicação.
 */
import { site } from "@/config/site";

type MetaEvent = "PageView" | "ViewContent" | "InitiateCheckout" | "AddPaymentInfo" | "Purchase";
type FbqFn = (...args: unknown[]) => void;
declare global { interface Window { fbq?: FbqFn } }

export function initPixel(): void {
  if (typeof window === "undefined" || !site.tracking.metaPixelId || window.fbq) return;
  /* Snippet oficial da Meta, simplificado */
  const q: unknown[][] = [];
  const fbq: FbqFn = (...args) => { q.push(args); };
  window.fbq = fbq;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  fbq("init", site.tracking.metaPixelId);
}

export function track(event: MetaEvent, data: Record<string, unknown> = {}): string {
  const eventID = `${event}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  if (typeof window !== "undefined") {
    window.fbq?.("track", event, data, { eventID });
    // Futuro: enviar { event, data, eventID } para site.tracking.conversionsApiEndpoint via servidor.
  }
  return eventID;
}

export function trackCustom(name: string, data: Record<string, unknown> = {}): void {
  if (typeof window !== "undefined") window.fbq?.("trackCustom", name, data);
}
