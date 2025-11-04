// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://daru.pages.dev/',

  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap({
      // Filter pages that should not be included in the sitemap
      filter: (page) => !page.includes('/admin') && !page.includes('/draft'),
      // i18n configuration if the website is multilingual (optional)
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          id: 'id-ID',
        },
      },
    })
  ]
});