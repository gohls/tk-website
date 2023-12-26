import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Emoji = ({ className, children }: Props) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.span`
  font-weight: 400;
  font-style: normal;
`;
