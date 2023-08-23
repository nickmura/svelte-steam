export const ssr = false;
import { BigNumber } from "ethers";
import { writable } from "svelte/store";
import '$lib/globalState';

export const balanceOnBlock = writable<BigNumber>(BigNumber.from(0)); 


export const connected = writable<boolean>(false);
export const steamProfile = writable<any>();