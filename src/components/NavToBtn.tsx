import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  to: string;
  text: string;
  className?: string;
};

const NavToBtn: React.FC<Props> = ({ to, text, className }) => {
  const navigate = useNavigate();
  return (
    <StyledWrapper className={className}>
      <a onClick={() => navigate(to)}>{text}</a>
    </StyledWrapper>
  );
};

export default NavToBtn;

const StyledWrapper = styled.div`
  a {
    margin-top: 0.5rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`;
