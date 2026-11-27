import { site } from "@/config/site";

type MetaEvent = "PageView" | "ViewContent" | "AddToCart" | "InitiateCheckout" | "AddPaymentInfo" | "Purchase";
type FbqFn = (...args: unknown[]) => void;
declare global { interface Window { fbq?: FbqFn } }

function cookie(name:string):string{
 if(typeof document==="undefined")return "";
 const found=document.cookie.split("; ").find(part=>part.startsWith(name+"="));
 return found?decodeURIComponent(found.slice(name.length+1)):"";
}
function attribution(){
 try{return JSON.parse(sessionStorage.getItem("lunara-attribution")??"{}") as Record<string,string>;}catch{return {};}
}

export function initPixel():void{
 if(typeof window==="undefined"||!site.tracking.metaPixelId||window.fbq)return;
 const q:unknown[][]=[];
 const fbq= function(...args:unknown[]){q.push(args);} as FbqFn & {queue?:unknown[][];loaded?:boolean;version?:string};
 fbq.queue=q;fbq.loaded=true;fbq.version="2.0";
 window.fbq=fbq;
 const script=document.createElement("script");script.async=true;script.src="https://connect.facebook.net/en_US/fbevents.js";
 const first=document.getElementsByTagName("script")[0];if(first?.parentNode)first.parentNode.insertBefore(script,first);else document.head.appendChild(script);
 fbq("init",site.tracking.metaPixelId);
}

export function track(event:MetaEvent,data:Record<string,unknown>={}):string{
 const eventID=typeof crypto!=="undefined"&&"randomUUID" in crypto?crypto.randomUUID():event+"-"+Date.now()+"-"+Math.random().toString(36).slice(2,10);
 if(typeof window!=="undefined"){
  const enriched={...data,fbp:cookie("_fbp")||undefined,fbc:cookie("_fbc")||undefined,...attribution()};
  window.fbq?.("track",event,enriched,{eventID});
  const endpoint=site.checkout.analytics.conversionsApiEndpoint||site.tracking.conversionsApiEndpoint;
  if(endpoint){
   void fetch(endpoint,{method:"POST",headers:{"content-type":"application/json"},keepalive:true,body:JSON.stringify({event_name:event,event_id:eventID,event_source_url:window.location.href,custom_data:data,fbp:cookie("_fbp"),fbc:cookie("_fbc"),attribution:attribution()})}).catch(()=>undefined);
  }
 }
 return eventID;
}
export function trackCustom(name:string,data:Record<string,unknown>={}):void{
 if(typeof window==="undefined")return;
 window.fbq?.("trackCustom",name,data);
 const endpoint=site.checkout.funnel.endpoint;
 if(endpoint)void fetch(endpoint,{method:"POST",headers:{"content-type":"application/json"},keepalive:true,body:JSON.stringify({event_name:name,event_data:data,event_source_url:window.location.href,fbp:cookie("_fbp"),fbc:cookie("_fbc"),attribution:attribution()})}).catch(()=>undefined);
}
