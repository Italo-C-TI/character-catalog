import axios from "axios";
import { ICharacterLikeId } from "models";
import { likesFileUrl } from "services/likesFileUrl";

export const getCharacterLikesIds = async () => {
    try {
        const response = await axios.get<ICharacterLikeId[]>(likesFileUrl);

        const result = {
            data: response.data,
            status: response.status,
            isError: false,
            message: "Sucessfuly list ids",
        };
        return result;
    } catch (error: any) {
        const result = {
            data: [],
            status: 500,
            isError: true,
            message: error.message,
        };
        return result;
    }
};
