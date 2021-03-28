import React from "react";
import styled from "styled-components";

interface Props {
  type?: "error" | "info" | "success" | "warning";
}

const HelperText: React.FC<Props> = ({ children, type, ...props }) => {
  return (
    <Wrapper type={type} {...props}>
      {children}
    </Wrapper>
  );
};

export default HelperText;

const Wrapper = styled.div<Props>`
  color: ${({ theme, type }) => theme.colors[type ? type : "info"]};
  font-size: 10px;
  line-height: 1;
  font-weight: 400;
  padding: 0 16px;
  margin-top: 2px;
`;
