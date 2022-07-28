import { Button } from '@chakra-ui/react';

export const ButtonWithIcon = ({
  onClick,
  leftIcon,
  rightIcon,
  children,
  colorScheme = 'teal',
  isHidden,
}) => {
  if (isHidden) return null;
  return (
    <Button colorScheme={colorScheme} onClick={onClick} leftIcon={leftIcon} rightIcon={rightIcon}>
      {children}
    </Button>
  );
};
