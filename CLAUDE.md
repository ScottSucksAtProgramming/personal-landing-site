# scottkostolni.com

Personal site for Scott Kostolni, built with Astro 7 and deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

## Commands
- `npm run dev`: local server at http://localhost:4321
- `npm run build`: static build into `dist/`. Run it before committing to catch content or template errors.

## Design rules
- The whole site imitates a Unix man page read in `less`: section heads flush left in caps, body indented `--indent` (7ch), header and footer lines like `SCOTT(1)  Personal Manual  SCOTT(1)`, and the pager status bar at the bottom.
- Home is `scott(1)`, writing is `scott-notes(7)`, each project is `<project-id>(1)`.
- One typeface: JetBrains Mono, self-hosted via `@fontsource/jetbrains-mono`. Never add Google Fonts or other third-party requests. No analytics or trackers.
- Every color is a CSS variable in `src/styles/global.css`, defined for light, dark and the `data-theme` toggle. Don't hard-code colors in components.
- Keep it simple: no client framework. Small inline scripts only (theme toggle, pager bar).

## Content
- Posts: `src/content/posts/<slug>/index.md` with images beside it, or `src/content/posts/<slug>.md`. Standard Markdown image syntax, `[[wiki links]]` supported.
- Projects: `src/content/projects/<slug>.md`, sorted by `order`.
- About, OPTIONS and EXIT STATUS: `src/content/about.md`.
- Site-wide settings: `src/site.config.ts`.
- Public site: never add an employer, home location, schedule or family details.

## Markdown
Astro 7 uses the Satteri Markdown processor, not remark. Plugins are Satteri mdast/hast visitor objects, set in `astro.config.mjs` (see `src/plugins/wiki-links.mjs`). Remark/rehype plugins from npm won't work without switching processors.
