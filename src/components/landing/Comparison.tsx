import { Check, Minus } from "lucide-react";
import { Section } from "./Section";

const rows=[
 ["Combinação de magnésio, L-teanina, camomila e maracujá","Sim","Depende da infusão","Depende da fórmula"],
 ["Porção diária de 2 cápsulas","Sim","Não se aplica","Depende do rótulo"],
 ["Guia e áudios guiados inclusos","Sim","Não incluso","Depende da oferta"],
 ["Garantia de 30 dias","Sim","Depende do fornecedor","Depende do fornecedor"],
 ["Frete grátis nos kits maiores","Sim","Não se aplica","Depende da loja"]
];
export function Comparison(){
 return <Section eyebrow="Compare com clareza" title="Por que escolher um ritual completo?">
  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
   <table className="w-full min-w-[620px] text-left text-sm">
    <thead className="bg-night text-night-foreground"><tr><th className="p-4">O que está incluso</th><th className="p-4 text-gold">Lunara</th><th className="p-4">Só chá</th><th className="p-4">Magnésio genérico</th></tr></thead>
    <tbody>{rows.map(([label,lunara,tea,generic])=><tr key={label} className="border-t border-border"><th className="p-4 font-medium">{label}</th>{[lunara,tea,generic].map((v,i)=><td key={i} className="p-4">{v==="Sim"?<span className="inline-flex items-center gap-1 font-semibold text-success"><Check className="h-4 w-4"/>{v}</span>:v==="Não incluso"?<span className="inline-flex items-center gap-1 text-muted-foreground"><Minus className="h-4 w-4"/>{v}</span>:<span className="text-muted-foreground">{v}</span>}</td>)}</tr>)}</tbody>
   </table>
  </div>
  <p className="mt-3 text-center text-xs text-muted-foreground">Comparativo de itens e formato da oferta. Características de chás e suplementos variam conforme fabricante e rótulo.</p>
 </Section>;
}
