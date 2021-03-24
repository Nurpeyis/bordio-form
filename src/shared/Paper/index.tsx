import React from "react";
import styled from "styled-components";

interface PaperProps {
  title?: string;
}

const Paper: React.FC<PaperProps> = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      {children}
    </Wrapper>
  );
};

export default Paper;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 28px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  margin-bottom: 36px;
`;
