import react from "react";
import { CharacterCardListProps } from "./CharacterCardList.types";
import * as Styled from "./CharacterCardList.styles";
import { CharacterCard, Pagination } from "components";
import { useGetCharacterLikesIds } from "hooks";
import { convertToIdArray } from "utils";

export const CharacterCardList = ({
  characters,
  title,
  showPagination,
  pagination,
}: CharacterCardListProps) => {
  const { idsList } = useGetCharacterLikesIds();

  const idsArray = convertToIdArray(idsList);

  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>

      {showPagination && !!pagination && (
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          size={pagination.size}
          update={pagination.update}
        />
      )}

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
