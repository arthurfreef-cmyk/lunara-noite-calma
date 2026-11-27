import { CreditCard, QrCode, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrustBadges({ className }: { className?: string }) {
  const items = [
    { icon: QrCode, label: "Pix com desconto" },
    { icon: CreditCard, label: "12x no cartão" },
    { icon: ShieldCheck, label: "Garantia 30 dias" },
  ];
  return (
    <ul className={cn("grid grid-cols-3 gap-2", className)}>
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex flex-col items-center gap-1.5 rounded-xl border border-gold/30 px-2 py-3 text-center text-[11px] leading-tight sm:text-xs">
          <Icon className="h-5 w-5 text-gold" aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}
