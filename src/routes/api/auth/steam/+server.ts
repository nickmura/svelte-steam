import { json } from "@sveltejs/kit";
import passport from "$lib/api/auth/steam/passport";



export const GET = async () => {
    await passport.authenticate('steam', {failureRedirect: '/'}, (req:Request, res:Response) => {
        return json({test: 'wtf'})
    })  

    
        
}

