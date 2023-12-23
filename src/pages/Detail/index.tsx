import PostDetail from "./PoemDetail";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

type Props = {};

const PoemDetail: React.FC<Props> = () => {
  const { poemId } = useParams();
  if (!poemId) return null;
  return (
    <StyledWrapper>
      <PostDetail slug={poemId} />
    </StyledWrapper>
  );
};

export default PoemDetail;

const StyledWrapper = styled.div`
  padding: 2rem 0;
  /* padding: 40px 0; */
`;
