import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--b-radius);
  border: none;
  color: var(--color-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  cursor: pointer;
`;
export default Button;
