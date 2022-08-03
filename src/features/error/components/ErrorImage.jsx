import { Image, Link } from '@chakra-ui/react';

import somethingWentWrong from '../assets/something-went-wrong.png';
export const ErrorImage = () => {
  return (
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
  );
};
