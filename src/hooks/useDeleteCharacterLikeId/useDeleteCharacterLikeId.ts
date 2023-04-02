import { useMutation, useQueryClient } from "react-query";
import { deleteCharacterLikeId } from "services";

export const useDeleteCharacterLikeId = () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation((id: number) => deleteCharacterLikeId(id), {
        onSuccess: () => queryClient.invalidateQueries("characterLikeId"),
    });
    const handleDeleteLikeId = (id: number) => mutate(id);

    return {
        handleDeleteLikeId,
    };
};
