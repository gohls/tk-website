import React, { ReactNode } from "react";
import styled from "@emotion/styled";

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 1rem;
`;
