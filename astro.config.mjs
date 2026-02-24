// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const base = '/portfolio/';

// Rehype plugin: prepend base URL to markdown media src/href (images, video, iframe, PDF links) for GitHub Pages subpath.
// Handles both parsed elements and raw HTML (e.g. <video>/<source>/<iframe>/<a> in markdown).
function rehypePrependBaseUrl(options) {
  const baseUrl = options?.base ?? '/';
  const basePath = baseUrl.replace(/\/$/, ''); // e.g. '/portfolio'
  const prepend = (src) => src?.startsWith('/') ? baseUrl + src.slice(1) : src;
  return (tree) => {
    function visit(node) {
      if (node.type === 'element' && node.properties) {
        if (node.properties.src && ['img', 'video', 'audio', 'source', 'iframe'].includes(node.tagName)) {
          node.properties.src = prepend(node.properties.src);
        }
        if (node.properties.href && node.tagName === 'a') {
          node.properties.href = prepend(node.properties.href);
        }
      }
      // Raw HTML in markdown (e.g. <video><source src="/projects/..."> or <a href="/projects/...">)
      // may not be parsed into elements; rewrite src="/... and href="/... to include base.
      if (node.type === 'raw' && typeof node.value === 'string') {
        if (node.value.includes('src="/')) {
          node.value = node.value.replace(/\ssrc="\/(?!\/)/g, ` src="${basePath}/`);
        }
        if (node.value.includes('href="/')) {
          node.value = node.value.replace(/\shref="\/(?!\/)/g, ` href="${basePath}/`);
        }
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
