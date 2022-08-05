import { ArrowBackIcon, SettingsIcon } from '@chakra-ui/icons';
import { HStack, Box } from '@chakra-ui/react';
import { useState } from 'react';

import { useSearchParams } from '../../hooks';

import { SearchInput } from './SearchInput';

import { ButtonWithIcon, IconButton, RouteLink } from '@/components/Elements';
import { useMediaQueries } from '@/hooks';

export const Header = ({ toggleFilters }) => {
  const { mediumScreen } = useMediaQueries();
  const [searchValue, setSearchValue] = useState('');
  const { params, setSearchParams } = useSearchParams();
  const { first } = params;

  const settingsIcon = <SettingsIcon color="white" />;

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchParams({ q: searchValue, f: first });
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
      <IconButton
        onClick={toggleFilters}
        isHidden={mediumScreen}
        icon={settingsIcon}
        accessibilityLabel="Filters"
      />
      <ButtonWithIcon onClick={toggleFilters} isHidden={!mediumScreen} leftIcon={settingsIcon}>
        Filters
      </ButtonWithIcon>
    </HStack>
  );
};
