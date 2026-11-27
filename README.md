# Lunara Noite Calma

Crie uma landing page de venda direta (direct response), mobile-first, em português do Brasil, para o suplemento "Lunara Noite Calma". Objetivo: maximizar conversão e ticket médio. Tráfego principal vem do Instagram/Facebook, 90% mobile.

## IDENTIDADE VISUAL
- Paleta: azul-noite #1B2A4A (fundo escuro), lilás #8E7CC3 (destaque), creme #F6F0E6 (fundo claro), dourado #C9A24B (botões e selos).
- Tipografia: títulos em serifada elegante (Playfair Display), corpo em Inter.
- Clima: noite calma, estrelas sutis, lua, confiável e premium. Sem aparência de página genérica de infoproduto.
- Botões CTA grandes, dourados, com microanimação de pulso suave. Cantos arredondados.

## PRODUTO
- 60 cápsulas por pote (30 dias, 2 por dia). Fórmula: magnésio, L-teanina, extrato de camomila e maracujá.
- Imagens: use os mockups enviados (kit-2-potes, kit-4-potes, kit-6-potes) em cada card de oferta.

## ESTRUTURA DA PÁGINA (nesta ordem)
1. Barra superior fixa: "Frete grátis nos kits de 4 e 6 potes · Garantia de 30 dias" + contador regressivo de 15 minutos para a condição especial.
2. Hero: headline "Sua mente desacelera. Sua noite muda." + subtítulo "O ritual noturno de 30 dias com magnésio, L-teanina e camomila para você desligar e descansar melhor." + imagem do kit de 4 potes + botão "Quero meu ritual noturno" que rola até as ofertas + 3 selos (Pix com desconto, 12x no cartão, Garantia 30 dias).
3. Faixa de prova social: "+ de 12.000 noites mais tranquilas" (placeholder editável) e nota 4,8/5 (placeholder editável).
4. Seção "Por que sua mente não desliga à noite?": explique o mecanismo "mente acelerada à noite" em linguagem simples, com 3 ícones (mente ligada, corpo cansado, rotina sem ritual). Não faça promessas de cura nem mencione doenças.
5. Seção "O que tem dentro de cada cápsula": 3 cards (Magnésio, L-teanina, Camomila e maracujá) com função de cada ingrediente de forma geral e responsável.
6. Seção "Seu ritual de 30 dias": linha do tempo com 4 etapas (Semana 1 a 4), tom de rotina e constância, sem resultados garantidos.
7. Depoimentos: 6 cards com foto circular placeholder, nome, cidade e texto curto. Mantenha o tom realista, sem resultados extremos.
8. Bônus inclusos: "Guia Ritual Noturno de 21 dias (PDF)" e "Áudios guiados de relaxamento" com valor riscado "de R$ 97" e "GRÁTIS hoje".
9. SEÇÃO DE OFERTAS (principal): 3 cards lado a lado no desktop e empilhados no mobile (o do meio primeiro no mobile):
   - Card A "Kit 2 Potes · 60 dias": R$ 197 (R$ 98,50 por pote). Imagem kit-2-potes. Botão "Quero o Kit 2 Potes".
   - Card B "Kit 4 Potes · 120 dias" — DESTAQUE VISUAL com selo "MAIS ESCOLHIDO", borda dourada, levemente maior: R$ 327 (R$ 81,75 por pote), frete grátis. Imagem kit-4-potes. Botão maior "Quero o Kit 4 Potes".
   - Card C "Kit 6 Potes · 180 dias" com selo "MELHOR CUSTO-BENEFÍCIO": R$ 437 (R$ 72,83 por pote), frete grátis. Imagem kit-6-potes. Botão "Quero o Kit 6 Potes".
   - Em cada card: preço "de" riscado, preço "por" grande, economia em R$, lista de bônus inclusos, selo "Pix com 7% de desconto" e "Até 12x no cartão".
   - Abaixo dos cards: ícones de pagamento (Pix, cartão, boleto) e "Compra 100% segura".
10. Garantia: selo "30 dias de garantia incondicional" com texto curto e humano.
11. FAQ (acordeão): como tomar, prazo de entrega, formas de pagamento, como funciona a garantia, é seguro. Inclua o aviso: "Este produto não é medicamento. Não deve ser usado para diagnóstico ou tratamento de doenças. Gestantes, lactantes e pessoas em tratamento devem consultar um profissional de saúde."
12. CTA final repetindo as 3 ofertas de forma compacta + contador.
13. Rodapé: CNPJ, e-mail de suporte, Termos, Política de Privacidade, aviso legal sobre suplementos e referência à regularização na ANVISA (campos editáveis).

## COMPORTAMENTO E CONVERSÃO
- Botão fixo no rodapé do mobile ("Ver ofertas") que aparece depois do hero e some ao chegar na seção de ofertas.
- Seleção de oferta leva ao checkout (crie rota /checkout?kit=2|4|6) com resumo do pedido, campos nome, e-mail, WhatsApp, CPF, endereço (CEP com preenchimento automático via ViaCEP), seleção de pagamento (Pix com desconto, cartão, boleto) e botão de compra.
- ORDER BUMP no checkout: checkbox "Adicionar Chá Noite Calma + Diário do Sono por R$ 29".
- UPSELL após o pagamento (página /obrigado-upsell): "Adicione +2 potes com 15% de desconto", com botões "Sim, adicionar" e "Não, obrigado".
- Pop-up de saída (exit intent, desktop) e aviso após 45s no mobile com cupom de 5% off no cartão.
- Notificação social sutil ("Maria, de Goiânia, acabou de comprar o Kit 4 Potes") com dados fictícios editáveis, discreta.
- Contador regressivo com reinício por sessão.
- Carregamento rápido: imagens otimizadas, lazy loading, fontes com display swap.
- Tracking: deixe campos prontos para Pixel da Meta (PageView, ViewContent, InitiateCheckout, Purchase) e eventos de clique em cada kit. Estruture para integração futura com API de Conversões.
- Páginas legais: /termos, /privacidade, /trocas-e-garantia.

## REGRAS DE CONTEÚDO (compliance)
- Nunca use as palavras: cura, trata, trata insônia, trata ansiedade, depressão, remédio, milagre.
- Foque em rotina, relaxamento, conforto e bem-estar. Sem antes e depois.
- Todos os números e depoimentos devem ficar em um arquivo de configuração para edição fácil.

Entregue o código limpo, componentizado (Hero, Offers, OfferCard, Checkout, FAQ, Guarantee, Testimonials) e responsivo. nao bote asteriscos

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/64e255a5-60b9-4011-b69d-bf975eee0e3b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
