import passport from "passport";
import passportSteam from "passport-steam";



import { DOMAIN, STEAM_API_KEY, type SteamProfile } from "./config";


export const SteamStrategy = passportSteam.Strategy;

export const params = {
    returnURL: `${DOMAIN}/api/auth/steam/return`,
    realm: `${DOMAIN}`,
    apiKey: STEAM_API_KEY
}


passport.use(new SteamStrategy(params, 
     (_: string, profile: SteamProfile, done: (a: null | string,b: SteamProfile) => typeof done) => {
 	// Fetch any more information to populate

 	return done(null, profile);
}));

passport.initialize()
passport.session(); 

export default passport;