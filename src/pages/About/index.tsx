import React from "react";
import styled from "@emotion/styled";
import { about } from "src/assets/text/about";
import NavToBtn from "src/components/Buttons/NavToBtn";
import Paper from "src/components/Paper";
import PaperBody from "src/components/Paper/PaperBody";
import PaperHeader from "src/components/Paper/PaperHeader";

const About = () => {
  // TODO: make api call to get data
  const data = about;
  return (
    <StyledWrapper>
      <Paper>
        <PaperHeader title={about.title} subtitle={about.subtitle} />
        <PaperBody text={about.about} />
        <NavToBtn text={"← Back"} to={"/"} className={"backbtn"} />
      </Paper>
    </StyledWrapper>
  );
};

export default About;

const StyledWrapper = styled.div`
  padding: 2rem 0;

  .backbtn {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray10};
  }
`;
