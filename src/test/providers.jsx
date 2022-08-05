import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

import { ApolloMockProvider } from '@/__mocks__/apollo';
import { GlobalErrorFallback } from '@/features/error';

// Used for testing routes with gql queries
export const ApolloMemoryProvider = ({
  children,
  mocks = [],
  addTypeName = false,
  initialEntries = [],
}) => {
  return (
    <ChakraProvider>
      <ApolloMockProvider mocks={mocks} addTypeName={addTypeName}>
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
      </ApolloMockProvider>
    </ChakraProvider>
  );
};

// Used for testing error boundary and 404 route
export const ErrorProvider = ({ children, initialEntries = [] }) => (
  <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  </ErrorBoundary>
);

export const ChakraMemoryProvider = ({ children, initialEntries = [] }) => {
  return (
    <ChakraProvider>
      <Router initialEntries={initialEntries}>{children}</Router>
    </ChakraProvider>
  );
};
