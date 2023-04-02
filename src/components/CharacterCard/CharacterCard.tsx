import react, { useState } from "react";
import { CharacterCardProps } from "./CharacterCard.types";
import { like, inactiveLike } from "assets/icons";
import * as Styled from "./CharacterCard.styles";
import {
  useDeleteCharacterLikeId,
  useModal,
  usePostCharacterLikeId,
} from "hooks";
import { CharacterDetailModal } from "components/CharacterDetailModal";

export const CharacterCard = ({
  character,
  alreadyLiked,
}: CharacterCardProps) => {
  const [isLiked, setIsLiked] = useState(alreadyLiked);
  const liked = isLiked ? like : inactiveLike;

  const { handleSubmitId } = usePostCharacterLikeId();
  const { handleDeleteLikeId } = useDeleteCharacterLikeId();
  const { isOpen, showModal, hideModal } = useModal();

  const handleLike = (id: number) => {
    if (!isLiked) {
      handleSubmitId(id);
      setIsLiked(true);
    } else {
      handleDeleteLikeId(id);
      setIsLiked(false);
    }
  };

  return (
    <>
      {isOpen && (
        <CharacterDetailModal
          character={character}
          isLiked={isLiked}
          hideModal={hideModal}
          handleLike={handleLike}
        />
      )}

      <Styled.Column>
        <Styled.Picture src={character.image} onClick={showModal} />
        <Styled.Row>
          <Styled.Name onClick={showModal}>{character.name}</Styled.Name>
          <Styled.LikeIcon
            src={liked}
            onClick={() => handleLike(character.id)}
          />
        </Styled.Row>
      </Styled.Column>
    </>
  );
};
