import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, FormControl, FormLabel } from '@chakra-ui/react';

import { InputWrapper } from './InputWrapper';

export const SearchInput = ({
  registration,
  label,
  labelFontSize,
  fontColor,
  maxWidth = '600px',
}) => {
  return (
    <InputWrapper
      maxWidth={maxWidth}
      label={label}
      color={fontColor}
      labelFontSize={labelFontSize}
      textAlign="center"
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
        <Input color={fontColor} focusBorderColor="teal.400" {...registration} />
      </InputGroup>
    </InputWrapper>
  );
};
