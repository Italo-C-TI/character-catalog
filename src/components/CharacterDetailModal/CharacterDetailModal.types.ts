import { Character } from "models";

export interface CharacterDetailModalProps {
    character: Character;
    isLiked: boolean;
    hideModal: () => void;
    handleLike: (id: number) => void;
}