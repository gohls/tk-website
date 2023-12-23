import React from "react";
import PoemHeader from "./PoemHeader";
import PoemFooter from "./PoemFooter";
import styled from "@emotion/styled";
import { poems } from "src/text/poems";
import PoemBody from "./PoemBody";

type Props = {
  slug: string;
};

const PoemDetail: React.FC<Props> = ({ slug }) => {
  const data = poems;
  const idx = data.findIndex((post) => post.slug === slug);
  if (!idx) return null;

  return (
    <StyledWrapper>
      <PoemHeader data={data[idx]} />
      <PoemBody data={data[idx]} />
      <>
        <PoemFooter />
      </>
    </StyledWrapper>
  );
};

export default PoemDetail;

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
