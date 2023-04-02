import { HttpMethods, HttpStatusCodes } from 'api/codes';
import { Endpoints } from 'api/endpoints';
import { request } from 'api/request';
import { makeCharacterListResponse } from 'utils/factories';
import { mockRequest } from 'utils/mocks';
import { getCharacterList } from './getCharacterList';

jest.mock('api/request');

describe('getCharacterList', () => {
  const setUpSuccess = () => {
    const params = makeParams;
    const characterListResponse = makeCharacterListResponse();
    mockRequest({ body: characterListResponse, status: HttpStatusCodes.ok });

    return { params, characterListResponse };
  };

  const setUpToThrow = () => {
    const params = makeParams;
    mockRequest({ body: null, status: HttpStatusCodes.serverError });

    return { params };
  };


  const makeParams = {
    name: 'Some Name',
    page: 2
  };

  it('should call the request function with the correct params', async () => {
    const { params } = setUpSuccess();

    await getCharacterList(params);

    expect(request).toHaveBeenCalledWith({
      url: Endpoints.character.list,
      method: HttpMethods.GET,
      params: params
    })
  });

  it('should return the response body', async () => {
    const { params, characterListResponse } = setUpSuccess();
    const result = await getCharacterList(params);

    expect(result).toEqual(characterListResponse);
  });


  it('getCharacterList API request should throw an error if the response status is not OK', async () => {

    const { params } = setUpToThrow();

    await expect(getCharacterList(params)).rejects.toThrowError(new Error());
  });

}); 