import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Flex,
  Avatar,
  Box,
  Text,
  Divider,
  HStack,
  Collapse,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';

import { UserListItemStat } from './UserListItemStat';

import { Button } from '@/components/Elements';

export const UserListItem = ({ user }) => {
  const [isBioVisible, setIsBioVisible] = useState(false);
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)');

  const handleToggleBio = () => {
    setIsBioVisible((prevState) => !prevState);
  };

  const iconColor = 'white';
  const buttonIcon = isBioVisible ? (
    <ViewIcon color={iconColor} />
  ) : (
    <ViewOffIcon color={iconColor} />
  );
  return (
    <Flex
      position="relative"
      spacing={3}
      p={4}
      borderRadius={10}
      borderWidth={1}
      borderColor="grey.400"
      width="100%"
      direction={isLargerThan650 ? 'row' : 'column'}
      alignItems={isLargerThan650 ? 'flex-start' : 'center'}
      textAlign={isLargerThan650 ? 'left' : 'center'}
    >
      <Avatar src={user?.avatarUrl} />
      <Flex
        direction="column"
        alignItems={isLargerThan650 ? 'flex-start' : 'center'}
        ml={isLargerThan650 ? '3' : '0'}
        width="100%"
      >
        <Link href={`https://github.com/${user?.login}`} isExternal>
          <Flex direction="column" alignItems={isLargerThan650 ? 'flex-start' : 'center'}>
            <Text fontWeight="bold">{user.name}</Text>
            <Text fontSize="sm">{user.login}</Text>
          </Flex>
        </Link>

        <Collapse in={isBioVisible} animateOpacity>
          <Box py={5}>
            <Text fontSize="sm">{user?.bio}</Text>
          </Box>
        </Collapse>
        <HStack color="gray.500" spacing={2}>
          <UserListItemStat data={user?.starredRepositories?.totalCount} label="Starred" />
          <Divider orientation="vertical" height={3} />
          <UserListItemStat data={user?.followers?.totalCount} label="Followers" />
          <Divider orientation="vertical" height={3} />
          <UserListItemStat data={user?.repositories?.totalCount} label="Repos" />
        </HStack>
      </Flex>
      <Box ml={isLargerThan650 ? 'auto' : 0} mt={isLargerThan650 ? 0 : 2} />
      {user.bio && (
        <Button
          colorScheme="teal"
          width={isLargerThan650 ? '20px' : '100%'}
          minWidth={null}
          maxWidth={null}
          size="sm"
          onClick={handleToggleBio}
        >
          Bio
        </Button>
      )}
    </Flex>
  );
};
