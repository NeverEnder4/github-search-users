import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { HStack, Button } from '@chakra-ui/react';

export const Pagination = ({ pageInfo, cursors, handleNextClick, handlePrevClick, loading }) => {
  let justifyContent = 'space-between';

  if (pageInfo?.hasNextPage && !pageInfo?.hasPreviousPage) justifyContent = 'flex-end';
  else if (!pageInfo?.hasNextPage && pageInfo?.hasPreviousPage) justifyContent = 'flex-start';

  if (loading) return null;
  return (
    <HStack justifyContent={justifyContent}>
      {pageInfo?.hasPreviousPage && cursors.length && (
        <Button onClick={handlePrevClick}>
          <ChevronLeftIcon />
          Prev Page
        </Button>
      )}
      {pageInfo?.hasNextPage && (
        <Button onClick={handleNextClick}>
          Next Page
          <ChevronRightIcon />
        </Button>
      )}
    </HStack>
  );
};
