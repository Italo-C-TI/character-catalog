import { CharacterCardList } from "components";
import { useGetCharacterList } from "hooks";
import react, { useEffect, useState } from "react";

import * as Styled from "./Home.styles";
import { Character, Pagination, PaginationParams } from "models";

export const Home = () => {
  const { characterList, isSuccess, page } = useGetCharacterList();

  const [characteres, setCharacteres] = useState<Character[]>(
    characterList?.results || []
  );

  const [pagination, setPagination] = useState<PaginationParams | undefined>({
    current: page?.current,
    pages: page?.total,
    update: page?.update,
  });

  useEffect(() => {
    if (characterList) {
      setCharacteres(characterList.results);
      setPagination(characterList.info);
    }
  }, [characterList]);

  return (
    <Styled.Container>
      {isSuccess && (
        <CharacterCardList
          characters={characteres}
          title="List Characters"
          showPagination
          pagination={
            page
              ? {
                  current: page.current,
                  pages: page.total,
                  size: page.size,
                  update: page.update,
                }
              : undefined
          }
        />
      )}
    </Styled.Container>
  );
};
