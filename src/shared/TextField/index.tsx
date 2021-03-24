import React, { Component } from "react";
import styled from "styled-components";
import { FieldProps } from "formik";

interface Props {
  startIcon?: Component;
}

interface InputProps {
  startIcon?: boolean;
}

const TextField: React.FC<FieldProps & Props> = ({
  field,
  form,
  startIcon,
  ...props
}) => {
  return (
    <FieldWrapper>
      {startIcon && <InputIcon>{startIcon}</InputIcon>}

      <Input startIcon={!!startIcon} {...field} {...props} />
    </FieldWrapper>
  );
};

export default TextField;

const FieldWrapper = styled.div`
  margin-bottom: 20px;
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

const Input = styled.input<InputProps>`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0);
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
