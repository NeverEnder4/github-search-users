import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { HStack, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Pagination = ({ pageInfo }) => {
  const [startCursors, setStartCursors] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  const handleNextClick = () => {
    setSearchParams({ q: query, a: pageInfo?.endCursor });
    setStartCursors((prevState) => [pageInfo?.startCursor, ...prevState]);
  };

  const handlePrevClick = () => {
    setSearchParams({ q: query, b: startCursors[0] });
    const filtered = startCursors.filter((cursor) => cursor !== startCursors[0]);
    setStartCursors(filtered);
  };

  let justifyContent = 'space-between';

  if (pageInfo?.hasNextPage && !pageInfo?.hasPreviousPage) justifyContent = 'flex-end';
  else if (!pageInfo?.hasNextPage && pageInfo?.hasPreviousPage) justifyContent = 'flex-start';

  return (
    <HStack justifyContent={justifyContent}>
      {pageInfo?.hasPreviousPage && startCursors.length && (
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
