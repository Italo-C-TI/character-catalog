import { useQuery } from "react-query";
import { getMultipleCharacters } from "services";

export const useGetMutipleCharacter = (ids: number[]) => {
    const { data, isSuccess, isLoading } = useQuery(['characterList', ids], () =>
        getMultipleCharacters(ids)
    );

    if (isSuccess) {
        return {
            characterList: data,
            isSuccess,
            isLoading
        };
    }

    return {
        characterList: null,
        isSuccess: false,
        isLoading: false
    };

};
