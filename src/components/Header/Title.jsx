import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled(Link).attrs({
  to: "/",
})`
  text-decoration: none;
  color: var(--color-text);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
`;

export default Title;
