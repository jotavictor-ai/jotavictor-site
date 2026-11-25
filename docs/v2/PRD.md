# PRD jotavictor.com 2.0

Dono do produto: João Victor. Contrato, QA e autorização entre fases: A.N.A.
Executor de código: A.N.A. direto (decisão do João em 25/11/2026), com QA no navegador a cada fase.
Branch de trabalho: `v2`. `master` continua sendo o site no ar até a publicação autorizada.
Prazo: 05/12/2026 (reunião da Ápice). Copy e posicionamento: `docs/v2/POSICIONAMENTO-E-COPY.md`.

## Objetivo

Transformar jotavictor.com no melhor vendedor do João: um visitante sai da impressão, passa pela confiança e chega ao contato. O próprio site precisa demonstrar a qualidade do serviço.

## Stack

- **Astro estático**, na mesma linha do site do Victor Oliveira (`apps/victor-oliveira-vo2`, Astro 7). Reaproveitar a organização (`layouts/Base.astro`, `components/`, `data/site.ts`, `styles/global.css`, `scripts/site.ts`), não a identidade.
- Cases e produtos do Laboratório como **content collections em Markdown** (`src/content/trabalhos/*.md`, `src/content/laboratorio/*.md`) com schema tipado: título, cliente, categoria, selo, resumo, texto, tags, capturas (desktop e mobile), url opcional, ordem, visível.
- Fontes locais via Fontsource. Imagens via `astro:assets` (AVIF/WebP, `sizes`).
- Sem backend, formulário com servidor, banco ou analytics pago.
- Vercel: trocar o framework de `vite` para `astro`, preservar os redirects de `www` e hosts antigos e remover o rewrite de SPA.

## Sistema visual

| Token | Valor | Uso |
|---|---|---|
| Carbon | `#0B0B0B` | Fundo principal |
| Graphite | `#191919` | Superfícies |
| Champagne | `#C9A96E` | Acento discreto, CTA, números |
| Ivory | `#F5F3EF` | Texto e seção clara opcional |

- Tipografia grande e editorial: sans display de peso firme para os títulos, serifada itálica só para palavras de acento, mono para etiquetas (`01 · INTELIGÊNCIA ARTIFICIAL`). O executor propõe o par e justifica, sem copiar o trio do site do Victor.
- Referências: Linear (sofisticação), Apple (apresentação cinematográfica), Studio Freight (direção artística).
- Proibido: gradiente roxo, robô 3D, partículas, dezenas de cards arredondados iguais, hero seguido de três cards de ícone, travessão em copy ou CSS.

## Motion

- **Momento principal:** as três telas reais (Vidal, CDL, Victor) entram com profundidade e luz e, ao rolar, se expandem até os respectivos cases. Precisa ficar bom **no celular e no PC**. No celular pode virar uma pilha que se desfaz ao rolar; o executor decide, desde que fique bonito nos dois.
- Só transform, opacity e clip-path. Nada de WebGL ou bibliotecas pesadas sem justificativa aprovada.
- **Conteúdo sempre visível sem JavaScript.** Nada nasce com `opacity: 0` dependendo de script. Motion é melhoria progressiva.
- `prefers-reduced-motion: reduce` mostra a versão estática completa.
- Evidência obrigatória: `getComputedStyle` de pelo menos dois nós animados com movimento ativo, e captura antes e depois do scroll.

## Regras inegociáveis

| Critério | Exigência |
|---|---|
| Copy | Usar o texto aprovado; menos texto que o site atual |
| Design | Composições próprias, sem cara de template |
| Portfólio | Capturas reais, dados sensíveis trocados |
| Mobile | Projetado para 375 a 430 px, sem overflow horizontal |
| Performance | Lighthouse acima de 90 em mobile, em todas as categorias |
| Conversão | WhatsApp acessível em todas as seções relevantes |
| Credibilidade | Nenhuma métrica, resultado ou depoimento inventado |
| Manutenção | Novo case = novo arquivo Markdown + imagens |
| Acessibilidade | Contraste AA, foco visível, teclado, movimento reduzido |

## Fases

### F1 · Base e abertura (26/11)
- Projeto Astro na branch `v2`, tokens, fontes, layout, menu, rodapé, botão fixo de WhatsApp no celular.
- Seção 01 completa com placeholders de captura no tamanho final e o momento principal de motion funcionando.
- Aceite: build sem erro, conteúdo visível sem JS, hero aprovado pela A.N.A. em navegador desktop e 375 px, motion com evidência.

### F1.5 · Capturas reais (A.N.A., 26 e 27/11)
- CDL (`cdl-balsas-web.vercel.app`), Victor (`victor-oliveira-vo2.vercel.app`), CatálogoZap, Praxis e Jota Fit: capturas por Playwright em desktop e celular.
- Vidal: cartões de metas gerados pelo próprio código do FarmAgente com dados fictícios, mais uma conversa de WhatsApp recriada com dados fictícios. Nada de arquivo real da rede.
- Revisão de rostos de terceiros e dados pessoais antes de entrar no repo.

### F2 · Trabalhos (27 e 28/11)
- Content collection de trabalhos, seção 02 em formato de exposição (um bloco por case, nunca grade de cards iguais) e página `/trabalhos/[slug]` para cada case.
- Ligação do hero com os cases (a tela expande até o case).
- Aceite: três cases com capturas reais; adicionar um quarto case de teste só com Markdown funciona e depois é removido.

### F3 · Desafios, Laboratório e Sobre (29 e 30/11)
- Seletor interativo "Qual é o desafio do seu negócio?" acessível por teclado (padrão de abas), com uma pequena demonstração animada por opção.
- Laboratório (CatálogoZap, Praxis e Jota Fit) mais discreto que os cases.
- Sobre com foto (`docs/v2/fotos/sobre-principal-pb.webp`) e campo comercial. Contato.

### F4 · Acabamento e publicação (01 a 03/12)
- SEO: title, description, canonical, OG image 1200×630 própria, JSON-LD `Person` + `ProfessionalService`, sitemap, robots permitindo indexação.
- Lighthouse mobile acima de 90, auditoria de acessibilidade, QA completo no navegador (desktop e 375 px), QR Code para a reunião.
- Publicação: merge na `master` **somente com OK explícito do João**.

### Folga: 04/12. Ápice: 05/12.

## Fora de escopo

Blog, CMS, formulário com backend, inglês, depoimentos, EncarteZap, CarteiraZap e GoFluxo na vitrine.
