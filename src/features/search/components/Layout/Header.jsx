import { ArrowBackIcon, SettingsIcon } from '@chakra-ui/icons';
import { HStack, Box, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchInput } from './SearchInput';

import { ButtonWithIcon, IconButton, RouteLink } from '@/components/Elements';

export const Header = () => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)');
  const [searchValue, setSearchValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const settingsIcon = <SettingsIcon color="white" />;

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchParams({ q: searchValue });
  };
  return (
    <HStack
      width="100%"
      spacing={4}
      p={4}
      backgroundColor="blackAlpha.800"
      justifyContent="space-between"
    >
      <RouteLink color="white" to="/">
        <Box display="flex" alignItems="center">
          <ArrowBackIcon marginRight={2} />
          Back
        </Box>
      </RouteLink>
      <SearchInput
        name="query"
        value={searchValue}
        onChange={handleChange}
        handleSearch={handleSearch}
        maxWidth="400px"
        fontColor="white"
      />
      <IconButton isHidden={isLargerThan650} icon={settingsIcon} accessibilityLabel="Filters" />
      <ButtonWithIcon isHidden={!isLargerThan650} leftIcon={settingsIcon}>
        Filters
      </ButtonWithIcon>
    </HStack>
  );
};
