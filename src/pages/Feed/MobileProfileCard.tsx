import { WEB } from "src/constants/web";
// import Image from "next/image";
import React from "react";
import styled from "@emotion/styled";
// import tom from "src/assets/images/profile-image.png";

type Props = {
  className?: string;
};

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="mid">
        <div className="wrapper">
          <img
            src={WEB.profile.image.src}
            width={100}
            height={100}
            alt={WEB.profile.image.alt}
          />
          <div className="wrapper">
            <div className="top">{WEB.profile.name}</div>
            <div className="mid">{WEB.profile.title}</div>
            <div className="btm">{WEB.profile.bio}</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default MobileProfileCard;

const StyledWrapper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }

  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .mid {
    padding: 0.5rem;
    margin-bottom: 1rem;
    // border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    > .wrapper {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      > .wrapper {
        height: fit-content;
        > .top {
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-style: italic;
          font-weight: 700;
          > img {
            position: absolute;
            /* height: 100%; */
            width: 100%;
            inset: 0px;
            color: transparent;
          }
        }
        > .mid {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.gray11};
        }
        > .btm {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
  }
`;
