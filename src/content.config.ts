import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
  }),
});

export const collections = { imoveis };
