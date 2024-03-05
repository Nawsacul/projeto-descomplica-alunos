import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { SearchContextType } from '../interfaces/SearchContextType';

export function useSearch(): SearchContextType {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch precisa ser utilizado dentro de um SearchProvider');
  }
  return context;
}