import * as Styled from "./Header.styles";
import { openOptions, home, inactiveLike, closeOptions } from "assets/icons";
import React, { useState } from "react";
import { HeaderVariantsEnum } from "./Header.types";
import { Icon } from "components/Icon";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const optionsIcon = isOpen ? closeOptions : openOptions;
  const variantHeadeer = isOpen
    ? HeaderVariantsEnum.OPEN
    : HeaderVariantsEnum.DEFAULT;

  return (
    <Styled.Header variant={variantHeadeer}>
      <Styled.IconsContainer>
        <Styled.RowIconWithText>
          <Icon src={optionsIcon} onClick={() => setIsOpen(!isOpen)} />
        </Styled.RowIconWithText>

        <Styled.RowIconWithText>
          <Icon src={home} />
          <Styled.IconText>Home</Styled.IconText>
        </Styled.RowIconWithText>

        <Styled.RowIconWithText>
          <Icon src={inactiveLike} />
          <Styled.IconText>Liked</Styled.IconText>
        </Styled.RowIconWithText>
      </Styled.IconsContainer>
    </Styled.Header>
  );
};
