<script>
	let count = 0;
</script>

<div>
	<button
		on:click={() => (count += 1)}
		class="h-24 w-24 rounded bg-green-500 p-2 hover:bg-green-400">
		{count}</button>
	<slot />
</div>

<style>
	div {
		background: pink;
		border: 23px solid orange;
		padding: 0 15px;
		width: 400px;
		text-align: center;
		transform: translateX(-200px);
		animation: 2s slide infinite alternate ease-in-out;
	}

	@keyframes slide {
		from {
			transform: translateX(0px);
		}
		to {
			transform: translateX(400px);
		}
	}
</style>
