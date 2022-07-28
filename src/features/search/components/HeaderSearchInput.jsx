import { SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  FormControl,
  FormLabel,
  VisuallyHidden,
} from '@chakra-ui/react';

export const HeaderSearchInput = ({
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
            <IconButton colorScheme="transparent" onClick={handleSearch}>
              <SearchIcon color="white" />
            </IconButton>
          }
        />
      </InputGroup>
    </FormControl>
  );
};
