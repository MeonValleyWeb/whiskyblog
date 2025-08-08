import { defineCollection, z } from 'astro:content';

const tastings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    time: z.string(),
    location: z.string(),
    memberPrice: z.number(),
    guestPrice: z.number(),
    maxAttendees: z.number(),
    distillery: z.string().optional(),
    whiskeyType: z.string().optional(),
    charity: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    description: z.string(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string().optional(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  tastings,
  posts,
};