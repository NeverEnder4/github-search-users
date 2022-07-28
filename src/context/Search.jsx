import { createContext, useReducer } from 'react';

import searchReducer, { initialState, types } from '@/reducers/search';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [dispatch, state] = useReducer(searchReducer, initialState);

  const setQuery = (query) => {
    dispatch({ type: types.SET_QUERY, payload: { query } });
  };

  const value = {
    query: state.query,
    setQuery,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
