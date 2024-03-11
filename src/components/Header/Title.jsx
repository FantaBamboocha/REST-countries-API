import styled from "styled-components";

const Title = styled.a.attrs({
  href: "/",
})`
  text-decoration: none;
  color: var(--color-text);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
`;

export default Title;
