import { defineCollection, z } from 'astro:content';

const servicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    badge: z.string().default('Especialidade'),
    description: z.string(),
    features: z.array(z.string()).default([]),
    image: z.string().optional(),
    order: z.number().default(0),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

export const collections = {
  servicos: servicosCollection,
};
