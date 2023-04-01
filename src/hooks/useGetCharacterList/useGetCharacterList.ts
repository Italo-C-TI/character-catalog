import { PageParams } from "models";
import { useState } from "react";
import { useQuery } from "react-query";
import { getCharacterList } from "services";
import { CharacterListParams } from "services/characterList.ts/getCharacterList.types";

export const useGetCharacterList = (params?: CharacterListParams) => {

    const [paramsState, setParamsState] = useState<CharacterListParams>({ ...params });

    const { data, isError, isLoading, isSuccess, refetch } = useQuery(
        "characterList",
        () => getCharacterList(paramsState)
    );

    const updatePagination = ({ page, size }: Required<PageParams>) => {
        setParamsState({ ...params, page, size });
    };

    const handleGetCharacterList = async () => {
        const response = await refetch();

        if (!response.isSuccess) return [];

        return response.data.characters;
    };


    return {
        handleGetCharacterList,
        characterList: isSuccess ? data.characters : [],
        isError,
        isLoading,
        refetch,
        updatePagination
    };
};
