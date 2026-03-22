import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://cn-rodriguez.github.io',
  integrations: [react()],
  output: 'static',
});
