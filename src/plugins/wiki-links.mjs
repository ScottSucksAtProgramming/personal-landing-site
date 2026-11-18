// Turns [[wiki links]] into site links, so posts written in iA Writer or Obsidian can link to each other.
//   [[debugging-on-shift]]            -> /writing/debugging-on-shift/
//   [[Debugging on Shift]]            -> /writing/debugging-on-shift/  (titles are turned into slugs)
//   [[projects/inbox-triage|filters]] -> /projects/inbox-triage/ with the text "filters"
// The Markdown engine parses [[...]] into an ordinary link whose address is the bare target,
// so this rewrites any link that has no scheme, no leading / # . and no file extension.

const slugify = (s) =>
  s.trim().toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9/]+/g, '-').replace(/-+/g, '-').replace(/(^-|-$)/g, '');

export function resolveWikiTarget(url) {
  if (!url || /^[a-z][a-z0-9+.-]*:/i.test(url) || /^[/#.?]/.test(url)) return null;
  const [path, hash] = url.split('#');
  if (/\.[a-z0-9]{1,5}$/i.test(path)) return null; // a file like photo.jpg or notes.pdf
  const slug = slugify(decodeURIComponent(path));
  if (!slug) return null;
  const href = slug.includes('/') ? `/${slug}/` : `/writing/${slug}/`;
  return hash ? `${href}#${slugify(hash)}` : href;
}

export const wikiLinks = {
  name: 'wiki-links',
  link(node, ctx) {
    const href = resolveWikiTarget(node.url);
    if (href) ctx.replaceNode(node, { ...node, url: href });
  },
};
