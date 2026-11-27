import { Link } from "@tanstack/react-router";
import { disclaimer, site } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-night px-5 pb-28 pt-12 text-xs text-night-foreground/70 md:pb-12">
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <p className="font-serif text-xl text-night-foreground">{site.product}</p>
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/termos" className="hover:text-gold">Termos de uso</Link>
          <Link to="/privacidade" className="hover:text-gold">Política de Privacidade</Link>
          <Link to="/trocas-e-garantia" className="hover:text-gold">Trocas e garantia</Link>
        </nav>
        <p>{site.legal.company} · CNPJ {site.legal.cnpj} · <a href={`mailto:${site.legal.email}`} className="underline">{site.legal.email}</a></p>
        <p>{disclaimer}</p>
        <p>{site.legal.anvisa}</p>
        <p>As informações deste site não substituem a orientação de um profissional de saúde. Resultados podem variar.</p>
      </div>
    </footer>
  );
}
