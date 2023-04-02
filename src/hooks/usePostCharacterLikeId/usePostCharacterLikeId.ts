
import { useMutation, useQueryClient } from "react-query";
import { postCharacterLikeId } from "services";


export const usePostCharacterLikeId = () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation((id: number) => postCharacterLikeId(id), {
        onSettled: () => queryClient.invalidateQueries("characterLikeId"),
    });

    const handleSubmitId = (id: number) => mutate(id);

    return {
        handleSubmitId,
    };
};
