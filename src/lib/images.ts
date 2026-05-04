import type { ImageMetadata } from 'astro';

/**
 * Glob import all raster images from assets.
 * Keys are paths like "../assets/company/ecell-logo.png"
 */
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/**/*.{png,jpg,jpeg,webp}',
  { eager: true }
);

function normalizeAssetsPath(urlPath: string): string {
  return urlPath.replace(/^\//, '').replace(/\\/g, '/').replace(/^\/+/, '');
}

/**
 * Absolute URL under the site base for files in `/public`
 * (e.g. `/portfolio/projects/slt/slt_banner.png`).
 */
export function projectImagePublicUrl(urlPath: string): string {
  const normalized = normalizeAssetsPath(urlPath);
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  return normalized ? `${base}${normalized}` : base;
}

/**
 * Get optimized image from URL path (e.g. "company/ecell-logo.png" or "projects/zaika/zaika_banner.png")
 */
export function getImage(urlPath: string): ImageMetadata | undefined {
  const normalized = normalizeAssetsPath(urlPath);
  if (!normalized) return undefined;

  for (const [key, mod] of Object.entries(imageModules)) {
    const posix = key.replace(/\\/g, '/');
    const relative = posix.replace(/^\.\.\/assets\//i, '');
    if (relative.toLowerCase() === normalized.toLowerCase()) {
      return mod.default;
    }
  }

  return undefined;
}
