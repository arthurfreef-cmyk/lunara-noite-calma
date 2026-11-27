import { useEffect, useState } from "react";
import { site } from "@/config/site";

const KEY = "lunara_countdown_end";

/** Contador por sessão: guarda o fim no sessionStorage e reinicia ao zerar. */
export function useCountdown(): string {
  const [left, setLeft] = useState<number>(site.countdownMinutes * 60);
  useEffect(() => {
    const duration = site.countdownMinutes * 60 * 1000;
    const getEnd = (): number => {
      const saved = Number(sessionStorage.getItem(KEY));
      if (saved && saved > Date.now()) return saved;
      const end = Date.now() + duration;
      sessionStorage.setItem(KEY, String(end));
      return end;
    };
    let end = getEnd();
    const tick = () => {
      if (end <= Date.now()) end = getEnd();
      setLeft(Math.max(0, Math.round((end - Date.now()) / 1000)));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return `${m}:${s}`;
}
