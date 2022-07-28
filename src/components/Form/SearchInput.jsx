import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, FormControl, FormLabel } from '@chakra-ui/react';

export const SearchInput = ({ registration, label, labelFontSize }) => {
  return (
    <FormControl>
      {label && (
        <FormLabel fontSize={labelFontSize} textAlign="center">
          {label}
        </FormLabel>
      )}
      <InputGroup maxWidth="600px">
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
        <Input focusBorderColor="teal.400" {...registration} />
      </InputGroup>
    </FormControl>
  );
};
