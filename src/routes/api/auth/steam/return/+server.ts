import passport from '$lib/api/auth/steam/passport'

interface AuthReturnResponse extends Response {
	redirect: (path: string) => any;
}
const path = `api/auth/steam/return`

const GET = async () => {
    const auth = await passport.authenticate("steam", { failureRedirect: "/" }, () => {
        //todo, idk wtf to do
    });


}



// export default router
// 	.use(path, passport.authenticate("steam", { failureRedirect: "/" }))
// 	.get(path, (_, res: AuthReturnResponse) => { res.redirect("/") });