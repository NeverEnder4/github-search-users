import { Box, VStack } from '@chakra-ui/react';

import { Header } from './Header';

export const ResultsLayout = ({ children }) => {
  return (
    <Box minHeight="100vh">
      <Header />
      <VStack p={10} spacing={8}>
        {children}
      </VStack>
    </Box>
  );
};
