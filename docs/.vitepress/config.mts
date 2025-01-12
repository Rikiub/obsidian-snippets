import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Rikiub Snippets",
	description: "CSS utilities for Obsidian",

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		sidebar: [
			{ text: "Introduction", link: "/" },
			{ text: "Installation", link: "/installation" },
			{
				text: "Columns",
				items: [{ text: "Basic", link: "/grid/basic" }],
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
