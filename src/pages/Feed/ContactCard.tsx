import { WEB } from "src/constants/web";
import React from "react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import styled from "@emotion/styled";
import CardTitle from "src/components/CardTitle.tsx";
import Card from "src/components/Card";

const ContactCard: React.FC = () => {
  return (
    <>
      <CardTitle>💬 Contact</CardTitle>
      <Card>
        <StyledWrapper>
          {WEB.profile.email && (
            <a
              href={`mailto:${WEB.profile.email}`}
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineMail className="icon" />
              <div className="name">email</div>
            </a>
          )}
          {WEB.profile.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${WEB.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin className="icon" />
              <div className="name">linkedin</div>
            </a>
          )}
        </StyledWrapper>
      </Card>
    </>
  );
};

export default ContactCard;

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
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
