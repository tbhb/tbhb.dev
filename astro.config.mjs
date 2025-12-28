// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tbhb.dev',
  adapter: cloudflare(),
  experimental: {
    headingIdCompat: true,
  },
  integrations: [markdoc({ allowHTML: true }), sitemap()]
});
