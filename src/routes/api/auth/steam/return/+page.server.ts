import { steam } from '$lib/api/auth/steam'
import type { PageServerLoadEvent } from './$types';



export const load = async ({ request, cookies }: PageServerLoadEvent) => {
    try {
        const user = await steam.authenticate(request);
        cookies.set('client', JSON.stringify(user._json), {path: '/'})
        return {user: user._json}; // +page.svelte acts as a redirect
    } catch (error) {
        console.error(error);
    }
}



