import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Wrapper>
      <Label>
        <RadioInput type="radio" hidden {...props} />

        <Circle />

        {label && <LabelText>{label}</LabelText>}
      </Label>
    </Wrapper>
  );
};

export default Radio;

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 24px;
`;

const RadioInput = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 7px;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    display: none;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.blue};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${RadioInput}:checked + & {
    &:after {
      display: block;
    }
  }
`;

const LabelText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};
  margin-left: 8px;
  cursor: pointer;
`;
