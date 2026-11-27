export const brl = (v: number): string =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export interface KitPricing { perPot: number; savings: number; pix: number; installment: number }

export function kitPricing(price: number, priceFrom: number, pots: number, pixDiscount: number, installments: number): KitPricing {
  return {
    perPot: Math.round((price / pots) * 100) / 100,
    savings: priceFrom - price,
    pix: Math.round(price * (1 - pixDiscount) * 100) / 100,
    installment: Math.round((price / installments) * 100) / 100,
  };
}
