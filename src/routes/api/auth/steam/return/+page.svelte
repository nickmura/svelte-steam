You will be redirected...

<script lang="ts" >
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import { goto } from "$app/navigation";
	import { steamProfile } from "$lib/state/stores/state";

    export let data: PageData;

    onMount(() => {
        const { user } = data;
        steamProfile.set(user);
        goto("/");
    })
</script>