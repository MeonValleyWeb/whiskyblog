import { defineCollection, z } from 'astro:content';

// Posts double as tasting write-ups.
// Most tastings cover 6 bottles, so the schema supports 1–6 bottles with structured tasting notes.
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    // Tasting meta (optional, but recommended for tasting-style posts)
    distillery: z.string().optional(), // e.g. "Glenmorangie" or "Various"
    brandAmbassador: z.string().optional(),
    history: z.string().optional(), // short distillery/tasting context shown in the intro
    // Back-compat (single-bottle posts). Prefer `bottles` moving forward.
    bottle: z.string().optional(),
    region: z.string().optional(),
    abv: z.string().optional(),
    rating: z.number().min(0).max(5).optional(),
    price: z.string().optional(),
    // Structured bottles: typically 6 items, rendered as 1., 2., 3. etc.
    bottles: z
      .array(
        z.object({
          name: z.string(), // label shown in headings and sidebar
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

export const collections = {
  posts,
};
