<script>
	import Prism from "prismjs";
	import "prism-svelte";

	export let name;
	let i = 0;
	let selected = name[0];

	name.forEach((singleName) => {
		if (!singleName.name.includes(".js") && !singleName.name.includes(".svelte")) {
			singleName.name += ".svelte";
		}
	});
	let oldtext;
	$: if (selected.text) {
		oldtext = selected.text;
	}
	let language = "svelte";
	$: selected.name.includes(".js") ? (language = "js") : (language = "svelte");
	let show = true;
	let highlighted;
	$: {
		if (language === "svelte") {
			highlighted = Prism.highlight(selected.raw, Prism.languages.svelte, language);
		} else if (language === "js") {
			highlighted = Prism.highlight(selected.raw, Prism.languages.javascript, language);
		}
	}
</script>

<!-- {highlighted} -->

<!-- {#each Object.entries(name) as [ key, value ]}
	{JSON.stringify(value.comp)}
{/each} -->

{#if selected.text}
	<div
		class="text-1xl self-center rounded-xl bg-orange-300 pl-4 font-sans font-medium text-orange-900">
		{@html selected.text}
	</div>
{:else if oldtext}
	<div
		class="text-1xl self-center rounded-xl bg-orange-300 pl-4 font-sans font-medium text-orange-900">
		{@html oldtext}
	</div>
{/if}

<div class="container mx-auto w-[80%]">
	<div class="rounded-b-0 svelty rounded-xl border-4 border-b-0 border-solid border-orange-500 p-2">
		<svelte:component this={selected.comp} />
	</div>

	<div class="relative">
		{#each Object.entries(name) as [index, obj]}
			<label
				class="rounded-b-0 mr-2 rounded-md pb-[2px] {obj.name === selected.name
					? 'bg-orange-500'
					: 'bg-slate-300 hover:bg-orange-300'} p-1 text-black">
				<input
					bind:group={selected}
					type="radio"
					name="selected"
					class="hidden"
					id=""
					value={obj} />{obj.name}
			</label>
		{/each}
		{#if show}
			<pre
				class="{language === 'svelte'
					? 'language-svelte'
					: 'language-javascript'} rounded-t-0 !m-0 rounded-xl p-0 !pt-2"><code
					style="font-family: 'Maple', Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', 'Courier New',
        monospace;">{@html highlighted}</code></pre>
		{/if}
	</div>
</div>

<style>
	/* jank */
	:global(div b) {
		@apply font-extrabold text-pink-500;
	}

	:global(.svelty button) {
		color: #333;
		background-color: #f4f4f4;
		outline: none;
	}

	:global(.svelty input, button, select, textarea) {
		font-family: inherit;
		font-size: inherit;
		-webkit-padding: 0.4em 0;
		padding: 0.4em;
		margin: 0 0 0.5em 0;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 2px;
	}
</style>
