import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button.attrs((props) => ({
  outlined: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  align-self: ${(props) => props.align || "stretch"};

  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || props.theme.colors.primary};
      border: 1px solid ${(props) => props.color || props.theme.colors.primary};
      background: transparent;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
