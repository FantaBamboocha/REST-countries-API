import styled from "styled-components";

const InputContainer = styled.label`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  align-items: center;
  background-color: var(--color-ui-base);
  border-radius: var(--b-radius);
  box-shadow: var(--shadow);

  @media (min-width: 767px) {
    width: 300px;
    margin-bottom: 0;
  }
`;

export default InputContainer;
