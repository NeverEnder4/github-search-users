import { Button } from '@chakra-ui/react';

export const ButtonWithIcon = ({
  onClick,
  leftIcon,
  rightIcon,
  children,
  size = 'md',
  colorScheme = 'teal',
  isHidden,
}) => {
  if (isHidden) return null;
  return (
    <Button
      size={size}
      colorScheme={colorScheme}
      onClick={onClick}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {children}
    </Button>
  );
};
