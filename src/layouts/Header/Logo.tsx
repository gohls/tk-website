import { WEB } from "src/constants/web";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <StyledWrapper to="/" aria-label={WEB.site.title}>
      {WEB.site.title}
    </StyledWrapper>
  );
};

export default Logo;

const StyledWrapper = styled(Link)``;
