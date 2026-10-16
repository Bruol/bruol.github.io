import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bruol.me',
  vite: {
    server: { allowedHosts: ['coding-2.tailedb47.ts.net'] },
    plugins: [tailwindcss()]
  }
});
