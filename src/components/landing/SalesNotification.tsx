import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { salesNotifications } from "@/config/site";

/** Notificação social discreta, dados fictícios editáveis em config/site.ts. */
export function SalesNotification() {
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => {
    let i = 0;
    let hide: ReturnType<typeof setTimeout>;
    const show = () => {
      setIdx(i % salesNotifications.length);
      i += 1;
      hide = setTimeout(() => setIdx(null), 5000);
    };
    const first = setTimeout(show, 12000);
    const loop = setInterval(show, 28000);
    return () => { clearTimeout(first); clearInterval(loop); clearTimeout(hide); };
  }, []);
  const n = idx === null ? null : salesNotifications[idx];
  if (!n) return null;
  return (
    <div role="status" className="animate-slide-up fixed bottom-20 left-3 z-30 flex max-w-[280px] items-center gap-3 rounded-2xl bg-card p-3 text-xs shadow-card md:bottom-5">
      <ShoppingBag className="h-5 w-5 shrink-0 text-lilac" aria-hidden />
      <p><strong>{n.name}</strong>, de {n.city}, acabou de comprar o <strong>{n.kit}</strong></p>
    </div>
  );
}
