<script>
	export let type = false;
</script>

{#if type === "out"}
	<div class="fragment fade-out">
		<slot />
	</div>
{:else if type === "up"}
	<div class="fragment fade-up">
		<slot />
	</div>
{:else if type === "down"}
	<div class="fragment fade-down">
		<slot />
	</div>
{:else if type === "left"}
	<div class="fragment fade-left">
		<slot />
	</div>
{:else if type === "right"}
	<div class="fragment fade-right">
		<slot />
	</div>
{:else if type === "inout"}
	<div class="fragment fade-in-then-out">
		<slot />
	</div>
{:else if type === "current"}
	<div class="fragment current-visible">
		<slot />
	</div>
{:else if type === "insemiout"}
	<div class="fragment fade-in-then-semi-out">
		<slot />
	</div>
{:else if type === "grow"}
	<div class="fragment grow">
		<slot />
	</div>
{:else if type === "semiout"}
	<div class="fragment semi-fade-out">
		<slot />
	</div>
{:else if type === "shrink"}
	<div class="fragment shrink">
		<slot />
	</div>
{:else if type === "strike"}
	<div class="fragment strike">
		<slot />
	</div>
{:else if type === "red"}
	<div class="fragment highlight-red">
		<slot />
	</div>
{:else if type === "green"}
	<div class="fragment highlight-green">
		<slot />
	</div>
{:else if type === "blue"}
	<div class="fragment highlight-blue">
		<slot />
	</div>
{:else if type === "currentred"}
	<div class="fragment highlight-current-red">
		<slot />
	</div>
{:else if type === "currentgreen"}
	<div class="fragment highlight-current-green">
		<slot />
	</div>
{:else if type === "currentblue"}
	<div class="fragment highlight-current-blue">
		<slot />
	</div>
{:else}
	<div class="fragment">
		<slot />
	</div>
{/if}

<style>
</style>
