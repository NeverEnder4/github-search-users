import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalErrorFallback } from '@/components';
import { SearchProvider } from '@/context/Search';
import { client as apolloClient } from '@/lib/apollo';

export function AppProviders({ children }) {
  return (
    <ChakraProvider>
      <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
        <ApolloProvider client={apolloClient}>
          <SearchProvider>
            <Router>{children}</Router>
          </SearchProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
}
