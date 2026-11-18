# scottkostolni.com

My personal site, styled as a Unix manual page: `man scott`.
Built with [Astro](https://astro.build) from plain Markdown files, and published to GitHub Pages automatically on every push to `main`.

## Write a post

Each post is a folder in `src/content/posts/`. The folder name becomes the address.

```
src/content/posts/
  my-new-post/
    index.md        <- the post
    photo.jpg       <- images go right beside it
  short-note.md     <- a post with no images can be a single file
```

Start `index.md` with this header, then write Markdown below it:

```markdown
---
title: My new post
description: One line for link previews and the RSS feed.
date: 2026-11-20
draft: true
---

Write here. Add an image with ![What the image shows](photo.jpg).
Link to another post with [[other-post-folder-name]] or [[other-post|custom link text]].
```

- **Images:** standard Markdown image syntax with the file name. Astro resizes and compresses them when the site builds.
- **Wiki links:** `[[folder-name]]` links to a post. `[[Post Title]]` works too if the title matches the folder name with dashes. `[[projects/inbox-triage]]` links to a project.
- **Drafts:** `draft: true` keeps a post off the live site. It still shows locally with `npm run dev`, marked [draft]. Delete the line or set it to `false` to publish.
- **Cover image (optional):** add `cover: cover.jpg` and `coverAlt: ...` to the header.

### From iA Writer

- **Mac:** add the repo's `src/content/posts` folder as a library location in iA Writer. Write, then commit and push (Claude Code, GitHub Desktop or the terminal).
- **iPhone/iPad:** clone the repo in Working Copy, then in iA Writer add the Working Copy folder as a location. Write, then commit and push from Working Copy.

Pushing to `main` publishes the site in about a minute.

## Edit the rest

| What | Where |
| --- | --- |
| Name, email, GitHub, newsletter link | `src/site.config.ts` |
| Description, OPTIONS and EXIT STATUS | `src/content/about.md` |
| Projects (one file each) | `src/content/projects/` |
| Colors, fonts, layout | `src/styles/global.css` |
| Page structure | `src/layouts/ManPage.astro`, `src/pages/` |

Files marked PLACEHOLDER are sample content to replace or delete.

## Run it on your Mac

Needs Node 22.

```sh
npm install
npm run dev       # live preview at http://localhost:4321
npm run build     # the finished site goes in dist/
```

## Set up hosting (one time)

The site is hosted free on GitHub Pages. GitHub's free plan only publishes Pages from public repos, so this repo needs to be public.

1. **Create the repo.** On GitHub, make a new empty public repo, for example `scottkostolni.com`. Don't add a README or license.
2. **Push this folder.**

   ```sh
   cd scottkostolni.com
   git init -b main
   git add .
   git commit -m "First version of the site"
   git remote add origin https://github.com/ScottSucksAtProgramming/scottkostolni.com.git
   git push -u origin main
   ```

3. **Turn on Pages.** In the repo: Settings > Pages > Build and deployment > Source: **GitHub Actions**. The deploy workflow runs on the next push (or run it from the Actions tab).
4. **Add the domain.** Settings > Pages > Custom domain: `scottkostolni.com`, then save. Once the certificate is ready, tick **Enforce HTTPS**. The `public/CNAME` file keeps this setting in place.
5. **Verify the domain (recommended).** Your GitHub account Settings > Pages > Add a domain. This stops anyone else from claiming it.

### Point scottkostolni.com at GitHub

At the company that runs DNS for scottkostolni.com, add:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | scottsucksatprogramming.github.io |

Remove any old A, AAAA or CNAME records for `@` and `www` first. DNS changes can take a few hours.

### Redirect the other domains

GitHub Pages serves one domain per site, so the other domains forward to it with a permanent (301) redirect.

- **kostolni.me:** use your registrar's URL forwarding or redirect feature to send `kostolni.me` and `www.kostolni.me` to `https://scottkostolni.com`.
- **poweredbyghosts.com and www.poweredbyghosts.com:** in DreamHost, set up a redirect for `poweredbyghosts.com` to `https://scottkostolni.com`. Change only the `poweredbyghosts.com` entry. `pension.poweredbyghosts.com` is a separate site and must stay as it is. Afterward, open pension.poweredbyghosts.com and make sure it still loads.

## How it fits together

- `src/content.config.ts` defines posts and projects.
- `src/plugins/wiki-links.mjs` turns `[[links]]` into site links.
- `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
- JetBrains Mono (SIL Open Font License) is bundled with the site through `@fontsource/jetbrains-mono`, so pages make no requests to Google or other font services.
- RSS feed: `/rss.xml`. Sitemap: `/sitemap-index.xml`.
