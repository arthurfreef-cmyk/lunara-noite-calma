import { Star } from "lucide-react";
import { site } from "@/config/site";

export function SocialProof() {
  const proof = site.socialProof;
  if (!proof.isReal || !proof.rating || !proof.reviews) return null;
  return <div className="border-y border-gold/30 bg-night-soft px-5 py-4 text-night-foreground">
    <div className="mx-auto flex max-w-4xl items-center justify-center gap-2 text-center text-sm">
      <span className="flex" aria-hidden>{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</span>
      <strong>{proof.rating}/5</strong><span className="text-night-foreground/70">· {proof.reviews}</span>
    </div>
  </div>;
}
