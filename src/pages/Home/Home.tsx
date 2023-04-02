import { CharacterCardList } from "components";
import { useGetCharacterList } from "hooks";
import react, { useEffect, useState } from "react";

import * as Styled from "./Home.styles";
import { Character } from "models";

export const Home = () => {
  const { characterList, isSuccess } = useGetCharacterList();

  const [characteres, setCharacteres] = useState<Character[]>(
    characterList?.results || []
  );

  useEffect(() => {
    if (characterList) setCharacteres(characterList.results);
  }, [characterList]);

  return (
    <Styled.Container>
      {isSuccess && (
        <CharacterCardList characters={characteres} title="List Characters" />
      )}
    </Styled.Container>
  );
};
