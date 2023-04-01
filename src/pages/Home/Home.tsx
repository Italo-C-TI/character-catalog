import { CharacterCardList, Header, Loading } from "components";
import { useGetCharacterList } from "hooks";
import react from "react";

import * as Styled from "./Home.styles";

export const Home = () => {
  const { characterList, isLoading } = useGetCharacterList();

  console.log(characterList);

  return (
    <Styled.Container>
      <Loading isLoading={isLoading} />
      <Header />

      <CharacterCardList characters={characterList || []} />
    </Styled.Container>
  );
};
