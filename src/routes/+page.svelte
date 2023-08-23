<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { steamProfile } from '$lib/config'

	import type { PageData } from "./$types";
	export let data: PageData;
	
	
    onMount(() => {
        const { user } = data;
		if (user) {
			const profile = JSON.parse(user);
			steamProfile.set(profile);
		}
    })


	function gotoSteamEndpoint() {
		goto('/api/auth/steam');
	}
</script>

<main class="flex flex-col p-10 w-screen h-screen items-center gap-5 font-serif">
	<h1 class="text-5xl text-black font-bold">svelte-steam</h1>
	<section class="flex flex-col p-10 items-start gap-5 border-2 rounded-xl">
		
		<h2 class="text-xl text-black font-semibold">Connected: {$steamProfile ? 'true' : 'false'}</h2>
		<h2 class="text-xl text-black font-semibold">Steam Profile: {$steamProfile ? $steamProfile.personaname : 'N/A'}</h2>

		<button
			on:click={gotoSteamEndpoint}
			class="p-3 rounded-xl text-xl bg-indigo-600 text-white font-semibold hover:scale-[1.05] transition transition-200"
			>Connect to Steam</button
		>

	</section>

</main>
