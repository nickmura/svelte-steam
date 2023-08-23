export const ssr = false;
import { writable } from "svelte/store";



export const connected = writable<boolean>(false);
export const steamProfile = writable<any>();