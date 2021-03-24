import React from "react";
import styled from "styled-components";

import Paper from "../../shared/Paper";
import SignUpForm from "./SignUpForm";

export const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpContent>
        <Paper title="Create a new account">
          <SignUpForm />
        </Paper>
      </SignUpContent>
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignUpContent = styled.div`
  max-width: 400px;
  width: 100%;
`;
