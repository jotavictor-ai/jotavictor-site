# jotavictor.com

Estúdio independente de tecnologia do **João Victor Gonçalves**, em Natal, RN. Sites, sistemas e inteligência artificial para empresas, do problema real à solução funcionando.

**Ao vivo:** https://jotavictor.com

## Estrutura

- Abertura com três telas de projetos reais
- Trabalhos: Rede Vidal, CDL Balsas e Victor Oliveira, cada um com página própria em `/trabalhos/<slug>/`
- O que posso construir: seletor de desafios com demonstrações
- Laboratório: produtos próprios
- Sobre e contato pelo WhatsApp

## Stack

- Astro estático, sem backend
- Conteúdo em Markdown (content collections)
- CSS próprio com tokens (Carbon, Graphite, Champagne, Ivory)
- Fontes locais: Geist, Geist Mono e Newsreader (Fontsource)
- Imagens otimizadas com `astro:assets`
- Deploy na Vercel

## Atualizar conteúdo

| O quê | Onde |
|---|---|
| Novo trabalho | `src/content/trabalhos/<slug>.md` + imagens em `src/assets/trabalhos/<slug>/` |
| Produto do Laboratório | `src/content/laboratorio/<slug>.md` + captura em `src/assets/laboratorio/` |
| WhatsApp, e-mail e links | `src/data/site.ts` |
| Copy aprovada e PRD | `docs/v2/` |

Para esconder um item sem apagar, use `visivel: false` no Markdown.

## Rodar localmente

```bash
npm install
npm run dev
npm run build
```

## Contato

contato@jotavictor.com
