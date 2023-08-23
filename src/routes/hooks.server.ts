import { sequence } from '@sveltejs/kit/hooks';
import { handleSession } from 'svelte-kit-cookie-session';

import passport, { SteamStrategy, params } from '$lib/api/auth/steam/passport'
import { SteamProfile } from '$lib/api/auth/steam/config';

export const handle = handleSession(
	{   
		secret: 'SOME_COMPLEX_SECRET_32_CHARSLONG',
        saveUninitialized: true,
        cookie: { sameSite: 'lax'}
    
	},
	({ event, resolve }) => {
		// event.locals is populated with the session `event.locals.session`
        passport.serializeUser((user:Express.User, done) => {
            done(null, user);
        });
        
        passport.deserializeUser((user:Express.User, done) => {
            done(null, user);
        })
        passport.use(new SteamStrategy(params, 
            (_: string, profile: SteamProfile, done: (a: null | string,b: SteamProfile) => typeof done) => {
                // Fetch any more information to populate
                return done(null, profile);
        }))
        passport.initialize()
        passport.session();
        
		// Do anything you want here
		return resolve(event);
	}
);


// //add the user info to request (you can access this info in and endpoint using `request.locals`)
// /** @type {import('@sveltejs/kit').Handle} */
// async function addUserToRequest({ request, resolve }: OAuthHandleInput) {
//     const cookies = cookie.parse(request.headers.cookie || '');
// 	const cookieId = cookies[DefaultCookieName];

// 	if (cookieId) {
// 		// request.locals = Database[cookieId]; //change this to retrieve from database
//         console.log(request.locals)
// 	}
// 	const response = await resolve(request);
// 	return response;
// }

// //this will expose user info in session and can be retrieved in the front end using $session
// export function getSession(request:any) {
// 	return request.locals;
// }



