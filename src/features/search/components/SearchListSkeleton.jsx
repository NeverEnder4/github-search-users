import { Stack, Skeleton } from '@chakra-ui/react';

import { PaginationSkeleton } from './PaginationSkeleton';

import { useMediaQueries } from '@/hooks';

export const SearchListSkeleton = () => {
  const { mediumScreen } = useMediaQueries();

  const height = mediumScreen ? '362px' : '513';

  return (
    <Stack mt={-2} spacing={2} width="100%">
      <Stack spacing={6} width="100%">
        <PaginationSkeleton />
        <Skeleton height={height} />
        <Skeleton height={height} />
        <Skeleton height={height} />
        <Skeleton height={height} />
        <Skeleton height={height} />
        <Skeleton height={height} />
        <Skeleton height={height} />
        <Skeleton height={height} />
        <Skeleton height={height} />
        <Skeleton height={height} />
      </Stack>
      <PaginationSkeleton />
    </Stack>
  );
};
