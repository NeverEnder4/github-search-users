import { useState, useCallback } from 'react';

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  // Memoize toggle function in case it's passed as prop
  const toggle = useCallback(() => setState((prevState) => !prevState), []);

  return [state, toggle];
};
