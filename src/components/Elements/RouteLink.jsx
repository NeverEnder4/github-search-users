import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Color prop ensures that the text underline on hover is the same color as the link text
export const RouteLink = ({ children, color, to }) => {
  return (
    <Link color={color} as={RouterLink} to={to}>
      {children}
    </Link>
  );
};
