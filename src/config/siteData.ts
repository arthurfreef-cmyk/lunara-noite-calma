import kit2 from "@/assets/kit-2-potes.jpg";
import kit4 from "@/assets/kit-4-potes.jpg";
import kit6 from "@/assets/kit-6-potes.jpg";
export type KitId = "2" | "4" | "6";
export interface Kit { id: KitId; title: string; duration: string; pots: number; priceFrom: number; price: number; freeShipping: boolean; badge?: string; featured?: boolean; image: string; cta: string }
export const site = {
 brand:"Lunara", product:"Lunara Noite Calma", pixDiscount:0.07, installments:12, shippingPrice:19.9,
 promo:{endsAt:null as string|null},
 socialProof:{isReal:false,rating:"",reviews:""},
 ingredients:{serving:"2 cápsulas",nutrients:[] as {name:string;amount:string;dailyValue:string}[],isReal:false},
 certifications:[] as {label:string;isReal:boolean}[],
 testimonials:[] as {name:string;city:string;text:string;isReal:boolean;photo?:string;video?:string}[],
 orderBump:{title:"Chá Noite Calma + Diário do Sono",price:29},
 bonuses:["Guia Ritual Noturno de 21 dias (PDF)","Áudios guiados de relaxamento"],
 bonusValue:{amount:null as number|null,isReal:false},
 legal:{isReal:false,company:"",cnpj:"",address:"",email:"",whatsapp:"",anvisa:""},
 tracking:{metaPixelId:"",conversionsApiEndpoint:""}
};
export const kits:Kit[]=[
{id:"2",title:"Kit 2 Potes",duration:"60 dias",pots:2,priceFrom:294,price:197,freeShipping:false,image:kit2,cta:"Quero o Kit 2"},
{id:"4",title:"Kit 4 Potes",duration:"120 dias",pots:4,priceFrom:588,price:327,freeShipping:true,badge:"MAIS ESCOLHIDO",featured:true,image:kit4,cta:"Quero o Kit 4"},
{id:"6",title:"Kit 6 Potes",duration:"180 dias",pots:6,priceFrom:882,price:437,freeShipping:true,badge:"MELHOR CUSTO-BENEFÍCIO",image:kit6,cta:"Quero o Kit 6"}];
export const getKit=(id:string):Kit=>kits.find(k=>k.id===id)??kits[1]!;
export const testimonials:typeof site.testimonials=site.testimonials;
export const faq=[
{q:"Como tomar o Lunara Noite Calma?",a:"A recomendação informada para o produto é de 2 cápsulas ao dia. Siga sempre as instruções do rótulo e não exceda a recomendação de consumo."},
{q:"Quem pode consumir?",a:"Leia a rotulagem antes do consumo. Gestantes, lactantes, crianças, pessoas com condições de saúde ou que utilizam medicamentos devem consultar um profissional de saúde antes de usar."},
{q:"Em quanto tempo vou perceber alguma diferença?",a:"A experiência é individual e não existe prazo garantido para perceber mudanças. O produto não promete resultados específicos."},
{q:"Qual é o prazo e como acompanho a entrega?",a:"O prazo e o código de rastreio devem ser informados nos canais de contato da compra após a confirmação do envio."},
{q:"Quais são as formas de pagamento?",a:"Pix com 7% de desconto, cartão de crédito em até 12 vezes e boleto, conforme disponibilidade do checkout."},
{q:"Como funciona a garantia de 30 dias?",a:"Entre em contato com o suporte informado na confirmação do pedido, informe seus dados e número do pedido para receber as orientações."},
{q:"O produto é seguro? Tem contraindicações?",a:"Suplementos podem ter contraindicações e interações. Confira os ingredientes e advertências do rótulo. Em caso de dúvida, consulte um profissional de saúde."},
{q:"Posso tomar junto com outros suplementos?",a:"A combinação depende dos ingredientes, quantidades e da sua situação individual. Consulte um médico ou nutricionista antes de combinar suplementos."}];
export const disclaimer="Este produto não é medicamento. Não exceda a recomendação diária de consumo indicada na embalagem. Gestantes, lactantes, crianças e pessoas com condições de saúde ou que utilizam medicamentos devem consultar um profissional de saúde antes de consumir.";
