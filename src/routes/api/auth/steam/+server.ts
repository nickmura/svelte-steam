import { json } from "@sveltejs/kit";
import { steam } from "$lib/api/auth/steam/steam";



export const GET = async () => {

    const redirectUrl = await steam.getRedirectUrl();
    return Response.redirect(redirectUrl);

    
        
}

// export const GET = passport.authenticate('steam', {failureRedirect: '/'}) function (req, res) => {

// }

