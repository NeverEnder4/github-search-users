import { Select, FormControl, FormLabel } from '@chakra-ui/react';

import { InputWrapper } from './InputWrapper';

export const SelectInput = ({ options, label, registration }) => {
  if (!Array.isArray(options)) {
    throw new Error(`options prop must be an array, received ${options}`);
  }

  const renderOptions = () =>
    options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));
  return (
    <InputWrapper label={label}>
      <Select {...registration}>{renderOptions()}</Select>
    </InputWrapper>
  );
};
