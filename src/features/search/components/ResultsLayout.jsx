import { Box } from '@chakra-ui/react';

import { Header } from './Header';

export const ResultsLayout = ({ children }) => {
  return (
    <Box minHeight="100vh">
      <Header />
      <>{children}</>
    </Box>
  );
};
