import { env } from "$env/dynamic/private";



export const DOMAIN = env.DOMAIN || 'http://localhost:5173'
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