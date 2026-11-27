import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { site } from "@/config/site";
import { CtaButton, scrollToOffers } from "./CtaButton";

const KEY = "lunara_exit_shown";

/** Exit intent no desktop; aviso após 45s no mobile. Uma vez por sessão. */
export function ExitPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem(KEY)) return;
    const show = () => { if (!sessionStorage.getItem(KEY)) { sessionStorage.setItem(KEY, "1"); setOpen(true); } };
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      const t = setTimeout(show, 45000);
      return () => clearTimeout(t);
    }
    const onLeave = (e: MouseEvent) => { if (e.clientY <= 0) show(); };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);
  const { code, percent, method } = site.exitCoupon;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="stars max-w-sm rounded-3xl border-gold/40 bg-night-gradient text-center text-night-foreground">
        <DialogTitle className="font-serif text-2xl">Antes de ir, um presente</DialogTitle>
        <DialogDescription className="text-night-foreground/80">
          Ganhe <strong className="text-gold">{percent}% off</strong> no {method} com o cupom abaixo.
        </DialogDescription>
        <p className="mx-auto rounded-xl border-2 border-dashed border-gold px-6 py-3 font-mono text-2xl tracking-widest text-gold">{code}</p>
        <CtaButton size="md" onClick={() => { setOpen(false); scrollToOffers(); }}>Usar meu cupom</CtaButton>
      </DialogContent>
    </Dialog>
  );
}
