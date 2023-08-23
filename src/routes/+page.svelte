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
		<!-- <h2 class="text-xl text-black font-semibold">$walletAddress: {$walletAddress}</h2> -->
		<!-- <h2 class="text-xl text-black font-semibold">
			$accountChainId: {JSON.stringify($accountChainId)}
		</h2> -->
		<button
			on:click={gotoSteamEndpoint}
			class="p-3 rounded-xl text-xl bg-indigo-600 text-white font-semibold hover:scale-[1.05] transition transition-200"
			>Connect to Steam</button
		>
		<!-- <button
			on:click={connectWalletConnect}
			class="p-3 rounded-xl text-xl bg-black text-white font-semibold hover:scale-[1.05] transition transition-200"
			>Connect via WalletConnect</button
		>
		<button
			on:click={disconnect}
			class="p-3 rounded-xl text-xl bg-black text-white font-semibold hover:scale-[1.05] transition transition-200"
			>Disconnect</button
		> -->
	</section>
	<!-- <section class="flex flex-col p-10 items-start gap-5 border-2 rounded-xl">
		<h1 class="text-2xl text-black font-bold">Sync contract state on block, event or interval</h1>
		<p class="text-md text-black font-semibold">
			Set In '$lib/globalState.ts', will load as long as a store is used from '$lib/stores/state.ts'
			or you import the globalState in the root of your project with 'import "$lib/globalState";'
		</p>
		<h2 class="text-xl text-black font-semibold">
			$balanceOnBlock: {formatEther($balanceOnBlock)} ETH
		</h2>
	</section> -->
</main>
