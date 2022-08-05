import { FormControl, FormLabel } from '@chakra-ui/react';

export const InputWrapper = ({
  children,
  label,
  maxWidth,
  fontColor,
  labelFontSize,
  textAlign,
}) => {
  return (
    <FormControl maxWidth={maxWidth}>
      {label && (
        <FormLabel color={fontColor} fontSize={labelFontSize} textAlign={textAlign}>
          {label}
        </FormLabel>
      )}
      {children}
    </FormControl>
  );
};
