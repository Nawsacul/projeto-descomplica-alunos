export interface SearchContextType {
  searchString: string;
  setSearchString: (query: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
}
