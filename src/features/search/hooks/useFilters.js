import { getNewParams } from '../utils';

import { useSearchParams } from './useSearchParams';

export const useFilters = () => {
  const { params, queryTerm, setSearchParams } = useSearchParams();
  const { first } = params;

  const setFilters = (values) => {
    const newParams = getNewParams({ queryTerm, first, values });

    setSearchParams(newParams);
  };
  return { setFilters };
};
