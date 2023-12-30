import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import PoemDetail from "./PoemDetail";

type Props = {};

const Detail: React.FC<Props> = () => {
  const { poemId } = useParams();
  if (!poemId) return null;
  return (
    <StyledWrapper>
      <PoemDetail slug={poemId} />
    </StyledWrapper>
  );
};

export default Detail;

const StyledWrapper = styled.div`
  padding: 2rem 0;
  /* padding: 40px 0; */
`;
