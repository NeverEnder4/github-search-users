import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { ApolloMemoryProvider, ErrorProvider, ChakraMemoryProvider } from './providers';

// For unit testing basic elements
const renderWithChakraProvider = (ui, options) =>
  render(ui, { wrapper: ChakraProvider, ...options });

// For integration testing routes with queries
const renderWithApolloMemoryProvider = (ui, options) =>
  render(ui, {
    wrapper: (props) => <ApolloMemoryProvider {...props} {...options?.testProviderProps} />,
    ...options.testingLibraryOptions,
  });

// For testing error boundary and route not found
const renderWithErrorProvider = (ui, options) =>
  render(ui, {
    wrapper: (props) => <ErrorProvider {...props} {...options?.testProviderProps} />,
    ...options.testingLibraryOptions,
  });

// For unit testing Link components
const renderWithChakraMemoryProvider = (
  ui,
  options = { testingLibraryOptions: {}, testProviderProps: {} }
) =>
  render(ui, {
    wrapper: (props) => <ChakraMemoryProvider {...props} {...options?.testProviderProps} />,
    ...options.testingLibraryOptions,
  });

// re-export everything
export * from '@testing-library/react';

export {
  render,
  screen,
  user,
  renderWithChakraProvider,
  renderWithApolloMemoryProvider,
  renderWithErrorProvider,
  renderWithChakraMemoryProvider,
};
