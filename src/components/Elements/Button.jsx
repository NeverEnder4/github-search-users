import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({
  children,
  onClick,
  size = 'md',
  colorScheme = 'teal',
  type = 'button',
  maxWidth = '200px',
}) => {
  return (
    <ChakraButton
      maxWidth={maxWidth}
      colorScheme={colorScheme}
      size={size}
      onClick={onClick}
      type={type}
    >
      {children}
    </ChakraButton>
  );
};
