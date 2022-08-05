import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

import { InputWrapper } from './InputWrapper';

export const NumberInput = ({ label, registration, max, min = 0 }) => {
  return (
    <InputWrapper label={label}>
      <ChakraNumberInput min={min} max={max} {...registration}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    </InputWrapper>
  );
};
