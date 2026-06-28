import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://balu17051.github.io',
  base: '/techpulse-blog',
  integrations: [tailwind()],
  output: 'static',
});
