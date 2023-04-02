import { CharacterCardList } from "components";
import { useGetCharacterLikesIds, useGetMutipleCharacter } from "hooks";
import react, { useEffect, useState } from "react";

import * as Styled from "./Favorites.styles";
import { Character } from "models";
import { convertToIdArray } from "utils";

export const Favorites = () => {
  const { idsList } = useGetCharacterLikesIds();

  const idsArray = convertToIdArray(idsList);

  const { characterList, isSuccess } = useGetMutipleCharacter(idsArray);

  const [characters, setCharacters] = useState<Character[]>(
    characterList || []
  );

  useEffect(() => {
    if (characterList) setCharacters(characterList);
  }, [characterList]);

  return (
    <Styled.Container>
      {isSuccess && (
        <CharacterCardList characters={characters || []} title="Favorites" />
      )}
    </Styled.Container>
  );
};
