import react from "react";
import { CharacterCardProps } from "./CharacterCard.types";
import { like, inactiveLike } from "assets/icons";
import * as Styled from "./CharacterCard.styles";

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Styled.Column>
      <Styled.LikeIcon src={inactiveLike} />
      <img src={character.image} />
      <Styled.Row>
        <Styled.Name>{character.name}</Styled.Name>
        <Styled.Status>{character.status}</Styled.Status>
      </Styled.Row>
    </Styled.Column>
  );
};
