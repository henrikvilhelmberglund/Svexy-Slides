<script>
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
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
		{#each data.slides as slide}
			<section data-auto-animate>
				{#each slide as element}
					{@html element}
				{/each}
			</section>
		{/each}
	</div>
</div>

{@html `<` + `style>${data.css}</style>`}

<!-- TODO fix so you can see when no scroll -->
<Footer />
