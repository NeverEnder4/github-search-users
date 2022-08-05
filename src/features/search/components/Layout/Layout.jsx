import { Flex, VStack } from '@chakra-ui/react';

import { FilterDrawer } from '../FilterDrawer';

import { Header } from './Header';

import { useMediaQueries, useToggle } from '@/hooks';

export const Layout = ({ children }) => {
  const { mediumScreen } = useMediaQueries();
  const [isOpen, toggleDrawer] = useToggle();

  const onClose = () => {
    toggleDrawer();
  };

  return (
    <>
      <FilterDrawer isOpen={isOpen} onClose={onClose} />
      <Flex pb={6} direction="column" alignItems="center" minHeight="100vh">
        <Header toggleFilters={toggleDrawer} />
        <VStack width={mediumScreen ? undefined : '100%'} p={2} spacing={8}>
          {children}
        </VStack>
      </Flex>
    </>
  );
};
