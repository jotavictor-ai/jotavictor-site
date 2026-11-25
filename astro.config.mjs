import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jotavictor.com',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  server: { host: '127.0.0.1', port: 4330 },
  devToolbar: { enabled: false },
  image: { responsiveStyles: false },
});
