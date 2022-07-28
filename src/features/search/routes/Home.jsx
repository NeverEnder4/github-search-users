import { Center, Stack } from '@chakra-ui/react';
import { useLottie } from 'lottie-react';
import { useNavigate } from 'react-router-dom';

import octocatAnimation from '../assets/github-lottie-dark.json';
import { SearchForm } from '../components';

const WIDTH = '600px';
const style = { width: 150 };

export function Home() {
  const navigate = useNavigate();

  const options = {
    animationData: octocatAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  const handleSuccess = (query) => {
    navigate({
      pathname: '/search',
      search: `?q=${query}`,
    });
  };

  return (
    <Center p={4} minHeight="100vh">
      <Stack width={WIDTH} spacing={10} alignItems="center">
        {View}
        <SearchForm onSuccess={handleSuccess} />
      </Stack>
    </Center>
  );
}
