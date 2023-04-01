import react from "react";
import { CharacterCardListProps } from "./CharacterCardList.types";
import * as Styled from "./CharacterCardList.styles";
import { CharacterCard } from "components";

export const CharacterCardList = ({ characters }: CharacterCardListProps) => {
  return (
    <Styled.Row>
      <Styled.Title>List Characteres</Styled.Title>
      {characters?.map((character) => (
        <CharacterCard character={character} />
      ))}
    </Styled.Row>
  );
};
