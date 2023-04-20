// use adapter-auto for zero config deployment to Vercel, adapter-static for Github Pages
// import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),
		paths: {
			// change path below to your github repo if using Github Pages
			base: dev ? "" : "/svexy-slides",
		},
	},
	vitePlugin: {
		experimental: {
			inspector: true,
		},
	},
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],
};

export default config;
