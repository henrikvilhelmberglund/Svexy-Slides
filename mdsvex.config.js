import { defineMDSveXConfig as defineConfig } from "mdsvex";
import examples from "mdsvexamples";

const config = defineConfig({
	extensions: [".svelte.md", ".md", ".svx"],

	smartypants: {
		dashes: "oldschool",
		quotes: false,
	},
	layout: {
		notes: "src/lib/mdsvex-layout-notes.svx",
	},
	remarkPlugins: [
		examples,
		{
			defaults: {
				Wrapper: "/src/lib/Example.svelte",
			},
		},
	],

	rehypePlugins: [],
});

export default config;