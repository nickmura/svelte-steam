import { sequence } from '@sveltejs/kit/hooks';
import { handleSession } from 'svelte-kit-cookie-session';

import passport from '$lib/api/auth/steam/passport'

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



