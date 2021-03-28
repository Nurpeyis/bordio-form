import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: any;
}

const Checkbox: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Wrapper>
      <Label>
        <CheckboxInput type="checkbox" hidden {...props} />

        <Circle />

        {label && <LabelText>{label}</LabelText>}
      </Label>
    </Wrapper>
  );
};

export default Checkbox;

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 24px;
`;

const CheckboxInput = styled.input`
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
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    display: none;
    width: 4px;
    height: 9px;
    border-right: 1px solid ${({ theme }) => theme.colors.blue};
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
    position: absolute;
    top: 45%;
    left: 20%;
    transform: rotate(45deg) translate(-50%, -50%);
  }

  ${CheckboxInput}:checked + & {
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
