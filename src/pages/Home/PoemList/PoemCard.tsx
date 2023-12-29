import { formatDate } from "src/utils";
import { TPoem } from "src/types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ScrollSpy from "react-ui-scrollspy";
import Card from "src/components/Card";

type Props = {
  data: TPoem;
};

const PoemCard: React.FC<Props> = ({ data }) => {
  return (
    <Card>
      <StyledWrapper to={`/${data.slug}`}>
        <ScrollSpy useBoxMethod={false}>
          <article id={data.slug}>
            {data.thumbnail && (
              <div className="thumbnail">
                <img src={data.thumbnail} alt={data.title} />
              </div>
            )}
            <div data-thumb={!!data.thumbnail} className="content">
              <header
                className="top"
                style={{
                  justifyContent: data.thumbnail ? "center" : "space-between",
                }}
              >
                <h2>{data.title}</h2>
              </header>
              <div className="text">
                {data.poem.map((line, idx) => {
                  return <p key={idx}>{line}</p>;
                })}
              </div>
              <div className="date">
                <div className="content">
                  {formatDate(data?.date?.start_date)}
                </div>
              </div>
            </div>
          </article>
        </ScrollSpy>
      </StyledWrapper>
    </Card>
  );
};

export default PoemCard;

const StyledWrapper = styled(Link)`
  article {
    overflow: hidden;
    position: relative;
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }

    :hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    > .category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      z-index: 10;
    }

    > .thumbnail {
      position: relative;
      width: 100%;
      background-color: ${({ theme }) =>
        theme.scheme === "light" ? theme.colors.red3 : "white"};
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
        padding-top: 3.5rem;
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
      > .text {
        margin-bottom: 1rem;
        p {
          display: none;
          line-height: 2rem;
          color: ${({ theme }) => theme.colors.gray11};

          @media (min-width: 768px) {
            display: block;
          }
        }
      }
    }
  }
`;
