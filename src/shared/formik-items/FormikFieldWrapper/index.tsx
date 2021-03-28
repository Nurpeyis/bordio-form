import React from "react";
import styled from "styled-components";

import HelperText from "@elements/HelperText";

interface Props {
  helperText?: any;
}

const FormikFieldWrapper: React.FC<Props> = ({ children, helperText }) => {
  return (
    <FieldWrapper helperText={helperText}>
      {children}

      {helperText && (
        <ErrorHolder>
          <HelperText type="error">{helperText}</HelperText>
        </ErrorHolder>
      )}
    </FieldWrapper>
  );
};

export default FormikFieldWrapper;

const FieldWrapper = styled.div<Props>`
  margin-bottom: 22px;
  position: relative;
`;

const ErrorHolder = styled.div`
  position: absolute;
  top: 100%;
`;
