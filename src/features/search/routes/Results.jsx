import { Center, Divider, Heading } from '@chakra-ui/react';
import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { UserList, Pagination } from '../components';
import { Layout } from '../components/Layout';
import { useSearchUser, usePagination } from '../hooks';

import { useMediaQueries } from '@/hooks/useMediaQueries';

export function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const after = searchParams.get('a');
  const before = searchParams.get('b');
  const first = searchParams.get('f') || 5;

  const { mediumScreen } = useMediaQueries();

  const [userQuery, setUserQuery] = useState({
    query: '',
    first: 5,
    before: undefined,
    after: undefined,
  });

  const { loading, error, data } = useSearchUser(userQuery);

  const totalCount = data?.search?.userCount;
  const users = data?.search?.edges?.map((edge) => edge.node);
  const pageInfo = data?.search?.pageInfo;

  const { handlePrevClick, handleNextClick, cursors } = usePagination(pageInfo);

  useEffect(() => {
    setUserQuery({ query, after, before, first });
  }, [query, after, before, first]);

  const pagination = (
    <Pagination
      handleNextClick={handleNextClick}
      handlePrevClick={handlePrevClick}
      pageInfo={pageInfo}
      cursors={cursors}
      loading={loading}
    />
  );

  return (
    <Layout>
      <Heading mt={6} fontSize="md" as="h2">
        Total Users: {totalCount}
      </Heading>
      <Divider />
      {pagination}
      <Center p={3} width={mediumScreen ? '700px' : '100%'}>
        <UserList users={users} loading={loading} />
      </Center>
      <Divider />
      {pagination}
    </Layout>
  );
}
