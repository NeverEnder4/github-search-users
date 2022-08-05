import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

import { ApolloMockProvider } from '@/__mocks__/apollo';
import { GlobalErrorFallback } from '@/features/error';

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

export const ErrorProvider = ({ children, initialEntries = [] }) => (
  <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  </ErrorBoundary>
);
