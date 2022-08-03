import { Box, Heading, Text, Divider } from '@chakra-ui/react';

export const Footer = ({ bio }) => {
  const FONT_SIZE = 'sm';
  if (!bio) return null;
  return (
    <Box p={4} width="100%">
      <Heading fontSize={FONT_SIZE} as="h3">
        Bio
      </Heading>
      <Divider my={2} />
      <Text fontSize={FONT_SIZE}>{bio}</Text>
    </Box>
  );
};
