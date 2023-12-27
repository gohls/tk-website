import styled from "@emotion/styled";

type Props = {
  text: string[];
};

const PaperBody: React.FC<Props> = ({ text }) => {
  return (
    <StyledWrapper>
      <article>
        <div className="text">
          {text.map((line, idx) => {
            return <p key={idx}>{line}</p>;
          })}
        </div>
      </article>
    </StyledWrapper>
  );
};

export default PaperBody;

const StyledWrapper = styled.div`
  article {
    padding: 1rem;

    > .text {
      margin-bottom: 1rem;
    }
  }
`;
