import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const trabalhos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trabalhos' }),
  schema: ({ image }) =>
    z.object({
      ordem: z.number(),
      cliente: z.string(),
      categoria: z.string(),
      chamada: z.string(),
      resumo: z.string(),
      selo: z.string(),
      tags: z.array(z.string()),
      ano: z.number(),
      url: z.string().url().optional(),
      urlRotulo: z.string().optional(),
      // Visual do case: capturas reais ou a demonstração montada em código (Vidal)
      visual: z.enum(['capturas', 'vidal']).default('capturas'),
      desktop: image().optional(),
      celular: image().optional(),
      extras: z
        .array(z.object({ src: image(), alt: z.string(), tipo: z.enum(['desktop', 'celular']) }))
        .default([]),
      visivel: z.boolean().default(true),
    }),
});

const laboratorio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/laboratorio' }),
  schema: ({ image }) =>
    z.object({
      ordem: z.number(),
      nome: z.string(),
      resumo: z.string(),
      url: z.string().url(),
      urlRotulo: z.string(),
      celular: image(),
      visivel: z.boolean().default(true),
    }),
});

export const collections = { trabalhos, laboratorio };
