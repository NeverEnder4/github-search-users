import { Stack, Skeleton, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

export const SearchListSkeleton = () => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)');

  return (
    <Stack width="100%">
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
      <Skeleton borderRadius={10} height={isLargerThan650 ? '100px' : '209px'} />
    </Stack>
  );
};
