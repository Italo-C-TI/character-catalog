import react from "react";
import { CharacterCardListProps } from "./CharacterCardList.types";
import * as Styled from "./CharacterCardList.styles";
import { CharacterCard } from "components";
import { useGetCharacterLikesIds } from "hooks";
import { convertToIdArray } from "utils";

export const CharacterCardList = ({
  characters,
  title,
}: CharacterCardListProps) => {
  const { idsList } = useGetCharacterLikesIds();

  const idsArray = convertToIdArray(idsList);

  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Row>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            alreadyLiked={idsArray.includes(character.id)}
          />
        ))}
      </Styled.Row>
    </Styled.Container>
  );
};
