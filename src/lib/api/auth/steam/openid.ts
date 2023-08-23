import SteamAuth from 'node-steam-openid';
import { DOMAIN, STEAM_API_KEY } from './config';

const params = {
    returnUrl: `${DOMAIN}/api/auth/steam/return`,
    realm: `${DOMAIN}`,
    apiKey: STEAM_API_KEY
}

export const steam = new SteamAuth(params)