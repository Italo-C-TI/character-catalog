import { HttpStatusCodes } from 'api/codes';
import { request } from 'api/request';
import { makeHttpResponse } from 'utils/factories';
import { delay } from 'utils';


export const mockRequest = ({ body, status = HttpStatusCodes.ok }: { body: any; status?: HttpStatusCodes }) => {
    return (request as jest.Mock).mockImplementationOnce(async () => {
        await delay(0.5);

        return makeHttpResponse({ body, status });
    });
};
