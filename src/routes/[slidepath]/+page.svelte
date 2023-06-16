<script>
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import Reveal from "reveal.js";
	import { onMount, afterUpdate, beforeUpdate } from "svelte";
  import { tick } from "svelte";

  if (import.meta.hot) {
    import.meta.hot.on("vite:beforeUpdate", () => {
      // console.log("Running before update!!");
    });
    import.meta.hot.on("vite:afterUpdate", () => {
      // console.log("Running after update!!");
      // https://github.com/hakimel/reveal.js/issues/1177#issuecomment-86051667
      deck.slide(deck.getIndices().h, deck.getIndices().v);
    });
  }

	export let data;
	let deck;

	onMount(() => {
		deck = new Reveal({ hash: true, navigationMode: "linear" });
		deck.initialize();
	});

	$: slide = data.slide;
</script>

<div class="reveal">
	<div class="slides">
		<!-- <Slides /> -->
		<svelte:component this={slide} />
	</div>
</div>

{@html `<` + `style>${data.css}</style>`}

<!-- TODO fix so you can see when no scroll -->
<Footer />
