import { IoSearch } from "react-icons/io5";

import InputContainer from "./InputContainer";
import Input from "./Input";
const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch size={20} />
      <Input
        placeholder="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputContainer>
  );
};

export default Search;
