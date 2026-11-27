import { Star } from "lucide-react";
import { site } from "@/config/site";

export function SocialProof() {
  const { nights, label, rating, reviews } = site.socialProof;
  return (
    <div className="border-y border-gold/30 bg-night-soft px-5 py-5 text-night-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-8">
        <p className="font-serif text-xl"><span className="text-gold">{nights}</span> {label}</p>
        <p className="flex items-center gap-2 text-sm">
          <span className="flex" aria-hidden>{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</span>
          <strong>{rating}/5</strong> <span className="text-night-foreground/70">· {reviews}</span>
        </p>
      </div>
    </div>
  );
}
