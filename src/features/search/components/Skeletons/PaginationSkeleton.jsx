import { Stack, Skeleton } from '@chakra-ui/react';

export const PaginationSkeleton = () => {
  return (
    <Stack mx="auto" pb={3} spacing={2} direction="row">
      <Skeleton height="40px" width="122px" />
      <Skeleton height="40px" width="122px" />
    </Stack>
  );
};
