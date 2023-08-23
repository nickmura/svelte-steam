import passport from "passport";
import passportSteam from "passport-steam";



import { DOMAIN, STEAM_API_KEY, type SteamProfile } from "./config";


export const SteamStrategy = passportSteam.Strategy;

export const params = {
    returnURL: `${DOMAIN}/api/auth/steam/return`,
    realm: `${DOMAIN}`,
    apiKey: STEAM_API_KEY
}


export default passport;