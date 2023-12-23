import { WEB } from "src/constants/web";
import React from "react";
import styled from "@emotion/styled";

const d = new Date();
const y = d.getFullYear();
const from = +WEB.since;

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      © {WEB.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      <br />
      <a
        href={`https://github.com/${WEB.profile.github}`}
        target="_blank"
        rel="noreferrer"
      >
        🔨 Built by Simon Gohl
      </a>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  a {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray10};
  }
`;
