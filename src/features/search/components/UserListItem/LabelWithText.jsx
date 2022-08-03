import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Stack, Flex, Divider, Text, Heading, Link } from '@chakra-ui/react';

import { useMediaQueries } from '@/hooks';

const FONT_SIZE = 'sm';

export const LabelWithText = ({ label, text, hasDivider, isLink }) => {
  const { mediumScreen } = useMediaQueries();

  const textElement =
    isLink && text !== 'None' ? (
      <Link isExternal href={text} fontSize={FONT_SIZE}>
        {text}
        <ExternalLinkIcon ml={1} />
      </Link>
    ) : (
      <Text fontSize={FONT_SIZE}>{text}</Text>
    );
  return (
    <Flex direction="column">
      <Stack direction={mediumScreen ? 'row' : 'column'} alignItems="center">
        <Heading fontSize={FONT_SIZE} as="h3">
          {label}
        </Heading>
        {textElement}
      </Stack>
      {hasDivider && <Divider my={2} />}
    </Flex>
  );
};
