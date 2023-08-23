import SteamAuth from 'node-steam-openid'
import { DOMAIN, STEAM_API_KEY, type SteamProfile } from "./config";

const path = `/api/auth/steam/return`
export const steam = new SteamAuth({
    realm: DOMAIN, 
    returnUrl: `http://localhost:5173${path}`,
    apiKey: STEAM_API_KEY
})
