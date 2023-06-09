import { HttpMethods, HttpStatusCodes } from 'api/codes';
import { Endpoints } from 'api/endpoints';
import { request } from 'api/request';
import { CharacterList, CharacterListParams, CharacterListResponse } from './getCharacterList.types';

export const getCharacterList: CharacterList = async (params?: CharacterListParams) => {
    const response = await request<CharacterListResponse>({
        url: Endpoints.character.list,
        method: HttpMethods.GET,
        params: {
            ...params
        },
    });

    if (response.status !== HttpStatusCodes.ok) {
        throw new Error(response.error?.message);
    }

    return response.body;

};
