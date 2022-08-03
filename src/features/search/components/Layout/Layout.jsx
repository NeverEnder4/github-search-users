import { Flex, VStack } from '@chakra-ui/react';

import { Header } from './Header';

import { useMediaQueries } from '@/hooks';
export const Layout = ({ children }) => {
  const { mediumScreen } = useMediaQueries();
  return (
    <Flex pb={6} direction="column" alignItems="center" minHeight="100vh">
      <Header />
      <VStack width={mediumScreen ? undefined : '100%'} p={2} spacing={8}>
        {children}
      </VStack>
    </Flex>
  );
};
