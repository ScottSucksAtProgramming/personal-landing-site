import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A post is either a folder (posts/my-post/index.md with its images beside it)
// or a single file (posts/my-post.md). The folder or file name becomes the URL: /writing/my-post/
const idFromPath = ({ entry }: { entry: string }) =>
  entry.replace(/\/index\.md$/, '').replace(/\.md$/, '');

const posts = defineCollection({
  loader: glob({ pattern: ['*/index.md', '*.md'], base: './src/content/posts', generateId: idFromPath }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

// One file per project: projects/my-project.md -> /projects/my-project/
const projects = defineCollection({
  loader: glob({ pattern: ['*/index.md', '*.md'], base: './src/content/projects', generateId: idFromPath }),
  schema: z.object({
    title: z.string(),
    kind: z.string(), // "tech" or "ems", shown as [tech] / [ems]
    summary: z.string(),
    stack: z.string().optional(),
    status: z.string().optional(),
    url: z.string().optional(),
    repo: z.string().optional(),
    order: z.number().default(100), // lower numbers list first
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
