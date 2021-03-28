import React, { Component, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: Component;
}

const Input: React.FC<Props> = ({ startIcon, ...props }) => {
  return (
    <InputWrapper>
      {startIcon && <InputIcon>{startIcon}</InputIcon>}
      <InputElement startIcon={!!startIcon} {...props} />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

interface InputProps {
  startIcon?: boolean;
}

const InputElement = styled.input<InputProps>`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.dark};
  padding: 16px;
  padding-left: ${({ startIcon }) => (startIcon ? "52px" : "16px")};
  border-radius: 8px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.sandGrey};
  }
`;
