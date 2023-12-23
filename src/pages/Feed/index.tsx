import Footer from "./Footer";
import styled from "@emotion/styled";
import ContentsList from "./ContentsList";
import MobileProfileCard from "./MobileProfileCard";
import ProfileCard from "./ProfileCard";
import ContactCard from "./ContactCard";
import PostList from "./PoemList";

export const HEADER_HEIGHT = 73;

type Props = {};

const Feed: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="lt">
        <ContentsList />
      </div>
      <div className="mid">
        <MobileProfileCard />
        <div className="contents">
          <ContentsList />
        </div>
        <PostList />
        <div className="footer">
          <Footer />
        </div>
      </div>
      <div className="rt">
        <ProfileCard />
        <ContactCard />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Feed;

const StyledWrapper = styled.div`
  grid-template-columns: repeat(12, minmax(0, 1fr));

  padding: 2rem 0;
  display: grid;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }

  > .lt {
    height: calc(100vh - ${HEADER_HEIGHT}px);
    display: none;
    overflow: scroll;
    position: sticky;
    grid-column: span 2 / span 2;
    top: ${HEADER_HEIGHT - 10}px;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  > .mid {
    grid-column: span 12 / span 12;

    @media (min-width: 1024px) {
      grid-column: span 7 / span 7;
    }

    > .contents {
      display: block;

      @media (min-width: 1024px) {
        display: none;
      }
    }

    > .footer {
      padding-bottom: 2rem;
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  > .rt {
    height: calc(100vh - ${HEADER_HEIGHT}px);
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: none;
    overflow: scroll;
    position: sticky;
    top: ${HEADER_HEIGHT - 10}px;

    @media (min-width: 1024px) {
      display: block;
      grid-column: span 3 / span 3;
    }

    .footer {
      padding-top: 1rem;
    }
  }
`;
