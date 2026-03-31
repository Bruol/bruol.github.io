import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bruol.me',
  vite: {
    plugins: [tailwindcss()]
  }
});
