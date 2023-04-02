import { PageParams } from "models";
import { useState } from "react";
import { useQuery } from "react-query";
import { getCharacterList } from "services";
import { CharacterListParams } from "services/getCharacterList.ts/getCharacterList.types";

export const useGetCharacterList = (params?: CharacterListParams) => {
    const [paramsState, setParamsState] = useState<CharacterListParams>({ page: 1, ...params });

    const { data, isSuccess } = useQuery(['characterList', paramsState], () =>
        getCharacterList(paramsState)
    );

    const updatePagination = ({ page, size }: Required<PageParams>) => {
        setParamsState({ ...params, page, size });
    };

    if (isSuccess) {
        return {
            characterList: data,
            isSuccess,
            page: {
                current: paramsState.page,
                total: data.info.pages,
                update: updatePagination,
                size: paramsState.size,
            },
            items: {
                total: data.info.count,
            },
        };
    }

    return {
        characterList: null,
        page: null,
        isSuccess: false,
        items: null,
    };

};
