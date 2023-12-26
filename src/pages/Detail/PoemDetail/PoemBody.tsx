import { TPoem } from "src/types";
import styled from "@emotion/styled";

type Props = {
  data: TPoem;
};

const PoemBody: React.FC<Props> = ({ data }) => {
  return (
    <StyledWrapper>
      <article id={data.slug}>
        <div data-thumb={!!data.thumbnail} className="content">
          <div className="poem">
            {data.poem.map((line, idx) => {
              return <p key={idx}>{line}</p>;
            })}
          </div>
        </div>
      </article>
    </StyledWrapper>
  );
};

export default PoemBody;

const StyledWrapper = styled.div`
  article {
    > .category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      z-index: 10;
    }

    > .thumbnail {
      position: relative;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.red3};
      padding-bottom: 66%;

      @media (min-width: 1024px) {
        padding-bottom: 50%;
      }

      > img {
        position: absolute;
        height: 100%;
        width: 100%;
        inset: 0px;
        color: transparent;
      }
    }
    > .content {
      padding: 1rem;

      &[data-thumb="false"] {
        padding-top: 0.5rem;
        padding-bottom: 1.5rem;
      }
      > .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: baseline;
        }
        h2 {
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
          font-weight: 500;

          cursor: pointer;

          @media (min-width: 768px) {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
      }
      > .date {
        display: flex;
        margin-bottom: 1rem;
        gap: 0.5rem;
        align-items: center;
        .content {
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.gray10};
          @media (min-width: 768px) {
            margin-left: 0;
          }
        }
      }
      > .poem {
        margin-bottom: 1rem;
      }
      > .contents {
        display: flex;
        gap: 0.5rem;
      }
    }
  }
`;
