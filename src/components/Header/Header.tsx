import * as Styled from "./Header.styles";
import { openOptions, home, inactiveLike, closeOptions } from "assets/icons";
import React, { useState } from "react";
import { HeaderVariantsEnum } from "./Header.types";
import { Icon } from "components/Icon";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const optionsIcon = isOpen ? closeOptions : openOptions;
  const variantHeader = isOpen
    ? HeaderVariantsEnum.OPEN
    : HeaderVariantsEnum.DEFAULT;

  return (
    <Styled.Header variant={variantHeader}>
      <Styled.IconsContainer>
        <Styled.RowIconWithText>
          <Icon src={optionsIcon} onClick={() => setIsOpen(!isOpen)} />
        </Styled.RowIconWithText>

        <Styled.RowIconWithText>
          <Icon src={home} onClick={() => navigate("/")} />
          <Styled.IconText variant={variantHeader}>Home</Styled.IconText>
        </Styled.RowIconWithText>

        <Styled.RowIconWithText>
          <Icon src={inactiveLike} onClick={() => navigate("/favorites")} />
          <Styled.IconText variant={variantHeader}>Likeds</Styled.IconText>
        </Styled.RowIconWithText>
      </Styled.IconsContainer>
    </Styled.Header>
  );
};
