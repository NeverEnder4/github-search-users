import { SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  VisuallyHidden,
} from '@chakra-ui/react';

import { IconButton } from '@/components/Elements';

export const SearchInput = ({
  label,
  name,
  labelFontSize,
  fontColor,
  maxWidth = '600px',
  handleSearch,
  value,
  onChange,
  placeholder = 'Search github users',
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <FormControl maxWidth={maxWidth}>
      {label && (
        <VisuallyHidden>
          <FormLabel color={fontColor} fontSize={labelFontSize} textAlign="center">
            {label}
          </FormLabel>
        </VisuallyHidden>
      )}
      <InputGroup position="relative">
        <Input
          name={name}
          onKeyPress={handleKeyPress}
          color={fontColor}
          focusBorderColor="teal.400"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <InputRightElement
          children={
            <IconButton
              icon={<SearchIcon color="white" />}
              colorScheme="transparent"
              onClick={handleSearch}
            />
          }
        />
      </InputGroup>
    </FormControl>
  );
};
