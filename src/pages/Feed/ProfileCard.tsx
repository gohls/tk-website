import React from "react";
import styled from "@emotion/styled";
import { INFO } from "src/constants/info";
import { Emoji } from "src/components/Emoji";
// import tom from "src/assets/images/profile-image.png";

type Props = {};

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji>🖊️ Author</Emoji>
      </div>
      <div className="content">
        <div className="top">
          <img src={INFO.profile.image} />
        </div>
        <div className="mid">
          <div className=" name">{INFO.profile.name}</div>
          <div className="title">{INFO.profile.title}</div>
          <div className="text-sm mb-2">{INFO.profile.bio}</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ProfileCard;

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    margin-bottom: 0.75rem;
    border-radius: 1rem;
    width: 100%;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    .top {
      position: relative;
      width: 100%;
      > img {
        position: absolute;
        /* height: 100%; */
        width: 100%;
        inset: 0px;
        color: transparent;
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
  }
`;
