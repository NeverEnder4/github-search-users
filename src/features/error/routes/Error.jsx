// This route is for testing the error fallback provided by the ErrorBoundary component, only in development
// Check the providers directory to edit the ErrorBoundar or fallback view
export const Error = () => {
  throw new Error('An error has happened!');
};
