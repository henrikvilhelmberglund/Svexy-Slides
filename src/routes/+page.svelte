<script>
	import { onMount } from "svelte";

	export let data;

	$: slides = data.slides;
	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

Hello there

{#if loaded}
	{#each slides as slide}
		<a class="m-4 rounded bg-green-500 p-4 text-center" href={slide}>{slide}</a>
	{/each}
{/if}
