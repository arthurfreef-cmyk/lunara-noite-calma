import { useCountdown } from "@/hooks/use-countdown";

export function TopBar() {
  const time = useCountdown();
  return (
    <div className="fixed inset-x-0 top-0 z-40 bg-night text-night-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-0.5 px-3 py-2 text-center text-[11px] sm:flex-row sm:gap-4 sm:text-xs">
        <span>Frete grátis nos kits de 4 e 6 potes · Garantia de 30 dias</span>
        <span className="font-semibold text-gold" aria-live="off">
          Condição especial termina em <span className="tabular-nums">{time}</span>
        </span>
      </div>
    </div>
  );
}
