import { IconButton as ChakraIconButton, VisuallyHidden } from '@chakra-ui/react';

export const IconButton = ({
  onClick,
  icon,
  accessibilityLabel,
  isHidden,
  colorScheme = 'teal',
  isDisabled = false,
}) => {
  if (isHidden) return null;
  return (
    <ChakraIconButton isDisabled={isDisabled} onClick={onClick} colorScheme={colorScheme}>
      {/* Added for accessability */}
      <>
        <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
        {icon}
      </>
    </ChakraIconButton>
  );
};
