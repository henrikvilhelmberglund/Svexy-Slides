<script>
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import Slides from "$lib/Slides.svx";
	import Reveal from "reveal.js";
	import { onMount } from "svelte";

	export let data;

	onMount(() => {
		let deck = new Reveal({ hash: true, navigationMode: "linear" });
		deck.initialize();
	});
</script>

<div class="reveal">
	<div class="slides">
		<Slides />
	</div>
</div>

{@html `<` + `style>${data.css}</style>`}

<!-- TODO fix so you can see when no scroll -->
<Footer />
