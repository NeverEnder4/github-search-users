import { Image, Box, Text, Flex } from '@chakra-ui/react';

export const Avatar = ({ src, alt, isHireable }) => {
  return (
    <Box
      position="relative"
      outline="none"
      borderWidth="1px"
      borderColor="gray.400"
      width="200px"
      height="200px"
    >
      <Image boxSize="100%" objectFit="cover" src={src} alt={alt} />
      {isHireable && (
        <Flex
          color="white"
          backgroundColor="black"
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={2}
          justifyContent="center"
          width="100%"
          textAlign="center"
        >
          <Text fontWeight="bold" fontSize="xs">
            HIREABLE
          </Text>
        </Flex>
      )}
    </Box>
  );
};
