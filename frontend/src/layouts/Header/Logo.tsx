import { CONFIG } from "src/config";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <StyledWrapper to="/" aria-label={CONFIG.site.title}>
      {CONFIG.site.title}
    </StyledWrapper>
  );
};

export default Logo;

const StyledWrapper = styled(Link)``;
