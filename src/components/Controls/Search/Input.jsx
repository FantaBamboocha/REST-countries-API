import styled from "styled-components";

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
  background-color: var(--color-ui-base);
`;

export default Input;
