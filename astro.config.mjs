import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from 'astro-sanity';
import react from '@astrojs/react';
import vercelStatic from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: '3xsa4y7h',
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: import.meta.env.PROD
  }), react()],
  experimental: {
    assets: true
  },
  output: 'static',
  adapter: vercelStatic()
});