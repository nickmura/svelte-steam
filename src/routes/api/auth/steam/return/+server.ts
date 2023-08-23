import { steam } from '$lib/api/auth/steam/auth'
import { json } from '@sveltejs/kit';



const GET = async (req, res) => {
    try {
        const user = await steam.authenticate(req);
        // console.log(user)
        return json(user)
    } catch (error) {
        console.error(error);
    }

}



// export default router
// 	.use(path, passport.authenticate("steam", { failureRedirect: "/" }))
// 	.get(path, (_, res: AuthReturnResponse) => { res.redirect("/") });