// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// For GitHub Pages project site (username.github.io/portfolio), base must be '/portfolio/'
export default defineConfig({
  site: 'https://prathamskk.github.io',
  base: '/portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
