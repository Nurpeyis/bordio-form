import React from "react";
import styled from "styled-components";

function App() {
  return <Wrapper>Good luck!</Wrapper>;
}

export default App;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  min-height: 100vh;
`;
