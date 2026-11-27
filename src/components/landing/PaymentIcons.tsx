import { Barcode, CreditCard, Lock, QrCode } from "lucide-react";

export function PaymentIcons() {
  return (
    <div className="mt-10 flex flex-col items-center gap-3 text-sm">
      <div className="flex gap-5" aria-label="Formas de pagamento: Pix, cartão e boleto">
        {[{ I: QrCode, l: "Pix" }, { I: CreditCard, l: "Cartão" }, { I: Barcode, l: "Boleto" }].map(({ I, l }) => (
          <span key={l} className="flex items-center gap-1.5"><I className="h-5 w-5 text-gold" aria-hidden />{l}</span>
        ))}
      </div>
      <p className="flex items-center gap-1.5 opacity-80"><Lock className="h-4 w-4" aria-hidden /> Compra 100% segura</p>
    </div>
  );
}
