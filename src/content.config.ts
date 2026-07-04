import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    distillery: z.string().optional(),
    brandAmbassador: z.string().optional(),
    history: z.string().optional(),
    bottle: z.string().optional(),
    region: z.string().optional(),
    abv: z.string().optional(),
    rating: z.number().min(0).max(5).optional(),
    price: z.string().optional(),
    bottles: z
      .array(
        z.object({
          name: z.string(),
          abv: z.string().optional(),
          age: z.string().optional(),
          cask: z.string().optional(),
          price: z.string().optional(),
          rating: z.number().min(0).max(5).optional(),
          tastingNotes: z
            .object({
              nose: z.string().optional(),
              palate: z.string().optional(),
              finish: z.string().optional(),
              overall: z.string().optional(),
            })
            .optional(),
        }),
      )
      .min(1)
      .max(6)
      .optional(),
    summary: z.string().optional(),
    stockists: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url(),
          affiliate: z.boolean().default(false),
          note: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    searchVolume: z.number().optional(),
    keyword: z.string().optional(),
    relatedPosts: z.array(z.string()).optional(),
    relatedGuides: z.array(z.string()).optional(),
  }),
});

export const collections = { posts, guides };
