import { Center, Divider, Heading, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ResultsLayout, UserList, Pagination } from '../components';
import { useSearchUser } from '../hooks';

export function Results() {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const after = searchParams.get('a');
  const before = searchParams.get('b');
  const first = searchParams.get('f') || 10;

  const [userQuery, setUserQuery] = useState({
    query: '',
    first: 10,
    before: undefined,
    after: undefined,
  });

  const { loading, error, data } = useSearchUser(userQuery);

  const totalCount = data?.search?.userCount;
  const users = data?.search?.edges?.map((edge) => edge.node);
  const pageInfo = data?.search?.pageInfo;

  useEffect(() => {
    setUserQuery({ query, after, before, first });
  }, [query, after, before, first]);

  useEffect(() => {});

  return (
    <ResultsLayout>
      <Heading as="h2">Total Users: {totalCount}</Heading>
      <Divider />
      <Center p={3} width={isLargerThan650 ? '600px' : '100%'}>
        <UserList users={users} loading={loading} />
      </Center>
      <Divider />
      <Pagination pageInfo={pageInfo} />
    </ResultsLayout>
  );
}
