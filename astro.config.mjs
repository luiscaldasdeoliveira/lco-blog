import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
