import { createContext, useState } from "react";
import { SearchContextType } from "../interfaces/SearchContextType";
import { SearchProviderProps } from "../interfaces/SearchProviderProps";

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchString, setSearchString] = useState("");
  const [filter, setFilter] = useState("nome");

  return (
    <SearchContext.Provider
      value={{ searchString, setSearchString, filter, setFilter }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
