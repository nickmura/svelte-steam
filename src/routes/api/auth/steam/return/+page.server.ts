import { steam } from '$lib/api/auth/steam/auth'
import type { PageServerLoadEvent } from './$types';



export const load = async ({ request }: PageServerLoadEvent) => {
    try {
        const user = await steam.authenticate(request);
        return {user: user._json};
    } catch (error) {
        console.error(error);
    }
}



// export default router
// 	.use(path, passport.authenticate("steam", { failureRedirect: "/" }))
// 	.get(path, (_, res: AuthReturnResponse) => { res.redirect("/") });