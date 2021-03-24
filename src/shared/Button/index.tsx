import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
}) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
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

  &:disabled {
    background-color: ${({ theme }) => theme.colors.sandGrey};
  }
`;
