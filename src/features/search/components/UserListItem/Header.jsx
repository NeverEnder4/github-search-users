import { Flex, Heading } from '@chakra-ui/react';

import { useMediaQueries } from '@/hooks';

export const Header = ({ login }) => {
  const { mediumScreen } = useMediaQueries();
  return (
    <Flex
      width="100%"
      backgroundColor="blackAlpha.800"
      justifyContent={mediumScreen ? 'flex-start' : 'center'}
      color="white"
      py={4}
      px={4}
    >
      <Heading fontSize="md" as="h2">
        {login}
      </Heading>
    </Flex>
  );
};
