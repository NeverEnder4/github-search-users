import { useQuery } from '@apollo/client';

import { SEARCH_USERS } from '../gql';

export const useSearchUser = (query) => {
  const { loading, error, data } = useQuery(SEARCH_USERS, {
    variables: { query },
    skip: query === '',
  });

  return { loading, error, data };
};
