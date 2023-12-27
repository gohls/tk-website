import React from "react";
import styled from "@emotion/styled";
import { Emoji } from "src/components/Emoji";

type Props = {
  children: React.ReactNode;
};

const CardTitle: React.FC<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      <Emoji>{children}</Emoji>
    </StyledWrapper>
  );
};

export default CardTitle;

const StyledWrapper = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`;
