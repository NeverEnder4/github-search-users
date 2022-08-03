import { Center, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { ErrorImage } from '../components/ErrorImage';

import { Button } from '@/components/Elements';

export const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Center minHeight="100vh" display="flex" flexDirection="column" textAlign="center" role="alert">
      <ErrorImage />
      <Heading mb={20} mt={5} as="h2">
        404, Page not found!
      </Heading>
      <Button colorScheme="teal" size="lg" onClick={handleGoBack}>
        Go Back
      </Button>
    </Center>
  );
};
