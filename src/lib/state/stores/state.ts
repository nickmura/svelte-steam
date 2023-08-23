export const ssr = false;
import { writable } from "svelte/store";

export const steamProfile = writable<Record<string,string | number> | undefined | null>();