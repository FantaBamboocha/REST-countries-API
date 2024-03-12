import Select from "react-select";
import styled from "styled-components";

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--color-ui-base)",
      color: "var(--color-text)",
      borderRadius: "var(--b-radius)",
      padding: "0.25rem",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--color-text)",
      backgroundColor: state.isSelected
        ? "var(--color-bg)"
        : "var(--color-ui-base)",
    }),
  },
})`
  width: 200px;
  border-radius: var(--b-radius);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--color-text) !important;
  }

  & :last-child {
    background-color: var(--color-ui-base);
    border-radius: var(--b-radius);
  }
`;

export default CustomSelect;
