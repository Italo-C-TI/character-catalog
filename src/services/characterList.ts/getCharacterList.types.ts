import { Character, CharacterFilterParams, PageParams, Pagination } from "models";

export type CharacterListResponse = {
    info: Pagination;
    characters: Character[];
};

export type CharacterListParams = Partial<CharacterFilterParams & PageParams>;

export type CharacterList = (params: CharacterListParams) => Promise<CharacterListResponse>;
