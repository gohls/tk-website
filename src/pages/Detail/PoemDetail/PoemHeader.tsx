import Content from "src/components/Content";
import { TPoem } from "src/types";
import { formatDate } from "src/utils";
import React from "react";
import styled from "@emotion/styled";

type Props = {
  data: TPoem;
};

const PoemHeader: React.FC<Props> = ({ data }) => {
  return (
    <StyledWrapper>
      <h1 className="title">{data.title}</h1>
      {data.type[0] !== "Paper" && (
        <nav>
          <div className="top">
            {data.author && data.author[0] && data.author[0].name && (
              <>
                <div className="author">
                  <div className="">{data.author[0].name}</div>
                </div>
                <div className="hr"></div>
              </>
            )}
            <div className="date">{formatDate(data?.date?.start_date)}</div>
          </div>
          <div className="mid">
            {data.contents && (
              <div className="contents">
                {data.contents.map((content: string) => (
                  <Content key={content}>{content}</Content>
                ))}
              </div>
            )}
          </div>
          {data.thumbnail && <div className="thumbnail"></div>}
        </nav>
      )}
    </StyledWrapper>
  );
};

export default PoemHeader;

const StyledWrapper = styled.div`
  .title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
  }
  nav {
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.gray11};
    > .top {
      display: flex;
      margin-bottom: 0.75rem;
      gap: 0.75rem;
      align-items: center;
      .author {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
      .hr {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        align-self: stretch;
        width: 1px;
        background-color: ${({ theme }) => theme.colors.gray10};
      }
      .date {
        margin-right: 0.5rem;

        @media (min-width: 768px) {
          margin-left: 0;
        }
      }
    }
    > .mid {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;
      .contents {
        display: flex;
        overflow-x: auto;
        flex-wrap: nowrap;
        gap: 0.5rem;
        max-width: 100%;
      }
    }
    .thumbnail {
      overflow: hidden;
      position: relative;
      margin-bottom: 1.75rem;
      border-radius: 1.5rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.gray4};
      padding-bottom: 66%;

      @media (min-width: 1024px) {
        padding-bottom: 50%;
      }
    }
  }
`;