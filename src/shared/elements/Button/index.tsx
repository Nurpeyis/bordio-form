import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { darken } from "polished";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 32px;
  outline: none;
  padding: 20px 40px;
  width: 100%;
  font-size: 18px;
  line-height: 1.25;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.sandGrey};
  }

  &:not(:disabled) {
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => darken(0.05, theme.colors.blue)};
    }
  }
`;
