import { ICharacterLikeId } from "models";

export const convertToIdArray = (idsList: ICharacterLikeId[]) => {
    return idsList.map((obj, index, array) => {
        return obj.id;
    });

}
