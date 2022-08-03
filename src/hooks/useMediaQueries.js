import { useMediaQuery } from '@chakra-ui/react';

// Called useMediaQueries because this will be the hook used for all media queries
// Add more as needed, planning on 3 or 4 (sm, md, lg, xl)
export const useMediaQueries = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return { mediumScreen: isLargerThan800 };
};
