import { json } from "@sveltejs/kit";
import passport from "$lib/api/auth/steam/passport";


// export const GET = loginMethod('steam', { scope: ['identifier', 'profile'] });

export const GET = async () => {
    await passport.authenticate('steam', {failureRedirect: '/'}, (req:Request, res:Response) => {
        console.log(req, res)
    })  

    return json({test: 12345})
        
}

