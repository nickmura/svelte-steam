<script lang="ts">
	import { goto } from '$app/navigation';
	import { connected, steamProfile } from '$lib/state/stores/state';


	function gotoSteamEndpoint() {
		goto('/api/auth/steam');
	}
</script>

<main class="flex flex-col p-10 w-screen h-screen items-center gap-5 font-serif">
	<h1 class="text-5xl text-black font-bold">svelte-steam</h1>

	<section class="flex flex-col p-10 items-start gap-5 border-2 rounded-xl">
		
		<h2 class="text-xl text-black font-semibold">$connected: {$connected}</h2>
		<h2 class="text-xl text-black font-semibold">$steamProfile: {$steamProfile ? $steamProfile : 'N/A'}</h2>

		<button
			on:click={gotoSteamEndpoint}
			class="p-3 rounded-xl text-xl bg-indigo-600 text-white font-semibold hover:scale-[1.05] transition transition-200"
			>Connect to Steam</button
		>

	</section>

</main>
