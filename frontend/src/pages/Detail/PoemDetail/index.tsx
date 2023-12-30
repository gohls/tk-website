import React from "react";
import { poems } from "src/assets/text/poems";
import Paper from "src/components/Paper";
import PaperBody from "src/components/Paper/PaperBody";
import PaperHeader from "src/components/Paper/PaperHeader";
import NavToBtn from "src/components/Links/NavToLink";
import styled from "@emotion/styled";
import ErrorPage from "src/components/Error/PageNotFound";
import PoemNotFound from "src/components/Error/PoemNotFound";

type Props = {
  slug: string;
};

const PoemDetail: React.FC<Props> = ({ slug }) => {
  const data = poems;
  const idx = data.findIndex((post) => post.slug === slug);
  // findIndex returns -1 if not found
  const noPoem = idx === -1;

  return (
    <>
      {noPoem ? (
        <PoemNotFound />
      ) : (
        <StyledWrapper>
          <Paper>
            <PaperHeader
              title={data[idx].title}
              subtitle={data[idx].author}
              thumbnail={data[idx].thumbnail}
            />
            <PaperBody text={data[idx].poem} />
            <NavToBtn to={"/"} text={"← Back"} className={"backbtn"} />
          </Paper>
        </StyledWrapper>
      )}
    </>
  );
};

export default PoemDetail;

const StyledWrapper = styled.div`
  .backbtn {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray10};
  }
`;
