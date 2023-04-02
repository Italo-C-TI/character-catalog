import { HttpMethods, HttpStatusCodes } from 'api/codes';
import { Endpoints } from 'api/endpoints';
import { request } from 'api/request';
import { Character } from 'models';
import { MutipleCharacters } from './getMutipleCharacters.types';

export const getMultipleCharacters: MutipleCharacters = async (ids: number[]) => {
    const response = await request<Character[]>({
        url: Endpoints.character.mutipleCharacters(ids),
        method: HttpMethods.GET,
    });

    if (response.status !== HttpStatusCodes.ok) {
        throw new Error(response.error?.message);
    }

    return response.body;

};
