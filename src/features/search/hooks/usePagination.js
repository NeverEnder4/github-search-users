import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const initialState = { startCursor: undefined, endCursor: undefined };

export const usePagination = (pageInfo = initialState) => {
  // usePagination hook is using GraphQL Cursor Connections Specification to paginate
  // https://relay.dev/graphql/connections.htm

  const { startCursor, endCursor } = pageInfo;
  const [startCursors, setStartCursors] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Next page: the after field is set to startCursor and the previous startCursor is stored in an array
  // Memoize function because it will be passed as a prop to the Pagination component
  const handleNextClick = useCallback(() => {
    if (!startCursor) return;

    setSearchParams({ q: query, a: endCursor });
    setStartCursors((prevState) => [startCursor, ...prevState]);
    scrollToTop();
  }, [query, setSearchParams, startCursor, endCursor]);

  // Prev page: the before field is set to the previous page startCursor and the cursor is removed from the array
  // Memoize function because it will be passed as a prop to the Pagination component
  const handlePrevClick = useCallback(() => {
    if (!startCursors.length) return;

    setSearchParams({ q: query, b: startCursors[0] });
    const filtered = startCursors.filter((cursor) => cursor !== startCursors[0]);
    setStartCursors(filtered);
    scrollToTop();
  }, [query, setSearchParams, startCursors, setStartCursors]);

  return { handleNextClick, handlePrevClick, cursors: startCursors };
};
