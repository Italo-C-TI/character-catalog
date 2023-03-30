import { useQuery } from "react-query";
import { getCharacterList } from "services";
import { CharacterListParams } from "services/characterList.ts/getCharacterList.types";

export const useGetCharacterList = (params: CharacterListParams) => {
    const { data, isError, isLoading, isSuccess, refetch } = useQuery(
        "areas",
        () => getCharacterList(params)
    );

    const refresh = () => refetch();

    return {
        areasList: isSuccess ? data : [],
        isError,
        isLoading,
        refresh,
    };
};
