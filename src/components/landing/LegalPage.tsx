import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { site } from "@/config/site";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Link to="/" className="text-sm text-lilac">← Voltar</Link>
      <h1 className="mt-4 text-3xl md:text-4xl">{title}</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
      <p className="mt-10 text-xs text-muted-foreground">{site.legal.company} · CNPJ {site.legal.cnpj} · {site.legal.email}</p>
    </main>
  );
}
