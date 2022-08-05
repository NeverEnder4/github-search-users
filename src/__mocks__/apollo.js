import { MockedProvider } from '@apollo/client/testing';

export const AolloMockProvider = ({ children, mocks = [], addTypeName = false }) => {
  return (
    <MockedProvider mocks={mocks} addTypeName={addTypeName}>
      {children}
    </MockedProvider>
  );
};
