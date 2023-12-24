import React from "react";
import styled from "@emotion/styled";
import { WEB } from "src/constants/web";
import { Emoji } from "src/components/Emoji";
import Card from "src/components/Card";
import CardTitle from "src/components/CardTitle.tsx";

type Props = {};

const ProfileCard: React.FC<Props> = () => {
  return (
    <>
      <CardTitle>
        <Emoji>🖊️ Author</Emoji>
      </CardTitle>
      <Card>
        <StyledWrapper>
          <div className="top">
            <img src={WEB.profile.image.src} alt={WEB.profile.image.alt} />
          </div>
          <div className="mid">
            <div className=" name">{WEB.profile.name}</div>
            <div className="title">{WEB.profile.title}</div>
            <div className="text-sm mb-2">{WEB.profile.bio}</div>
          </div>
        </StyledWrapper>
      </Card>
    </>
  );
};

export default ProfileCard;

const StyledWrapper = styled.div`
  padding: 1rem;
  margin-bottom: 0.75rem;
  .top {
    position: relative;
    width: 100%;
    > img {
      position: absolute;
      /* height: 100%; */
      width: 100%;
      inset: 0px;
      color: transparent;
      filter: ${({ theme }) => theme.scheme === "dark" && "invert(1)"};
    }
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
  .mid {
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
    .name {
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-style: italic;
      font-weight: 700;
    }
    .title {
      margin-bottom: 1rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
    .bio {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;
