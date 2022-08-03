import { Stack, Collapse, Button } from '@chakra-ui/react';

import { LabelWithText } from './LabelWithText';

import { useMediaQueries, useToggle } from '@/hooks';

const LABELS = {
  name: 'Name:',
  company: 'Company:',
  location: 'Location:',
  twitter: 'Twitter: ',
  website: 'Website: ',
};

const NO_DATA = 'None';

export const UserInfo = ({ user }) => {
  const { mediumScreen } = useMediaQueries();
  const [isOpen, toggleOpen] = useToggle();

  const showAdditionalInfo = isOpen || mediumScreen;

  return (
    <Stack alignItems={mediumScreen ? 'flex-start' : 'center'} direction="column">
      <Collapse in={showAdditionalInfo} animateOpacity>
        <LabelWithText hasDivider label={LABELS.name} text={user?.name || NO_DATA} />
        <LabelWithText hasDivider label={LABELS.company} text={user?.company || NO_DATA} />
        <LabelWithText hasDivider label={LABELS.location} text={user?.location || NO_DATA} />
        <LabelWithText
          hasDivider
          isLink
          label={LABELS.twitter}
          text={user?.twitterUsername || NO_DATA}
        />
        <LabelWithText
          hasDivider
          isLink
          label={LABELS.website}
          text={user?.websiteUrl || NO_DATA}
        />
      </Collapse>
      {!mediumScreen && (
        <Button size="xs" variant="link" onClick={toggleOpen} colorScheme="teal">
          VIEW {isOpen ? 'LESS' : 'MORE'}
        </Button>
      )}
    </Stack>
  );
};
