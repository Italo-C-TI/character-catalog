import { useQuery } from "react-query";
import { getCharacterLikesIds } from "services";

export const useGetCharacterLikesIds = () => {
    const { data, isLoading, isSuccess, refetch } = useQuery(
        "characterLikeId",
        () => getCharacterLikesIds()
    );

    const refresh = () => refetch();

    return {
        idsList: isSuccess ? data.data : [],
        isSuccess,
        isLoading,
        refresh,
    };
};
