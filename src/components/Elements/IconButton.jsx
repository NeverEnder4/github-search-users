import { IconButton as ChakraIconButton, VisuallyHidden } from '@chakra-ui/react';

export const IconButton = ({
  onClick,
  icon,
  accessibilityLabel,
  isHidden,
  colorScheme = 'teal',
}) => {
  if (isHidden) return null;
  return (
    <ChakraIconButton onClick={onClick} colorScheme={colorScheme}>
      {/* Added for accessability */}
      <>
        <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
        {icon}
      </>
    </ChakraIconButton>
  );
};
