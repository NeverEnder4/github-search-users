import { Center, Image, Heading, Link, Button } from '@chakra-ui/react';

import somethingWentWrong from '@/assets/something-went-wrong.png';

export function GlobalErrorFallback() {
  const navigateToOrigin = () => {
    window.location.assign(window.location.origin);
  };

  return (
    <Center minHeight="100vh" display="flex" flexDirection="column" textAlign="center" role="alert">
      <figure>
        <Image
          boxSize="300px"
          objectFit="cover"
          src={somethingWentWrong}
          alt="Something went wrong"
        />
        <figcaption>
          Illustration by{' '}
          <Link href="https://icons8.com/illustrations/author/u7l2K4BCiAa9" color="teal" isExternal>
            Natasha Remarchuk
          </Link>{' '}
          from{' '}
          <Link href="https://icons8.com/illustrations" color="teal" isExternal>
            Ouch!
          </Link>
        </figcaption>
      </figure>
      <Heading mb={20} mt={5} as="h2">
        Oops! Something went wrong...
      </Heading>
      <Button colorScheme="teal" size="lg" onClick={navigateToOrigin}>
        Back To Search
      </Button>
    </Center>
  );
}
