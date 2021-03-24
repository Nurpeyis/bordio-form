import React from "react";
import styled from "styled-components";

import { SignUp } from "./features/SignUp/SignUp";

function App() {
  return (
    <AppWrapper>
      <SignUp />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  min-height: 100vh;
`;
