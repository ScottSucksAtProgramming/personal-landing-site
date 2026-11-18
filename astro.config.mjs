// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { wikiLinks } from './src/plugins/wiki-links.mjs';

export default defineConfig({
  site: 'https://scottkostolni.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    // Code blocks follow the page's light/dark theme (see .astro-code in global.css).
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
    // [[wiki links]] between posts, for writing in iA Writer or Obsidian.
    processor: satteri({
      features: { wikilinks: true },
      mdastPlugins: [wikiLinks],
    }),
  },
});
