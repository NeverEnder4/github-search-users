import { Button } from '@chakra-ui/react';

export const ButtonWithIcon = ({
  onClick,
  leftIcon,
  rightIcon,
  children,
  isDisabled,
  isHidden,
  size = 'md',
  colorScheme = 'teal',
}) => {
  if (isHidden) return null;
  return (
    <Button
      isDisabled={isDisabled}
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
