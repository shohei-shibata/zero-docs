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
          label: 'Start Here',
          items: [
            'reference/about',
            'before-you-start',
          ]
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
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
		}),
	],
});
