import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({
  children,
  onClick,
  size = 'md',
  colorScheme = 'teal',
  type = 'button',
  maxWidth = '200px',
  minWidth = '140px',
}) => {
  return (
    <ChakraButton
      maxWidth={maxWidth}
      minWidth={minWidth}
      colorScheme={colorScheme}
      size={size}
      onClick={onClick}
      type={type}
    >
      {children}
    </ChakraButton>
  );
};
