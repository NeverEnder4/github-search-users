import { Center, Heading } from '@chakra-ui/react';

import { ErrorImage } from '../components/ErrorImage';

import { Button } from '@/components/Elements';

export const GlobalErrorFallback = () => {
  const navigateToOrigin = () => {
    window.location.assign(window.location.origin);
  };

  return (
    <Center minHeight="100vh" display="flex" flexDirection="column" textAlign="center" role="alert">
      <ErrorImage />
      <Heading mb={20} mt={5} as="h2">
        Oops! Something went wrong...
      </Heading>
      <Button colorScheme="teal" size="lg" onClick={navigateToOrigin}>
        Back To Search
      </Button>
    </Center>
  );
};
