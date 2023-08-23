import { env } from "$env/dynamic/private";



export const DOMAIN = env.DOMAIN || ''
export const STEAM_API_KEY = env.STEAM_API_KEY || ''


export interface SteamProfile {
    displayName: string,
    id: string,
    identifier: string,
    photos: Image,
    provider: string
}

interface Image {
    value: string,
}