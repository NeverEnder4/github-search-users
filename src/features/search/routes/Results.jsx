import { Center, Divider, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { UserList, Pagination } from '../components';
import { Layout } from '../components/Layout';
import { useSearchUser, usePagination, useSearchParams } from '../hooks';

import { useMediaQueries } from '@/hooks/useMediaQueries';

export function Results() {
  const { params } = useSearchParams();
  const { query, before, after, first } = params;

  const { mediumScreen } = useMediaQueries();

  const [userQuery, setUserQuery] = useState({
    query: '',
    first: 5,
    before: undefined,
    after: undefined,
  });

  console.log(userQuery, 'UQ');

  const { loading, error, data } = useSearchUser(userQuery);

  const totalCount = data?.search?.userCount;
  const users = data?.search?.edges?.map((edge) => edge.node);
  const pageInfo = data?.search?.pageInfo;

  const { handlePrevClick, handleNextClick, cursors } = usePagination(pageInfo);

  useEffect(() => {
    setUserQuery({ query, after, before, first: parseInt(first) });
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
        <UserList users={users} loading={loading} error={error} />
      </Center>
      <Divider />
      {pagination}
    </Layout>
  );
}
