import styled from "@emotion/styled";
import React from "react";
import { Emoji } from "src/components/Emoji";
import useScheme from "src/hooks/useScheme";
import { ThemeContext } from "../ThemeProvider";

type Props = {};

const ThemeToggle: React.FC<Props> = () => {
  const { scheme, toggle } = React.useContext(ThemeContext);

  const handleClick = () => {
    toggle(scheme === "light" ? "dark" : "light");
  };

  return (
    <StyledWrapper onClick={handleClick}>
      <Emoji>{scheme === "light" ? "☀️" : "🌙"}</Emoji>
    </StyledWrapper>
  );
};

export default ThemeToggle;

const StyledWrapper = styled.div`
  cursor: pointer;
`;
