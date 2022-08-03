import { Badge, Stack } from '@chakra-ui/react';

import { useMediaQueries } from '@/hooks';
import { numberToLetter } from '@/lib/numeral';

export const Badges = ({
  totalRepositories = 0,
  totalFollowers = 0,
  totalFollowing = 0,
  totalStarred = 0,
}) => {
  const { mediumScreen } = useMediaQueries();
  const textAlign = mediumScreen ? 'left' : 'center';
  const minWidth = mediumScreen ? undefined : '152px';
  return (
    <Stack display="flex" direction={mediumScreen ? 'row' : 'column'}>
      <Badge minWidth={minWidth} textAlign={textAlign}>
        {numberToLetter(totalRepositories)} Repositories
      </Badge>
      <Badge minWidth={minWidth} textAlign={textAlign} colorScheme="green">
        {numberToLetter(totalFollowers)} Followers
      </Badge>
      <Badge minWidth={minWidth} textAlign={textAlign} colorScheme="purple">
        {numberToLetter(totalFollowing)} Following
      </Badge>
      <Badge minWidth={minWidth} textAlign={textAlign} colorScheme="blue">
        {numberToLetter(totalStarred)} Starred
      </Badge>
    </Stack>
  );
};
