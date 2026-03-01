import type { ImageMetadata } from 'astro';

/**
 * Glob import all raster images from assets.
 * Keys are paths like "../assets/company/ecell-logo.png"
 */
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/**/*.{png,jpg,jpeg,webp}',
  { eager: true }
);

/**
 * Get optimized image from URL path (e.g. "company/ecell-logo.png" or "projects/zaika/zaika_banner.png")
 */
export function getImage(urlPath: string): ImageMetadata | undefined {
  const normalized = urlPath.replace(/^\//, '');
  const key = `../assets/${normalized}`;
  const mod = imageModules[key];
  return mod?.default;
}
