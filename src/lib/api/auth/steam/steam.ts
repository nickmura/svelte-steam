import SteamAuth from 'node-steam-openid'
import { DOMAIN, STEAM_API_KEY, type SteamProfile } from '$lib/api/auth/config'

const path = `/api/auth/steam/return`
export const steam = new SteamAuth({
    realm: DOMAIN, 
    returnUrl: `${DOMAIN}${path}`,
    apiKey: STEAM_API_KEY
})
