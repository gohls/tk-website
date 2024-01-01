import React from "react";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const Paper: React.FC<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Paper;

const StyledWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 42rem;
  }
`;
