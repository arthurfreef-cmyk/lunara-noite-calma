/**
 * Configuração central editável: números, preços, depoimentos, textos legais e tracking.
 * Edite aqui sem mexer nos componentes.
 */
import kit2 from "@/assets/kit-2-potes.jpg";
import kit4 from "@/assets/kit-4-potes.jpg";
import kit6 from "@/assets/kit-6-potes.jpg";

export type KitId = "2" | "4" | "6";

export interface Kit {
  id: KitId;
  title: string;
  duration: string;
  pots: number;
  priceFrom: number;
  price: number;
  freeShipping: boolean;
  badge?: string;
  featured?: boolean;
  image: string;
  cta: string;
}

export const site = {
  brand: "Lunara",
  product: "Lunara Noite Calma",
  pixDiscount: 0.07,
  installments: 12,
  countdownMinutes: 15,
  shippingPrice: 19.9,
  exitCoupon: { code: "CALMA5", percent: 5, method: "cartão" },
  socialProof: { nights: "+ de 12.000", label: "noites mais tranquilas", rating: "4,8", reviews: "2.340 avaliações" },
  orderBump: { title: "Chá Noite Calma + Diário do Sono", price: 29 },
  upsell: { pots: 2, discount: 0.15, unitPrice: 98.5 },
  bonusValue: 97,
  bonuses: ["Guia Ritual Noturno de 21 dias (PDF)", "Áudios guiados de relaxamento"],
  legal: {
    company: "Lunara Bem-Estar Ltda.",
    cnpj: "00.000.000/0001-00",
    email: "suporte@lunara.com.br",
    anvisa:
      "Suplemento alimentar dispensado de registro conforme RDC ANVISA nº 240/2018. Comunicação de início de fabricação: [preencher].",
  },
  tracking: {
    metaPixelId: "", // ex.: "123456789012345"
    conversionsApiEndpoint: "", // futuro endpoint server-side da API de Conversões
  },
};

export const kits: Kit[] = [
  { id: "2", title: "Kit 2 Potes", duration: "60 dias", pots: 2, priceFrom: 294, price: 197, freeShipping: false, image: kit2, cta: "Quero o Kit 2 Potes" },
  { id: "4", title: "Kit 4 Potes", duration: "120 dias", pots: 4, priceFrom: 588, price: 327, freeShipping: true, badge: "MAIS ESCOLHIDO", featured: true, image: kit4, cta: "Quero o Kit 4 Potes" },
  { id: "6", title: "Kit 6 Potes", duration: "180 dias", pots: 6, priceFrom: 882, price: 437, freeShipping: true, badge: "MELHOR CUSTO-BENEFÍCIO", image: kit6, cta: "Quero o Kit 6 Potes" },
];

export const getKit = (id: string): Kit => kits.find((k) => k.id === id) ?? kits[1]!;

export const testimonials = [
  { name: "Juliana M.", city: "Belo Horizonte, MG", text: "Virou meu momento do dia. Tomo, desligo o celular e leio um pouco. Sinto a noite mais leve." },
  { name: "Ricardo A.", city: "Curitiba, PR", text: "Comecei pelo kit de 4. Gostei da rotina e de como me sinto mais relaxado no fim do dia." },
  { name: "Fernanda L.", city: "Recife, PE", text: "As cápsulas são fáceis de tomar e o guia ajudou a organizar meus horários antes de dormir." },
  { name: "Paulo S.", city: "São Paulo, SP", text: "Não esperava mágica e não é. É um hábito que me ajuda a desacelerar. Vou continuar." },
  { name: "Camila R.", city: "Goiânia, GO", text: "Os áudios guiados são um carinho. Junto com as cápsulas, minha noite ficou mais tranquila." },
  { name: "Marcos T.", city: "Porto Alegre, RS", text: "Entrega rápida e atendimento atencioso. Estou na terceira semana e gosto da constância." },
];

export const salesNotifications = [
  { name: "Maria", city: "Goiânia", kit: "Kit 4 Potes" },
  { name: "Ana", city: "Campinas", kit: "Kit 6 Potes" },
  { name: "Lucas", city: "Salvador", kit: "Kit 4 Potes" },
  { name: "Beatriz", city: "Florianópolis", kit: "Kit 2 Potes" },
  { name: "Carla", city: "Fortaleza", kit: "Kit 4 Potes" },
];

export const faq = [
  { q: "Como tomar?", a: "Tome 2 cápsulas por dia, cerca de 30 a 60 minutos antes do seu horário de descanso, com um copo de água. Cada pote rende 30 dias." },
  { q: "Qual o prazo de entrega?", a: "Enviamos em até 2 dias úteis após a confirmação do pagamento. O prazo médio é de 3 a 10 dias úteis, conforme sua região. Você recebe o código de rastreio por e-mail e WhatsApp." },
  { q: "Quais as formas de pagamento?", a: "Pix com 7% de desconto, cartão de crédito em até 12x e boleto bancário." },
  { q: "Como funciona a garantia?", a: "Você tem 30 dias a partir do recebimento. Se não gostar, fale com nosso suporte e devolvemos 100% do valor pago, sem burocracia." },
  { q: "É seguro?", a: "A fórmula usa ingredientes de uso consagrado em suplementos alimentares, produzidos em fábrica certificada. Siga a recomendação de uso e, em caso de dúvida, consulte um profissional de saúde." },
];

export const disclaimer =
  "Este produto não é medicamento. Não deve ser usado para diagnóstico ou tratamento de doenças. Gestantes, lactantes e pessoas em tratamento devem consultar um profissional de saúde.";
