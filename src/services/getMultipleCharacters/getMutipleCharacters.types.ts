import { Character } from "models";

export type MutipleCharacters = (ids: number[]) => Promise<Character[]>;