import { useEffect, useState } from "react";
import { site } from "@/config/site";

/** Retorna o tempo restante apenas quando existe uma data final real na configuração. */
export function useCountdown():string|null {
 const [now,setNow]=useState(Date.now());
 useEffect(()=>{if(!site.promo.endsAt)return;const id=setInterval(()=>setNow(Date.now()),1000);return()=>clearInterval(id);},[]);
 if(!site.promo.endsAt)return null;
 const end=new Date(site.promo.endsAt).getTime();
 if(!Number.isFinite(end)||end<=now)return null;
 const seconds=Math.floor((end-now)/1000);
 const days=Math.floor(seconds/86400),hours=Math.floor((seconds%86400)/3600),minutes=Math.floor((seconds%3600)/60),secs=seconds%60;
 return days>0?`${days}d ${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`:`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}
