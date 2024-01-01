import React from "react";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Card;

const StyledWrapper = styled.div`
  border-radius: 1rem;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  @media (min-width: 768px) {
    /* padding: 1rem; */
  }
  @media (min-width: 1024px) {
    /* padding: 1rem; */
  }
`;
