import { HttpMethods, HttpStatusCodes } from 'api/codes';
import { Endpoints } from 'api/endpoints';
import { request } from 'api/request';
import { CharacterList, CharacterListParams, CharacterListResponse } from './getCharacterList.types';

export const getCharacterList: CharacterList = async (params?: CharacterListParams) => {
    console.log(params)
    const response = await request<CharacterListResponse>({
        url: Endpoints.character.list,
        method: HttpMethods.Get,
        params: {
            ...params
        },
    });

    if (response.status !== HttpStatusCodes.ok) {
        throw new Error(response.error?.message);
    }

    return response.body;

};
