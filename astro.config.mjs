import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';
import { SITE_CONFIG } from './src/data/config';

// https://astro.build/config
export default defineConfig({
  site: SITE_CONFIG.siteUrl,
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
