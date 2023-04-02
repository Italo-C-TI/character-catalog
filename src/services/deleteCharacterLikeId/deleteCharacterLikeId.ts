import axios from "axios";
import { likesFileUrl } from "../likesFileUrl";
import { HttpStatusCodes } from "api/codes";
import { ICharacterLikeId } from "models";

export const deleteCharacterLikeId = async (id: number) => {

    try {
        const response = await axios.delete<ICharacterLikeId>(`${likesFileUrl}/${id}`);
        const result = {
            data: response.data,
            status: response.status,
            isError: false,
            message: "Sucessfuly delete id",
        };

        return result;
    } catch (error: any) {
        const result = {
            data: undefined,
            status: HttpStatusCodes.serverError,
            isError: true,
            message: error.message,
        };

        return result;
    }
};
