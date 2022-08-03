import { Flex, Stack, Link } from '@chakra-ui/react';

import { Avatar } from './Avatar';
import { Badges } from './Badges';
import { Footer } from './Footer';
import { Header } from './Header';
import { UserInfo } from './UserInfo';

import { useMediaQueries } from '@/hooks';

export const UserListItem = ({ user }) => {
  const { mediumScreen } = useMediaQueries();

  return (
    <Flex
      direction="column"
      alignItems="center"
      width={mediumScreen ? '700px' : '100%'}
      borderWidth="1px"
      borderColor="gray.400"
    >
      <Header login={user?.login} />
      <Stack
        spacing={8}
        width="100%"
        p={4}
        direction={mediumScreen ? 'row' : 'column'}
        alignItems={mediumScreen ? 'flex-start' : 'center'}
      >
        <Stack spacing={3} direction="column">
          <Avatar
            boxSize="200px"
            border="1px solid black"
            objectFit="cover"
            src={user?.avatarUrl}
            alt={user?.name}
            isHireable={user?.isHireable}
          />
          <Link
            isExternal
            backgroundColor="teal"
            color="white"
            fontWeight="bold"
            textDecoration="none"
            borderRadius={4}
            href={user?.url}
            p={2}
            textAlign="center"
          >
            VIEW PROFILE
          </Link>
        </Stack>
        <Stack
          flexGrow="1"
          height="100%"
          display="flex"
          justifyContent="space-between"
          direction="column"
          spacing={6}
        >
          <Badges
            totalRepositories={user?.repositories?.totalCount}
            totalFollowing={user?.following?.totalCount}
            totalFollowers={user?.followers?.totalCount}
            totalStarred={user?.starredRepositories?.totalCount}
          />
          <UserInfo user={user} />
        </Stack>
      </Stack>
      {/* <Footer bio={user?.bio} /> */}
    </Flex>
  );
};
