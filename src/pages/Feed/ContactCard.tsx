import { INFO } from "src/constants/info";
import React from "react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import styled from "@emotion/styled";

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>💬 Contact</StyledTitle>
      <StyledWrapper>
        {INFO.profile.email && (
          <a
            href={`mailto:${INFO.profile.email}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMail className="icon" />
            <div className="name">email</div>
          </a>
        )}
        {INFO.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${INFO.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className="icon" />
            <div className="name">linkedin</div>
          </a>
        )}
      </StyledWrapper>
    </>
  );
};

export default ContactCard;

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`;
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;
