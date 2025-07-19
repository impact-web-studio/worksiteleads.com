// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		sitemap({
			filter: (page) =>
				![
					'https://worksiteleads.com/privacy-policy',
					'https://worksiteleads.com/terms-of-use',
				].includes(page),
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		}),
	],
	site: 'https://worksiteleads.com',
	vite: {
		plugins: [tailwindcss()],
	},
});
