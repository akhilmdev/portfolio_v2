import { SearchBarWrapper, SearchText } from "./searchBar.style";
import Search from "../../assets/icons/search.svg?react";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <Search className="search-icon" />
      <SearchText>Search</SearchText>
    </SearchBarWrapper>
  );
};

export default SearchBar;
