import styled from "@emotion/styled";
import React from "react";
import { Emoji } from "src/components/Emoji";
import { poems } from "src/assets/text/poems";
import { HEADER_HEIGHT } from ".";

type Props = {};

const ContentsList: React.FC<Props> = () => {
  const data = poems;

  const handleChange = (target: HTMLElement) => {
    var headerOffset = HEADER_HEIGHT;
    var elementPosition = target.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  const handleClickContent = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      handleChange(target);
    }
  };

  return (
    <StyledWrapper>
      <div className="top">
        <Emoji>📖 Table of Contents</Emoji>
      </div>
      <div className="list">
        {data.map((poem, idx) => (
          <a
            data-to-scrollspy-id={poem.slug}
            key={idx}
            href={`#${poem.slug}`}
            onClick={(e) => handleClickContent(e)}
          >
            {/* TODO: not every thumbnail is a cover */}
            {poem.thumbnail ? "Cover" : poem.title}
          </a>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default ContentsList;

const StyledWrapper = styled.div`
  .top {
    display: none;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    .active-scroll-spy {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray4};

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
    }

    a {
      display: block;
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      // change border-radius
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray10};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
    }
  }
`;
