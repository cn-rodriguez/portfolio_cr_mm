import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://cn-rodriguez.github.io',
  base: '/portfolio_cr_mm',
  integrations: [react()],
  output: 'static',
});
