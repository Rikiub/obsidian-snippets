// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Rikiub/obsidian-snippets' }],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						"getting-started",
					],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
			],
		}),
	],
});
