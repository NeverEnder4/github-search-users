import { useSearchParams as useRouterSearchParams } from 'react-router-dom';

import { getQueryTerm, getFilters } from '../utils';

export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useRouterSearchParams();

  const query = searchParams.get('q');
  const after = searchParams.get('a');
  const before = searchParams.get('b');
  const first = searchParams.get('f') || 5;

  const filters = getFilters(query);
  const queryTerm = getQueryTerm(query);

  const params = { query, after, before, first };

  return { params, filters, queryTerm, setSearchParams };
};
