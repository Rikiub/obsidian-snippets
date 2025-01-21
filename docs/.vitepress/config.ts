import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Rikiub Snippets",
	description: "CSS utilities for Obsidian",

	base: "/obsidian-snippets/",
	cleanUrls: true,

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		sidebar: [
			{ text: "Introduction", link: "/" },
			{ text: "Installation", link: "/installation" },
			{
				text: "Callouts",
				items: [
					{
						text: "Grid",
						link: "/callout/grid/basic",
						collapsed: true,
						items: [
							{ text: "Basic", link: "/callout/grid/basic" },
							{ text: "Advanced", link: "/callout/grid/advanced" },
						],
					},
				],
			},
			{
				text: "Images",
				items: [{ text: "Shapes", link: "/image/shapes" }],
			},
			{
				text: "Wides",
				items: [
					{ text: "wide-page", link: "/wide/page" },
					{ text: "wide-dataview", link: "/wide/dataview" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/Rikiub/obsidian-snippets" },
		],
	},
});
