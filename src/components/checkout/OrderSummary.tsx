import { Checkbox } from "@/components/ui/checkbox";
import { site, type Kit } from "@/config/site";
import { brl } from "@/lib/format";

interface Props {
  kit: Kit; bump: boolean; onBump: (v: boolean) => void;
  totals: { shipping: number; subtotal: number; discount: number; total: number };
}

export function OrderSummary({ kit, bump, onBump, totals }: Props) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-card p-5 shadow-card">
        <h2 className="mb-4 text-xl">Resumo do pedido</h2>
        <div className="flex items-center gap-3">
          <img src={kit.image} alt={kit.title} width={72} height={72} className="h-18 w-18 rounded-xl" />
          <div className="flex-1 text-sm"><strong className="block">{kit.title}</strong><span className="text-muted-foreground">{kit.duration} · {kit.pots * 60} cápsulas</span></div>
          <span className="text-sm font-semibold">{brl(kit.price)}</span>
        </div>
        <dl className="mt-4 space-y-1.5 border-t pt-4 text-sm">
          {site.bonuses.map((b) => <div key={b} className="flex justify-between gap-2"><dt className="text-muted-foreground">{b}</dt><dd className="text-success">Grátis</dd></div>)}
          {bump && <div className="flex justify-between"><dt>{site.orderBump.title}</dt><dd>{brl(site.orderBump.price)}</dd></div>}
          <div className="flex justify-between"><dt>Frete</dt><dd>{totals.shipping ? brl(totals.shipping) : <span className="text-success">Grátis</span>}</dd></div>
          {totals.discount > 0 && <div className="flex justify-between text-success"><dt>Desconto Pix (7%)</dt><dd>- {brl(totals.discount)}</dd></div>}
          <div className="flex justify-between border-t pt-2 text-lg font-bold"><dt>Total</dt><dd>{brl(totals.total)}</dd></div>
        </dl>
      </div>
      <label className="flex cursor-pointer gap-3 rounded-2xl border-2 border-dashed border-gold bg-gold/10 p-4">
        <Checkbox checked={bump} onCheckedChange={(v) => onBump(v === true)} className="mt-0.5" aria-label="Adicionar oferta especial" />
        <span className="text-sm">
          <strong className="block">Sim! Adicionar {site.orderBump.title} por {brl(site.orderBump.price)}</strong>
          <span className="text-muted-foreground">Complete seu ritual com um chá relaxante e um diário para registrar suas noites.</span>
        </span>
      </label>
    </div>
  );
}
