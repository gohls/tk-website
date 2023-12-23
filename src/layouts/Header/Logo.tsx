import { INFO } from "src/constants/info";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <StyledWrapper to="/" aria-label={INFO.site.title}>
      {INFO.site.title}
    </StyledWrapper>
  );
};

export default Logo;

const StyledWrapper = styled(Link)``;
