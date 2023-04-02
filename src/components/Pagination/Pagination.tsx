import React from "react";
import * as Styled from "./Pagination.styles";
import { PaginationParams } from "models";

export const Pagination = ({
  pages,
  current,
  update,
  size,
}: PaginationParams) => {
  return (
    <>
      <Styled.Pagination>
        {current !== 1 && (
          <Styled.Block
            onClick={() => update!({ page: current! - 1, size: size! })}
          >
            {"<"}
          </Styled.Block>
        )}

        <Styled.Block>{current}</Styled.Block>

        {current !== pages && (
          <Styled.Block
            onClick={() => update!({ page: current! + 1, size: size! })}
          >
            {">"}
          </Styled.Block>
        )}
      </Styled.Pagination>
    </>
  );
};
