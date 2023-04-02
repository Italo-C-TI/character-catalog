import react, { useState } from "react";
import { CharacterCardProps } from "./CharacterCard.types";
import { like, inactiveLike } from "assets/icons";
import * as Styled from "./CharacterCard.styles";
import {
  useDeleteCharacterLikeId,
  useGetCharacterLikesIds,
  usePostCharacterLikeId,
} from "hooks";
import { convertToIdArray } from "utils";

export const CharacterCard = ({
  character,
  alreadyLiked,
}: CharacterCardProps) => {
  const [isLiked, setIsLiked] = useState(alreadyLiked);
  const liked = isLiked ? like : inactiveLike;

  const { handleSubmitId } = usePostCharacterLikeId();
  const { handleDeleteLikeId } = useDeleteCharacterLikeId();

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
    <Styled.Column>
      <Styled.Picture src={character.image} />
      <Styled.Row>
        <Styled.Name>{character.name}</Styled.Name>
        <Styled.LikeIcon src={liked} onClick={() => handleLike(character.id)} />
      </Styled.Row>
    </Styled.Column>
  );
};
