import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CORRETOR_IDS } from './config';

const imoveis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/imoveis' }),
  schema: z.object({
    titulo: z.string(),
    finalidade: z.enum(['Venda', 'Aluguel']),
    tipo: z.enum(['Casa', 'Apartamento', 'Terreno', 'Comercial', 'Chácara']),
    preco: z.number(),
    bairro: z.string(),
    cidade: z.string(),
    quartos: z.number().default(0),
    banheiros: z.number().default(0),
    vagas: z.number().default(0),
    area: z.number(),
    capa: z.string(),
    fotos: z.array(z.string()).default([]),
    destaque: z.boolean().default(false),
    disponivel: z.boolean().default(true),
    data: z.coerce.date(),
    corretor: z.enum(CORRETOR_IDS).default(CORRETOR_IDS[0]), // id de src/config.ts (CORRETORES)
  }),
});

export const collections = { imoveis };
