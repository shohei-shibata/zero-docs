// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ZERO Turf Machines',
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
        replacesTitle: true,
      },
			social: {
				facebook: 'https://www.facebook.com/JKVEngineering',
        linkedin: 'https://www.linkedin.com/company/jkv-engineering-corp/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Operations',
					autogenerate: { directory: 'operations' },
				},
				{
					label: 'Maintenance',
					autogenerate: { directory: 'maintenance' },
				},
				{
					label: 'Troubleshooting',
					autogenerate: { directory: 'troubleshooting' },
				},
			],
		}),
	],
});
