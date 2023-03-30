import { Character, CharacterFilterParams, Pagination } from "models";

export type CharacterListResponse = {
    info: Pagination;
    character: Character[];
};

export type CharacterListParams = Partial<CharacterFilterParams>;

export type CharacterList = (params: CharacterListParams) => Promise<CharacterListResponse>;
