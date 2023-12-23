import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const PoemFooter: React.FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <a onClick={() => navigate(-1)}>← Back</a>
    </StyledWrapper>
  );
};

export default PoemFooter;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray10};
  a {
    margin-top: 0.5rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`;
