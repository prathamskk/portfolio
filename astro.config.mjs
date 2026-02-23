// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const base = '/portfolio/';

// Rehype plugin: prepend base URL to markdown media src (images, video, iframe) for GitHub Pages subpath.
// Handles both parsed elements and raw HTML (e.g. <video>/<source>/<iframe> in markdown).
function rehypePrependBaseUrl(options) {
  const baseUrl = options?.base ?? '/';
  const basePath = baseUrl.replace(/\/$/, ''); // e.g. '/portfolio'
  const prepend = (src) => src?.startsWith('/') ? baseUrl + src.slice(1) : src;
  return (tree) => {
    function visit(node) {
      if (node.type === 'element' && node.properties?.src) {
        if (['img', 'video', 'audio', 'source', 'iframe'].includes(node.tagName)) {
          node.properties.src = prepend(node.properties.src);
        }
      }
      // Raw HTML in markdown (e.g. <video><source src="/projects/...">) may not be parsed into elements;
      // rewrite src="/... to src="/portfolio/... in raw strings.
      if (node.type === 'raw' && typeof node.value === 'string' && node.value.includes('src="/')) {
        node.value = node.value.replace(/\ssrc="\/(?!\/)/g, ` src="${basePath}/`);
      }
      for (const child of node.children ?? []) visit(child);
    }
    visit(tree);
    return tree;
  };
}

// https://astro.build/config
// For GitHub Pages project site (username.github.io/portfolio), base must be '/portfolio/'
export default defineConfig({
  site: 'https://prathamskk.github.io',
  base,
  markdown: {
    rehypePlugins: [[rehypePrependBaseUrl, { base }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
