import { describe, expect, it } from "vitest";
import { kitPricing } from "./format";

describe("kitPricing", () => {
  it("Kit 2 custa R$ 98,50 por pote", () => expect(kitPricing(197, 294, 2, 0.07, 12).perPot).toBe(98.5));
  it("Kit 4 custa R$ 81,75 por pote", () => expect(kitPricing(327, 588, 4, 0.07, 12).perPot).toBe(81.75));
  it("Kit 6 custa R$ 72,83 por pote", () => expect(kitPricing(437, 882, 6, 0.07, 12).perPot).toBe(72.83));
  it("Pix aplica 7% de desconto", () => expect(kitPricing(327, 588, 4, 0.07, 12).pix).toBe(304.11));
});
