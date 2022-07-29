import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

export const UserListItemStat = ({ label, data }) => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)');

  return (
    <Flex
      direction={isLargerThan650 ? 'row' : 'column'}
      alignItems={isLargerThan650 ? 'flex-start' : 'center'}
    >
      <Text mr={isLargerThan650 ? 1 : 0} fontSize="sm">
        {data}
      </Text>
      <Text fontSize="sm">{label}</Text>
    </Flex>
  );
};
