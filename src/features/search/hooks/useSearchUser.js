import { useQuery } from '@apollo/client';

import { SEARCH_USERS } from '../gql';

export const useSearchUser = ({ query, after, before, first }) => {
  const { loading, error, data } = useQuery(SEARCH_USERS, {
    variables: { query, after, before, first },
    skip: query === '',
  });

  return { loading, error, data };
};
