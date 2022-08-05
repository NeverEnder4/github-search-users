import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({
  children,
  onClick,
  width,
  form,
  variant,
  size = 'md',
  colorScheme = 'teal',
  type = 'button',
  maxWidth = '200px',
  minWidth = '140px',
}) => {
  return (
    <ChakraButton
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      colorScheme={colorScheme}
      size={size}
      onClick={onClick}
      type={type}
      variant={variant}
      form={form}
    >
      {children}
    </ChakraButton>
  );
};
