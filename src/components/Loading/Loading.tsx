import React from "react";
import * as Styled from "./Loading.styles";
import { LoadingProps } from "./Loading.types";

export const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <>
      {isLoading && (
        <Styled.Container>
          <Styled.Spinner viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="4"
            />
          </Styled.Spinner>
        </Styled.Container>
      )}
    </>
  );
};
