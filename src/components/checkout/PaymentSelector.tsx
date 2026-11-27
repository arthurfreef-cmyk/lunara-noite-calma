import { Barcode, CreditCard, QrCode } from "lucide-react";
import { site } from "@/config/site";
import { brl } from "@/lib/format";
import { cn } from "@/lib/utils";

export type PaymentMethod = "pix" | "card" | "boleto";

interface Props { value: PaymentMethod; onChange: (m: PaymentMethod) => void; total: number }

export function PaymentSelector({ value, onChange, total }: Props) {
  const options = [
    { id: "pix" as const, icon: QrCode, label: "Pix", hint: `7% de desconto · ${brl(total * (1 - site.pixDiscount))}` },
    { id: "card" as const, icon: CreditCard, label: "Cartão de crédito", hint: `Até ${site.installments}x de ${brl(total / site.installments)}` },
    { id: "boleto" as const, icon: Barcode, label: "Boleto", hint: "Aprovação em até 2 dias úteis" },
  ];
  return (
    <fieldset className="rounded-2xl bg-card p-5 shadow-card">
      <legend className="mb-4 font-serif text-xl">3. Pagamento</legend>
      <div role="radiogroup" className="grid gap-3">
        {options.map(({ id, icon: Icon, label, hint }) => (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={value === id}
            onClick={() => onChange(id)}
            className={cn("flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", value === id ? "border-gold bg-gold/10" : "border-border")}
          >
            <Icon className="h-6 w-6 text-lilac" aria-hidden />
            <span className="flex-1"><strong className="block text-sm">{label}</strong><span className="text-xs text-muted-foreground">{hint}</span></span>
            <span className={cn("h-5 w-5 rounded-full border-2", value === id ? "border-gold bg-gold" : "border-input")} aria-hidden />
          </button>
        ))}
      </div>
      {value === "card" && <p className="mt-3 text-xs text-muted-foreground">Os dados do cartão serão solicitados no ambiente seguro do gateway de pagamento. A opção de pagamento será concluída após a conexão do gateway.</p>}
    </fieldset>
  );
}
