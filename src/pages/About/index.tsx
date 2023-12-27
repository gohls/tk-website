import styled from "@emotion/styled";
import React from "react";
import NavToBtn from "src/components/NavToBtn";
import Paper from "src/components/Paper";
import { CONFIG } from "src/config";
import Main from "src/layouts/Main";

const About = () => {
  return (
    <StyledWrapper>
      <Paper>
        <h1 className="title">{CONFIG.profile.name}</h1>
        Hello About
      </Paper>
    </StyledWrapper>
  );
};

export default About;

const StyledWrapper = styled.div`
  padding: 2rem 0;
`;
